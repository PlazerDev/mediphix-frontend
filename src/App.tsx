import LoginOtp from "./components/login/patient/LoginOtp";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";
import LoginAuth from "./components/login/LoginAuth";

import SignupRoutes from "./routes/SignupRoutes";
import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes";
import DoctorRoutes from "./routes/DoctorRoutes";
import PatientRoutes from "./routes/PatientRoutes";
import {AuthProvider} from "@asgardeo/auth-react";


function App() {
    const asgardioConfig = {
        signInRedirectURL: "http://localhost:5173",
        signOutRedirectURL: "http://localhost:5173",
        clientID: "GK474MKclkINMWlDMaXXX0YH7lAa",
        baseUrl: "https://api.asgardeo.io/t/mediphix",
        scope: ["openid", "email", "profile", "insert_appointment", "retrieve_own_patient_data"]
    };
    return (
        <div>
            <AuthProvider config={asgardioConfig}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Login" element={<LoginAuth/>}/>
                        <Route path="/LoginOTP" element={<LoginOtp/>}/>

                        <Route path="/MedicalOfficialLogin" element={<MedicalLogin/>}/>

                        {/* patient Routes  */}
                        <Route path="/patient/*" element={<PatientRoutes/>}/>
                        {/* doctor Rotes  */}
                        <Route
                            path="/doctor/*"
                            element={<DoctorRoutes/>}
                        />

                        {/* Signup Section Routes  */}
                        <Route path="/signup/*" element={<SignupRoutes/>}/>

                        {/* Medical Center Staff Routes  */}
                        <Route
                            path="/medicalCenterStaff/*"
                            element={<MedicalCenterStaffRoutes/>}
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
