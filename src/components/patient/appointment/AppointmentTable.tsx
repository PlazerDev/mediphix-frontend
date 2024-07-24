import { useLocation } from "react-router-dom";
import { DatePicker, Space, Breadcrumb } from "antd";
import PatientNavigation from "../navigation/PatientNavigation";
const { RangePicker } = DatePicker;
import TableComponent from "../../TableComponent";

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

const AppointmentTable = () => {
  const location = useLocation();
  const { title, appointments } = location.state;

  return (
    <div>
      <div>
        <PatientNavigation />
      </div>

      <div>
        <p className="text-xl font-bold ml-[1%] mt-[1%]">{title}</p>
      </div>

      <div>
        <Breadcrumb
          className="ml-[1%]"
          items={[
            {
              title: "Appointments",
            },
            {
              title: <a href="">{title}</a>,
            },
          ]}
        />
      </div>

      <div className="flex ml-[1%] mb-[1%] mt-[1%]">
        <Space direction="vertical" size={15}>
          <RangePicker style={{ height: "50px" }} />
        </Space>

        <select className="border-2 border-gray-300 rounded-lg ml-[1%] ">
          <option value="option1">Doctor Name</option>
        </select>
        <input
          type="text"
          placeholder="Type Here"
          className="rounded-lg focus:outline-none placeholder:text-[var(--text-c)] ml-[0.1%] w-[55%] pl-5 "
        />
        <button className="bg-[#FF7300] text-white rounded-lg ml-[0.1%] w-[10%] h-[50px] pl-[0.5%]">
          Search
        </button>
      </div>

      <div className="mt-[-2%]">
        <div className="ml-[1%] mr-[1%] pt-7">
          <TableComponent dataSource={appointments} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
