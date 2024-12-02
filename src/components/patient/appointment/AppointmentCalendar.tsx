import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import NoSelectedDate from "./NoSelectedDate";
import { useMemo, useState } from "react";
import DateAppointmentDetails from "./DateAppointmentDetails";
import TokenService from "../../../services/TokenService";
import { useQuery } from "@tanstack/react-query";
import { PatientService } from "../../../services/PatientService";

interface AppointmentCalendarProps {
  detailType: string;
  id: string;
  category?: string; // Optional because it's only applicable for "center"
}

interface Center {
  id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategory: string[];
  noOfDoctors: number;
  description: string;
  phoneNo: string;
}

interface Session {
  id: string;
  date: string;
  time: string;
  category: string;
  doctorId: string;
  doctorName: string;
  medicalcenterId: string;
  centerName: string;
  doctorNote: string;
  centerNote: string;
  maxPatientCount: number;
  registeredPatientCount: number;
}

interface SessionWithCenterDetails {
  session: Session;
  centerDetails: Center;
}
const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const AppointmentCalendar = ({
  detailType,
  id,
  category,
}: AppointmentCalendarProps) => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  // Fetch doctor appointment dates if detailType is "doctor"
  const { data: doctorAppointmentDates, isLoading: datesLoading } = useQuery({
    queryKey: ["doctorAppointmentDates", id],
    queryFn: () =>
      detailType === "doctor"
        ? PatientService.getDoctorAppointmentDates(backendURL, id, config)
        : Promise.resolve([]),
    staleTime: 200000,
  });

   // Fetch center data
   const { data: centerData, isLoading: centerLoading } = useQuery({
    queryKey: ["centerData"],
    queryFn: () => PatientService.getCenterData(backendURL, config),
    staleTime: 200000,
  });

   // Fetch sessions for the selected date
   const { data: sessionDetails, isLoading: sessionsLoading } = useQuery({
    queryKey: ["sessionDetails", id, selectedDate?.format("YYYY-MM-DD")],
    queryFn: () => {
      if (detailType === "doctor" && selectedDate) {
        return PatientService.getSessionsByDoctorAndDate(
          backendURL, 
          id, 
          selectedDate.format("YYYY-MM-DD"), 
          config
        );
      }
      return Promise.resolve([]);
    },
    enabled: !!selectedDate, // Only run query when a date is selected
    staleTime: 200000,
  });

    // Combine sessions with center details
    const sessionsWithCenterDetails = useMemo(() => {
      if (!sessionDetails || !centerData) return [];
  
      return sessionDetails.map(session => {
        const centerDetails = centerData.find(
          center => center.id === session.medicalcenterId
        );
  
        return {
          session,
          centerDetails: centerDetails || {} as Center
        };
      });
    }, [sessionDetails, centerData]);
    
  const bookedDates = (doctorAppointmentDates || []).map((date) =>
    dayjs(date.date)
  );

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
 
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current) => {
    const isBooked = bookedDates.some((date) => current.isSame(date, "day"));

    if (isBooked) {
      return (
        <div className="bg-mediphix_text_c w-full h-1 rounded-full mt-[1px]"></div>
      );
    } 
  };

  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const appointmentsFound = sessionDetails?.length || 0;

  const selectedDateFormatted = selectedDate ? selectedDate.format("D") : "";
  const selectedDayOfWeek = selectedDate ? selectedDate.format("dddd") : "";
  const selectedMonthYear = selectedDate
    ? selectedDate.format("MMMM YYYY")
    : "";

     // Loading state
  if (datesLoading || sessionsLoading || centerLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-[#ffffff] rounded-[16px] m-4 p-8">
        <h3 className="text-[#363636] font-semibold ml-4">Appointments</h3>
        <div className="m-4">
          <div style={wrapperStyle}>
            <Calendar
              fullscreen={false}
              onPanelChange={onPanelChange}
              cellRender={cellRender}
              onSelect={handleSelect}
            />
          </div>
        </div>
        {selectedDate && appointmentsFound >= 0 && (
          <div className="flex bg-[#363636] m-4 rounded-[8px] p-4 text-[#FFFFFF]">
            <div className="bg-[#FF7300] p-3 rounded-[8px] text-2xl mr-4">
              {selectedDateFormatted}
            </div>
            <div className="flex flex-col">
              <p>{selectedDayOfWeek}</p>
              <p className="text-sm">{selectedMonthYear}</p>
            </div>
            <div className="flex-grow flex justify-end items-center">
              <p>{appointmentsFound} Appointments Found</p>
            </div>
          </div>
        )}
          {sessionsWithCenterDetails.map((item) => (
          <DateAppointmentDetails
            key={item.session.id}
            details={item.centerDetails}
            sessionDetails={item.session}
            detailType={detailType}
          />
        ))}
        {!selectedDate && <NoSelectedDate />}
      </div>
    </>
  );
};

export default AppointmentCalendar;
