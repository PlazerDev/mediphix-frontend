/* eslint-disable @typescript-eslint/no-unused-vars */


import logo from "./../assets/images/mediphix.jpg";
import { ConfigProvider, Segmented } from "antd";
import "./patient/navigation/PatientNavigation.css";
import {
  BookOutlined,
  HomeOutlined,
  BellOutlined,
  CalendarOutlined,
  LogoutOutlined,
  SettingOutlined,
  AppstoreOutlined,
  HeartOutlined,
} from "@ant-design/icons";

import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";



interface NavigationProps {
  role: string;
  buttonNames: string[];
  buttonImages: React.ReactNode[];
}


const PatientNavigation = (props: NavigationProps) => {


  const navigate = useNavigate();
  const location = useLocation();
  const [currentSegment, setCurrentSegment] = useState<string | undefined>();

  // Map current location to segment

  const patientSegmentMap: Record<string, string> = {
    '/patient/home': 'Home',
    '/patient/appointment': 'Appointment',
    '/patient/recordbook': 'Record Book',
  };

  const segmentMap = patientSegmentMap;


  const handleSegmentChange = (value: string) => {

    if (props.role === "patient") {
      switch (value) {
        case 'Home':
          setCurrentSegment('Home');
          navigate('/patient/home');
          break;
        case 'Appointment':
          setCurrentSegment('Appointment');           /* these routes must be same as actual components routes*/
          navigate('/patient/appointment');
          break;
        case 'Record Book':
          setCurrentSegment('Record Book');
          navigate('/patient/recordbook');
          break;
        default:
          navigate('/404');
          break;
      }
    }
  };

  // Set the current segment based on location
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const firstTwoSegments = `/${pathSegments.slice(0, 2).join('/')}`;
  const locationSegment = segmentMap[firstTwoSegments];


  return (

    <ConfigProvider
      theme={{
        components: {
          Segmented: {
            /* here is your component tokens */
            
          },
        },
      }}
    >

      <div className="flex justify-between bg-white h-[85px]">
        <div>
          <img className="w-24 h-24 ml-5" src={logo} alt="logo" />
        </div>
        <div>
          <Segmented<string>
            value={locationSegment}
            size="middle"
            className="custom-segmented"
            defaultValue={currentSegment}
            // style={{ width: '300px'}}
            onChange={handleSegmentChange}
            options={[

              { label: props.buttonNames[0], value: props.buttonNames[0], icon: props.buttonImages[0] },
              { label: props.buttonNames[1], value: props.buttonNames[1], icon: props.buttonImages[1] },
              { label: props.buttonNames[2], value: props.buttonNames[2], icon: props.buttonImages[2] },
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

    </ConfigProvider>
  );
};


export default PatientNavigation;
