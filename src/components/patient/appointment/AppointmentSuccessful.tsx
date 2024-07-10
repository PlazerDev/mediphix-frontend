import Footer from "./../../Footer";
import PatientNavigation from "../navigation/PatientNavigation";
import BookingSuccessful from "./../../../assets/images/patient/appoinment/BookingSuccessful.png";

const AppointmentSuccessful = () => {
  return (
    <>
      <PatientNavigation />
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Booking Successful
        </p>
        <p className="mb-6">Appointments</p>
      </div>

      <div className="ml-4 mr-4 p-8 bg-[#ffffff] rounded-[16px]">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-60 h-56 mb-2"
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
            <p>06</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-4">
          Your appointment has been successfully booked. You will receive a confirmation SMS with the details shortly to your mobile number.
          </p>
          <p>
          Thank you for choosing our services.
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default AppointmentSuccessful;
