import AppointmentCard from "./AppointmentCard";

interface UpcomingAppointment {
  date: string;
  time: string;
  number: string;
  doctor: string;
  location: string; 
}

interface UpcomingAppointmentProps {
  upcomingAppointments: UpcomingAppointment[];
}
const UpcomingAppointment = ({upcomingAppointments}:UpcomingAppointmentProps) => {
  

  return (
    <div className="bg-[#fff] rounded-[16px] h-1/2 p-4">
      <div className=" flex justify-between">
        <div>
          <h1 className="text-lg font-bold">Upcoming Appointments</h1>
        </div>

        <div className="mt-1">
          <p className="text-[#FF7300] text-sm font-semibold">View More</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-contain">
        {upcomingAppointments.map((appointment, index) => (
          <AppointmentCard key={index} {...appointment} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingAppointment;
