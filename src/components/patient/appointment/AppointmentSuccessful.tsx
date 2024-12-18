import Footer from "./../../Footer";
import BookingSuccessful from "./../../../assets/images/patient/appoinment/BookingSuccessful.png";
import { Link, useLocation } from "react-router-dom";

const AppointmentSuccessful = () => {

  const location = useLocation();
  const {
    patientCount = 0, 
    payment = 'N/A', 
    location: consultationLocation = 'N/A', 
    startTime = 'N/A', 
    endTime = 'N/A'
  } = location.state || {};

  return (
    <>
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Booking Successful
        </p>
        <p className="mb-6">Appointments</p>
      </div>

      <div className="ml-4 mr-4 p-8 bg-[#ffffff] rounded-[16px]">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-32 h-28 mb-2"
            src={BookingSuccessful}
            alt="BookingSuccessful"
          />
        </div>

        <div className="flex text-center justify-center">
          <p className="text-[#151515] mb-6 font-Roboto font-[700] text-2xl">
            Your appointment has been successfully booked !
          </p>
        </div>
        <div className="flex justify-center gap-12">
          <div>
            <p className="text-[#868686]">Reference Number</p>
            <p>REF_2003</p>
          </div>

          <div>
            <p className="text-[#868686]">Your Queue Number</p>
            <p>{patientCount + 1}</p>
          </div>
        </div>
        <div className="flex justify-center gap-12 mt-6">
          <div>
            <p className="text-[#868686]">Appointment Time</p>
            <p>{startTime} - {endTime}</p>
          </div>

          <div>
          </div>
        </div>
        <div className="flex justify-center gap-12 mt-6">
          <div>
            <p className="text-[#868686]">Consultation Fee</p>
            <p>{payment}</p>
          </div>

          <div>
            <p className="text-[#868686]">Consultation Room No.</p>
            <p>{consultationLocation}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-4">
            Your appointment has been successfully booked. You will receive a
            confirmation SMS with the details shortly to your mobile number.
          </p>
          <p>Thank you for choosing our services.</p>
        </div>
        <div className="flex justify-center items-center mt-4 mr-4">
          <div className="flex justify-center items-center mt-4 mr-4">
            <Link to="/patienthome">
              <div className="bg-[#FFFFFF] text-[black] border-2 border-black rounded-md p-2 w-40 flex justify-center items-center">
                <p className="font-Roboto font-[700] text-sm">HOME</p>
              </div>
            </Link>
          </div>
          {/* <div className="flex justify-center items-center mt-4 mr-4">
            <Link to="/patient/appoinmentdetails">
              <div className="bg-[#FF7300] text-[#FFFFFF] rounded-md p-2 w-50 flex items-center">
                <p className="mx-2">View More Details</p>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default AppointmentSuccessful;
