import React from 'react'
import Logo from './../../../assets/images/mediphix.jpg'
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
import "./PatientAppointmentTable.css";
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;



const PatientAppointmentTable = () => {
  return (
    
        <div className="flex justify-between">
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
           
          <div className='flex ml-[-640%] mt-[10%]'>
          <p className='text-2xl font-bold text-left '>Previous Appointments</p>
          </div>
         
        <div className='flex ml-[-640%] mt-[2%]'>
         <p className='text-xl'>Appointments/Previous Appointments</p>
        </div>

        <div className='ml-[-640%] mt-5'>
        <Space direction="vertical" size={15}>
        <RangePicker />
        </Space>
        </div>



        </div>
        </div>

        
  )
}

export default PatientAppointmentTable
