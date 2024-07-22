import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import NoSelectedDate from "./NoSelectedDate";
import { useState } from "react";

// Mock data for booked appointments
const bookedDates = [
  dayjs("2024-07-20"),
  dayjs("2024-07-25"),
  dayjs("2024-07-30"),
];

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};
const AppointmentCalendar = () => {
  const { token } = theme.useToken();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

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
          <NoSelectedDate />
        </div>
      </div>
    </>
  );
};

export default AppointmentCalendar;
