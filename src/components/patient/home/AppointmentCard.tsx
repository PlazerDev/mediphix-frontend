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
      <div className="bg-[#DCDCDC] w-full rounded-[16px] flex p-3 mb-3 items-center gap-4">
        <div className=" text-[#FFFFFF]  bg-[#363636] rounded-[16px] ml-3 h-14 w-14 flex flex-col items-center justify-center">
          <p>{date.split(' ')[0]}</p>
          <p>{date.split(' ')[1]}</p>
        </div>
        <div className="text-[#363636]">


          <p className="text-base font-semibold">
          {time}   |   Number {number}
          </p>
          <p className="text-sm">Dr. {doctor}</p>
          <p className="text-xs">{location}</p>
       </div>

      </div>
    </>
  );
};

export default AppointmentCard;
