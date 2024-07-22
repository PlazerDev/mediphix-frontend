import { MdOutlineRemoveRedEye } from "react-icons/md";
import Footer from "./../../Footer";
import { Breadcrumb } from "antd";
import PatientNavigation from "../navigation/PatientNavigation";
import { useState } from "react";
import { LuAlertTriangle } from "react-icons/lu";
const AppointmentDetails = () => {

  const [appointmentDetails, setAppointmentDetails] = useState({
    referenceNumber: "REF_1653",
    queueNumber: "07",
    date: "2024/June/13",
    status: "Active",
    timeSlot: "03.00 PM - 04.00 PM",
    paymentDetails: { 
      paymentDate: "2024/June/15",
      paymentTime: "03.00 PM - 04.00 PM",
    },
    medicalCenterDetails: {
      name: "Aloka Medical Center",
      contactNumber: "011-4600600",
      location: "No: 10/A, Queens Rd, Colombo 7",
    },
    doctorDetails: {
      name: "Dr. C.M.K Jayawardana",
      category: "OPD Doctor",
    },
    sessionDetails: {
      startDateTime: "2024/June/15 - 03.42 PM",
      endDateTime: "2024/June/15 - 03.51 PM",
      duration: "09 Minutes",
    },
  });

  return (
    <div>
      <PatientNavigation />
      <div className="mt-2 ml-4">
        <p className="font-Roboto font-[700] text-xl text-[#151515]">
          Appointment - {appointmentDetails.referenceNumber}
        </p>
      </div>
      <div className="mt-1 ml-4 mb-2">
        <Breadcrumb
          items={[
            {
              title: "Appointments",
            },
            {
              title: <a href="">Previous Appointments</a>,
            },
            {
              title: appointmentDetails.referenceNumber,
            },
          ]}
        />
      </div>
      <div className="ml-4 p-8 bg-[#ffffff] rounded-[16px] ">
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Reference Number</p>
            <p>{appointmentDetails.referenceNumber}</p>
            <p className="text-[#868686] text-sm">Queue Number</p>
            <p>{appointmentDetails.queueNumber}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Date</p>
            <p>{appointmentDetails.date}</p>
            <div className="flex">
              <div className="flex-col mr-4">
                <p className="text-[#868686] text-sm">Status</p>
                <p className="text-[#FF7300]">{appointmentDetails.status}</p>
              </div>
              {/* <div className="flex bg-[#FF7300] rounded-[8px] align-middle px-4 py-2 text-[#FFFFFF] w-fit ">
                <div className="flex my-1">
                  <MdOutlineRemoveRedEye className="text-lg mr-1" />
                  <p className="text-sm ">View Record Book Entry</p>
                </div>
              </div> */}
              <div
                className={`flex rounded-[8px] align-middle px-4 py-2 text-[#FFFFFF] w-fit ${
                  appointmentDetails.status === "Active" ? "bg-[#FF462D]" : "bg-[#FF7300]"
                }`}
              >
                <div className="flex my-1">
                  {appointmentDetails.status === "Active" ? (
                    <LuAlertTriangle className="text-lg mr-1" />
                  ) : (
                    <MdOutlineRemoveRedEye className="text-lg mr-1" />
                  )}
                  <p className="text-sm">
                    {appointmentDetails.status === "Active"
                      ? "Cancel Appointment"
                      : "View Record Book Entry"}
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Time Slot</p>
            <p>{appointmentDetails.timeSlot}</p>
          </div>
        </div>
        <hr className="my-4" />

        <h3 className="text-base mb-2 font-semibold">Payment Details</h3>
        <div className=" w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Payment Date</p>
            <p>{appointmentDetails.paymentDetails.paymentDate}</p>
          </div>
          <div className="col-span-2">
            <p className="text-[#868686] text-sm">Payment Time</p>
            <p>{appointmentDetails.paymentDetails.paymentTime}</p>
          </div>
        </div>

        <hr className="my-4" />
        <h3 className="text-base mb-2 font-semibold">Medical Center Details</h3>
        <div className="w-full grid grid-cols-3 gap-4n">
          <div>
            <p className="text-[#868686] text-sm">Medical Center Name</p>
            <p className="text-[#FF7300] underline">
              {appointmentDetails.medicalCenterDetails.name}
            </p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Contact Number</p>
            <p>{appointmentDetails.medicalCenterDetails.contactNumber}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Location</p>
            <p>{appointmentDetails.medicalCenterDetails.location}</p>
          </div>
        </div>

        <hr className="my-4" />

        <h3 className="text-base mb-2 font-semibold">Doctor Details</h3>
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Doctor's Name</p>
            <p className="text-[#FF7300] underline">
              {appointmentDetails.doctorDetails.name}
            </p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Category</p>
            <p>{appointmentDetails.doctorDetails.category}</p>
          </div>
        </div>

        <hr className="my-4" />
        <h3 className="text-base mb-2 font-semibold">Session Details</h3>
        <div className="w-full grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#868686] text-sm">Started date & time</p>
            <p>{appointmentDetails.sessionDetails.startDateTime}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">End date & time</p>
            <p>{appointmentDetails.sessionDetails.endDateTime}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm">Session Duration</p>
            <p>{appointmentDetails.sessionDetails.duration}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppointmentDetails;
