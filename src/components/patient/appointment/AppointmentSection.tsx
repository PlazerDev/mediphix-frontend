// import PatientNavigation from "../navigation/PatientNavigation"
import ManageAppoinmentsImg from '../../../assets/images/patient/appoinment/manageAppoinments.png'
import  wdgetBG from '../../../assets/images/patient/appoinment/widgetsBg.png'
import Footer from "../../Footer"
import "../../../assets/css/page_loading_animation.css"
import { useState,useEffect } from 'react'
import { Link ,useNavigate  } from 'react-router-dom'
import PatientNavigation from '../navigation/PatientNavigation'


function AppointmentSection() {

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
                  Hi, Vishwa 
                  <p>Manage your appointments here </p>
                </p>

                <img src={ManageAppoinmentsImg}  className="h-[220px]" alt="" />
            </div>

            <div className="flex flex-row gap-4 text-white">
              
       
                <button className="flex-1 w-[1/3] bg-[var(--text-b)] flex  bg-contain bg-right justify-center p-5 rounded-[16px]"
                    style={{
                      backgroundImage:`url(${wdgetBG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "luminosity",
                    }} onClick={() => navigate('/patient/appointment/previousappoinments')} >
                  <div className="flex items-center justify-center flex-col w-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 68 78" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M47.5763 41.6946H20.4291C18.8724 41.6946 17.6091 40.3786 17.6091 38.7571C17.6091 37.1356 18.8724 35.8196 20.4291 35.8196H47.5763C49.1329 35.8196 50.3963 37.1356 50.3963 38.7571C50.3963 40.3786 49.1329 41.6946 47.5763 41.6946ZM47.5763 56.4174H20.4291C18.8724 56.4174 17.6091 55.1014 17.6091 53.4799C17.6091 51.8584 18.8724 50.5424 20.4291 50.5424H47.5763C49.1329 50.5424 50.3963 51.8584 50.3963 53.4799C50.3963 55.1014 49.1329 56.4174 47.5763 56.4174ZM20.4291 21.0891H30.7879C32.3445 21.0891 33.6079 22.4051 33.6079 24.0266C33.6079 25.6481 32.3445 26.9641 30.7879 26.9641H20.4291C18.8724 26.9641 17.6091 25.6481 17.6091 24.0266C17.6091 22.4051 18.8724 21.0891 20.4291 21.0891ZM34.0591 0.8125C9.37467 0.8125 0.628906 10.8078 0.628906 39.0039C0.628906 67.196 9.37467 77.1914 34.0591 77.1914C58.7397 77.1914 67.4893 67.196 67.4893 39.0039C67.4893 10.8078 58.7397 0.8125 34.0591 0.8125Z" fill="#E3E3E3"/>
                    </svg>
                
                    <p className="text-sm text-center font-semibold mt-1">
                    Upcoming Appointments
                    </p>
                  </div>
                
                </button>
    
              
              
                <button className="flex-1 w-[1/3]  bg-[var(--accent)] flex items-center bg-contain bg-right justify-center p-5 rounded-[16px]"
                    style={{
                      backgroundImage:`url(${wdgetBG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "luminosity",
                    }} onClick={() => navigate('/patient/appointment/previousappoinments')}>
                  <div className="flex items-center justify-center flex-col w-24">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 94 94" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.8962 33.9732C58.7072 33.9732 53.6538 28.7483 53.6538 22.3015V14.3037L73.5141 33.9732H64.8962ZM52.5671 54.1401H46.1789V60.7984C46.1789 62.4199 44.9155 63.7359 43.3589 63.7359C41.8022 63.7359 40.5389 62.4199 40.5389 60.7984V54.1401H34.1468C32.5864 54.1401 31.3268 52.828 31.3268 51.2026C31.3268 49.5811 32.5864 48.2651 34.1468 48.2651H40.5389V41.6068C40.5389 39.9853 41.8022 38.6693 43.3589 38.6693C44.9155 38.6693 46.1789 39.9853 46.1789 41.6068V48.2651H52.5671C54.1238 48.2651 55.3871 49.5811 55.3871 51.2026C55.3871 52.828 54.1238 54.1401 52.5671 54.1401ZM78.7894 34.6625C78.7894 34.5058 78.7894 34.3883 78.7517 34.2317C78.6389 33.5267 78.5261 32.8217 78.4133 32.1558C78.3382 31.725 78.1501 31.3725 77.8493 31.0592L56.5302 9.90917C56.267 9.635 55.891 9.43917 55.515 9.4C54.8758 9.32167 54.199 9.24333 53.5222 9.165C53.4094 9.12583 53.259 9.12583 53.1462 9.12583C50.9654 8.93 48.559 8.8125 46.0398 8.8125C21.3741 8.8125 12.6133 18.8 12.6133 47C12.6133 75.1608 21.3741 85.1875 46.0398 85.1875C70.743 85.1875 79.5038 75.1608 79.5038 47C79.5038 42.3 79.2782 38.2267 78.7894 34.6625Z" fill="white"/>
                  </svg>
                
                    <p className="text-sm text-center font-semibold mt-1">
                      Create an Appointment
                    </p>
                  </div>
                </button>


                <button className="flex-1 w-[1/3] bg-[var(--text-b)] flex items-center bg-right bg-contain justify-center p-5 rounded-[16px]"
                    style={{
                      backgroundImage:`url(${wdgetBG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "luminosity",
                    }} onClick={() => navigate('/patient/appointment/previousappoinments')} >
                  <div className="flex items-center justify-center flex-col w-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 68 78" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M47.5763 41.6946H20.4291C18.8724 41.6946 17.6091 40.3786 17.6091 38.7571C17.6091 37.1356 18.8724 35.8196 20.4291 35.8196H47.5763C49.1329 35.8196 50.3963 37.1356 50.3963 38.7571C50.3963 40.3786 49.1329 41.6946 47.5763 41.6946ZM47.5763 56.4174H20.4291C18.8724 56.4174 17.6091 55.1014 17.6091 53.4799C17.6091 51.8584 18.8724 50.5424 20.4291 50.5424H47.5763C49.1329 50.5424 50.3963 51.8584 50.3963 53.4799C50.3963 55.1014 49.1329 56.4174 47.5763 56.4174ZM20.4291 21.0891H30.7879C32.3445 21.0891 33.6079 22.4051 33.6079 24.0266C33.6079 25.6481 32.3445 26.9641 30.7879 26.9641H20.4291C18.8724 26.9641 17.6091 25.6481 17.6091 24.0266C17.6091 22.4051 18.8724 21.0891 20.4291 21.0891ZM34.0591 0.8125C9.37467 0.8125 0.628906 10.8078 0.628906 39.0039C0.628906 67.196 9.37467 77.1914 34.0591 77.1914C58.7397 77.1914 67.4893 67.196 67.4893 39.0039C67.4893 10.8078 58.7397 0.8125 34.0591 0.8125Z" fill="#E3E3E3"/>
                    </svg>
                
                    <p className="text-sm text-center font-semibold mt-1">
                      Previous Appointments
                    </p>
                  </div>
                </button>

                
            </div>
        </div>
      </div>

      <Footer/>

    </div>


    
  )
}

export default AppointmentSection


