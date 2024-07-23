import LoginOtp from "./components/login/patient/LoginOtp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";
import PatientHome from "./components/patient/home/PatientHome";

import AppointmentSection from "./components/patient/appointment/AppointmentSection";
import LoginAuth from "./components/login/LoginAuth";

import PatientNavigation from "./components/patient/navigation/PatientNavigation";

import SignupRoutes from "./routes/SignupRoutes";

import MedicalCenterDetailsCard from "./components/patient/appointment/MedicalCenterDetailsCard";
import AppointmentSuccessful from "./components/patient/appointment/AppointmentSuccessful";
import BookingFailed from "./components/patient/appointment/BookingFailed";

import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import RecordBookList from "./components/patient/recordbook/RecordBookList";
import AppointmentTable from "./components/patient/appointment/AppointmentTable";
import SelectDoctor from "./components/patient/appointment/SelectDoctor";
import MedicalCenterCard from "./components/patient/appointment/MedicalCenterCard";
import AppointmentDetails from "./components/patient/appointment/AppointmentDetails";
import DoctorDetails from "./components/patient/appointment/DoctorDetails";
import CreateAppointment from "./components/patient/appointment/CreateAppointment";
import DetailsBeforeAppointment from "./components/patient/appointment/DetailsBeforeAppointment";

import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        {/* <PatientNavigation/> */}

        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path='/' element={<Navpage step={1} titlename={'Mobile'} />} /> */}
          <Route path="/Login" element={<LoginAuth />} />
          <Route path="/LoginOTP" element={<LoginOtp />} />

          <Route path="/MedicalOfficialLogin" element={<MedicalLogin />} />
          <Route
            path="/patient/appointment"
            element={
              <AppointmentSection
                name={"Visal"}
                title={"Manage your appointments here"}
                buttontitles={[
                  "Upcomming Appointments",
                  "Create an Appointment",
                  "Previous Appointments",
                ]}
                buttonimages={[
                  FaRegAddressBook,
                  MdOutlineCreateNewFolder,
                  FaRegAddressBook,
                ]}
                navigations={[
                  "/patient/appointment/UpComingAppointment",
                  "/patient/appointment/CreateAppoinmnets",
                  "/patient/appointment/PreviousAppoinments",
                ]}
              />
            }
          />

          {/* Removed components in patient appointment section
          UpcommingAppointment
          PreviousAppointments
          SelectDoctor
          MedicalCenterCard
          MedicalCenterDetailsCard
          DDNotselectDate
           */}

          <Route path="/patienthome" element={<PatientHome />} />

          <Route
            path="/patient/appoinmentdetails"
            element={<AppointmentDetails />}
          />
          <Route
            path="/patient/appoinment/detailsbeforeappointment"
            element={<DetailsBeforeAppointment />}
          />
          <Route path="/patient/recordbooklist" element={<RecordBookList />} />
          {/* UpcomingAppointment component removed */}

          <Route
            path="/patient/appointment/PreviousAppoinments"
            element={<AppointmentTable />}
          />
          <Route
            path="/patient/appointment/UpComingAppointment"
            element={<AppointmentTable />}
          />
          <Route
            path="/patient/appointment/CreateAppoinmnets"
            element={<CreateAppointment />}
          />
          

          {/* Removed 
          <Route path="/SearchDoctor" element={<SelectDoctor />} />
          <Route path="/medicalcentercard" element={<MedicalCenterCard />} />
          <Route
            path="/patient/appoinment/medicalcentercard"
            element={<MedicalCenterCard />}
          />
          <Route
            path="/patient/appoinment/medicalcenterdetailscard"
            element={<MedicalCenterDetailsCard />}
          /> */}
          <Route
            path="/patient/appoinment/appointmentsuccessful"
            element={<AppointmentSuccessful />}
          />
          <Route
            path="/patient/appoinment/bookingfailed"
            element={<BookingFailed />}
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

export default App;
