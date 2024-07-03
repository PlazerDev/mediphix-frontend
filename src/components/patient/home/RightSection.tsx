import ProfileOverview from "./ProfileOverview";
import UpcomingAppointment from "./UpcomingAppointment ";

const RightSection = () => {
  return (
    <div className="w-1/3 flex flex-col gap-4 mx-4 flex-grow">
      <UpcomingAppointment />
      <ProfileOverview />
    </div>
  );
};

export default RightSection;
