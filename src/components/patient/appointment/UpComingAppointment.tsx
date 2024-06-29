import React from 'react'
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
          

           <div>
             <p className='text-xl font-bold ml-[1%] mt-[3%]'>Upcoming Appointments</p>
           </div>

          <div>
          <Breadcrumb className='ml-[1%]'
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

        <div className='flex ml-[1%] mt-10'>
        <Space direction="vertical" size={15}>
        <RangePicker />
        </Space>
        
        <select className='border-2 border-gray-300 rounded-lg ml-[1%] '>
        <option value="option1">Doctor Name</option>
        </select>
        <input type="text" placeholder='Type Here' className='rounded-lg focus:outline-none placeholder:text-[var(--text-c)] ml-[0.1%] w-[40%] pl-5 ' />
        <button className='bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[40px] pl-10 ml-4 pl-[0.5%]'>Search</button> 
        </div>
       
       
       <div className='ml-[1%] mr-[1%] pt-7'>
       <Table dataSource={dataSource} columns={columns} />
       </div>

      
      
    

        </div>
      
  )
}

export default UpComingAppointment
