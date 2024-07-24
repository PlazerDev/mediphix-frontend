import Footer from "./../../Footer";
import BookingFailedImage from "./../../../assets/images/patient/appoinment/BookingFailed.png";
import { Link } from "react-router-dom";

const BookingFailed = () => {
  return (
    <>
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Booking Failed
        </p>
        <p className="mb-6">Appointments</p>
      </div>

      <div className="ml-4 mr-4 p-8 bg-[#ffffff] rounded-[16px]">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-60 h-56 mb-2"
            src={BookingFailedImage}
            alt="Booking Failed"
          />
        </div>
        <div className="flex text-center justify-center">
          <p className="text-[#151515] mb-6 font-Roboto font-[700] text-2xl">
            Your appointment could not be booked!
          </p>
        </div>
        <div className="text-center">
          <p>Unfortunately, all available appointments are fully booked.</p>
        </div>
        <div className="text-center">
          <p>
            We apologize for the inconvenience. Please try selecting a different
            time or contact the
          </p>
          <p>medical center for further assistance.</p>
        </div>
        <div className="flex justify-center items-center mt-4 mr-4">
          <Link to="/patient/appointment">
            <div className="bg-[#FF7300] text-[#FFFFFF] rounded-md p-2 w-fit flex items-center cursor-pointer">
              <p className="mx-2">Appointments</p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookingFailed;
