import React from "react";

const OngoingSessionData = () => {
  return (
    <>
      <div>
        <p className="text-[#363636] text-left mt-2">
          2024/June/17 | 08.00 AM - 11.00 AM
        </p>
      </div>
      <div className="flex justify-between mt-4">
      <div className="mr-4">
        <p className="text-[#868686] text-sm">Medical Center Name</p>
        <p className="mb-1 text-[#FF7300] underline">Nawaloka Hospital</p>
        <p className="text-[#868686] text-sm">Appointment Category</p>
        <p className="mb-1">OPD</p>
      </div>

      <div className="mr-4">
        <p className="text-[#868686] text-sm">Medical Center Mobile Number</p>
        <p className="mb-1">011-1112224</p>
        <p className="text-[#868686] text-sm">Current Appointment Number</p>
        <p className="mb-1">02 (09.00 AM - 10.00 AM Slot)</p>
      </div>
      </div>
      <div className="flex justify-center items-center mt-4 mr-4">
          <div className="bg-[#FF7300] text-[#FFFFFF] rounded-md p-2 w-fit flex items-center">
            <p className="mx-2">Go to Session Portal </p>
          </div>
        </div>
    </>
  );
};

export default OngoingSessionData;
