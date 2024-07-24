// import statements
// import PatientNavigation from "../navigation/PatientNavigation";
import ManageAppoinmentsImg from "../../../assets/images/patient/appoinment/manageAppoinments.png";
import wdgetBG from "../../../assets/images/patient/appoinment/widgetsBg.png";
import Footer from "../../Footer";
import "../../../assets/css/page_loading_animation.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";

function AppointmentSection({
  name,
  title,
  buttontitles,
  buttonimages,
  navigations,
}: {
  name: string;
  title: string;
  buttontitles: string[];
  buttonimages: IconType[];
  navigations: string[];
}) {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const upcomingAppointments = [
    {
      key: "1",
      date: "2024-06-28",
      timeSlot: "10:00 - 10:30",
      refNumber: "REF12345",
      doctor: "Dr. Smith",
      medicalCenter: "City Hospital",
      category: "General",
      queueNumber: "5",
    },
    {
      key: "2",
      date: "2024-06-29",
      timeSlot: "11:00 - 11:30",
      refNumber: "REF12346",
      doctor: "Dr. John",
      medicalCenter: "Central Clinic",
      category: "Pediatric",
      queueNumber: "10",
    },
  ];

  const previousAppointments = [
    {
      key: "1",
      date: "2024-05-20",
      timeSlot: "10:00 - 10:30",
      refNumber: "REF54321",
      doctor: "Dr. Adams",
      medicalCenter: "City Hospital",
      category: "General",
      queueNumber: "2",
    },
    {
      key: "2",
      date: "2024-05-22",
      timeSlot: "11:00 - 11:30",
      refNumber: "REF54322",
      doctor: "Dr. Brown",
      medicalCenter: "Central Clinic",
      category: "Pediatric",
      queueNumber: "8",
    },
  ];

  const handleNavigation = (index: number) => {
    const navigationData = {
      title: buttontitles[index],
      appointments: index === 0 ? upcomingAppointments : previousAppointments,
    };
    navigate(navigations[index], { state: navigationData });
  };

  return (
    <div className={`h-screen flex flex-col ${loaded ? "fade-in" : ""}`}>
      {/* <PatientNavigation/> */}
      <div className="ml-4 mb-4">
        <p className="text-[var(--text-a)] font-medium text-xl">Appointments</p>
        <p className="text-[var(--text-b)] text-xs">Appointments</p>
      </div>

      <div className="flex items-center justify-center">
        <div className="bg-white w-[60%] h-auto pl-6 pt-6 pb-6 pr-6 flex flex-col rounded-[20px]">
          <div className="flex flex-row items-center justify-center mb-4">
            <p className="flex-1 h-1/2 text-left font-bold text-xl">
              Hi, {name} <br />
              {title}
            </p>
            <img src={ManageAppoinmentsImg} className="h-[220px]" alt="" />
          </div>

          <div className="flex flex-row gap-4 text-white">
            {buttontitles.map((button, index) => {
              const IconComponent = buttonimages[index];
              return (
                <button
                  key={index}
                  className="flex-1 w-[1/3] flex bg-contain bg-right hover:opacity-90 justify-center p-5 rounded-[16px]"
                  style={{
                    backgroundImage: `url(${wdgetBG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundBlendMode: "luminosity",
                    backgroundColor:
                      index % 2 === 0 ? "var(--text-b)" : "var(--accent)",
                  }}
                  onClick={() => handleNavigation(index)}
                >
                  <div className="flex items-center justify-center flex-col w-24">
                    <IconComponent style={{ fontSize: "2rem" }} />
                    <p className="text-sm text-center font-semibold mt-1">
                      {button}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppointmentSection;
