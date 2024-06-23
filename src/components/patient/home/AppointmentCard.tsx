import React from "react";

const AppointmentCard = () => {
  return (
    <>
      <div className="bg-[#DCDCDC] rounded-[16px] mt-4 px-4 py-2 flex justify-between items-center gap-4">
        <div className="font-Roboto text-[#FFFFFF] font-[700] bg-[#363636] rounded-[16px] h-16 w-16 flex flex-col items-center justify-center">
          <p>Jun</p>
          <p>17</p>
        </div>
        <div className="text-[#363636]">
          <p className="font-[700]">05.00 PM - 06.00 PM | Number 07</p>
          <p className="font-[400]">Dr. B.KARUNARATNE</p>
          <p className="font-[400]">Aloka Clinic & Laboratory</p>
          <p className="font-[400]">Aloka Clinic & Laboratory 2</p>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
