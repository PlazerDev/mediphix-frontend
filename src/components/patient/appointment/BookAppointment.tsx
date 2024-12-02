import { Breadcrumb } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { Button } from "antd";
import Footer from "../../Footer";
import TimeSlotCard from "./TimeSlotCard";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
import TokenService from "../../../services/TokenService";
import { PatientService } from "../../../services/PatientService";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import BookingFailed from "./BookingFailed";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  maxPatientCount: number;
  patientCount: number;
}

interface Session {
  id: string;
  date: string;
  time: string;
  category: string;
  doctorId: string;
  doctorName: string;
  medicalcenterId: string;
  centerName: string;
  doctorNote: string;
  centerNote: string;
  maxPatientCount: number;
  registeredPatientCount: number;
}

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  maxPatientCount: number;
  patientCount: number;
}

const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const BookAppointment = () => {
  const location = useLocation();
  const { sessionId } = useParams<{ sessionId: string }>();
  const centerDetails = location.state?.details;
  const sessionDetails = location.state?.sessionDetails;

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(
    null
  );
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);

  // Backend URL from environment variables
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // Configuration for the API request
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  // Use React Query to fetch time slots
  const {
    data: timeSlots,
    isLoading,
    isError,
  } = useQuery<TimeSlot[]>({
    queryKey: ["timeSlots", sessionId, backendURL, config],
    queryFn: () => {
      // Ensure sessionId exists before making the request
      if (!sessionId) {
        throw new Error("No session ID provided");
      }
      return PatientService.getTimeSlotsBySessionId(
        backendURL,
        sessionId,
        config
      );
    },
    enabled: !!sessionId, // Only run the query if sessionId exists
    staleTime: 200000, // Cache data for 200 seconds
  });

  // Handle error case
  if (isError) {
    return <Navigate to="/" />;
  }

  // Handle loading state
  if (isLoading) {
    return <Loading footer={true} />;
  }

  // Handle checkbox change for terms agreement
  const handleTermsChange: CheckboxProps["onChange"] = (e) => {
    setIsTermsAgreed(e.target.checked);
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
  };

  // Handle booking appointment
  const handleBookAppointment = () => {
    if (!isTermsAgreed) {
      <BookingFailed />;
      return;
    }

    if (!selectedTimeSlot) {
      <BookingFailed />;
      return;
    }

    // Implement booking logic
    // This might involve calling a booking API endpoint
  };

  return (
    <>
      <div>
        <div>
          <p className="text-xl font-bold ml-[1%] mt-[1%]">
            Book Appointment - {centerDetails?.name}
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
                title: "{details?.name}",
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
                  <p className="font-bold">{sessionDetails.time}</p>
                </div>

                <div className="flex flex-col ml-10">
                  <p className="text-[#868686] text-sm">Date</p>
                  <p className="font-bold">{sessionDetails.date}</p>
                </div>

                <div className="flex flex-col ml-10 ">
                  <p className="text-[#868686] text-sm">Appointment Category</p>
                  <p className="font-bold">{sessionDetails.category}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <div>
              <p className="text-[#868686] text-sm ">Doctor’s Name</p>
              <a style={{ color: "orange-500" }}>
                <u>Dr.{sessionDetails.doctorName}</u>
              </a>
            </div>
            <div className="flex flex-col ml-10 justify-center ">
              <p className="text-[#868686] text-sm">Medical Center’s Name</p>
              <a style={{ color: "#F97316" }}>
                <u>{sessionDetails.CenterName}</u>
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
            <p className="">{sessionDetails.doctorNote}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Medical Center
            </p>
            <p className="">
             {sessionDetails.centerNote}
            </p>
          </div>
        </div>
        <div>
          <TimeSlotCard
            timeSlots={timeSlots || []}
            onTimeSlotSelect={handleTimeSlotSelect}
            selectedTimeSlot={selectedTimeSlot}
          />
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
              onClick={handleBookAppointment}
              style={{
                backgroundColor: "orange",
                borderColor: "orange",
                width: "200px",
                height: "40px",
              }}
              disabled={!isTermsAgreed || !selectedTimeSlot}
            >
              Book the Appointment
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BookAppointment;
