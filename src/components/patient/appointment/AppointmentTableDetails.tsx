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

const AppointmentTableDetails = () => {
  return (
    <div className='ml-[1%] mr-[1%] pt-7'>
        <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default AppointmentTableDetails
