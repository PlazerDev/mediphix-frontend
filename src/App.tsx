
import LoginOtp from './components/login/patient/LoginOtp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MedicalLogin from './components/login/medical-center/MedicalLogin'
import PatientHome from './components/patient/home/PatientHome'

import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PreviousAppointments from './components/patient/appointment/PreviousAppointments'
import LoginAuth from './components/login/LoginAuth'
import RecordBook from './components/patient/recordbook/RecordBook'
import PatientNavigation from './components/patient/navigation/PatientNavigation'
import PreviousAppointmentDetails from './components/patient/appointment/PreviousAppointmentDetails'

import UpComingAppointment from './components/patient/appointment/UpComingAppointment'
import AppointmentTableDetails from './components/patient/appointment/AppointmentTableDetails'
import SelectDoctor from './components/patient/appointment/SelectDoctor'
import MedicalCenterCard from './components/patient/appointment/MedicalCenterCard'
import SignupBg from './components/signup/SignupBg'
import SignupLanding from './components/signup/SignupLanding'
import SelectCheckbox from './components/signup/SelectCheckbox'









function App() {

  return (


    <div>
      <Router>

        {/* <PatientNavigation/> */}

        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/' element={<Navpage step={1} titlename={'Mobile'} />} /> */}
          <Route path='/Login' element={<LoginAuth />} />
          <Route path='/LoginOTP' element={<LoginOtp />} />

          <Route path='/MedicalOfficialLogin' element={<MedicalLogin />} />
          <Route path='/patient/appointment' element={<AppointmentSection />} />
          <Route path='/patient/home' element={<PatientHome />} />
          <Route path='/PreviousAppoinments' element={<PreviousAppointments />} />
          <Route path='/patient/recordbook' element={<RecordBook />} />
          <Route path='/patient/PreviousAppointmentDetails' element={<PreviousAppointmentDetails />} />
          <Route path='/UpComingAppointment' element={<UpComingAppointment />} />
          <Route path='/AppointmentTableDetails' element={<AppointmentTableDetails />} />
          <Route path='/SearchDoctor' element={<SelectDoctor />} />
          <Route path='/patient/appoinment/medicalcentercard' element={<MedicalCenterCard />} />

          <Route path='/signup' element={<SignupLanding />} />
          <Route path='/signup/patient' element={<SignupBg titlename='Mobile Number' stepnumber={1} role={"patient"}/>} />
          <Route path='/signup/doctor' element={<SignupBg titlename='Email & Documets' stepnumber={1} role={"doctor"}/>} />
          <Route path='/signup/patient' element={<SignupBg titlename='Mobile Number' stepnumber={1} role={"patient"}/>} />
          <Route path='/signup/medicalcenter' element={<SignupBg titlename='Email & Documets' stepnumber={1} role={"medicalcenter"}/>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
