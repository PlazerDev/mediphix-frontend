import Footer from "./../../Footer";
import PatientNavigation from "../navigation/PatientNavigation";

const AppointmentSuccessful = () => {
  return (
    <>
    <div>
          <PatientNavigation />
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">Booking Successful</p>
        <p className="mb-6">Appointments</p>
      </div>
       
      <div className="ml-4 mr-4 p-8 bg-[#ffffff] rounded-[16px] ">
      
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
    </>
  );
};


export default AppointmentSuccessful