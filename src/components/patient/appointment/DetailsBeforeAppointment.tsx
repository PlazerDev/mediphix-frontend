import Footer from "../../Footer";
import PatientNavigation from "../navigation/PatientNavigation";
import { useLocation } from "react-router-dom";
import DoctorDetails from "./DoctorDetails";
import CenterDetails from "./CenterDetails";
import AppointmentCalendar from "./AppointmentCalendar";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface Doctor {
  name: string;
  degree: string;
  speciality: string;
  appointmentCategory: string[];
  description: string;
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

  const appointmentCategory =
    detailType === "doctor"
      ? (list as Doctor).appointmentCategory
      : (list as Center).appointmentCategory;

  return (
    <>
      <PatientNavigation />

      {detailType === "doctor" ? (
        <DoctorDetails {...(list as Doctor)} />
      ) : (
        <CenterDetails {...(list as Center)} />
      )}

      <div className="bg-[#ffffff] rounded-[16px] m-4 p-8">
        <h3 className="text-[#363636] font-semibold ml-4 mb-4">Available At</h3>
        <div className="grid grid-cols-2 gap-4 ml-4">
          {appointmentCategory.map((category, index) => (
            <div key={index} className="flex col-span-1">
              <GoDotFill className="text-[10px] mr-2 mt-2" />{" "}
              <a className="flex underline">
                {category}{" "}
                <IoIosArrowDroprightCircle className="text-lg ml-2 mt-1 text-[#868686]" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <AppointmentCalendar />

      <Footer />
    </>
  );
};

export default DetailsBeforeAppointment;
