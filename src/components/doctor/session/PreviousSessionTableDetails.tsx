import { Table } from "antd";
const dataSource = [
    {
      key: '1',
      date: '2024-06-28',
      timeSlot: '10:00 - 10:30',
      startTime: '03.10 PM',
      aptCategory:'OPD',
      medicalCenter: 'City Hospital',
      diagnosisCategory:'Cardiology',
      labReportStatus: 'N/A',
    },
    {
      key: '2',
      date: '2024-06-29',
      timeSlot: '11:00 - 11:30',
      startTime: '03.10 PM',
      aptCategory:'OPD',
      medicalCenter: 'Central Clinic',
      diagnosisCategory:'Cardiology',
      labReportStatus: 'N/A',
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
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
    },
    {
      title: 'Apt. Category',
      dataIndex: 'aptCategory',
      key: 'aptCategory',
    },
    {
      title: 'Medical Center',
      dataIndex: 'medicalCenter',
      key: 'medicalCenter',
    },
    {
      title: 'Diagnosis Category',
      dataIndex: 'diagnosisCategory',
      key: 'diagnosisCategory',
    },
    {
      title: 'Lab Report Status',
      dataIndex: 'labReportStatus',
      key: 'labReportStatus',
    },
  ];

const PreviousSessionTableDetails = () => {
  return (
    <div>
      <div className='ml-[1%] mr-[1%] pt-7'>
        <Table dataSource={dataSource} columns={columns} />
    </div>

    <div>
  
    </div>























    </div>
  )
}

export default PreviousSessionTableDetails
