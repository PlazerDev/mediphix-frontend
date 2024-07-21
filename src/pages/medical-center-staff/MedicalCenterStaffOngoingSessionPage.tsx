import { useParams } from "react-router-dom";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import Footer from "./../../components/Footer";
import { Divider } from "antd";
import MCSDateTimeTitle from "../../components/medical-center-staff/MCSDateTimeTitle";
import MCSTimeSlotCard from "../../components/medical-center-staff/MCSTimeSlotCard";

function MedicalCenterStaffOngoingSessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting />
        {/* Main Body div */}
        <Divider>
          <MCSDateTimeTitle />
        </Divider>
        <MCSTimeSlotCard
          timeRange="08.00 AM - 09.00 AM"
          maxPatientSessions={8}
          status="In Progress"
        />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOngoingSessionPage;
