

import LoginOtp from './components/login/patient/LoginOtp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MedicalLogin from './components/login/medical-center/MedicalLogin'

import PatientHome from './components/patient/home/PatientHome'

import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PreviousAppointments from './components/patient/appointment/PreviousAppointments'
import LoginAuth from './components/login/LoginAuth'
import PatientNavigation from './components/patient/navigation/PatientNavigation'
import { useState } from 'react'
import RecordBook from './components/patient/recordbook/RecordBook'
import UpComingAppointment from './components/patient/appointment/UpComingAppointment'


function App() {
 
  return (


    <div>
      <Router>

      /<PatientNavigation/> 

        <Routes>
         
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<LoginAuth />} />
              <Route path='/LoginOTP' element={<LoginOtp />} />
              <Route path='/MedicalOfficialLogin' element={<MedicalLogin />} />
              <Route path='/patient/appointment' element={<AppointmentSection />} />
              <Route path='/patient/home' element={<PatientHome />} />
              <Route path='/PreviousAppoinments' element={<PreviousAppointments />} />
              <Route path='/patient/recordbook' element={<RecordBook />} />
              <Route path='/UpComingAppointments' element={<UpComingAppointment/>} />
      


        </Routes>
      </Router>

    </div>
  );
}

export default App;