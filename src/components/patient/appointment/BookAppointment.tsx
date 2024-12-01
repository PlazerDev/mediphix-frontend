import { Breadcrumb } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { Button } from "antd";
import Footer from "../../Footer";
import TimeSlotCard from "./TimeSlotCard";
import { useLocation } from "react-router-dom";

interface BookAppointmentProps {
  doctorName: string;
  centerName: string;
  time: string;
  doctorNote: string;
  centerNote: string;
  category: string;
}

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const BookAppointment = () => {
  const location = useLocation();
  const details = location.state?.details;

  return (
    <>
      <div>
        <div>
          <p className="text-xl font-bold ml-[1%] mt-[1%]">
            Book Appointment - {details.name}
          </p>
        </div>
        <div>
          <Breadcrumb
            className="ml-[1%]"
            items={[
              {
                title: "Appointments",
              },
              {
                title: <a href="">Create an appointment</a>,
              },
              {
                title: "DR_NISHANTHA",
              },
              {
                title: <a href=""> Book appointment </a>,
              },
            ]}
          />
        </div>
        <div className="bg-[#ffffff] rounded-[16px]  p-6 ml-[1%] mr-[1%] mt-3">
          <div className="flex gap-4 mb-1">
            <div>
              <p className="text-black text-l font-bold">
                Details of the Appointment
              </p>
              <div className="flex gap-4 mt-3">
                <div>
                  <p className="text-[#868686] text-sm ">Time Frame</p>
                  <p className="font-bold">{details.time}</p>
                </div>

                <div className="flex flex-col ml-10">
                  <p className="text-[#868686] text-sm">Date</p>
                  <p className="font-bold">{details.date}</p>
                </div>

                <div className="flex flex-col ml-10 ">
                  <p className="text-[#868686] text-sm">Appointment Category</p>
                  <p className="font-bold">{details.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <div>
              <p className="text-[#868686] text-sm ">Doctor’s Name</p>
              <a style={{ color: "orange-500" }}>
                <u>Dr. C.M.K Jayawardana</u>
              </a>
            </div>
            <div className="flex flex-col ml-10 justify-center ">
              <p className="text-[#868686] text-sm">Medical Center’s Name</p>
              <a style={{ color: "#F97316" }}>
                <u>{details.center}</u>
              </a>
            </div>
          </div>
          <div>
            <p className="text-black text-l font-bold mt-3">
              Additional Details
            </p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Doctor
            </p>
            <p className="">N/A</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Medical Center
            </p>
            <p className="">
              Please arrive at least 15 minutes before your scheduled
              appointment time for payment.
            </p>
          </div>
        </div>
        <div>
          <TimeSlotCard />
        </div>

        <div className="relative bg-[#ffffff] rounded-[16px] p-3 ml-[1%] mt-3 mb-1 mr-[1%] h-50">
          <p className="font-bold">Terms and Conditions Agreement</p>
          <p>
            By proceeding with the appointment booking, you agree to our terms
            and conditions. Please review the terms carefully before continuing.
          </p>
          <Checkbox onChange={onChange}>
            I have read and agree to the{" "}
            <a style={{ color: "orange" }}>
              <u>Terms and Conditions.</u>
            </a>
          </Checkbox>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "grey",
                borderColor: "grey",
                height: "40px",
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              style={{
                backgroundColor: "orange",
                borderColor: "orange",
                width: "200px",
                height: "40px",
              }}
            >
              Book the Appointment
            </Button>
          </div>
        </div>
        <Footer />
        <div></div>
      </div>
    </>
  );
};

export default BookAppointment;
