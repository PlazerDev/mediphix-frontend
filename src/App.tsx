import Login from "./components/login/patient/Login";
import LoginOtp from "./components/login/patient/LoginOtp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";
import PatientAppointmentTable from "./components/login/patient/PatientAppointmentTable";
import AppointmentSection from "./components/patient/appointment/AppointmentSection";
import PreviousAppointments from "./components/patient/appointment/PreviousAppointments";
import PatientNavigation from "./components/patient/navigation/PatientNavigation";
import PreviousAppointmentDetails from "./components/patient/appointment/PreviousAppointmentDetails";
import DoctorDetails from "./components/patient/appointment/DoctorDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/LoginOTP" element={<LoginOtp />} />
          <Route path="/PatientAppointmentTable" element={<PatientAppointmentTable />} />
          <Route path="/MedicalOfficialLogin" element={<MedicalLogin />} />
          <Route path="/home" element={<PatientNavigation />} />
          <Route path="/appoinments" element={<AppointmentSection />} />
          <Route path="/doctordetails" element={<DoctorDetails />} />
          <Route path="/previousappoinments" element={<PreviousAppointments />}/>
          <Route path="/PreviousAppointmentDetails"element={<PreviousAppointmentDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
