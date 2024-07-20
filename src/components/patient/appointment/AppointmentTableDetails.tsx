import { Table } from "antd";
import "../../../assets/css/table.css";

interface Appointment {
  key: string;
  date: string;
  timeSlot: string;
  refNumber: string;
  doctor: string;
  medicalCenter: string;
  category: string;
  queueNumber: string;
}

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Time Slot",
    dataIndex: "timeSlot",
    key: "timeSlot",
  },
  {
    title: "Ref Number",
    dataIndex: "refNumber",
    key: "refNumber",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Medical Center",
    dataIndex: "medicalCenter",
    key: "medicalCenter",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "Queue Number",
    dataIndex: "queueNumber",
    key: "queueNumber",
  },
];

const AppointmentTableDetails = ({
  dataSource,
}: {
  dataSource: Appointment[];
}) => {


  return (
    <div className="ml-[1%] mr-[1%] pt-7">
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          className: "custom-pagination", // Apply custom pagination styles
        }}
      />
    </div>
  );
};

export default AppointmentTableDetails;
