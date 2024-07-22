import { Steps } from "antd";
import { useState } from "react";

interface Prop {
  timeRange: string;
  maxPatientSessions: number;
  status: string;
}

function MCSTimeSlotCard({ timeRange, maxPatientSessions, status }: Prop) {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  return (
    <div className="bg-mediphix_card_background rounded-lg p-8">
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        className="site-navigation-steps mb-4"
        items={[
          {
            title: "Time Slot 1",
            status: "finish",
            description: "08.00 AM - 09.00 AM",
          },
          {
            title: "Time Slot 2",
            status: "process",
            description: "09.00 AM - 10.00 AM",
          },
          {
            title: "Time Slot 3",
            status: "wait",
            description: "10.00 AM - 11.00 AM",
          },
        ]}
      />
      <p className="font-bold">Time Slot Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Start Time - End Time </p>
          <p>{timeRange}</p>
        </div>
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">
            Maximum Number of Patient Sessions
          </p>
          <p>{maxPatientSessions}</p>
        </div>

        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Status</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default MCSTimeSlotCard;
