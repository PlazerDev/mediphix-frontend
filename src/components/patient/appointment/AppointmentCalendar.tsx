import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import NoSelectedDate from "./NoSelectedDate";
import { useState } from "react";
import DateAppointmentDetails from "./DateAppointmentDetails";

interface AppointmentCalendarProps {
  detailType: string;
  appointmentDates: string[];
}

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const AppointmentCalendar = ({
  detailType,
  appointmentDates,
}: AppointmentCalendarProps) => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const bookedDates = appointmentDates.map((date) => dayjs(date));

  const [medicalCenterData, setMedicalCenterData] = useState([
    {
      time: "08.00 AM - 11.00 AM",
      name: "Nawaloka Hospital",
      phoneNo: "011-5777777",
      location: "23, Deshamanya H K Dharmadasa Mawatha, Colombo 00200",
      email: "nawaloka@slt.lk",
      category: "OPD",
      doctorNote: "N/A",
      centerNote:
        "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
        availability: true,
    },
    {
      time: "09.00 AM - 12.00 PM",
      name: "Asiri Medical Hospital",
      phoneNo: "011-1234567",
      location: "123, Colombo Road, Colombo 00500",
      email: "info@asiri.lk",
      category: "Heart Health",
      doctorNote: "N/A",
      centerNote: "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
      availability: false,
    },
  ]);

  const [doctorDetails, setDoctorDetails] = useState([
    {
      time: "08.00 AM - 11.00 AM",
      name: "Dr. Nishantha Perera",
      degree: "MBBS (COL)",
      speciality: "Cardiology",
      doctorNote: "N/A",
      centerNote:
        "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
        availability: true,
    },
    {
      time: "10.00 AM - 01.00 PM",
      name: "Dr. Samantha Silva",
      degree: "MD (Medicine)",
      speciality: "Dermatology",
      doctorNote: "N/A",
      centerNote: "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
      availability: false,
    },
  ]);

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    const isSelected = selectedDate && current.isSame(selectedDate, "day");
    const isToday = current.isSame(dayjs(), "day");
    const isBooked = bookedDates.some((date) => current.isSame(date, "day"));

    let cellStyle: React.CSSProperties = {};

    if (isSelected) {
      cellStyle = {
        backgroundColor: "#FF7300",
        color: "#fff",
        borderRadius: "8px",
        width: "120px",
        height: "28px",
        lineHeight: "28px",
        display: "inline-block",
        textAlign: "center",
      };
    } else if (isToday) {
      cellStyle = {
        border: "1px dashed #FF7300",
        borderRadius: "8px",
        width: "120px",
        height: "28px",
        lineHeight: "28px",
        display: "inline-block",
        textAlign: "center",
      };
    } else if (isBooked) {
      cellStyle = {
        border: "1px solid #FF7300",
        borderRadius: "8px",
        width: "120px",
        height: "28px",
        lineHeight: "28px",
        display: "inline-block",
        textAlign: "center",
      };
    }

    return <div style={cellStyle}>{current.date()}</div>;
  };

  const handleSelect = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

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
              onSelect={(date) => setSelectedDate(date)}
            />
          </div>
        </div>
        {selectedDate ? (
          bookedDates.some((date) => date.isSame(selectedDate, "day")) ? (
            (detailType === "doctor" ? medicalCenterData : doctorDetails).map(
              (details, index) => (
                <DateAppointmentDetails
                  key={index}
                  details={details}
                  detailType={detailType}
                />
              )
            )
          ) : (
            <p className="text-center m-4">
              No appointments available for this date.
            </p>
          )
        ) : (
          <NoSelectedDate />
        )}
      </div>
    </>
  );
};

export default AppointmentCalendar;
