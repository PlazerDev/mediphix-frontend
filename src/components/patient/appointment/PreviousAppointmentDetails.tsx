import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Logo from "./../../../assets/images/mediphix.jpg";
import { Segmented } from "antd";
import Footer from "./../../Footer";
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
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Appointment - REF_1653
        </p>
      </div>
      <div className="mt-1 ml-4 mb-2">
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
      <div className="ml-4 p-8 bg-[#ffffff] rounded-[16px] ">
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Reference Number</p>
            <p>REF_1653</p>
            <p className="text-[#868686] text-sm">Queue Number</p>
            <p>07</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Date</p>
            <p>2024/June/13</p>
            <div className="flex">
              <div className="flex-col mr-4">
                <p className="text-[#868686] text-sm">Status</p>
                <p className="text-[#FF7300]">Ended</p>
              </div>
              <div className="flex bg-[#FF7300] rounded-[8px] align-middle px-4 py-2 text-[#FFFFFF] w-fit ">
                <div className="flex my-1">
                  <MdOutlineRemoveRedEye className="text-lg mr-1" />
                  <p className="text-sm ">View Record Book Entry</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Time Slot</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
        </div>
        <hr className="my-4" />

        <h3 className="text-base mb-2 font-semibold">Payment Details</h3>
        <div className=" w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Payment Date</p>
            <p>2024/June/15</p>
          </div>
          <div className="col-span-2">
            <p className="text-[#868686] text-sm">Payment Time</p>
            <p>03.00 PM - 04.00 PM</p>
          </div>
        </div>

        <hr className="my-4" />
        <h3 className="text-base mb-2 font-semibold">Medical Center Details</h3>
        <div className="w-full grid grid-cols-3 gap-4n">
          <div>
            <p className="text-[#868686] text-sm">Medical Center Name</p>
            <p className="text-[#FF7300] underline">Aloka Medical Center</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Contact Number</p>
            <p>011-4600600</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Location</p>
            <p>No: 10/A, Queens Rd, Colombo 7</p>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-base mb-2 font-semibold">Doctor Details</h3>
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Doctor's Name</p>
            <p className="text-[#FF7300] underline">Dr. C.M.K Jayawardana</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Category</p>
            <p>OPD Doctor</p>
          </div>
        </div>

        <hr className="my-4" />
        <h3 className="text-base mb-2 font-semibold">Session Details</h3>
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Started date & time</p>
            <p>2024/June/15 - 03.42 PM</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">End date & time</p>
            <p>2024/June/15 - 03.51 PM</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Session Duration</p>
            <p>09 Minutes</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PreviousAppointmentDetails;
