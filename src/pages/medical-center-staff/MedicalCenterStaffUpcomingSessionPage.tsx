import MCSCalender from "../../components/medical-center-staff/MCSCalender";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSOnGoingSessionDetailsCard from "../../components/medical-center-staff/MCSOnGoingSessionDetailsCard";
import MCSSelectedDate from "../../components/medical-center-staff/MCSSelectedDate";
import Footer from "./../../components/Footer";
import doctorImg from "./../../assets/images/patient/appoinment/doctorImage.jpeg";

function MedicalCenterStaffUpcomingSessionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div */}
        <MCSCalender />
        <MCSSelectedDate />
        <div>
          <MCSOnGoingSessionDetailsCard
            timeFrame="06.00 AM - 08.00 AM"
            date="2024/June/13"
            hallNumber="HALL - A"
            status="Not Started Yet"
            doctorName="Dr. Nishantha Perera"
            doctorEducation="MBBS (COL) specialized in cardiology"
            doctorImg={doctorImg}
            sessionId="#"
          />
          <MCSOnGoingSessionDetailsCard
            timeFrame="06.00 AM - 08.00 AM"
            date="2024/June/13"
            hallNumber="HALL - A"
            status="Not Started Yet"
            doctorName="Dr. Nishantha Perera"
            doctorEducation="MBBS (COL) specialized in cardiology"
            doctorImg={doctorImg}
            sessionId="#"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffUpcomingSessionPage;
