import PatientNavigation from "../navigation/PatientNavigation";
import { Breadcrumb } from "antd";
const { RangePicker } = DatePicker;
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Select } from "antd";
import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg";
import { Pagination } from "antd";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const SelectDoctor = () => {
  return (
    <div>
      <PatientNavigation />
      <div>
        <p className="text-xl font-bold ml-[1%] mt-[1%]">
          Create an Appointment
        </p>
      </div>
      <div>
        <Breadcrumb
          className="ml-[1%]"
          items={[
            {
              title: "Appointments",
            },
            {
              title: <a href="">Create an appointment</a>,
            },
          ]}
        />
      </div>

      <div className="flex ml-[1%] mt-[1%]">
        <select className="border-gray-300 rounded-l-lg w-[20%]">
          <option value="option1">Doctor Name</option>
          <option value="option1">Medical Center Name</option>
        </select>
        <input
          type="text"
          placeholder="Enter Doctor Name Here"
          className="focus:outline-none placeholder:text-[var(--text-c)] w-[69%] rounded-none"
        />
        <button className="bg-[#FF7300] text-white rounded-r-lg ml-[0.1%] w-[10%] h-[40px] pl-[1%]">
          Search
        </button>
      </div>

      <div className="flex ml-[1%] mt-[1%] mb-[1%] mr-[1%]]">
        <Space direction="vertical" size={15}>
          <RangePicker style={{ height: "50px" }} />
        </Space>

        <TimePicker.RangePicker
          style={{ marginLeft: "20px", width: "300px" }}
        />

        <div style={{ marginLeft: "20px" }}></div>

        <Select
          showSearch
          placeholder="Appointment Category"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ height: "50px", width: "300px" }}
          options={[]}
        />
        <div style={{ marginLeft: "20px" }}></div>
        <Select
          showSearch
          placeholder="Location"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ height: "50px", width: "300px" }}
          options={[]}
        />
      </div>

      <div className="bg-[#ffffff] rounded-[16px]  p-4 ml-[1%] mr-[1%]">
        <div className="flex">
          <div className="flex ml-8 mr-8">
            <img
              className="w-20 h-20 rounded-full bg-contain"
              src={profilepic}
              alt="Profile Pic"
            />
          </div>
          <div>
            {/* <div className='flex-row'>

    <p className="text-[#868686] text-sm">Name</p>
    <p className="mb-1">Dr. Nishantha Perera</p>
   </div> */}

            <div className="flex gap-4 mb-1">
              <div>
                <p className="text-[#868686] text-sm">Name</p>
                <p>Dr. Nishantha Perera</p>
              </div>
              <div className="flex flex-col ml-10 ">
                <p className="text-[#868686] text-sm">Education</p>
                <p>MBBS (COL) specialized in cardiology</p>
              </div>
            </div>

            <div className="flex gap-4 mb-1">
              <div>
                <p className="text-[#868686] text-sm">
                  Supported Appointment Categories
                </p>
                <p>OPD, Heart Health</p>
              </div>
              <div className="flex flex-col ml-10 "></div>
            </div>
            <div>
              <p className="text-[#868686] text-sm">Available At</p>
              <p className="mb-1">
                Nawaloka Hospital, Asiri Medical Hospital, Durdans Hospital,
                Lanka Hospitals, Colombo South Teaching Hospital
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 ml-[1%] flex justify-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};

export default SelectDoctor;
