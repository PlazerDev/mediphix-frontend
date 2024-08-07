import { Link, useParams } from "react-router-dom";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import Footer from "./../../components/Footer";
import { Button, Divider } from "antd";
import MCSDateTimeTitle from "../../components/medical-center-staff/MCSDateTimeTitle";
import MCSTimeSlotCard from "../../components/medical-center-staff/MCSTimeSlotCard";
import MCSPatientDetailsCard from "../../components/medical-center-staff/MCSPatientDetailsCard";
import MCSNextPatientDetailsCard from "../../components/medical-center-staff/MCSNextPatientDetailsCard";
import MCSQueueDetailsCard from "../../components/medical-center-staff/MCSQueueDetailsCard";

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
        <MCSPatientDetailsCard />
        <MCSNextPatientDetailsCard />
        <MCSQueueDetailsCard />
        <div className="flex justify-end mt-4">
          <Link to={"/medicalCenterStaff/onGoingSessions/" + sessionId + "/#"}>
            <Button type="primary">End Current Time Slot & Start Next</Button>
          </Link>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOngoingSessionPage;
