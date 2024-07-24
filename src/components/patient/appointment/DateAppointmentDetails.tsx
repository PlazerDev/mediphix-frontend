import profilepic from "./../../../assets/images/patient/appoinment/doctorImage.jpeg";
import centerlogo from "./../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg";

interface CenterDetailsCard {
  time: string;
  name: string;
  phoneNo: string;
  location: string;
  email: string;
  category: string;
  doctorNote: string;
  centerNote: string;
  availability: boolean;
}

interface DoctorDetailsCard {
  time: string;
  name: string;
  degree: string;
  speciality: string;
  doctorNote: string;
  centerNote: string;
  availability: boolean;
}

interface DateAppointmentDetailsProps {
  details: DoctorDetailsCard | CenterDetailsCard;
  detailType: string;
}

const DateAppointmentDetails = ({
  details,
  detailType,
}: DateAppointmentDetailsProps) => {
  const { time, doctorNote, centerNote, availability } = details;

  return (
    <>
      <div className="bg-[#DCDCDC] rounded-[16px] m-4">
        <div className=" flex justify-between">
          <div className=" text-[#FFFFFF] bg-[#363636] rounded-tl-lg rounded-br-lg p-3 w-fit flex items-center">
            <p className="mx-2">{time}</p>
          </div>
          <div
            className={`rounded-md py-4 w-52 flex justify-center mt-4 mr-4 ${
              availability ? "bg-[#FF7300]  cursor-pointer" : "bg-[#868686]"
            } text-[#FFFFFF]`}
          >
            <p className="mx-2">
              {availability ? "Book An Appointment" : "Fully Booked!"}
            </p>
          </div>
        </div>

        {detailType === "doctor" && (
          <div className="ml-4">
            <p className="text-[#868686] text-sm mt-3 ">
              Appointment Category{" "}
            </p>
            <p className="font-semibold">
              {(details as CenterDetailsCard).category}
            </p>
          </div>
        )}

        <div>
          <div className="text-[#363636]">
            <p className=" font-semibold ml-4 my-4">
              {detailType === "doctor"
                ? "Medical Center Details"
                : "Doctor Details"}
            </p>
          </div>

          <div>
            <div className="flex justify">
              <div className="flex items-center justify-center">
                <img
                  className="w-28 h-28 rounded bg-contain ml-4 mr-12 mb-4 object-cover"
                  src={detailType == "center" ? profilepic : centerlogo}
                  alt={
                    detailType === "doctor"
                      ? "Medical Center Details"
                      : "Doctor Details"
                  }
                />
              </div>

              <div className="mr-20 w-1/3">
                <p className="text-[#868686] text-sm">Name</p>
                <a className="mb-2 text-[#FF7300] underline">
                  {(details as CenterDetailsCard).name}
                </a>
                {detailType === "center" && (
                  <>
                    <p className="text-[#868686] text-sm mt-2">Education</p>
                    <p className="mb-1">
                      {(details as DoctorDetailsCard).degree} specialized in{" "}
                      {(details as DoctorDetailsCard).speciality}
                    </p>
                  </>
                )}
                {detailType === "doctor" && (
                  <>
                    <p className="text-[#868686] text-sm mt-2">
                      Contact Number
                    </p>
                    <p className="mb-1">
                      {(details as CenterDetailsCard).phoneNo}
                    </p>
                  </>
                )}
              </div>
              {detailType === "doctor" && (
                <div>
                  <p className="text-[#868686] text-sm">Location</p>
                  <p className="mb-1">
                    {(details as CenterDetailsCard).location}
                  </p>
                  <p className="text-[#868686] text-sm mt-2">E-mail</p>
                  <p className="mb-1">{(details as CenterDetailsCard).email}</p>
                </div>
              )}
            </div>
          </div>
          <div className="ml-4">
            <div className="text-[#363636]">
              <p className=" font-semibold mb-2">Additional Details</p>
            </div>
            <p className="text-[#868686] text-sm">Special Note From Doctor</p>
            <p>{doctorNote}</p>
          </div>
          <div className="ml-4 pb-4">
            <div className="text-[#363636]">
              <p className="text-[#868686] text-sm mt-2">
                Special Note From Medical Center
              </p>
            </div>
            <p>{centerNote}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateAppointmentDetails;
