import React from "react";
import UpcomingAppointment from "./UpcomingAppointment ";
import ProfileOverview from "./ProfileOverview";
import NoUpcomingAppointment from "./NoUpcomingAppointment";

const RightSection = () => {
  return (
    <div className="w-1/3 flex flex-col gap-4 p-8">
        <NoUpcomingAppointment/>
        <ProfileOverview />
    </div>
  );
};

export default RightSection;
