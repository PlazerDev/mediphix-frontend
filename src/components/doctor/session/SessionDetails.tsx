import { useState } from "react";
import { Divider } from "antd";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import PatientNavigation from "../../patient/navigation/PatientNavigation";
import { Breadcrumb } from "antd";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};



const SessionDetails = () => {
  const [data, setData] = useState({
    appointmentDetails: {
      referenceNumber: "REF_1598",
      date: "2024/June/13",
      timeSlot: "03.00 PM - 04.00 PM",
      queueNumber:"03",
      medicalCenter: "Aloka Medical Center",
      appointmentCategory: "OPD",
      sessionStart: "03.27 PM",
      sessionEnd: "03.41 PM",
    },
    symptoms: ["Chest pain", "Shortness of breath", "Fatigue"],
    diagnosis: {
      category: "Cardiology",
      details: "Myocardinal Infarction (Heart Attack)",
    },
    treatments: {
      medications: [
        "Aspirin 81 mg, once daily",
        "Nitroglycerin 0.4 mg, as needed for chest pain",
        "Beta-blocker (Metoprolol) 50 mg, twice daily",
      ],
      procedures: ["Scheduled for follow-up consultation"],
    },
    specialNote:
      "Avoid strenuous activities until further notice. Schedule a follow-up appointment in two weeks to review progress and adjust medications if necessary. Patient advised to seek immediate medical attention if chest pain persists or worsens.",
  });

  return (
    <div>
     <PatientNavigation />
     <div>
        <p className="text-xl font-bold ml-[1%] mt-[1%]">
        Session -  2024 June 13 at 03.10 PM
        </p>
        </div>
      <div>
        <Breadcrumb
          className="ml-[1%]"
          items={[
            {
              title: "Sessions",
            },
            {
              title: <a href="">Previous Sessions</a>,
            },
            {
              title: <a href=""> REF_1653</a>,
            },
          ]}
        />
      </div>

      <div className="bg-[#FFFFFF] rounded-[16px] py-[3%] px-[3%] ml-2 mr-2 mt-2">
        <div>
          <h3 className="text-lg mb-3">Appointment Details</h3>
          <div className="grid grid-cols-5 gap-y-2 gap-x-4">
            <div>
              <p className="text-sm text-[#868686]">Reference Number</p>
              <p>{data.appointmentDetails.referenceNumber}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Date</p>
              <p>{data.appointmentDetails.date}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Time Slot</p>
              <p>{data.appointmentDetails.timeSlot}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Medical Center</p>
              <p className="text-sm text-[#FFA500]"><a href="#" style={{ color: '#FFA500',textDecoration: 'underline' }}>{data.appointmentDetails.medicalCenter}</a></p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Queue Number</p>
              <p>{data.appointmentDetails.queueNumber}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Appointment Category</p>
              <p>{data.appointmentDetails.appointmentCategory}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Session Start</p>
              <p>{data.appointmentDetails.sessionStart}</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Session End</p>
              <p>{data.appointmentDetails.sessionEnd}</p>
            </div>
          </div>
        </div>
        <Divider />

        <div className="bg-[#FFFFFF] rounded-[16px]  ml-1 mr-1 mt-2">
        <div>
        <h3 className="text-lg mb-3 ">Patient Details</h3>
        </div>
        </div>
        
        <div>
          <h3 className="text-lg mb-3 font-semibold">Symptoms</h3>
          <ul className="list-disc custom-disc-color">
            {data.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Diagnosis</h3>
          <p className="text-sm text-[#868686]">Diagnosis Category</p>
          <p className="py-1 px-4 bg-[#DCDCDC] rounded-[8px] max-w-fit">
            {data.diagnosis.category}
          </p>
          <p className="text-sm text-[#868686] mt-2">Detailed Diagnosis</p>
          <p>{data.diagnosis.details}</p>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Treatments</h3>
          <p className="text-sm text-[#868686]">Medications</p>
          <ul className="list-disc custom-disc-color">
            {data.treatments.medications.map((medication, index) => (
              <li key={index}>{medication}</li>
            ))}
          </ul>
          <p className="text-sm text-[#868686] mt-2">Procedures</p>
          <ul className="list-disc custom-disc-color">
            {data.treatments.procedures.map((procedure, index) => (
              <li key={index}>{procedure}</li>
            ))}
          </ul>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Special Note</h3>
          <p>{data.specialNote}</p>
        </div>
      </div>
    </div>
    
  );
};
    
export default SessionDetails
