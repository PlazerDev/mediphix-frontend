import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

function MCSCalender() {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    const markedDates = ["2024-07-05", "2024-07-10"];
    const formattedDate = current.format("YYYY-MM-DD");
    const isMarked = markedDates.includes(formattedDate);

    if (isMarked) {
      return (
        <div
          style={{
            backgroundColor: "#1890ff",
            color: "white",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          {current.date()}
        </div>
      );
    }

    return info.originNode;
  };

  return (
    <div className="bg-mediphix_card_background rounded-lg p-8">
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </div>
  );
}

export default MCSCalender;
