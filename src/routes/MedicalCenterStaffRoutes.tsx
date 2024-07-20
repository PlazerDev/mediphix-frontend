import { Route, Routes } from "react-router-dom";
import MedicalCenterStaffHomePage from "../pages/medical-center-staff/MedicalCenterStaffHomePage";

function MedicalCenterStaffRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MedicalCenterStaffHomePage />} />
    </Routes>
  );
}

export default MedicalCenterStaffRoutes;
