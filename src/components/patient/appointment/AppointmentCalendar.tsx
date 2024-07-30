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
      centerNote:
        "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
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
      centerNote:
        "Please arrive at least 15 minutes before your scheduled appointment time for payment.",
      availability: false,
    },
  ]);

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  // const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
  //   const isSelected = selectedDate && current.isSame(selectedDate, "day");
  //   const isToday = current.isSame(dayjs(), "day");
  //   const isBooked = bookedDates.some((date) => current.isSame(date, "day"));

  //   let cellStyle: React.CSSProperties = {};

  //   if (isSelected) {
  //     cellStyle = {
  //       backgroundColor: "#FF7300",
  //       color: "#fff",
  //       borderRadius: "8px",
  //       width: "120px",
  //       height: "28px",
  //       lineHeight: "28px",
  //       display: "inline-block",
  //       textAlign: "center",
  //     };
  //   } else if (isToday) {
  //     cellStyle = {
  //       border: "1px dashed #FF7300",
  //       borderRadius: "8px",
  //       width: "120px",
  //       height: "28px",
  //       lineHeight: "28px",
  //       display: "inline-block",
  //       textAlign: "center",
  //     };
  //   } else if (isBooked) {
  //     cellStyle = {
  //       border: "1px solid #FF7300",
  //       borderRadius: "8px",
  //       width: "120px",
  //       height: "28px",
  //       lineHeight: "28px",
  //       display: "inline-block",
  //       textAlign: "center",
  //     };
  //   }

  //   return <div style={cellStyle}>{current.date()}</div>;
  // };

 
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

  const details = detailType === "center" ? doctorDetails : medicalCenterData;

  const appointmentsFound =
    selectedDate && bookedDates.some((date) => date.isSame(selectedDate, "day"))
      ? details.length
      : 0;

  const selectedDateFormatted = selectedDate ? selectedDate.format("D") : "";
  const selectedDayOfWeek = selectedDate ? selectedDate.format("dddd") : "";
  const selectedMonthYear = selectedDate
    ? selectedDate.format("MMMM YYYY")
    : "";

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
        {selectedDate &&
          bookedDates.some((date) => date.isSame(selectedDate, "day")) &&
          details.map((detail, index) => (
            <DateAppointmentDetails
              key={index}
              details={detail}
              detailType={detailType}
            />
          ))}
        {!selectedDate && <NoSelectedDate />}
      </div>
    </>
  );
};

export default AppointmentCalendar;
