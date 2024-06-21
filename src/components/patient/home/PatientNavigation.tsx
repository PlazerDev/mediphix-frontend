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

const PatientNavigation = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img className="w-24 h-24 ml-5" src={logo} alt="logo" />
        </div>
        <div>
          <Segmented<string>
            className="custom-segmented"
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
            onChange={(value) => {
              console.log(value); // string
            }}
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
