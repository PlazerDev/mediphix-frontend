import React, { useState } from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

interface Props {
  updateSelectedDate: (
    day: string,
    weekday: string,
    month: string,
    year: string
  ) => void;
}

function MCSCalender({ updateSelectedDate }: Props) {
  const { token } = theme.useToken();
  const [value, setValue] = useState(() => dayjs());

  // handling the date selection
  const onDateSelect = (newValue: Dayjs) => {
    setValue(newValue);

    const day = newValue.format("DD");
    const weekday = newValue.format("dddd");
    const month = newValue.format("MMMM");
    const year = newValue.format("YYYY");

    updateSelectedDate(day, weekday, month, year);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current) => {
    const markedDates = ["2024-07-05", "2024-07-10"];
    const formattedDate = current.format("YYYY-MM-DD");
    const isMarked = markedDates.includes(formattedDate);

    if (isMarked) {
      return (
        <div className="bg-mediphix_text_c w-full h-1 rounded-full mt-[1px]"></div>
      );
    }
  };

  return (
    <div className="bg-mediphix_card_background rounded-lg p-8">
      <div style={wrapperStyle}>
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          cellRender={cellRender}
          onSelect={onDateSelect}
          value={value}
        />
      </div>
    </div>
  );
}

export default MCSCalender;
