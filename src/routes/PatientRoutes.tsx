import {
  BookOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Routes, Route } from "react-router-dom";

import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";

import AppointmentSection from "../components/patient/appointment/AppointmentSection";
import PatientHome from "../components/patient/home/PatientHome";
import AppointmentDetails from "../components/patient/appointment/AppointmentDetails";
import AppointmentSuccessful from "../components/patient/appointment/AppointmentSuccessful";
import AppointmentTable from "../components/patient/appointment/AppointmentTable";
import BookingFailed from "../components/patient/appointment/BookingFailed";
import RecordBookList from "../components/patient/recordbook/RecordBookList";
import Navigation from "../components/patient/navigation/Navigation.tsx";
import CreateAppointment from "../components/patient/appointment/CreateAppointment";
import DetailsBeforeAppointment from "../components/patient/appointment/DetailsBeforeAppointment";
import BookAppointment from "../components/patient/appointment/BookAppointment";
import AppointmentCalendar from "../components/patient/appointment/AppointmentCalendar.tsx";

function PatientRoutes() {
  return (
    <div>
      <Navigation
        role="patient"
        buttonNames={["Home", "Appointment", "Record Book"]}
        buttonImages={[
          <HomeOutlined />,
          <CalendarOutlined />,
          <BookOutlined />,
        ]}
      />

      <Routes>
        <Route path="/home" element={<PatientHome />} />
        <Route
          path="/appointment"
          element={
            <AppointmentSection
              name={"Visal"}
              title={"Manage your appointments here"}
              buttontitles={[
                "Upcoming Appointments",
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
                "/patient/appointment/upcomingappointments",
                "/patient/appointment/createappoinmnets",
                "/patient/appointment/previousappointments",
              ]}
            />
          }
        />
        <Route
          path="/appointments/appointmentdetails"
          element={<AppointmentDetails />}
        />
        <Route
          path="/appointment/createappoinmnets"
          element={<CreateAppointment />}
        />
        <Route
          path="/appointment/appointmentsuccessful"
          element={<AppointmentSuccessful />}
        />

        <Route
          path="/appointment/createappoinmnets/details"
          element={<DetailsBeforeAppointment />}
        />
        <Route
          path="/appointment/bookappointment"
          element={<BookAppointment />}
        />
        <Route path="/appointment/bookingfailed" element={<BookingFailed />} />

        <Route
          path="/appointment/previousappointments"
          element={<AppointmentTable />}
        />

        <Route
          path="/appointment/upcomingappointments"
          element={<AppointmentTable />}
        />

        <Route
          path="/appointment/createappoinmnets/doctor/:name/bookappointment"
          element={<BookAppointment />}
        />

        <Route
          path="/appointment/createappoinmnets/center/:name/bookappointment"
          element={<BookAppointment />}
        />

        {/* <Route
          path="/appointment/createappoinmnets/bookappointment"
          element={<BookAppointment />}
        /> */}
        <Route path="/appointment/bookingfailed" element={<BookingFailed />} />

        <Route path="/recordbook" element={<RecordBookList />} />
      </Routes>
    </div>
  );
}

export default PatientRoutes;
