

import InTheQueue from "./components/patient/home/InTheQueue";

import { AiFillAudio } from "react-icons/ai";
import { Button, message } from "antd";
import AppointmentCard from "./components/patient/home/AppointmentCard";
import ProfileOverview from "./components/patient/home/ProfileOverview";
import UpcomingAppointment from "./components/patient/home/UpcomingAppointment ";
import RightSection from "./components/patient/home/RightSection";
import LeftSection from "./components/patient/home/LeftSection";



function App() {
  return (
    <>

     

      <div className="flex h-screen bg-[#E3E3E3]">
        
        <LeftSection />
        <RightSection />
      </div>


    </>
  );
}

export default App;
