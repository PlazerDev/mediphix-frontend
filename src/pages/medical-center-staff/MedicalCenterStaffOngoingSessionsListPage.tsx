import Footer from "./../../components/Footer";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSDateTimeTitle from "../../components/medical-center-staff/MCSDateTimeTitle";
import swal from "sweetalert";

function MedicalCenterStaffOnGoingSessionsListPage() {
  swal({
    title: "Alert",
    text: "You have 2 ongoing clinic sessions",
    icon: "info",
    buttons: {
      confirm: {
        text: "OK",
      },
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div */}
        <MCSDateTimeTitle />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOnGoingSessionsListPage;
