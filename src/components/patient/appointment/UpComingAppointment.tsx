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
import { DatePicker, Space } from 'antd';
import { Breadcrumb } from 'antd';
const { RangePicker } = DatePicker;
import { Table } from "antd";
const dataSource = [
  {
    key: '1',
    date: '2024-06-28',
    timeSlot: '10:00 - 10:30',
    refNumber: 'REF12345',
    doctor: 'Dr. Smith',
    medicalCenter: 'City Hospital',
    category: 'General',
    queueNumber: '5',
  },
  {
    key: '2',
    date: '2024-06-29',
    timeSlot: '11:00 - 11:30',
    refNumber: 'REF12346',
    doctor: 'Dr. John',
    medicalCenter: 'Central Clinic',
    category: 'Pediatric',
    queueNumber: '10',
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time Slot',
    dataIndex: 'timeSlot',
    key: 'timeSlot',
  },
  {
    title: 'Ref Number',
    dataIndex: 'refNumber',
    key: 'refNumber',
  },
  {
    title: 'Doctor',
    dataIndex: 'doctor',
    key: 'doctor',
  },
  {
    title: 'Medical Center',
    dataIndex: 'medicalCenter',
    key: 'medicalCenter',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Queue Number',
    dataIndex: 'queueNumber',
    key: 'queueNumber',
  },
];


const UpComingAppointment = () => {
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

           <div>
             <p className='text-xl font-bold ml-[-65%] mt-10'>Upcoming Appointments</p>
           </div>

          <div>
          <Breadcrumb className='ml-[-65%]'
    items={[
      {
        title: 'Appointments',
      },
      {
        title: <a href="">Upcoming Appointments</a>,
      },
      
      
    ]}
  />
         </div>

        <div className='flex ml-[-65%] mt-5'>
        <Space direction="vertical" size={15}>
        <RangePicker />
        </Space>
        
        <select className='border-2 border-gray-300 rounded-lg ml-[5%] '>
        <option value="option1">Doctor Name</option>
        </select>
        <input type="text" placeholder='Type Here' className='rounded-lg focus:outline-none placeholder:text-[var(--text-c)] ml-[0.1%] w-[40%] pl-5 ' />
        <button className='bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[40px] pl-10 ml-4 pl-[0.5%]'>Search</button> 
        </div>
       
       
       <div className='ml-[-67%] pt-7'>
       <Table dataSource={dataSource} columns={columns} />
       </div>

      
      
    

        </div>
        </div>
    </div>
  )
}

export default UpComingAppointment
