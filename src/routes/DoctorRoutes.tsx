
import Navigation from "../components/patient/navigation/Navigation.tsx";
import {
    HomeOutlined,
    AppstoreOutlined,
    HeartOutlined,
  } from "@ant-design/icons";


function DoctorRoutes() {
  return (
    <div>
      <Navigation
          role="doctor"
          buttonNames={["Home", "Sessions", "Medical Centers"]}
          buttonImages={[<HomeOutlined />, <AppstoreOutlined />, <HeartOutlined />]} />

        
    </div>
  )
}

export default DoctorRoutes
