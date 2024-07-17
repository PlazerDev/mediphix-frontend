interface UpcomingAppointmentProps {
  date: string;
  time: string;
  number: string;
  doctor: string;
  location: string; 
}

const AppointmentCard = ({ date, time, number, doctor, location } : UpcomingAppointmentProps) => {
  return (
    <>
      <div className="bg-[#DCDCDC] w-full rounded-[16px] mt-4 flex  p-4 items-center gap-4">
        <div className=" text-[#FFFFFF]  bg-[#363636] rounded-[16px] mr-2 h-16 w-16 flex flex-col items-center justify-center">
          <p>{date.split(' ')[0]}</p>
          <p>{date.split(' ')[1]}</p>
        </div>
        <div className="text-[#363636]">


          <p className="text-base font-semibold">
          {time} | Number {number}
          </p>
          <p className="text-sm">Dr. {doctor}</p>
          <p className="text-sm">{location}</p>
       </div>

      </div>
    </>
  );
};

export default AppointmentCard;
