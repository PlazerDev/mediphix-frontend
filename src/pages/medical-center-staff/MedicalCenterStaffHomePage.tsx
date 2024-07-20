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
        <div className="flex items-center justify-between my-4">
          <MCSGreeting />
          <MCSGreetingVerificationName />
        </div>
        {/* Main Body div */}
        <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">
              Hi, Vishwa! <br /> Manage your assigned clinic sessions here
            </p>
            <img src={bodyImg} alt="body" className="w-2/12 object-contain" />
          </div>
          <div className="flex justify-center gap-4 mt-2">
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
