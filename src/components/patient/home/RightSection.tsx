import React from "react";
import UpcomingAppointment from "./UpcomingAppointment ";
import ProfileOverview from "./ProfileOverview";

const RightSection = () => {
  return (
    <div className="w-1/3 flex flex-col gap-4 p-8">
      <UpcomingAppointment />
      <ProfileOverview />
    </div>
  );
};

export default RightSection;
