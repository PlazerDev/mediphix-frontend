import { useLocation, useNavigate } from "react-router-dom";
import { DatePicker, Space, Breadcrumb, Select, Table } from "antd";
const { RangePicker } = DatePicker;
import "../../../assets/css/table.css";

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
  const navigate = useNavigate();
  const { title, appointments } = location.state;

  return (
    <div>
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

      {/* <div className="flex ml-[1%] mb-[1%] mt-[1%]">
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
      </div> */}

      <div className="flex m-4">
        <div>
          <Space direction="vertical" size={15} className="custom-rangepicker">
            <RangePicker style={{ height: "50px" }} />
          </Space>
        </div>
        <div className="flex ml-8 w-full">
          <Select
            showSearch
            placeholder="Doctor Name"
            optionFilterProp="label"
            // onChange={handleDoctorChange}
            onSearch={(value: string) => console.log("search:", value)}
            // options={doctorOptions}
            style={{ width: "224px", height: "50px" }}
            className="custom-select"
          />
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Type Here"
              className="focus:outline-none placeholder:text-[var(--text-c)] h-[50px] px-6 w-5/6"
              // value={searchTerm}
              // onChange={handleSearchTermChange}
            />
            <button
              className="bg-[#FF7300] text-white  p-3 w-56 rounded-r-lg"
              // onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[-2%]">
        <div className="ml-[1%] mr-[1%] pt-7">
          {/* <TableComponent dataSource={appointments} columns={columns} /> */}
          <Table
            dataSource={appointments}
            columns={columns}
            pagination={{
              className: "custom-pagination", // Apply custom pagination styles
            }}
            onRow={(record) => ({
              onClick: () =>
                navigate(`/patient/appointments/appointmentdetails`, {
                  state: { appointment: record },
                }),
            })}
            rowClassName={() => 'pointer-cursor'}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;
