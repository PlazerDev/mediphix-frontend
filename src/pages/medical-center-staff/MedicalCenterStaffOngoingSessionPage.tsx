import { useParams } from "react-router-dom";

function MedicalCenterStaffOngoingSessionPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  return <div>MedicalCenterStaffOngoingSessionPage {sessionId} </div>;
}

export default MedicalCenterStaffOngoingSessionPage;
