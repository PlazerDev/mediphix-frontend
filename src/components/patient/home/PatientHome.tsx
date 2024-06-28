import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
// import Navigation from "./../navigation/PatientNavigation";
import Footer from "./../../Footer";
import "../../../assets/css/page_loading_animation.css"
import { useState ,useEffect } from "react";

const PatientHome = () => {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <div className="h-screen flex flex-col">
        <Navigation /> */}
        <div className={`h-screen flex flex-col ${loaded ? 'fade-in' : ''}`}>
          <div className="mt-2 ml-4">
            <p className="  text-xl font-bold">Good Evening, Vishwa</p>
            <p className="text-sm mb-2">We hope you're having a great day.</p>
          </div>
          <div className="flex flex-grow">
            <LeftSection />
            <RightSection />
          </div>
          <Footer />
        </div>
      {/* </div> */}
    </>
  );
};

export default PatientHome;


