import Footer from "./../../components/Footer";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSDateTimeTitle from "../../components/medical-center-staff/MCSDateTimeTitle";
import MCSOnGoingSessionDetailsCard from "../../components/medical-center-staff/MCSOnGoingSessionDetailsCard";
import { Divider, Pagination } from "antd";
import doctorImg from "./../../assets/images/patient/appoinment/doctorImage.jpeg";
import swal from "sweetalert2";
import MCSEmptyCard from "../../components/medical-center-staff/MCSEmptyCard";

function MedicalCenterStaffOnGoingSessionsListPage() {
  var noOfSessions: number = 2;

  if (noOfSessions > 0) {
    swal({
      title: "Alert",
      text: "You have" + noOfSessions + " ongoing clinic sessions",
      icon: "info",
      buttons: {
        confirm: {
          text: "OK",
        },
      },
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div from here*/}
        {noOfSessions === 0 && <MCSEmptyCard />}
        {noOfSessions > 0 && (
          <>
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
              sessionId="125ASDSAd"
            />
            <MCSOnGoingSessionDetailsCard
              doctorImg={doctorImg}
              doctorName="Dr. Nishanth Perera"
              doctorEducation="MBBS (COL) specialized in cardiology"
              timeFrame="06.00 AM - 08.00 AM"
              date="2024/June/13"
              hallNumber="HALL - A"
              status="Started"
              sessionId="125ASDSAd"
            />
            <Pagination defaultCurrent={1} total={20} className="text-end" />
          </>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOnGoingSessionsListPage;
