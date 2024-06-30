import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
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
          <div className="ml-4">
            <p className="text-[#868686]">Reference Number</p>
            <p>REF_1653</p>
            <p className="text-[#868686]">Queue Number</p>
            <p>07</p>
          </div>
          <div>
            <p className="text-[#868686]">Date</p>
            <p>2024/June/13</p>
            <p className="text-[#868686]">Status</p>
            <p className="text-[#FF7300]">Ended</p>
            <div className="flex bg-[#FF7300] rounded-[8px] align-middle p-2 text-[#FFFFFF] w-fit ">
                {" "}
                <MdOutlineRemoveRedEye className="text-lg mr-1" />
                <p className="text-sm ">View Record Book Entry</p>
              </div>
          </div>
          <div>
            <p className="text-[#868686]">Time Slot</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
        </div>
        <div>
        <hr className="my-4" />
        <h3 className="text-lg mb-3 font-semibold">Payment Details</h3>
        <div className="flex w-full ">
          <div className="w-96 mr-60">
            <p className="text-[#868686]">Payment Date</p>
            <p>2024/June/15</p>
          </div>
          <div>
            <p className="text-[#868686]">Payment Time</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
          </div>
        </div>

        <div>
        <hr className="my-4" />
        <h3 className="text-lg mb-3 font-semibold">Medical Center Details</h3>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-[#868686]">Medical Center Name</p>
            <p className="text-[#FF7300]">Aloka Medical Center</p>
          </div>
          <div>
            <p className="text-[#868686]">Contact Number</p>
            <p>011-4600600</p>
          </div>
          <div>
            <p className="text-[#868686]">Location</p>
            <p>No: 10/A, Queens Rd, Colombo 7</p>
          </div>
          </div>
        </div>

        <div>
        <hr className="my-4" />
        <h3 className="text-lg mb-3 font-semibold">Doctor Details</h3>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-[#868686]">Doctor's Name</p>
            <p className="text-[#FF7300]">Dr. C.M.K Jayawardanar</p>
          </div>
          <div>
            <p className="text-[#868686]">Category</p>
            <p>OPD Doctor</p>
          </div>
          </div>
        </div>

        <div>
        <hr className="my-4" />
        <h3 className="text-lg mb-3 font-semibold">Session Details</h3>
        <div className="flex w-full justify-between">
          <div>
            <p className="text-[#868686]">Started date & time</p>
            <p className="text-[#FF7300]">2024/June/15 - 03.42 PM</p>
          </div>
          <div>
            <p className="text-[#868686]">End date & time</p>
            <p>2024/June/15 - 03.51 PM</p>
          </div>
          <div>
            <p className="text-[#868686]">Session Duration</p>
            <p>09 Minutes</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousAppointmentDetails;
