import { AiOutlinePhone } from "react-icons/ai";

interface AppointmentProps {
  date: string;
  time: string;
  doctor: string;
  category: string;
  queueNo: string;
  referenceNo: string;
  medicalCenter: string;
  phoneNo: string;
}
const AppointmentDetails = ({
  date,
  time,
  doctor,
  category,
  queueNo,
  referenceNo,
  medicalCenter,
  phoneNo,
}: AppointmentProps) => {
  return (
    <>
      <div className="flex items-center ">
        <div className="ml-4 grid grid-cols-4 gap-y-2 gap-x-6 ">
          <div className="col-span-2 max-w-max">
            <p className="text-sm text-[#868686]">Date & Time</p>
            <p className="text-base">
              {date} | {time}
            </p>
          </div>
          <div className="min-w-max">
            <p className="text-sm text-[#868686]">Doctor Name</p>
            <p className="text-base">Dr. {doctor}</p>
          </div>
          <div className="min-w-max ml-6">
            <p className="text-sm text-[#868686]">Catergory</p>
            <p className="text-base">{category}</p>
          </div>
          <div>
            <p className="text-sm text-[#868686]">Queue Number</p>
            <p className="text-base">{queueNo}</p>
          </div>
          <div className="max-w-max">
            <p className="text-sm text-[#868686]">Referance Number</p>
            <p className="text-base">{referenceNo}</p>
          </div>
          <div className="col-span-2 min-w-max">
            <p className="text-sm text-[#868686]">Medical Center Name</p>
            <p className="text-base">
              {medicalCenter}
              <br />
              <div className="flex text-sm text-[#FF7300]">
                <AiOutlinePhone className="mt-1 mr-1" />
                <p className="text-sm">{phoneNo}</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentDetails;
