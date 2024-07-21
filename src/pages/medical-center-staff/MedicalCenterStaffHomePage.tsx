import Footer from "./../../components/Footer";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import bodyImg from "./../../assets/images/patient/appoinment/manageAppoinments.png";
import MCSGreeting from "../../components/medical-center-staff/MCSGreeting";
import MCSGreetingVerificationName from "../../components/medical-center-staff/MCSGreetingVerificationName";
import MCSCustomButton from "../../components/medical-center-staff/MCSCustomButton";
import { FaCalendarDays } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";

function MedicalCenterStaffHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <div className="flex md:flex-row md:items-center md:justify-between md:my-4 my-2 flex-col gap-2">
          <MCSGreeting />
          <MCSGreetingVerificationName />
        </div>
        {/* Main Body div */}
        <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
            <p className="text-xl md:text-2xl font-bold">
              Hi, Vishwa! <br /> Manage your assigned clinic sessions here
            </p>
            <img
              src={bodyImg}
              alt="body"
              className="w-32 my-2 md:my-0 md:w-60 object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
            <MCSCustomButton
              buttonTitle="Upcoming Appointments"
              isPrimary={false}
              buttonIcon={FaCalendarDays}
            />
            <MCSCustomButton
              buttonTitle="Ongoing Clinic Sessions"
              isPrimary={true}
              buttonIcon={FaHandHoldingMedical}
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffHomePage;
