import {
    BookOutlined,
    HomeOutlined,
    CalendarOutlined,
} from "@ant-design/icons";


import { Routes, Route } from "react-router-dom";

import RecordBook from "../components/patient/recordbook/RecordBook";
import AppointmentSection from "../components/patient/appointment/AppointmentSection";
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import PatientHome from "../components/patient/home/PatientHome";
import AppointmentDetails from "../components/patient/appointment/AppointmentDetails";
import AppointmentSuccessful from "../components/patient/appointment/AppointmentSuccessful";
import AppointmentTable from "../components/patient/appointment/AppointmentTable";
import BookingFailed from "../components/patient/appointment/BookingFailed";
import MedicalCenterCard from "../components/patient/appointment/MedicalCenterCard";
import MedicalCenterDetailsCard from "../components/patient/appointment/MedicalCenterDetailsCard";
import RecordBookList from "../components/patient/recordbook/RecordBookList";
import Navigation from "../components/Navigation";

function PatientRoutes() {
    return (
        <div>

            <Navigation
                role="patient"
                buttonNames={["Home", "Appointment", "Record Book"]}
                buttonImages={[<HomeOutlined />, <CalendarOutlined />, <BookOutlined />]} />
            
            


           
           <Routes>
                <Route path="/home" element={<PatientHome />} />
                <Route path="/appointment" element={<AppointmentSection
                    name={"Visal"}
                    title={"Manage your appointments here"}
                    buttontitles={[
                        "Upcomming Appointments",
                        "Create an Appointment",
                        "Previous Appointments",
                    ]}
                    buttonimages={[
                        FaRegAddressBook,
                        MdOutlineCreateNewFolder,
                        FaRegAddressBook,
                    ]}
                    // must be same order as buttontiles
                    navigations={[
                        "/patient/appoinmentdetails",
                        "/patient/appointment/CreateAppoinmnets",
                        "/patient/appointment/PreviousAppoinments",
                    ]}
                />
                }
                />
                <Route path="/recordbook" element={<RecordBook />} />
                <Route
                    path="/appoinmentdetails"
                    element={<AppointmentDetails />}
                />
                <Route
                    path="/appointment/medicalcentercard"
                    element={<MedicalCenterCard />}
                />
                <Route
                    path="/appointment/medicalcenterdetailscard"
                    element={<MedicalCenterDetailsCard />}
                />
                <Route
                    path="/appointment/appointmentsuccessful"
                    element={<AppointmentSuccessful />}
                />
                <Route
                    path="/appointment/bookingfailed"
                    element={<BookingFailed />}
                />

                <Route
                    path="/appointment/PreviousAppoinments"
                    element={<AppointmentTable />}
                />
                <Route
                    path="/appointment/UpComingAppointment"
                    element={<BookingFailed />}
                />

                <Route path="/recordbooklist" element={<RecordBookList />} />
            </Routes>
        </div>
    )
}

export default PatientRoutes
