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
} from "@ant-design/icons";9
import { Button } from "antd";
import "./PreviousAppointments.css";
import { DatePicker, Space } from 'antd';
import { Breadcrumb } from 'antd';


const { RangePicker } = DatePicker;



const PreviousAppointments = () => {
  return (
    
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

           <div>
             <p className='text-xl font-bold ml-[-150%] mt-10'>Previous Appointment</p>
           </div>

          <div>
          <Breadcrumb className='ml-[-150%]'
    items={[
      {
        title: 'Appointments',
      },
      {
        title: <a href="">Previous Appointments</a>,
      },
      
      
    ]}
  />
         </div>

        <div className='flex ml-[-150%] mt-5'>
        <Space direction="vertical" size={15}>
        <RangePicker />
        </Space>
        
       <input type="text"  className='border-2 border-gray-300 rounded-lg ml-[10%] '/>


       
    
        </div>
       
    

        </div>
        </div>

        
  )
}

export default PreviousAppointments
