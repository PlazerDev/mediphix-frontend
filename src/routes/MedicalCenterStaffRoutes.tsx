import { Route, Routes } from "react-router-dom";
import MedicalCenterStaffHomePage from "../pages/medical-center-staff/MedicalCenterStaffHomePage";
import { ConfigProvider } from "antd";
import MedicalCenterStaffOnGoingSessionsListPage from "../pages/medical-center-staff/MedicalCenterStaffOngoingSessionsListPage";

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
      }}
    >
      <Routes>
        <Route path="/" element={<MedicalCenterStaffHomePage />} />
        <Route
          path="/onGoingSessions"
          element={<MedicalCenterStaffOnGoingSessionsListPage />}
        />
      </Routes>
    </ConfigProvider>
  );
}

export default MedicalCenterStaffRoutes;
