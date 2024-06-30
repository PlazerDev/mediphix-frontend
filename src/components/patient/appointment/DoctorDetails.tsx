import React from "react";
import Footer from "../../Footer";
import PatientNavigation from "../navigation/PatientNavigation";
import doctorImage from "../../../assets/images/patient/appoinment/doctorImage.jpeg";
import bgimage from "../../../assets/images/patient/appoinment/doctordetails.png";
import "./DoctorDetails.css";
import DDNotSelectDate from "./DDNotSelectDate";
import { Calendar, theme } from "antd";
import type { CalendarProps } from "antd";
import type { Dayjs } from "dayjs";

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const DoctorDetails = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: "100%",
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <>
      <PatientNavigation />
      <div></div>
      <div className="bg-[#ffffff] rounded-[16px] m-4 ">
        <div className="flex bg-[#FF7300] w-full h-24 rounded-t-[16px]">
          <div className="w-1/2"></div>
          <div
            className="w-1/2 bgimage bg-none bg-center bg-cover rounded-tr-[16px]"
            style={{ backgroundImage: `url(${bgimage})` }}
          ></div>
        </div>
        <div className="flex gap-x-20 p-10">
          <div className="min-w-max">
            <div className="z-[500]">
              <img
                src={doctorImage}
                className="w-36 h-36 rounded-full object-cover absolute top-[130px] z-2"
              />
            </div>
            <div className="mt-12">
              <h6 className="text-lg font-semibold">Dr. Nishantha Perera</h6>
              <p>MBBS (COL)</p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex gap-x-20">
              <div className="w-fit">
                <h6 className="text-sm text-[#868686]">Specialization</h6>
                <p>Cardiology</p>
              </div>
              <div>
                <h6 className="text-sm text-[#868686]">
                  Supported Appointment Categories
                </h6>
                <p>OPD, Heart Health</p>
              </div>
            </div>
            <div className="text-justify">
              <h6 className="text-sm text-[#868686]">Description</h6>
              <p>
                With over 15 years of experience in cardiology, I am committed
                to providing exceptional care for patients with heart
                conditions. My approach emphasizes preventive cardiology,
                patient education, and personalized treatment plans to ensure
                optimal heart health.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] rounded-[16px] m-4 p-8">
        <h3 className="text-[#363636] font-semibold ml-4">Available At</h3>
      </div>

      <div className="bg-[#ffffff] rounded-[16px] m-4 p-8">
        <h3 className="text-[#363636] font-semibold ml-4">Appointments</h3>
        <div className="m-4">
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
          </div>
          <DDNotSelectDate />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
