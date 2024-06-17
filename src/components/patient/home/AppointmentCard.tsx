import React from "react";

const AppointmentCard = () => {
  return (
    <>
      <div className="bg-[#DCDCDC] rounded-[16px] p-8 flex justify-between w-[32rem]">
        <div className="font-Roboto text-[#FFFFFF] bg-[#363636] rounded-[16px] p-6 bg-left">
          <p>Jun</p>
          <p>17</p>
        </div>
        <div className="text-[#363636]">
          <p>05.00 PM - 06.00 PM | Number 07</p>
          <p>Dr. B.KARUNARATNE</p>
          <p>Aloka Clinic & Laboratory</p>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
