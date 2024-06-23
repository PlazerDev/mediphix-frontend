import { AiOutlinePhone } from "react-icons/ai";
const AppointmentDetails = () => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-4 gap-3 ">
          <div className="col-span-2">
            <p className="text-sm text-[#868686]">Date & Time</p>
            <p className="text-base">2024/06/17 | 06.00 PM - 07.00 PM</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Doctor Name</p>
            <p className="text-base">Dr. B.KARUNARATNE</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Catergory</p>
            <p className="text-base">OPD</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Queue Number</p>
            <p className="text-base">07</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Referance Number</p>
            <p className="text-base">REF_8056</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-[#868686]">Medical Center Name</p>
            <p className="text-base">
              Aloka Clinic & Laboratory
              <br /><div className="flex text-[#FF7300]"><AiOutlinePhone className="mt-1 mr-1"/>
              <p className="">0114500500</p></div>
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
