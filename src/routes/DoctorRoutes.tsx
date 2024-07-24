import PatientNavigation from "../components/patient/navigation/PatientNavigation"
import {
    HomeOutlined,
    AppstoreOutlined,
    HeartOutlined,
  } from "@ant-design/icons";


function DoctorRoutes() {
  return (
    <div>
      <PatientNavigation
          role="doctor"
          buttonNames={["Home", "Sessions", "Medical Centers"]}
          buttonImages={[<HomeOutlined />, <AppstoreOutlined />, <HeartOutlined />]} />

        
    </div>
  )
}

export default DoctorRoutes
