import { Route, Routes } from "react-router-dom";
import MedicalCenterStaffHomePage from "../pages/medical-center-staff/MedicalCenterStaffHomePage";
import { ConfigProvider } from "antd";
import MedicalCenterStaffOnGoingSessionsListPage from "../pages/medical-center-staff/MedicalCenterStaffOngoingSessionsListPage";
import MedicalCenterStaffOngoingSessionPage from "../pages/medical-center-staff/MedicalCenterStaffOngoingSessionPage";
import MedicalCenterStaffStartNextTimeSlotPage from "../pages/medical-center-staff/MedicalCenterStaffStartNextTimeSlotPage";

function MedicalCenterStaffRoutes() {
  return (
    // ConfigProvider wrapper shouold have move to the app.tsx later
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 8,
        },
        components: {
          Pagination: {
            itemActiveBg: "", // remove the default active bg color
          },
        },
      }}
    >
      <Routes>
        <Route path="/" element={<MedicalCenterStaffHomePage />} />
        <Route
          path="/onGoingSessions"
          element={<MedicalCenterStaffOnGoingSessionsListPage />}
        />
        <Route
          path="/onGoingSessions/:sessionId"
          element={<MedicalCenterStaffOngoingSessionPage />}
        />
        <Route
          path="/onGoingSessions/:sessionId/startNextConfirm"
          element={<MedicalCenterStaffStartNextTimeSlotPage />}
        />
      </Routes>
    </ConfigProvider>
  );
}

export default MedicalCenterStaffRoutes;
