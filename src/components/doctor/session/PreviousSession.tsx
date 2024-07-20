import PatientNavigation from '../../patient/navigation/PatientNavigation'
import { Breadcrumb } from "antd";
const { RangePicker } = DatePicker;
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Select } from "antd";
import PreviousSessionTableDetails from './PreviousSessionTableDetails';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};


const PreviousSession = () => {
  return (
    <div>
        <div>
            <PatientNavigation />
        </div>
        <div>
        <p className="text-xl font-bold ml-[1%] mt-[1%]">
         Previous Sessions
        </p>
        </div>
      <div>
        <Breadcrumb
          className="ml-[1%]"
          items={[
            {
              title: "Sessions",
            },
            {
              title: <a href="">Previous Sessions</a>,
            },
          ]}
        />
      </div>
      <div className='ml-3'>
  <input
    type="text"
    placeholder="Enter medical center name here"
    className="focus:outline-none placeholder:text-[var(--text-c)] w-[89%] rounded-l-xl h-[40px] pl-2 mt-2"
  />
  <button className="bg-[#FF7300] text-white rounded-r-xl w-[10%] h-[40px] mt-2">
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
          placeholder="Diagnosis Category"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ height: "50px", width: "300px" }}
          options={[]}
        />
      </div>
      <div style={{ marginLeft: '16px', marginRight:'16px' }}>
      <PreviousSessionTableDetails data={[]} onRowClick={() => {}} />
      </div>


  
  <div>




















  </div>
  </div>

  )
}

export default PreviousSession
