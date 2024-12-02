import { useNavigate } from "react-router-dom";
import profilepic from "./../../../assets/images/patient/appoinment/doctorImage.jpeg";
import centerlogo from "./../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg";

interface Center {
  id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategory: string[];
  noOfDoctors: number;
  description: string;
  phoneNo: string;
}

interface Session {
  id: string;
  date: string;
  time: string;
  category: string;
  doctorName: string;
  medicalcenterId: string;
  centerName: string;
  doctorNote: string;
  centerNote: string;
  maxPatientCount: number;
  registeredPatientCount: number;
}

interface DateAppointmentDetailsProps {
  details: Center;
  sessionDetails: Session;
  detailType: string;
}

const DateAppointmentDetails = ({
  details,
  sessionDetails,
  detailType,
}: DateAppointmentDetailsProps) => {
  const {
    time,
    doctorNote,
    centerNote,
    maxPatientCount,
    registeredPatientCount,
    category,
    doctorName,
    centerName,
  } = sessionDetails;

  const navigate = useNavigate();

  // Calculate availability
  const availability = maxPatientCount > registeredPatientCount;

  const handleBookAppointment = () => {
    const path =
      detailType === "doctor"
        ? `/patient/appointment/createappoinmnets/doctor/${doctorName}/bookappointment`
        : `/patient/appointment/createappoinmnets/center/${centerName}/bookappointment`;

    navigate(path, { state: { details, sessionDetails } });
  };

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
            onClick={availability ? handleBookAppointment : undefined}
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
            <p className="font-semibold">{category}</p>
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
                  {detailType === "doctor" ? centerName : doctorName}
                </a>
                {/* {detailType === "center" && (
                  <>
                    <p className="text-[#868686] text-sm mt-2">Education</p>
                    <p className="mb-1">
                      {(details as Doctor).degree} specialized in{" "}
                      {(details as Doctor).speciality}
                    </p>
                  </>
                )} */}
                {detailType === "doctor" && (
                  <>
                    <p className="text-[#868686] text-sm mt-2">
                      Contact Number
                    </p>
                    <p className="mb-1">
                      {(details as Center).phoneNo}
                    </p>
                  </>
                )}
              </div>
              {detailType === "doctor" && (
                <div>
                  <p className="text-[#868686] text-sm">Location</p>
                  <p className="mb-1">
                    {(details as Center).address}
                  </p>
                  <p className="text-[#868686] text-sm mt-2">E-mail</p>
                  <p className="mb-1">{(details as Center).email}</p>
                </div>
              )}
            </div>
          </div>
          <div className="ml-4">
            <div className="text-[#363636]">
              <p className=" font-semibold mb-2">Additional Details</p>
            </div>
            <p className="text-[#868686] text-sm">Special Note From Doctor</p>
            <p>{doctorNote || 'No special notes from doctor.'}</p>
          </div>
          <div className="ml-4 pb-4">
            <div className="text-[#363636]">
              <p className="text-[#868686] text-sm mt-2">
                Special Note From Medical Center
              </p>
            </div>
            <p>{centerNote  || 'No special notes from medical center.'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateAppointmentDetails;
