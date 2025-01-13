import { useNavigate } from "react-router-dom";
import profilepic from "./../../../assets/images/patient/appoinment/doctorImage.jpeg";
import centerlogo from "./../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg";

interface Center {
  _id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategories: string[];
  noOfDoctors?: number;
  description?: string;
  mobile: string;
}

interface TimeSlot {
  slotId: number;
  startTime: string;
  maxNoOfPatients: number;
  status: string;
  queue?: {
    appointments: number[];
    queueOperations?: {
      defaultIncrementQueueNumber: number;
      ongoing: number;
      nextPatient1: number;
      nextPatient2: number;
      finished: number[];
      absent: number[];
    };
  };
}

interface FormattedSession {
  _id: string;
  doctorId: string;
  medicalCenterId: string;
  aptCategories: string[];
  payment: number;
  hallNumber: string;
  noteFromCenter?: string;
  noteFromDoctor?: string;
  overallSessionStatus: string;
  timeSlots: TimeSlot[];
  formattedDateTime: {
    sessionDate: string;
    time: string;
  };
}

interface DateAppointmentDetailsProps {
  details: Center;
  sessionDetails: FormattedSession;
  detailType: string;
}

const DateAppointmentDetails = ({
  details,
  sessionDetails,
  detailType,
}: DateAppointmentDetailsProps) => {

  const navigate = useNavigate();

  // Get the first time slot to check availability
  const firstTimeSlot = sessionDetails.timeSlots[0];
  const maxPatientCount = firstTimeSlot?.maxNoOfPatients || 0;
  const reservedPatientCount = firstTimeSlot?.queue?.appointments.length || 0;
  const availability = maxPatientCount > reservedPatientCount;

  const handleBookAppointment = () => {
    const path =
      detailType === "doctor"
        ? `/patient/appointment/createappoinmnets/doctor/${details.name}/bookappointment`
        : `/patient/appointment/createappoinmnets/center/${details.name}/bookappointment`;

    navigate(path, { state: { sessionDetails } });
  };

  return (
    <>
      <div className="bg-[#DCDCDC] rounded-[16px] m-4">
        <div className=" flex justify-between">
          <div className=" text-[#FFFFFF] bg-[#363636] rounded-tl-lg rounded-br-lg p-3 w-fit flex items-center">
            <p className="mx-2">{sessionDetails.formattedDateTime.time}</p>
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
            <p className="font-semibold">{sessionDetails.aptCategories.join(", ")}</p>
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

              <div className="mr-10 w-1/4">
                <p className="text-[#868686] text-sm">Name</p>
                <a className="mb-2 text-[#FF7300] underline">
                {details.name}
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
                    {details.mobile}
                    </p>
                  </>
                )}
              </div>
              {detailType === "doctor" && (
                <div className="w-1/4 mr-10">
                  <p className="text-[#868686] text-sm">Location</p>
                  <p className="mb-1">
                    {details.address}
                  </p>
                  <p className="text-[#868686] text-sm mt-2">E-mail</p>
                  <p className="mb-1">{details.email}</p>
                </div>
              )}
              <div>
                  <p className="text-[#868686] text-sm">Consultation Fee</p>
                  <p className="mb-1">
                    Rs. {sessionDetails.payment}
                  </p>
                  <p className="text-[#868686] text-sm mt-2"></p>
                  <p className="mb-1"></p>
                </div>
            </div>
            
          </div>
          <div className="ml-4">
            <div className="text-[#363636]">
              <p className=" font-semibold mb-2">Additional Details</p>
            </div>
            <p className="text-[#868686] text-sm">Special Note From Doctor</p>
            <p>{sessionDetails.noteFromDoctor || 'No special notes from doctor.'}</p>
          </div>
          <div className="ml-4 pb-4">
            <div className="text-[#363636]">
              <p className="text-[#868686] text-sm mt-2">
                Special Note From Medical Center
              </p>
            </div>
            <p>{sessionDetails.noteFromCenter   || 'No special notes from medical center.'}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DateAppointmentDetails;
