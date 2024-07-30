const TimeslotCard = () => {
  return (
    <>
      <div className="relative bg-[#ffffff] rounded-[16px] p-3 ml-[1%] mt-3 mb-1 mr-[1%] h-96">
        <p className="font-bold">Select the time slot</p>
        <div className="bg-[#DCDCDC] w-[40%] rounded-[15px] mt-4 flex p-4 items-center gap-4 ml-[1%] ">
          <div className="pl-[1%]">
            <p className="text-[#868686] text-sm">Time Slot</p>
            <p className="font-bold">08.00PM - 09.00PM</p>
            <p className="text-[#868686] text-sm mt-1">
              Current Last Queue Number
            </p>
            <button className="bg-black text-white rounded-full px-9 py-1">
              06
            </button>
          </div>
          <div className="mb-[13%] pl-[5%]">
            <p className="text-[#868686] text-sm">
              Maximum Number of Appointments
            </p>
            <p className="text-sm">10</p>
          </div>
        </div>

        <div className="bg-black w-[40%] flex rounded-[15px] p-5 items-center gap-4 ml-[45%]  mt-[-11%] left-1/4 z-10">
          <div className="pl-[1%]">
            <p className="text-[#868686] text-sm">Time Slot</p>
            <p className="font-bold text-white">10.00PM - 11.00PM</p>
            <p className="text-[#868686] text-sm mt-1">
              Current Last Queue Number
            </p>
            <button className="bg-white text-black rounded-full px-9 py-1">
              02
            </button>
          </div>
          <div className="mb-[13%] pl-[5%]">
            <p className="text-[#868686] text-sm">
              Maximum Number of Appointments
            </p>
            <p className="text-sm text-white">10</p>
          </div>
        </div>

        <div className="bg-[#DCDCDC] w-[40%] flex rounded-[15px] mb-[30%] mt-4 p-5 ml-[1%]">
          <div className="pl-[1%]">
            <p className="text-[#868686] text-sm">Time Slot</p>
            <p className="font-bold">10.00PM - 11.00PM</p>
            <p className="text-[#868686] text-sm mt-1">
              Current Last Queue Number
            </p>
            <button className="bg-black text-white rounded-full px-9 py-1 ">
              02
            </button>
          </div>

          <div className="mb-[13%] pl-[5%]">
            <p className="text-[#868686] text-sm">
              Maximum Number of Appointments
            </p>
            <p className="text-sm">10</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeslotCard;
