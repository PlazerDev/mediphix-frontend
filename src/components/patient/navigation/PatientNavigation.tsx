// import AppointmentCard from "../home/AppointmentCard";
// import PatientHome from "../home/PatientHome";
// import AppointmentSection from "../appointment/AppointmentSection";

import logo from "./../../../assets/images/patient/home/medifix_logo_patient.png";
import { Segmented } from "antd";
import "./PatientNavigation.css";

import {
  BookOutlined,
  HomeOutlined, 
  BellOutlined,
  CalendarOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const PatientNavigation = () => {


  const navigate = useNavigate();
  const location = useLocation();

  // Map current location to segment
  const segmentMap: Record<string, string> = {
    '/patient/home': 'Home',
    '/patient/appointment': 'Appointment',
    '/recordbook': 'Record Book',
  };

  const handleSegmentChange = (value: string) => {
    switch (value) {
      case 'Home':
        navigate('/patient/home');
        break;
      case 'Appointment':
        navigate('/patient/appointment');
        break;
      case 'Record Book':
        navigate('/recordbook');
        break;
      default:
        navigate('/patient/home');
        break;
    }
  };

  // Set the current segment based on location
  const currentSegment = segmentMap[location.pathname] || 'Home';


  

  return (
    <>
      <div className="flex justify-between bg-white h-[85px]">
        <div>
          <img className="w-24 h-24 ml-5" src={logo} alt="logo" />
        </div>
        <div>
          <Segmented<string>
            value={currentSegment}
            defaultValue="Home"
            className="custom-segmented"
            
            onChange={handleSegmentChange}
            options={[
              { label: "Home", value: "Home", icon: <HomeOutlined /> },
              {
                label: "Appointment",
                value: "Appointment",
                icon: <CalendarOutlined />,
              },
              {
                label: "Record Book",
                value: "Record Book",
                icon: <BookOutlined />,
              },
            ]}
          />
        </div>
        <div>
          <div className="flex  m-5  bg-[#E3E3E3] rounded-full">
            <Button
              className="custom-button"
              type="default"
              size="large"
              shape="circle"
              icon={<BellOutlined style={{ color: "#FF7300" }} />}
            />

            <Button
              className="custom-button"
              type="default"
              size="large"
              shape="circle"
              icon={<SettingOutlined style={{ color: "#FF7300" }} />}
            />

            <Button
              className="custom-button"
              type="default"
              size="large"
              shape="circle"
              icon={<LogoutOutlined style={{ color: "#FF7300" }} />}
            />
          </div>
        </div>
      </div>

    </>
  );
};


export default PatientNavigation;
