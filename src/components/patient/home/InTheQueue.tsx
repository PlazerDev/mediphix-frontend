import Token from "./Token";
import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";
import { Divider } from "antd";
import "./InTheQueue.css";
import QueueDetails from "./QueueDetails";

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

const InTheQueue = () => {
  return (
    <>
      <div className="w-full rounded-[16px] ">
        <div className="flex justify-between mb-6">
          <h3 className="text-lg font-bold">Ongoing Appointment</h3>
          <p className="text-[#FF7300] text-sm font-semibold mt-1">View More</p>
        </div>
        <div className="flex justify-center">
          <div className="w-5/6 ">
            {" "}
            <Steps
              className="custom-steps"
              current={1}
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
          <QueueDetails />
        </div>
        <div className="flex justify-center mt-3">
          <Token />
        </div>
      </div>
    </>
  );
};

export default InTheQueue;
