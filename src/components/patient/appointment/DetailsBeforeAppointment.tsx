import Footer from "../../Footer";
import { useLocation } from "react-router-dom";
import DoctorDetails from "./DoctorDetails";
import CenterDetails from "./CenterDetails";
import AppointmentCalendar from "./AppointmentCalendar";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Breadcrumb } from "antd";
import { useState } from "react";

interface Doctor {
  _id: string;
  name: string;
  education: string[];
  specialization?: string[];
  category: string[];
  medical_centers: string[];
  medical_center_names: string[];
  description?: string;
}

interface Center {
  _id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategories: string[];
  noOfDoctors?: number;
  description?: string;
  mobile: string;
}

interface DetailsProps {
  detailType: string;
  list: Doctor | Center;
}

const DetailsBeforeAppointment = () => {
  const location = useLocation();
  const { detailType, list } = location.state as DetailsProps;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // const hardcodedAppointmentDates : Record<string, string[]> = {
  //   "OPD": ["2024-11-30", "2024-12-25", "2024-12-30"],
  //   "Heart Health": ["2024-12-01", "2024-12-05", "2024-12-10"],
  // };

  const fetchAppointmentDates = (category: string) => {
    setSelectedCategory(category);
  };

  const renderCategory = (categories: string[], type: string) =>
    categories.map((category, index) => (
      <div
        key={index}
        className={`flex col-span-1 ${
          type === "center" ? "cursor-pointer" : ""
        }`}
        onClick={
          type === "center" ? () => fetchAppointmentDates(category) : undefined
        }
      >
        <GoDotFill className="text-[10px] mr-2 mt-2" />
        <a className="flex underline w-1/2">{category}</a>
        <IoIosArrowDroprightCircle className="text-lg ml-2 mt-1 text-[#868686]" />
      </div>
    ));

  if (selectedCategory) {
    return (
      <AppointmentCalendar
        detailType={detailType}
        id={(list as Doctor | Center)._id}
        category={selectedCategory}
      />
    );
  }

  return (
    <>
      <div>
        <p className="text-xl font-bold ml-[1%] mt-4">Create an Appointment</p>
      </div>
      <div>
        <Breadcrumb
          className="ml-4"
          items={[
            {
              title: "Appointments",
            },
            {
              title: <a href="">Create an appointment</a>,
            },
            {
              title: <a href="">{list.name}</a>,
            },
          ]}
        />
      </div>

      {detailType === "doctor" ? (
        <DoctorDetails {...(list as Doctor)} />
      ) : (
        <CenterDetails {...(list as Center)} />
      )}

      <div className="bg-[#ffffff] rounded-[16px] m-4 p-8">
        {detailType === "doctor" ? (
          <>
            <h3 className="text-[#363636] font-semibold ml-4 mb-4">
              Available at
            </h3>
            <div className="grid grid-cols-2 gap-4 ml-4">
              {(list as Doctor).medical_center_names &&
              (list as Doctor).medical_center_names.length > 0 ? (
                renderCategory((list as Doctor).medical_center_names, "doctor")
              ) : (
                <p className="ml-4 text-gray-500">
                  No medical centers available
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="text-[#363636] ml-4">
              <h3 className="font-semibold">Available Categories</h3>
              <p className="mb-4 text-sm">
                Select one of the category to proceed
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-4">
              {renderCategory((list as Center).appointmentCategories, "center")}
            </div>
          </>
        )}
      </div>

      {detailType === "doctor" && (
        <AppointmentCalendar
          detailType={detailType}
          id={(list as Doctor)._id}
        />
      )}

      <Footer />
    </>
  );
};

export default DetailsBeforeAppointment;
