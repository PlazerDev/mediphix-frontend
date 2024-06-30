
import LoginOtp from './components/login/patient/LoginOtp'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MedicalLogin from './components/login/medical-center/MedicalLogin'
import PatientHome from './components/patient/home/PatientHome'
<<<<<<< HEAD


=======
>>>>>>> e4c05a76432b2411528245539380571726512ae8
import AppointmentSection from './components/patient/appointment/AppointmentSection'
import PreviousAppointments from './components/patient/appointment/PreviousAppointments'
import LoginAuth from './components/login/LoginAuth'
import RecordBook from './components/patient/recordbook/RecordBook'
<<<<<<< HEAD
import PreviousAppointmentDetails from './components/patient/appointment/PreviousAppointmentDetails'
=======
import UpComingAppointment from './components/patient/appointment/UpComingAppointment'
import AppointmentTableDetails from './components/patient/appointment/AppointmentTableDetails'
import SelectDoctor from './components/patient/appointment/SelectDoctor'
>>>>>>> e4c05a76432b2411528245539380571726512ae8


function App() {
 
  return (


    <div>
      <Router>

   

        <Routes>
         
              <Route path='/' element={<Home />} />
              <Route path='/Login' element={<LoginAuth />} />
              <Route path='/LoginOTP' element={<LoginOtp />} />
<<<<<<< HEAD
          
=======
>>>>>>> e4c05a76432b2411528245539380571726512ae8
              <Route path='/MedicalOfficialLogin' element={<MedicalLogin />} />
              <Route path='/patient/appointment' element={<AppointmentSection />} />
              <Route path='/patient/home' element={<PatientHome />} />
              <Route path='/PreviousAppoinments' element={<PreviousAppointments />} />
              <Route path='/patient/recordbook' element={<RecordBook />} />
<<<<<<< HEAD
              <Route path='/patient/PreviousAppointmentDetails' element={<PreviousAppointmentDetails />} />
      


=======
              <Route path='/UpComingAppointment' element={<UpComingAppointment/>} />
              <Route path='/AppointmentTableDetails' element={<AppointmentTableDetails/>} />
              <Route path='/SearchDoctor' element={<SelectDoctor/>} />
    
>>>>>>> e4c05a76432b2411528245539380571726512ae8
        </Routes>
      </Router>

    </div>
  );
}

export default App;
