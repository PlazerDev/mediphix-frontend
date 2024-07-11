// import PatientNavigation from "../navigation/PatientNavigation"
import ManageAppoinmentsImg from '../../../assets/images/patient/appoinment/manageAppoinments.png'
import wdgetBG from '../../../assets/images/patient/appoinment/widgetsBg.png'
import Footer from "../../Footer"
import "../../../assets/css/page_loading_animation.css"
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'
import { FaRegAddressBook } from "react-icons/fa";
import { MdOutlineCreateNewFolder } from "react-icons/md";




function AppointmentSection(props) {

  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  return (
    <div className={`h-screen flex flex-col ${loaded ? 'fade-in' : ''}`}>
      {/* <PatientNavigation/> */}


      <div className=" ml-4 mb-4 ">
        <p className="text-[var(--text-a) font-medium text-xl">Appointments</p>
        <p className=" text-[var(--text-b)] text-xs " >Appointments</p>
      </div>

      <div className="flex items-center justify-center ">
        <div className="bg-white  w-[60%] h-auto pl-6 pt-6 pb-6 pr-6 flex flex-col  rounded-[20px]">
          <div className="flex flex-row items-center justify-center mb-4">
            <p className="flex-1 h-1/2 text-left font-bold text-xl">
              <p>Hi, {props.name} <br />{props.title}</p>
            </p>

            <img src={ManageAppoinmentsImg} className="h-[220px]" alt="" />
          </div>

          <div className="flex flex-row gap-4 text-white">

            {props.buttontitles.map((button, index) => {
              const IconComponent = props.buttonimages[index];
              return (
                <button
                  key={index}
                  className="flex-1 w-[1/3] flex bg-contain bg-right hover:opacity-90 justify-center p-5 rounded-[16px]"
                  style={{
                    backgroundImage: `url(${wdgetBG})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundBlendMode: 'luminosity',
                    backgroundColor: index % 2 === 0 ? 'var(--text-b)' : 'var(--accent)',
                  }}
                  onClick={() => navigate('/patient/appointment/previousappoinments')}
                >
                  <div className="flex items-center justify-center flex-col w-24">
                    <IconComponent />
                    <p className="text-sm text-center font-semibold mt-1">{button}</p>
                  </div>
                </button>
              );
            })}




          </div>
        </div>
      </div>

      <Footer />

    </div>



  )
}

export default AppointmentSection


