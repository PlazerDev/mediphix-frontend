import Footer from "./../../components/Footer";
import MCSNavBar from "../../components/medical-center-staff/MCSNavBar";
import bodyImg from "./../../assets/images/patient/appoinment/manageAppoinments.png";
import MCSCustomButton from "../../components/medical-center-staff/MCSCustomButton";
import { FaCalendarDays } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import MCSMainGreeting from "../../components/medical-center-staff/MCSMainGreeting";
import { useEffect, useState } from "react";
import axios from "axios";

interface MCSMemeberData {
  first_name: string;
  medical_center_id: string;
  medical_center_name: string;
}

function MedicalCenterStaffHomePage() {
  const [mcsMemeberData, setMCSMemberData] = useState<MCSMemeberData>();

  useEffect(() => {
    axios
      .get<MCSMemeberData>(
        "http://localhost:9090/mcsMember?userId=66a4ccd911b7d9fcc87b5d6c"
      )
      .then((res) => setMCSMemberData(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting
          medicalCenterName={
            mcsMemeberData
              ? mcsMemeberData.medical_center_name
              : "medical center name"
          }
          memberName={
            mcsMemeberData ? mcsMemeberData.first_name : "mcs member name"
          }
        />
        {/* Main Body div */}
        <div className="px-8 bg-mediphix_card_background py-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center md:items-center md:justify-between">
            <p className="text-xl md:text-2xl font-bold">
              Hi{" "}
              {mcsMemeberData ? mcsMemeberData.first_name : "mcs member name"}!
              <br /> Manage your assigned clinic sessions here
            </p>
            <img
              src={bodyImg}
              alt="body"
              className="w-32 my-2 md:my-0 md:w-60 object-contain"
            />
          </div>
          <div className="flex flex-col items-center md:flex-row justify-center gap-4 mt-2">
            <MCSCustomButton
              path="/medicalCenterStaff/upcomingSessions"
              buttonTitle="Upcoming Clinic Sessions"
              isPrimary={false}
              buttonIcon={FaCalendarDays}
            />
            <MCSCustomButton
              path="/medicalCenterStaff/onGoingSessions"
              buttonTitle="Ongoing Clinic Sessions"
              isPrimary={true}
              buttonIcon={FaHandHoldingMedical}
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffHomePage;
