import LoginOtp from "./components/login/patient/LoginOtp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";

import LoginAuth from "./components/login/LoginAuth";

//removed import PreviousAppointmentDetails from "./components/patient/appointment/PreviousAppointmentDetails";

import SignupRoutes from "./routes/SignupRoutes";

import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import RecordBookList from "./components/patient/recordbook/RecordBookList";
import AppointmentTable from "./components/patient/appointment/AppointmentTable";
//Removed import SelectDoctor from "./components/patient/appointment/SelectDoctor";
//Removed import MedicalCenterCard from "./components/patient/appointment/MedicalCenterCard";
import AppointmentDetails from "./components/patient/appointment/AppointmentDetails";
import UpComingAppointment from "./components/patient/home/UpcomingAppointment ";

import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes";
//import DoctorRoutes from "./routes/DoctorRoutes";
import PatientRoutes from "./routes/PatientRoutes";
import {
  HomeOutlined,
  CalendarOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Navigation
                // currentSegment="Home"
                role="patient"
                buttonNames={["Home", "Appoinmnet", "Record Book"]}
                buttonImages={[
                  <HomeOutlined />,
                  <CalendarOutlined />,
                  <BookOutlined />,
                ]}
              />
            }
          />
          <Route path="/Login" element={<LoginAuth />} />
          <Route path="/LoginOTP" element={<LoginOtp />} />

          <Route path="/MedicalOfficialLogin" element={<MedicalLogin />} />

          {/*
          this component is removed
          <Route
            path="/PreviousAppoinmentsDetails"
            element={<PreviousAppointmentDetails />}
          /> */}

          {/* Commented this out because of props not being passed -- uncomment later */}
          {/* <Route
            path="/patient/home/upcommingappointment"
            element={<UpComingAppointment />}
          /> */}

          {/* this component is removed
          
          <Route path="/SearchDoctor" element={<SelectDoctor />} /> */}

          {/* patient Routes  */}
          <Route path="/patient/*" element={<PatientRoutes />} />
          {/* doctor Rotes  */}
          {/* <Route
            path="/doctor/*"
            element={<DoctorRoutes />}
          /> */}

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

export default App;
