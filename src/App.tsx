
import Login from './components/login/patient/Login'
import LoginOtp from './components/login/patient/LoginOtp'
import { BrowserRouter as Router ,Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import MedicalLogin from './components/login/medical-center/MedicalLogin'
import PatientAppointmentTable from './components/login/patient/PatientAppointmentTable'



function App() {
  return (
    <div>
        <Router>
          <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/LoginOTP' element={  <LoginOtp/>}/>
            <Route path='/MedicalOfficialLogin' element={  <MedicalLogin/>}/>
            <Route path='/PatientAppointmentTable' element={  <PatientAppointmentTable/>}/>
          
      
          </Routes>

        </Router>

    </div>
  )

}


export default App
