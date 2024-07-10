import PatientNavigation from "../navigation/PatientNavigation";
import RecordBookListTable from "./RecordBookListTable";
import Footer from "../../Footer";
// import { useEffect, useState } from "react";
import { DatePicker, Space, Breadcrumb, Select } from "antd";
const { RangePicker } = DatePicker;
import "./RecordBookList.css";

// interface Doctor {
//   id: string;
//   name: string;
// }

interface DataType {
  key: string;
  date: Date;
  stime: string;
  endtime: string;
  category: string;
  doctor: string;
  mcenter: string;
  lbstatus: string;
}

const data: DataType[] = [
  {
    key: "1",
    date: new Date("2023-07-01"),
    stime: "09:00",
    endtime: "10:00",
    category: "General Checkup",
    doctor: "Dr. Smith",
    mcenter: "Health Center A",
    lbstatus: "received",
  },
  {
    key: "2",
    date: new Date("2023-07-02"),
    stime: "10:00",
    endtime: "11:00",
    category: "Dental",
    doctor: "Dr. Brown",
    mcenter: "Health Center B",
    lbstatus: "pending",
  },
  {
    key: "3",
    date: new Date("2023-07-03"),
    stime: "11:00",
    endtime: "12:00",
    category: "Cardiology",
    doctor: "Dr. Green",
    mcenter: "Health Center C",
    lbstatus: "N/A",
  },
];

const RecordBookList = () => {
  // const [data, setData] = useState([]);
  // const [doctors, setDoctors] = useState<Doctor[]>([]);
  // const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  // const [searchTerm, setSearchTerm] = useState<string>("");

  // useEffect(() => {
  //   //table data
  //   fetch("")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  //   //doctor names
  //   fetch("")
  //     .then((response) => response.json())
  //     .then((doctors: Doctor[]) => setDoctors(doctors))
  //     .catch((error) => console.error("Error fetching doctor names:", error));
  // }, []);

  // const handleDoctorChange = (value: string) => {
  //   const selectedDoctor = doctors.find((doctor) => doctor.name === value);
  //   setSelectedDoctorId(selectedDoctor ? selectedDoctor.id : null);
  // };

  // const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  // const handleSearch = () => {
  //   let doctorId = selectedDoctorId;

  //   if (!doctorId && searchTerm) {
  //     const searchedDoctor = doctors.find(
  //       (doctor) => doctor.name.toLowerCase() === searchTerm.toLowerCase()
  //     );
  //     doctorId = searchedDoctor ? searchedDoctor.id : null;
  //   }

  //   if (doctorId) {
  //     fetch("")
  //       .then((response) => response.json())
  //       .then((data) => setData(data))
  //       .catch((error) =>
  //         console.error("Error fetching search results:", error)
  //       );
  //   } else {
  //     console.error("Please select a doctor.");
  //   }
  // };

  // const doctorOptions = doctors.map((doctor) => ({
  //   value: doctor.name,
  //   label: doctor.name,
  // }));

  return (
    <>
      <PatientNavigation />

      <div className="m-6">
        <p className="text-xl font-bold">Record Book</p>
        <Breadcrumb
          className="mb-4"
          items={[
            {
              title: "Record Book",
            },
          ]}
        />

        <div className="flex mb-6">
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

        <div>
          <RecordBookListTable data={data} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RecordBookList;
