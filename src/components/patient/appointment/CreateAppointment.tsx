import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailCard from "./DetailCard";
import { Breadcrumb } from "antd";
const { RangePicker } = DatePicker;
import { DatePicker, Space } from "antd";
import { TimePicker } from "antd";
import { Select } from "antd";

interface Doctor {
  name: string;
  degree: string;
  speciality: string;
  appointmentCategory: string[];
  description: string;
  centers: string[];
  appointmentDates: string[];
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

  const [doctorList, setDoctorList] = useState<Doctor[]>([
    {
      name: "Nishantha Perera",
      degree: "MBBS (COL)",
      speciality: "Cardiology",
      appointmentCategory: ["OPD", "Heart Health"],
      description:
        "With over 15 years of experience in cardiology, I am committed to providing exceptional care for patients with heart conditions. My approach emphasizes preventive cardiology, patient education, and personalized treatment plans to ensure optimal heart health.",
      centers: [
        "Nawaloka Hospital",
        "Asiri Medical Hospital",
        "Durdans Hospital",
        "Lanka Hospitals",
        "Colombo South Teaching Hospital",
        "Helan Hospital",
        "Medihub Hospital",
        "Medihelp Hospitals",
        "NineWhalesHospital",
      ],
      appointmentDates: [
        "2024-07-25",
        "2024-07-30",
        "2024-08-10",
        "2024-08-15",
        "2024-08-18",
        "2024-08-20",
        "2024-08-21",
        "2024-08-25",
        "2024-08-27",
        "2024-08-28",
        "2024-08-30",
      ],
    },
    {
      name: "Nishantha Perera",
      degree: "MBBS (COL)",
      speciality: "Cardiology",
      appointmentCategory: ["OPD", "Heart Health"],
      description:
        "With over 15 years of experience in cardiology, I am committed to providing exceptional care for patients with heart conditions. My approach emphasizes preventive cardiology, patient education, and personalized treatment plans to ensure optimal heart health.",
      centers: [
        "Nawaloka Hospital",
        "Asiri Medical Hospital",
        "Durdans Hospital",
        "Lanka Hospitals",
        "Colombo South Teaching Hospital",
      ],
      appointmentDates: [
        "2024-07-20",
        "2024-07-15",
        "2024-07-30",
        "2024-08-10",
        "2024-08-15",
        "2024-08-20",
      ],
    },
    {
      name: "Nishantha Perera",
      degree: "MBBS (COL)",
      speciality: "Cardiology",
      appointmentCategory: ["OPD", "Heart Health"],
      description:
        "With over 15 years of experience in cardiology, I am committed to providing exceptional care for patients with heart conditions. My approach emphasizes preventive cardiology, patient education, and personalized treatment plans to ensure optimal heart health.",
      centers: [
        "Nawaloka Hospital",
        "Asiri Medical Hospital",
        "Durdans Hospital",
        "Lanka Hospitals",
        "Colombo South Teaching Hospital",
      ],
      appointmentDates: [
        "2024-07-20",
        "2024-07-25",
        "2024-07-30",
        "2024-09-05",
        "2024-09-10",
        "2024-09-15",
      ],
    },
  ]);

  const [centerList, setCenterList] = useState<Center[]>([
    {
      name: "Nawaloka Hospital",
      address: "23 , Deshamanya H K Dharmadasa Mawatha, Colombo 00200",
      appointmentCategory: [
        "OPD",
        "Heart Health",
        "Dental Care",
        "Pediatrics",
        "Gynecology",
        "Mental Health",
        "Gastroenterology",
        "Urology",
        "Ophthalmology ",
        "Neurology",
        "Psychiatry",
        "Cardiology",
        "Dermatologist",
        "ENT",
        "Orthopedics",
        "Radiology",
      ],
      noOfDoctors: 33,
      description:
        "At Navaloka Hospital, we provide top-notch healthcare with a patient-focused approach. Our expert team and advanced facilities ensure the best care for all your medical needs. Trust us for your health and well-being.",
      phoneNo: "011-4564564",
    },
    {
      name: "Asiri Hospital",
      address: "23 , Deshamanya H K Dharmadasa Mawatha, Colombo 00200",
      appointmentCategory: [
        "OPD",
        "Heart Health",
        "Dental Care",
        "Pediatrics",
        "Gynecology",
      ],
      noOfDoctors: 15,
      description:
        "At Asiri Hospital, we provide top-notch healthcare with a patient-focused approach. Our expert team and advanced facilities ensure the best care for all your medical needs. Trust us for your health and well-being.",
      phoneNo: "011-4564564",
    },
  ]);

  const handleItemClick = (list: Doctor | Center) => {
    navigate("/patient/appointment/details", {
      state: { detailType, list },
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDetailType(e.target.value);
  };

  const detailsList = detailType === "doctor" ? doctorList : centerList;

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
          <option value="doctor">Doctor Name</option>
          <option value="center">Medical Center Name</option>
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
