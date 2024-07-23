import Footer from "./../../Footer";
import DoctorTimeSlots from "./DoctorTimeSlots";
//import NoOngoingSession from "./NoOngoingSession";
import OngoingSessionData from "./OngoingSessionData";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};




const DoctorHome = () => {
    const { token } = theme.useToken();
  
    const wrapperStyle: React.CSSProperties = {
      width: "100%",
      border: `1px solid ${token.colorBorderSecondary}`,
      borderRadius: token.borderRadiusLG,
    };
  return (
    <>
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Good Evening , Dr. V. Sandaruwan
        </p>
        <p className="mb-6">We hope you're having a great day.</p>
      </div>

<div className="flex">
      <div className="w-2/3 bg-[#E3E3E3] flex-grow mr-4">
        <div className=" h-full  ml-4 p-4 bg-[#ffffff] rounded-[16px]">
          <div className=" flex justify-between">
            <div>
              <h1 className="text-lg font-bold">My Schedule </h1>
            </div>

            <div className="mt-1">
              <p className="text-[#FF7300] text-sm font-semibold">View More</p>
            </div>
          </div>
          <div className="m-4">
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
           
        </div>
          <DoctorTimeSlots />
          <DoctorTimeSlots />
        </div>
      </div>
<div></div>
      <div className="w-1/3 bg-[#fff] rounded-[16px] p-4 mr-4">
        <div className=" flex justify-between">
          <div>
            <h1 className="text-lg font-bold">Ongoing Session</h1>
          </div>

          <div className="mt-1">
            <p className="text-[#FF7300] text-sm font-semibold">View More</p>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-contain">
           <OngoingSessionData />
        </div>
      </div>

      <div className="w-1/3 bg-[#fff] rounded-[16px] p-4 mr-4">
        <div className=" flex justify-between">
          <div>
            <h1 className="text-lg font-bold">Ongoing Session</h1>
          </div>

          <div className="mt-1">
            <p className="text-[#FF7300] text-sm font-semibold">View More</p>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-contain">
           <OngoingSessionData />
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorHome;
