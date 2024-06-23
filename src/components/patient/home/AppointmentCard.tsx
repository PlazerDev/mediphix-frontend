const AppointmentCard = () => {
  return (
    <>
      <div className="bg-[#DCDCDC] w-full rounded-[16px] mt-4 flex  p-4 items-center gap-4">
        <div className=" text-[#FFFFFF]  bg-[#363636] rounded-[16px] mr-2 h-16 w-16 flex flex-col items-center justify-center">
          <p>JUN</p>
          <p>17</p>
        </div>
        <div className="text-[#363636]">
          <p className="text-base font-semibold">
            05.00 PM - 06.00 PM | Number 07
          </p>
          <p className="text-sm">Dr. B.KARUNARATNE</p>
          <p className="text-sm">Aloka Clinic & Laboratory</p>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
