/* eslint-disable @typescript-eslint/no-unused-vars */

import logo from "../../../assets/images/mediphix.jpg";
import { ConfigProvider, Segmented } from "antd";
import "./PatientNavigation.css";
import {
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import Swal from "sweetalert2";

interface NavigationProps {
  role: string;
  buttonNames: string[];
  buttonImages: React.ReactNode[];
}

const Navigation = ({ role, buttonNames, buttonImages }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSegment, setCurrentSegment] = useState<string | undefined>();

  // Map current location to segment

  const patientSegmentMap: Record<string, string> = {
    "/patient/home": "Home",
    "/patient/appointment": "Appointment",
    "/patient/recordbook": "Record Book",
  };

  const segmentMap = patientSegmentMap;

  const handleSegmentChange = (value: string) => {
    if (role === "patient") {
      switch (value) {
        case "Home":
          setCurrentSegment("Home");
          navigate("/patient/home");
          break;
        case "Appointment":
          setCurrentSegment(
            "Appointment"
          ); /* these routes must be same as actual components routes*/
          navigate("/patient/appointment");
          break;
        case "Record Book":
          setCurrentSegment("Record Book");
          navigate("/patient/recordbook");
          break;
        default:
          navigate("/404");
          break;
      }
    }
  };

  // Set the current segment based on location
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const firstTwoSegments = `/${pathSegments.slice(0, 2).join("/")}`;
  const locationSegment = segmentMap[firstTwoSegments];

  // handle log out
  const { signOut } = useAuthContext();
  function logOutButtonHandler() {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ff7300",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
        Swal.fire({
          text: "You have been successfully logged out",
          icon: "success",
          confirmButtonColor: "#ff7300",
        });
      }
    });
  }

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
      <div className="flex justify-between bg-white h-[85px] ">
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
              {
                label: buttonNames[0],
                value: buttonNames[0],
                icon: buttonImages[0],
              },
              {
                label: buttonNames[1],
                value: buttonNames[1],
                icon: buttonImages[1],
              },
              {
                label: buttonNames[2],
                value: buttonNames[2],
                icon: buttonImages[2],
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
              onClick={() => {
                logOutButtonHandler();
              }}
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

export default Navigation;
