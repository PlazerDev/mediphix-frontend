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
import Loading from "../../Loading";

interface AppointmentCalendarProps {
  detailType: string;
  id: string;
  category?: string; // Optional because it's only applicable for "center"
}

interface Center {
  _id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategories: string[];
  noOfDoctors?: number;
  description?: string;
  mobile: string;
}

interface TimeSlot {
  slotId: number;
  startTime: string;
  maxNoOfPatients: number;
  status: string;
  queue?: {
    appointments: number[];
    queueOperations?: {
      defaultIncrementQueueNumber: number;
      ongoing: number;
      nextPatient1: number;
      nextPatient2: number;
      finished: number[];
      absent: number[];
    };
  };
}

interface FormattedSession {
  _id: string;
  doctorId: string;
  medicalCenterId: string;
  aptCategories: string[];
  payment: number;
  hallNumber: string;
  noteFromCenter?: string;
  noteFromDoctor?: string;
  overallSessionStatus: string;
  timeSlots: TimeSlot[];
  formattedDateTime: {
    sessionDate: string;    // Format: "YYYY-MM-DD"
    time: string;          // Format: "HH:MM AM - HH:MM PM"
  };
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

  // Fetch session details if detailType is "doctor"
  const { data: sessionDetails, isLoading: sessionsLoading } = useQuery({
    queryKey: ["sessionDetails", id],
    queryFn: () =>
      detailType === "doctor"
        ? PatientService.getSessionsByDoctorId(backendURL, id, config)
        : Promise.resolve([]),
    staleTime: 200000,
  });

   // Fetch center data
   const { data: centerData, isLoading: centerLoading } = useQuery({
    queryKey: ["centerData"],
    queryFn: () => PatientService.getCenterData(backendURL, config),
    staleTime: 200000,
  });

  // Get unique dates from sessions for calendar highlighting
  const sessionDates = useMemo(() => {
    if (!sessionDetails) return [];
    return [...new Set(sessionDetails.map(session => 
      dayjs(session.formattedDateTime.sessionDate)
    ))];
  }, [sessionDetails]);

   // Filter sessions for selected date
   const filteredSessions = useMemo(() => {
    if (!sessionDetails || !selectedDate) return [];
    
    return sessionDetails.filter(session => 
      session.formattedDateTime.sessionDate === selectedDate.format('YYYY-MM-DD')
    );
  }, [sessionDetails, selectedDate]);

    // Combine filtered sessions with center details
    const sessionsWithCenterDetails = useMemo(() => {
      if (!filteredSessions || !centerData) return [];
  
      return filteredSessions.map(session => ({
        session,
        centerDetails: centerData.find(center => 
          center._id === session.medicalCenterId
        ) || ({} as Center)
      }));
    }, [filteredSessions, centerData]);

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current) => {
    const hasSession = sessionDates.some((date) => current.isSame(date, "day"));

    if (hasSession) {
      return (
        <div className="bg-mediphix_text_c w-full h-1 rounded-full mt-[1px]"></div>
      );
    }
  };

  // Loading state
  if (sessionsLoading || centerLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <Loading footer={true} />
      </div>
    );
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
              onSelect={setSelectedDate}
            />
          </div>
        </div>

        {selectedDate && (
        <div className="flex bg-[#363636] m-4 rounded-[8px] p-4 text-[#FFFFFF]">
          <div className="bg-[#FF7300] p-3 rounded-[8px] text-2xl mr-4">
            {selectedDate.format('D')}
          </div>
          <div className="flex flex-col">
            <p>{selectedDate.format('dddd')}</p>
            <p className="text-sm">{selectedDate.format('MMMM YYYY')}</p>
          </div>
          <div className="flex-grow flex justify-end items-center">
            <p>{filteredSessions.length} Appointments Found</p>
          </div>
        </div>
      )}
        {sessionsWithCenterDetails.map(({ session, centerDetails }) => (
          <DateAppointmentDetails
            key={session._id}
            details={centerDetails}
            sessionDetails={session}
            detailType={detailType}
          />
        ))}
        {!selectedDate && <NoSelectedDate />}
      </div>
    </>
  );
};

export default AppointmentCalendar;
