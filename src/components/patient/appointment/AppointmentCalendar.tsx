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

interface Session {
  _id: string;
  sessionDate: string;
  time: string;
  payment: string;
  location: string;
  category: string;
  doctorId: string;
  doctorName: string;
  medicalCenterId: string;
  medicalCenterName: string;
  medicalCenterMobile: string;
  doctorNote: string;
  medicalCenterNote: string;
  maxPatientCount: number;
  reservedPatientCount: number;
}

interface SessionWithCenterDetails {
  session: Session;
  centerDetails: Center;
}

// MOCK DATA: Simulating backend responses
const MOCK_DOCTOR_APPOINTMENT_DATES = [
  { date: "2024-12-15" },
  { date: "2024-12-20" },
  { date: "2024-12-25" },
  { date: "2024-01-05" },
];

const MOCK_CENTER_DATA: Center[] = [
  {
    _id: "center1",
    name: "Nawaloka Hospital",
    address: "123 Main St, Colombo",
    email: "contact@nawaloka.com",
    appointmentCategories: ["General", "Pediatrics", "Cardiology"],
    noOfDoctors: 5,
    description: "Comprehensive healthcare services",
    mobile: "0112348541",
  },
  {
    _id: "center2",
    name: "City Hospital",
    address: "456 Health Ave, Townsburg",
    email: "info@cityhospital.com",
    appointmentCategories: ["Emergency", "Surgery", "Oncology"],
    noOfDoctors: 10,
    description: "Advanced medical treatments",
    mobile: "0112348541",
  },
];

const MOCK_SESSION_DETAILS: Session[] = [
  {
    _id: "session1",
    sessionDate: "2024-12-15",
    time: "10:00 AM - 01:00 PM",
    payment: "2500",
    location: "Room 202",
    category: "General Checkup",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Routine annual checkup",
    medicalCenterNote: "Please arrive 15 minutes early",
    maxPatientCount: 30,
    reservedPatientCount: 17,
  },
  {
    _id: "session2",
    sessionDate: "2024-12-15",
    time: "02:00 PM - 05:00 PM",
    payment: "2800",
    location: "Room 305",
    category: "Consultation",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Follow-up consultation",
    medicalCenterNote: "Bring all previous medical records",
    maxPatientCount: 15,
    reservedPatientCount: 15,
  },
  {
    _id: "session3",
    sessionDate: "2024-12-20",
    time: "10:00 AM - 01:00 PM",
    payment: "2500",
    location: "Room 202",
    category: "General Checkup",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Routine annual checkup",
    medicalCenterNote: "Please arrive 15 minutes early",
    maxPatientCount: 30,
    reservedPatientCount: 17,
  },
  {
    _id: "session4",
    sessionDate: "2024-12-20",
    time: "02:00 PM - 05:00 PM",
    payment: "2800",
    location: "Room 305",
    category: "Consultation",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Follow-up consultation",
    medicalCenterNote: "Bring all previous medical records",
    maxPatientCount: 15,
    reservedPatientCount: 15,
  },
  {
    _id: "session5",
    sessionDate: "2024-12-25",
    time: "10:00 AM - 01:00 PM",
    payment: "2500",
    location: "Room 202",
    category: "General Checkup",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Routine annual checkup",
    medicalCenterNote: "Please arrive 15 minutes early",
    maxPatientCount: 30,
    reservedPatientCount: 17,
  },
  {
    _id: "session6",
    sessionDate: "2024-12-25",
    time: "02:00 PM - 05:00 PM",
    payment: "2800",
    location: "Room 305",
    category: "Consultation",
    doctorId: "doctor1",
    doctorName: "Ruwan Atigala",
    medicalCenterId: "center1",
    medicalCenterName: "Nawaloka Hospital",
    medicalCenterMobile: "0112348541",
    doctorNote: "Follow-up consultation",
    medicalCenterNote: "Bring all previous medical records",
    maxPatientCount: 15,
    reservedPatientCount: 15,
  },
];

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

  // const backendURL = import.meta.env.VITE_BACKEND_URL;
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${TokenService.getToken()}`,
  //   },
  // };

  // // Fetch doctor appointment dates if detailType is "doctor"
  // const { data: doctorAppointmentDates, isLoading: datesLoading } = useQuery({
  //   queryKey: ["doctorAppointmentDates", id],
  //   queryFn: () =>
  //     detailType === "doctor"
  //       ? PatientService.getDoctorAppointmentDates(backendURL, id, config)
  //       : Promise.resolve([]),
  //   staleTime: 200000,
  // });

  //  // Fetch center data
  //  const { data: centerData, isLoading: centerLoading } = useQuery({
  //   queryKey: ["centerData"],
  //   queryFn: () => PatientService.getCenterData(backendURL, config),
  //   staleTime: 200000,
  // });

  //  // Fetch sessions for the selected date
  //  const { data: sessionDetails, isLoading: sessionsLoading } = useQuery({
  //   queryKey: ["sessionDetails", id, selectedDate?.format("YYYY-MM-DD")],
  //   queryFn: () => {
  //     if (detailType === "doctor" && selectedDate) {
  //       return PatientService.getSessionsByDoctorAndDate(
  //         backendURL,
  //         id,
  //         selectedDate.format("YYYY-MM-DD"),
  //         config
  //       );
  //     }
  //     return Promise.resolve([]);
  //   },
  //   enabled: !!selectedDate, // Only run query when a date is selected
  //   staleTime: 200000,
  // });

  // MOCK: Replace actual queries with mock data retrieval
  const { data: doctorAppointmentDates, isLoading: datesLoading } = useQuery({
    queryKey: ["doctorAppointmentDates", id],
    queryFn: () => {
      // Simulate backend response for doctor appointment dates
      return detailType === "doctor"
        ? Promise.resolve(MOCK_DOCTOR_APPOINTMENT_DATES)
        : Promise.resolve([]);
    },
    staleTime: 200000,
  });

  // MOCK: Center data query
  const { data: centerData, isLoading: centerLoading } = useQuery({
    queryKey: ["centerData"],
    queryFn: () => {
      // Simulate fetching center data
      return Promise.resolve(MOCK_CENTER_DATA);
    },
    staleTime: 200000,
  });

  // MOCK: Session details query
  const { data: sessionDetails, isLoading: sessionsLoading } = useQuery({
    queryKey: ["sessionDetails", id, selectedDate?.format("YYYY-MM-DD")],
    queryFn: () => {
      // Simulate fetching sessions for a specific doctor and date
      if (detailType === "doctor" && selectedDate) {
        return Promise.resolve(
          MOCK_SESSION_DETAILS.filter(
            (session) =>
              session.sessionDate === selectedDate.format("YYYY-MM-DD")
          )
        );
      }
      return Promise.resolve([]);
    },
    enabled: !!selectedDate,
    staleTime: 200000,
  });

  // Combine sessions with center details
  const sessionsWithCenterDetails = useMemo(() => {
    if (!sessionDetails || !centerData) return [];

    return sessionDetails.map((session) => {
      const centerDetails = centerData.find(
        (center) => center._id === session.medicalCenterId
      );

      return {
        session,
        centerDetails: centerDetails || ({} as Center),
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
            key={item.session._id}
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
