import Navigation from "./../navigation/PatientNavigation";
import ProfileOverview from "./ProfileOverview";
import UpcomingAppointment from "./UpcomingAppointment ";
import Footer from "./../../Footer";
import "../../../assets/css/page_loading_animation.css";
import { useState, useEffect } from "react";
import NoAppointment from "./NoAppointment";
import OngoingAppointment from "./OngoingAppointment";
import NoUpcomingAppointment from "./NoUpcomingAppointment";

const PatientHome = () => {
  const [isOngoingAppointment, setIsOngoingAppointment] = useState(true);
  const [loaded, setLoaded] = useState(false);
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

  //take only latest two from the backend
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

  const [patientDetails, setPatientDetails] = useState({
    name: "Vishwa Sandaruwan",
    age: 23,
    gender: "Male",
    nic: "20010*****82",
    address: "N/A",
    phoneNo: "0713072404",
    email: "N/A",
    nationality: "LK",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navigation />
        <div className={`h-screen flex flex-col ${loaded ? "fade-in" : ""}`}>
          <div className="mt-2 ml-4">
            <p className="  text-xl font-bold">Good Evening, Vishwa</p>
            <p className="text-sm mb-2">We hope you're having a great day.</p>
          </div>
          <div className="flex flex-grow">
            <div className="w-2/3  bg-[#E3E3E3] flex-grow">
              <div className="flex h-full justify-center ml-4 p-4 bg-[#ffffff] rounded-[16px]">
                {isOngoingAppointment ? (
                  <OngoingAppointment
                    status={ongoingAppointmentStatus}
                    appointmentDetails={appointmentDetails}
                    queueDetails={queueDetails}
                  />
                ) : (
                  <NoAppointment />
                )}
              </div>
            </div>

            <div className="w-1/3 flex flex-col gap-4 mx-4 flex-grow">
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
      </div>
    </>
  );
};

export default PatientHome;
