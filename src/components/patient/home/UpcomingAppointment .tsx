import React from "react";
import AppointmentCard from "./AppointmentCard";

const UpcomingAppointment = () => {
  return (
    <div className="bg-[#fff] rounded-[16px] flex justify-between h-1/2">
      <div className="p-8 flex justify-between">
        <div>
          <div className="flex justify-between mb-4">
            <p className="font-Roboto font-[700] text-1xl text-[#151515]">
              Upcoming Appointment
            </p>
            <p className="font-Roboto font-[700] text-1xl text-[#FF7300] text-left mt-1 mb-1">
              View More
            </p>
          </div>
          <AppointmentCard />
          <AppointmentCard />
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointment;
