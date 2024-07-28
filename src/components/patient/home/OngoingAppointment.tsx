import Token from "./Token";
import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";
import { Divider } from "antd";
import "../../../assets/css/steps.css";
import QueueDetails from "./QueueDetails";
import WithDoctor from "./WithDoctor";
import AppointmentDetails from "./AppointmentDetails";

interface AppointmentProps {
  date: string;
  time: string;
  doctor: string;
  category: string;
  queueNo: string;
  referenceNo: string;
  medicalCenter: string;
  phoneNo: string;
}

interface QueueDetailsProps {
    currentNo: number;
    yourNo: number;
    hallReference: string;
  }

interface OngoingProps {
  status: number;
  appointmentDetails: AppointmentProps;
  queueDetails: QueueDetailsProps;
}

const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const OngoingAppointment = ({
  status,
  appointmentDetails,
  queueDetails,
}: OngoingProps) => {
  return (
    <>
      <div className="w-full rounded-[16px] ">
        <div className="flex justify-between mb-3">
          <h3 className="text-lg font-bold">Ongoing Appointment</h3>
          <p className="text-[#FF7300] text-sm font-semibold mt-1">View More</p>
        </div>
        <div className="flex justify-center">
          <div className="w-5/6 ">
            {" "}
            <Steps
              className="custom-steps"
              current={status}
              progressDot={customDot}
              items={[
                {
                  title: "Start",
                  description: "Appointment starting soon",
                },
                {
                  title: "In the Queue",
                  description: "Payment accepted",
                },
                {
                  title: "With the Doctor",
                  description: "Session has been started",
                },
              ]}
            />
          </div>
        </div>

        <Divider className="custom-divider " />

        <div className=" flex justify-center h-[120px] max-h-[120px]">
          {status === 0 && <AppointmentDetails {...appointmentDetails} />}
          {status === 1 && <QueueDetails {...queueDetails} />}
          {status === 2 && <WithDoctor />}
        </div>
        
      </div>
    </>
  );
};

export default OngoingAppointment;
