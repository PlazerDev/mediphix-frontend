import AppointmentCard from "./AppointmentCard";

const NoUpcomingAppointment = () => {
  return (
    <div className="bg-[#fff] rounded-[16px] h-1/2 p-4">
      <div className=" flex justify-between">
        <div>
          <h1 className="text-lg font-bold">Upcoming Appointment</h1>
        </div>

        <div className="mt-1">
          <p className="text-[#FF7300] text-sm font-semibold">View More</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-contain">
        <AppointmentCard />
        <AppointmentCard />
      </div>
    </div>
  );
};

export default NoUpcomingAppointment;
