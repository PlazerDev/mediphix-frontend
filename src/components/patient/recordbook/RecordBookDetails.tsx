import { Divider } from "antd";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import "./RecordBook.css";

const RecordBookDetails = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] rounded-[16px] py-4 px-8">
        <div>
          <h3 className="text-lg mb-3 font-semibold">Appointment Details</h3>
          <div className="grid grid-cols-5 gap-y-2 gap-x-4">
            <div>
              <p className="text-sm text-[#868686]">Reference Number</p>
              <p>REF_1598</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Date</p>
              <p>2024/June/13</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Time Slot</p>
              <p>03.00 PM - 04.00 PM</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Doctor’s Name</p>
              <p>DR. M.A.C Jayawardana</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Medical Center</p>
              <p>Aloka Medical Center </p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Appointment Category</p>
              <p>OPD</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Session Start</p>
              <p>03.27 PM</p>
            </div>
            <div>
              <p className="text-sm text-[#868686]">Session End</p>
              <p>03.41 PM</p>
            </div>
            <div>
              <div className="flex bg-[#FF7300] rounded-[8px] align-middle p-2 text-[#FFFFFF] w-fit ">
                {" "}
                <MdOutlineRemoveRedEye className="text-lg mr-1" />
                <p className="text-sm ">View in Appointment </p>
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Symptoms</h3>
          <ul className="list-disc custom-disc-color">
            <li>Chest pain</li>
            <li>Shortness of breath</li>
            <li>Fatigue</li>
          </ul>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Diagnosis</h3>
          <p className="text-sm text-[#868686]">Diagnoisis Category</p>
          <p className="py-1 px-4 bg-[#DCDCDC] rounded-[8px] max-w-fit">
            Cardiology
          </p>
          <p className="text-sm text-[#868686] mt-2">Detailed Diagnosis</p>
          <p>Myocardinal Infarction (Heart Attack)</p>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Treatments</h3>
          <p className="text-sm text-[#868686]">Medications</p>
          <ul className="list-disc custom-disc-color">
            <li>Aspirin 81 mg, once daily</li>
            <li>Nitroglycerin 0.4 mg, as needed for chest pain</li>
            <li>Beta-blocker (Metoprolol) 50 mg, twice daily</li>
          </ul>
          <p className="text-sm text-[#868686] mt-2">Procedures</p>
          <ul className="list-disc custom-disc-color">
            <li>Scheduled for follow-up consultation</li>
          </ul>
        </div>
        <Divider />
        <div>
          <h3 className="text-lg mb-3 font-semibold">Special Note</h3>
          <p>
            Avoid strenuous activities until further notice. Schedule a
            follow-up appointment in two weeks to review progress and adjust
            medications if necessary. Patient advised to seek immediate medical
            attention if chest pain persists or worsens.
          </p>
        </div>
      </div>
    </>
  );
};

export default RecordBookDetails;
