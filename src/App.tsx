

import Login from './components/login/patient/Login'
import LoginOtp from './components/login/patient/LoginOtp'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import MedicalLogin from './components/login/medical-center/MedicalLogin'

import PatientNavigation from "./components/patient/navigation/PatientNavigation"
import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PatientHome from './components/patient/home/PatientHome'

import PatientAppointmentTable from './components/login/patient/PatientAppointmentTable'
import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PreviousAppointments from './components/patient/appointment/PreviousAppointments'


function App() {
  return (
    <div>
        <Router>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/LoginOTP' element={  <LoginOtp/>}/>

          
            <Route path='/PatientAppointmentTable' element={  <PatientAppointmentTable/>}/>

            <Route path='/MedicalOfficialLogin' element={  <MedicalLogin/>}/> 
            <Route path='/home' element={  <PatientNavigation/>}/>
            <Route path='/appoinments' element={  <AppointmentSection/>}/>

            <Route path='/patienthome' element={  <PatientHome/>}/>

            <Route path='/previousappoinments' element={  <PreviousAppointments/>}/>


           

      
          </Routes>

        </Router>

    </div>
  )

}


export default App
