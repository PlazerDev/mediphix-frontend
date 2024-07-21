import Footer from "./../../components/Footer";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSDateTimeTitle from "../../components/medical-center-staff/MCSDateTimeTitle";
import MCSOnGoingSessionDetailsCard from "../../components/medical-center-staff/MCSOnGoingSessionDetailsCard";
import { Divider, Pagination } from "antd";
import doctorImg from "./../../assets/images/patient/appoinment/doctorImage.jpeg";

function MedicalCenterStaffOnGoingSessionsListPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div from here*/}
        <Divider>
          <MCSDateTimeTitle />
        </Divider>
        <MCSOnGoingSessionDetailsCard
          doctorImg={doctorImg}
          doctorName="Dr. Nishanth Perera"
          doctorEducation="MBBS (COL) specialized in cardiology"
          timeFrame="06.00 AM - 08.00 AM"
          date="2024/June/13"
          hallNumber="HALL - A"
          status="Started"
        />
        <MCSOnGoingSessionDetailsCard
          doctorImg={doctorImg}
          doctorName="Dr. Nishanth Perera"
          doctorEducation="MBBS (COL) specialized in cardiology"
          timeFrame="06.00 AM - 08.00 AM"
          date="2024/June/13"
          hallNumber="HALL - A"
          status="Started"
        />
        <Pagination defaultCurrent={1} total={20} className="text-end" />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOnGoingSessionsListPage;
