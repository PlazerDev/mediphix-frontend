import LoginOtp from "./components/login/patient/LoginOtp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";
import LoginAuth from "./components/login/LoginAuth";

import SignupRoutes from "./routes/SignupRoutes";
import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";
import PatientRoutes from "./routes/PatientRoutes";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LoginAuth />} />
          <Route path="/LoginOTP" element={<LoginOtp />} />

          <Route path="/MedicalOfficialLogin" element={<MedicalLogin />} />

          {/* patient Routes  */}
          <Route path="/patient/*" element={<PatientRoutes />} />
          {/* doctor Rotes  */}
          <Route
            path="/doctor/*"
            element={<DoctorRoutes />}
          />

          {/* Signup Section Routes  */}
          <Route path="/signup/*" element={<SignupRoutes />} />

          {/* Medical Center Staff Routes  */}
          <Route
            path="/medicalCenterStaff/*"
            element={<MedicalCenterStaffRoutes />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
