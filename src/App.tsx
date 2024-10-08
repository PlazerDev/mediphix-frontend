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
import LandingPage from "./pages/LandingPage";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    const asgardioConfig = {
        signInRedirectURL: "http://localhost:5173",
        signOutRedirectURL: "http://localhost:5173",
        clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
        baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
        scope: [
            "openid",
            "email",
            "profile",
            "insert_appointment",
            "retrieve_own_patient_data",
            "check_patient"
        ],
    };

    return (
        <div>
            <AuthProvider config={asgardioConfig}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/Login" element={<LoginAuth/>}/>
                            <Route path="/LoginOTP" element={<LoginOtp/>}/>

                            <Route path="/MedicalOfficialLogin" element={<MedicalLogin/>}/>

                            {/* patient Routes  */}
                            <Route path="/patient/*" element={<PatientRoutes/>}/>
                            {/* doctor Rotes  */}
                            <Route path="/doctor/*" element={<DoctorRoutes/>}/>

                            {/* Signup Section Routes  */}
                            <Route path="/signup/*" element={<SignupRoutes/>}/>

                            {/* Medical Center Staff Routes  */}
                            <Route
                                path="/medicalCenterStaff/*"
                                element={<MedicalCenterStaffRoutes/>}
                            />
                        </Routes>
                    </Router>
                </QueryClientProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
