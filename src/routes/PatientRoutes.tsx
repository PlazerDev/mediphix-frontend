import {
  BookOutlined,
  CalendarOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import { Routes, Route, Navigate } from "react-router-dom";

import { HiDocumentText } from "react-icons/hi2";
import { HiDocumentPlus } from "react-icons/hi2";

import AppointmentSection from "../components/patient/appointment/AppointmentSection";
import PatientHome from "../components/patient/home/PatientHome";
import AppointmentDetails from "../components/patient/appointment/AppointmentDetails";
import AppointmentSuccessful from "../components/patient/appointment/AppointmentSuccessful";
import BookingFailed from "../components/patient/appointment/BookingFailed";
import RecordBookList from "../components/patient/recordbook/RecordBookList";
import Navigation from "../components/patient/navigation/Navigation.tsx";
import CreateAppointment from "../components/patient/appointment/CreateAppointment";
import DetailsBeforeAppointment from "../components/patient/appointment/DetailsBeforeAppointment";
import BookAppointment from "../components/patient/appointment/BookAppointment";
import { PatientService } from "../services/PatientService.tsx";
import TokenService from "../services/TokenService.tsx";
import { useQuery } from "@tanstack/react-query";
import PreviousAppointmentTable from "../components/patient/appointment/PreviousAppointmentTable.tsx";
import UpcomingAppointmentTable from "../components/patient/appointment/UpcomingAppointmentTable.tsx";

function PatientRoutes() {
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  const {
    data: patientDetails,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["patient", backendURL, config],
    queryFn: () => PatientService.getPatientData(backendURL, config),
    staleTime: 200000,
  });

  if (isError) {
    return <Navigate to="/" />;
  }
  
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
              name={patientDetails?.first_name ?? ''}
              title={"Manage your appointments here"}
              buttontitles={[
                "Upcoming Appointments",
                "Create an Appointment",
                "Previous Appointments",
              ]}
              buttonimages={[
                HiDocumentText,
                HiDocumentPlus,
                HiDocumentText,
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
          element={<PreviousAppointmentTable />}
        />

        <Route
          path="/appointment/upcomingappointments"
          element={<UpcomingAppointmentTable />}
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
