import React from "react";
const DoctorTimeSlots = () => {
  return (
    <div className="bg-[#DCDCDC] w-full rounded-[16px] my-2">
      <div className="text-[#363636] p-4">
        <p className="text-base font-semibold">
          2024/June/17 | 08.00 AM - 11.00 AM
        </p>
      </div>

        <div className="grid grid-cols-3 ml-4 mb-4">
          <div>
            <p className="text-sm text-[#868686]">Medical Center Name</p>
            <p className="text-base text-[#FF7300] underline mb-4">Nawaloka Hospital</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Medical Center Mobile Number</p>
            <p className="text-base text-[black] mb-4">011-1112224</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Appointment Category</p>
            <p className="text-base text-[black] mb-4">OPD</p>
          </div>
        </div>
       
    </div>
  );
};

export default DoctorTimeSlots;
