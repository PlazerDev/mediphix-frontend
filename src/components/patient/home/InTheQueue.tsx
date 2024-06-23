import Token from "./Token";
import type { StepsProps } from "antd";
import { Popover, Steps } from "antd";
import { Divider } from "antd";
import "./InTheQueue.css";
import WithDoctor from "./WithDoctor";

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
          <h3 className="text-lg">
            <b>Ongoing Appointment</b>
          </h3>
          <p className="text-[#FF7300] text-sm font-semibold">View More</p>
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

        <Divider />

        <div className=" h-[150px] max-h-[150px]">
          <WithDoctor />
        </div>
        <div className="flex justify-center mt-3">
          <Token />
        </div>
      </div>
    </>
  );
};

export default InTheQueue;
