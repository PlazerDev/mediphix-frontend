
import LoginOtp from "./components/login/patient/LoginOtp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MedicalLogin from "./components/login/medical-center/MedicalLogin";
import PatientHome from "./components/patient/home/PatientHome";


import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PreviousAppointments from './components/patient/appointment/PreviousAppointments'
import LoginAuth from './components/login/LoginAuth'
import RecordBook from './components/patient/recordbook/RecordBook'
import PatientNavigation from './components/patient/navigation/PatientNavigation'
import PreviousAppointmentDetails from './components/patient/appointment/PreviousAppointmentDetails'

import SignupBg from './components/signup/SignupBg'
import SignupLanding from './components/signup/SignupLanding'
import SelectCheckbox from './components/signup/SelectCheckbox'

import MedicalCenterDetailsCard from './components/patient/appointment/MedicalCenterDetailsCard'
import AppointmentSuccessful from './components/patient/appointment/AppointmentSuccessful'
import BookingFailed from './components/patient/appointment/BookingFailed'

import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import RecordBookList from "./components/patient/recordbook/RecordBookList";
import AppointmentTable from './components/patient/appointment/AppointmentTable'

function App() {



  return (
    <div>
      <Router>
         

        {/* <PatientNavigation/> */}

        <Routes>

          <Route path='/' element={<SelectCheckbox />} />
          {/* <Route path='/' element={<Navpage step={1} titlename={'Mobile'} />} /> */}
          <Route path='/Login' element={<LoginAuth />} />
          <Route path='/LoginOTP' element={<LoginOtp />} />

          <Route path='/MedicalOfficialLogin' element={<MedicalLogin />} />
          <Route
            path='/patient/appointment'
            element={
              <AppointmentSection
                name={'Visal'}
                title={'Manage your appointments here'}
                buttontitles={['Upcomming Appointments', 'Create an Appointment', 'Previous Appointments']}
                buttonimages={[FaRegAddressBook, MdOutlineCreateNewFolder, FaRegAddressBook]}
                navigations={['/patient/appointment/UpComingAppointment','/patient/appointment/CreateAppoinmnets','/patient/appointment/PreviousAppoinments']}
              />
            }
          />
          <Route path='/PreviousAppoinmentsDetails' element={<PreviousAppointmentDetails/>} />
           <Route path="/patient/recordbooklist" element={<RecordBookList />} />
          <Route path='/patient/appointment/PreviousAppoinments' element={<AppointmentTable/>} />
          <Route path='/patient/appointment/UpComingAppointment' element={<AppointmentTable/>} />
          <Route path='/SearchDoctor' element={<SelectDoctor />} />
          <Route path='/patient/appoinment/medicalcentercard' element={<MedicalCenterCard />} />
          <Route path='/patient/appoinment/medicalcenterdetailscard' element={<MedicalCenterDetailsCard />} />
          <Route path='/patient/appoinment/appointmentsuccessful' element={<AppointmentSuccessful />} />
          <Route path='/patient/appoinment/bookingfailed' element={<BookingFailed/>} />
          <Route path='/signup' element={<SignupLanding />} />
          <Route path="/signup">
            <Route path="medicalofficials" element={<SelectCheckbox />} />
            <Route path="patient" element={<SignupBg titlename="Mobile Number" stepnumber={1} role="patient" />} />
            <Route path="doctor" element={<SignupBg titlename="Email & Documents" stepnumber={1} role="doctor" />} />
            <Route path="medicalcenter" element={<SignupBg titlename="Email & Documents" stepnumber={1} role="medicalcenter" />} />
            <Route path="laboratary" element={<SignupBg titlename="Email & Documents" stepnumber={1} role="lab" />} />
          </Route>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
