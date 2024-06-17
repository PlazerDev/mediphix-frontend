import { AiFillAudio } from "react-icons/ai";
import { Button, message } from "antd";
import AppointmentCard from "./components/patient/home/AppointmentCard";
import ProfileOverview from "./components/patient/home/ProfileOverview";
import UpcomingAppointment from "./components/patient/home/UpcomingAppointment ";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };
  return (
    <>
      
      <ProfileOverview/>

    </>
  );
}

export default App;
