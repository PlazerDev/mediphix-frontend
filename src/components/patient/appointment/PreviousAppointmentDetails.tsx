import React from "react";
import Logo from "./../../../assets/images/mediphix.jpg";
import { Segmented } from "antd";
import {
  BookOutlined,
  HomeOutlined,
  BellOutlined,
  CalendarOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { Breadcrumb } from "antd";

const PreviousAppointmentDetails = () => {
  return (
    <div>
      <div className="flex justify-between bg-white h-[85px]">
        <div>
          <img className="w-24 h-24 ml-5" src={Logo} alt="logo" />
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
      <div className="mt-4 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Appointment - REF_1653
        </p>
      </div>
      <div className="mt-1 ml-4 mb-4">
        <Breadcrumb
          items={[
            {
              title: "Appointments",
            },
            {
              title: <a href="">Previous Appointments</a>,
            },
            {
              title: "REF_1653",
            },
          ]}
        />
      </div>
      <div className="ml-4 mr-4 p-8 bg-[#ffffff] rounded-[16px] ">
        <div className="flex w-full justify-between">
          <div>
            <p className="text-[#868686]">Reference Number</p>
            <p>REF_1653</p>
            <p className="text-[#868686]">Queue Number</p>
            <p>07</p>
          </div>
          <div>
            <p>Date</p>
            <p>2024/June/13</p>
            <p>Status</p>
            <p>Ended</p>
          </div>
          <div>
            <p>Time Slot</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex w-full justify-between">
          <div>
            <p className="text-[#868686]">Reference Number</p>
            <p>REF_1653</p>
            <p>Queue Number</p>
            <p>07</p>
          </div>
          <div>
            <p>Date</p>
            <p>2024/June/13</p>
            <p>Status</p>
            <p>Ended</p>
          </div>
          <div>
            <p>Time Slot</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousAppointmentDetails;
