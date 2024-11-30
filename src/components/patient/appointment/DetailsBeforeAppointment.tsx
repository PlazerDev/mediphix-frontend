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

interface DetailsProps {
  detailType: string;
  list: Doctor | Center;
}

const DetailsBeforeAppointment = () => {
  const location = useLocation();
  const { detailType, list } = location.state as DetailsProps;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [appointmentDates, setAppointmentDates] = useState<string[]>([]);

  const hardcodedAppointmentDates : Record<string, string[]> = {
    "OPD": ["2024-11-30", "2024-12-25", "2024-12-30"],
    "Heart Health": ["2024-12-01", "2024-12-05", "2024-12-10"],
  };

  const fetchAppointmentDates = (category: string) => {
    setAppointmentDates(hardcodedAppointmentDates[category] || []);
    setSelectedCategory(category);
  };

  const renderCategory = (categories: string[], type: string) =>
    categories.map((category, index) => (
      <div
        key={index}
        className={`flex col-span-1 ${type === "center" ? "cursor-pointer" : ""}`}
        onClick={type === "center" ? () => fetchAppointmentDates(category) : undefined}
      >
        <GoDotFill className="text-[10px] mr-2 mt-2" />
        <a className="flex underline w-1/2">{category}</a>
        <IoIosArrowDroprightCircle className="text-lg ml-2 mt-1 text-[#868686]" />
      </div>
    ));

  if (selectedCategory) {
    return <AppointmentCalendar detailType={detailType} appointmentDates={appointmentDates} />;
  }

  return (
    <>
      <div>
        <p className="text-xl font-bold ml-[1%] mt-4">
          Create an Appointment
        </p>
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
              {renderCategory((list as Doctor).centers, "doctor")}
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
              {renderCategory((list as Center).appointmentCategory, "center")}
            </div>
          </>
        )}
      </div>

      {detailType === "doctor" && (
        <AppointmentCalendar detailType={detailType} appointmentDates={(list as Doctor).appointmentDates} />
      )}

      <Footer />
    </>
  );
};

export default DetailsBeforeAppointment;
