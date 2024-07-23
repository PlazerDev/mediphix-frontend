import centerImage from "../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg";
import bgimage from "../../../assets/images/patient/appoinment/doctordetails.png";
import { BiSolidBadgeCheck } from "react-icons/bi";

interface Center {
  name: string;
  address: string;
  appointmentCategory: string[];
  noOfDoctors: number;
  description: string;
  phoneNo: string;
}

const CenterDetails = ({ name, address, description, phoneNo }: Center) => {
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
        <div className="p-10">
          <div className="flex gap-x-20 ">
            <div className="min-w-max">
              <div className="z-[500]">
                <img
                  src={centerImage}
                  className="w-36 h-36 rounded-[16px] object-scale-down absolute top-[200px] z-2"
                />
              </div>
              <div className="flex mt-12 text-lg">
                <h6 className=" font-semibold">{name}</h6>
                <BiSolidBadgeCheck className="text-[#FF7300] mt-1 ml-1" />
              </div>
            </div>
            <div className=" ">
              <div className="flex flex-col gap-y-4">
                <div className="w-fit">
                  <h6 className="text-sm text-[#868686]">Location</h6>
                  <p>{address}</p>
                </div>
                <div>
                  <h6 className="text-sm text-[#868686]">
                    Receptionist Contact Number
                  </h6>
                  <p>{phoneNo}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-justify mt-4">
            <h6 className="text-sm text-[#868686]">Description</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CenterDetails;
