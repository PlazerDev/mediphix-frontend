import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "./DetailCard";
import { Breadcrumb } from "antd";
const { RangePicker } = DatePicker;
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Select } from "antd";
import { PatientService } from "../../../services/PatientService";
import TokenService from "../../../services/TokenService";
import { useQuery } from "@tanstack/react-query";

interface Doctor {
  name: string;
  degree: string;
  speciality: string;
  appointmentCategory: string[];
  description: string;
  centers: string[];
}

interface Center {
  name: string;
  address: string;
  appointmentCategory: string[];
  noOfDoctors: number;
  description: string;
  phoneNo: string;
}

const onChange = (value: string) => {
  console.log("selected ${value}");
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

const CreateAppointment = () => {
  const [detailType, setDetailType] = useState("doctor");
  const navigate = useNavigate();

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  // Fetch doctor data 
  const { data: doctorList} = useQuery({
    queryKey: ["doctors", backendURL, config],
    queryFn: () => PatientService.getDoctorData(backendURL, config),
    staleTime: 200000,
  });

  // Fetch center data
  const { data: centerList} = useQuery({
    queryKey: ["centers", backendURL, config],
    queryFn: () => PatientService.getCenterData(backendURL, config),
    staleTime: 200000,
  });

  const handleItemClick = (list: Doctor | Center) => {
    navigate("/patient/appointment/createappoinmnets/details", {
      state: { detailType, list },
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDetailType(e.target.value);
  };

  const detailsList = detailType === "doctor" ? doctorList || []: centerList || [];

  return (
    <>
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

      <div className="flex m-4 ">
        <select
          className="border-gray-300 rounded-l-lg w-[25%] mr-1 py-4 px-8"
          onChange={handleSelectChange}
        >
          <option value="doctor">Doctor</option>
          <option value="center">Medical Center</option>
        </select>
        <input
          type="text"
          placeholder="Enter Doctor Name Here"
          className="focus:outline-none placeholder:text-[var(--text-c)] w-[69%] rounded-none pl-8"
        />
        <button className="bg-[#FF7300] text-white rounded-r-lg ml-[0.1%] w-96 pl-[1%] p-4">
          Search
        </button>
      </div>

      <div className="flex justify-between ml-[1%] mt-[1%] mb-[1%] mr-[1%]">
        <Space direction="vertical" size={15}>
          <RangePicker style={{ height: "50px" }} />
        </Space>

        <TimePicker.RangePicker style={{ width: "25%" }} />

        <Select
          showSearch
          placeholder="Appointment Category"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ height: "50px", width: "25%" }}
          options={[]}
        />

        <Select
          showSearch
          placeholder="Location"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ height: "50px", width: "25%" }}
          options={[]}
        />
      </div>
      <div>
        {detailsList.map((list, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => handleItemClick(list)}
          >
            <DetailCard
              detailType={detailType}
              name={list.name}
              topic2Value={
                detailType === "doctor"
                  ? (list as Doctor).degree +
                    " specialized in " +
                    (list as Doctor).speciality
                  : (list as Center).address
              }
              appointmentCategory={list.appointmentCategory}
              topic4Value={
                detailType === "doctor"
                  ? (list as Doctor).centers.join(", ")
                  : (list as Center).noOfDoctors.toString()
              }
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CreateAppointment;
