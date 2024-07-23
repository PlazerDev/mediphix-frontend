import PatientNavigation from "../../patient/navigation/PatientNavigation"
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";

import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  }; 

const UpComingClinicSessionDetail = () => {
    const { token } = theme.useToken();
  
    const wrapperStyle: React.CSSProperties = {
      width: "100%",
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
  return (
    <div>
      <PatientNavigation />
      <div className="m-4">
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
      </div>   
    </div>
  )
} 

  

export default UpComingClinicSessionDetail
