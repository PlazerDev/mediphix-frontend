import ProfileOverview from "./ProfileOverview";
import UpcomingAppointment from "./UpcomingAppointment ";
import Footer from "./../../Footer";
import "../../../assets/css/page_loading_animation.css";
import { useState, useEffect } from "react";
import NoAppointment from "./NoAppointment";
import OngoingAppointment from "./OngoingAppointment";
import NoUpcomingAppointment from "./NoUpcomingAppointment";
import Token from "./Token";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading.tsx";
import { Navigate } from "react-router-dom";
import TokenService from "../../../services/TokenService.tsx";
import { PatientService } from "../../../services/PatientService.tsx";

const PatientHome = () => {
  const [isOngoingAppointment, setIsOngoingAppointment] = useState(true);
  // const [loaded, setLoaded] = useState(false);
  // 0-start
  // 1-in the queue
  // 2-ongoing
  //These status are according to steps component in ant DesignTokenContext. So don't change them
  const [ongoingAppointmentStatus, setOngoingAppointmentStatus] = useState(0);

  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "2024/06/17",
    time: "06.00 PM - 07.00PM",
    doctor: "B.KARUNARATNE",
    category: "OPD",
    queueNo: "07",
    referenceNo: "REF_8056",
    medicalCenter: "Aloka Clinic & Laboratory",
    phoneNo: "0114500500",
  });

  const [queueDetails, setQueueDetails] = useState({
    currentNo: 3,
    yourNo: 7,
    hallReference: "HALL-A",
  });

  const [isUpcomingAppointment, setIsUpcomingAppointment] = useState(true);

  const [upcommingAppointments, setUpcommingAppointments] = useState([
    {
      date: "JUN 17",
      time: "05.00 PM - 06.00 PM",
      number: "07",
      doctor: "B.KARUNARATNE",
      location: "Aloka Clinic & Laboratory",
    },
    {
      date: "JUN 29",
      time: "10.00 AM - 11.00 AM",
      number: "01",
      doctor: "B.KARUNARATNE",
      location: "Aloka Clinic & Laboratory",
    },
  ]);

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
    <>
      <div className="flex flex-col">
        {isLoading && <Loading footer={true} />}
        {!isLoading && (
          <div className={`flex flex-col p-4 ${!isLoading ? "fade-in" : ""}`}>
            <div className="">
              <p className="  text-xl font-bold">
                Good Evening, {patientDetails?.first_name}
              </p>
              <p className="text-sm mb-2">We hope you're having a great day.</p>
            </div>
            <div className="flex flex-grow my-4">
              <div className="w-2/3 flex-grow">
                <div className="flex justify-center  p-4 bg-mediphix_card_background h-full rounded-[16px]">
                  {isOngoingAppointment ? (
                    <>
                      <div className="flex flex-col  w-full">
                        <OngoingAppointment
                          status={ongoingAppointmentStatus}
                          appointmentDetails={appointmentDetails}
                          queueDetails={queueDetails}
                        />
                        <div className="flex justify-center mt-1">
                          <Token {...appointmentDetails} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <NoAppointment />
                  )}
                </div>
              </div>

              <div className="w-1/3  flex flex-col mx-4">
                {isUpcomingAppointment ? (
                  <UpcomingAppointment
                    upcomingAppointments={upcommingAppointments}
                  />
                ) : (
                  <NoUpcomingAppointment />
                )}

                <ProfileOverview {...patientDetails} />
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default PatientHome;
