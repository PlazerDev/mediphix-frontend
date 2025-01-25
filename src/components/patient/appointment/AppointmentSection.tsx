// import statements
// import PatientNavigation from "../navigation/PatientNavigation";
import ManageAppoinmentsImg from "../../../assets/images/patient/appoinment/manageAppoinments.png";
import wdgetBG from "../../../assets/images/patient/appoinment/widgetsBg.png";
import Footer from "../../Footer";
import "../../../assets/css/page_loading_animation.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";
import { PatientService } from "../../../services/PatientService";
import { useQuery } from "@tanstack/react-query";
import TokenService from "../../../services/TokenService";

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

  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  const { data: upcomingAppointments, isLoading: upcomingAppointmentsLoading } =
    useQuery({
      queryKey: ["upcomingAppointments", backendURL, config],
      queryFn: () => PatientService.getUpcomingAppointments(backendURL, config),
      staleTime: 200000,
    });

  console.log(upcomingAppointments);

  const { data: previousAppointments, isLoading: previousAppointmentsLoading } =
    useQuery({
      queryKey: ["previousAppointments", backendURL, config],
      queryFn: () => PatientService.getPreviousAppointments(backendURL, config),
      staleTime: 200000,
    });

  console.log(previousAppointments);

  const handleNavigation = (index: number) => {
    const navigationData = {
      title: buttontitles[index],
      appointments: index === 0 ? upcomingAppointments : previousAppointments,
    };
    navigate(navigations[index], { state: navigationData });
  };

  return (
    <div>
      <div className={` flex flex-col ${loaded ? "fade-in" : ""}`}>
        <div className="m-4 pl-4">
          <p className="text-[var(--text-a)] font-medium text-xl">
            Appointments
          </p>
          <p className="text-[var(--text-b)] text-xs">Appointments</p>
        </div>

        <div className="flex items-center justify-center h-[100%]">
          <div className="bg-white w-[60%] p-10 flex flex-col rounded-[20px]">
            <div className="flex flex-row items-center justify-center mb-4">
              <p className="flex-1 h-1/2 text-left font-bold text-2xl">
                Hi, {name} <br />
                {title}
              </p>
              <img src={ManageAppoinmentsImg} className="h-[200px]" alt="" />
            </div>

            <div className="flex flex-row gap-4 text-white">
              {buttontitles.map((button, index) => {
                const IconComponent = buttonimages[index];
                return (
                  <button
                    key={index}
                    className="flex-1 w-[1/3] h-52 flex bg-contain bg-right hover:opacity-90 justify-center p-6 rounded-[16px]"
                    style={{
                      backgroundImage: `url(${wdgetBG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "luminosity",
                      backgroundColor:
                        index % 2 === 0 ? "var(--text-b)" : "var(--accent)",
                    }}
                    onClick={() => handleNavigation(index)}
                  >
                    <div className="flex items-center justify-center flex-col w-24 p-4">
                      <IconComponent style={{ fontSize: "3rem" }} />
                      <p className="text-xl text-center font-bold mt-4">
                        {button}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
      <Footer  />
      </div>
      
    </div>
  );
}

export default AppointmentSection;
