import doctorImage from "../../../assets/images/patient/appoinment/doctorImage.jpeg";
import bgimage from "../../../assets/images/patient/appoinment/doctordetails.png";
import { BiSolidBadgeCheck } from "react-icons/bi";

interface DoctorDetailsProps {
  name: string;
  degree: string;
  speciality: string;
  appointmentCategory: string[];
  description: string;
}

const DoctorDetails = ({
  name,
  degree,
  speciality,
  appointmentCategory,
  description,
}: DoctorDetailsProps) => {
  return (
    <>
      <div className="bg-[#ffffff] rounded-[16px] m-4 ">
        <div className="flex bg-[#FF7300] w-full h-24 rounded-t-[16px]">
          <div className="w-1/2"></div>
          <div
            className="w-1/2 bgimage bg-none bg-center bg-cover rounded-tr-[16px]"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
        </div>
        <div className="flex gap-x-20 p-10">
          <div className="min-w-max">
            <div className="z-[500]">
              <img
                src={doctorImage}
                className="w-36 h-36 rounded-full object-cover absolute top-[200px] z-2"
              />
            </div>
            <div className="mt-12 text-lg">
              <div className="flex">
                <h6 className=" font-semibold">Dr. {name}</h6>
                <BiSolidBadgeCheck className="text-[#FF7300] mt-1 ml-1" />
              </div>
              <p>{degree}</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-x-20">
              <div className="w-fit">
                <h6 className="text-sm text-[#868686]">Specialization</h6>
                <p>{speciality}</p>
              </div>
              <div>
                <h6 className="text-sm text-[#868686]">
                  Supported Appointment Categories
                </h6>
                <p>{appointmentCategory.join(", ")}</p>
              </div>
            </div>
            <div className="text-justify mt-4">
              <h6 className="text-sm text-[#868686]">Description</h6>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDetails;
