import { Breadcrumb } from "antd";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import { Button, message } from "antd";
import Footer from "../../Footer";
import TimeSlotCard from "./TimeSlotCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import TokenService from "../../../services/TokenService";
import { PatientService } from "../../../services/PatientService";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
import BookingFailed from "./BookingFailed";

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
  const navigate = useNavigate();
  const location = useLocation();
  const { sessionId } = useParams<{ sessionId: string }>();
  const sessionDetails = location.state.sessionDetails;

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

  // Fetch patient data
  const { data: patientData, isLoading: isPatientLoading } = useQuery({
    queryKey: ["patientData", backendURL],
    queryFn: () => PatientService.getPatientData(backendURL, config),
    enabled: !!backendURL, // Only run if backendURL exists
  });

  // Replace this with sample data since the backend function is not working
  const timeSlots: TimeSlot[] = [
    {
      id: "1",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      maxPatientCount: 10,
      patientCount: 2,
    },
    {
      id: "2",
      startTime: "11:00 AM",
      endTime: "12:00 AM",
      maxPatientCount: 10,
      patientCount: 10,
    },
    {
      id: "3",
      startTime: "12:00 AM",
      endTime: "01:00 PM",
      maxPatientCount: 10,
      patientCount: 7,
    },
  ];

  // // Use React Query to fetch time slots
  // const {
  //   data: timeSlots,
  //   isLoading: isTimeSlotsLoading,
  //   isError: isTimeSlotError,
  // } = useQuery<TimeSlot[]>({
  //   queryKey: ["timeSlots", sessionId, backendURL, config],
  //   queryFn: () => {
  //     // Ensure sessionId exists before making the request
  //     if (!sessionId) {
  //       throw new Error("No session ID provided");
  //     }
  //     return PatientService.getTimeSlotsBySessionId(
  //       backendURL,
  //       sessionId,
  //       config
  //     );
  //   },
  //   enabled: !!sessionId, // Only run the query if sessionId exists
  //   staleTime: 200000, // Cache data for 200 seconds
  // });

  // // Mutation for booking appointment
  // const bookAppointmentMutation = useMutation({
  //   mutationFn: async () => {
  //     // Validate required data
  //     if (!sessionId || !selectedTimeSlot || !patientData) {
  //       throw new Error("Missing required booking information");
  //     }

  //     // Prepare booking payload
  //     const bookingPayload = {
  //       sessionId: sessionId,
  //       doctorId: sessionDetails.doctorId,
  //       patientId: patientData._id, // Use patient ID from fetched patient data
  //       timeSlotId: selectedTimeSlot.id,
  //       medicalCenterId: sessionDetails.medicalcenterId,
  //       medicalCenterName: sessionDetails.centerName,
  //       category: sessionDetails.category,
  //     };

  //     // Call the booking service method
  //     return PatientService.bookAppointment(backendURL, bookingPayload, config);
  //   },
  //   onSuccess: (response) => {
  //     message.success("Appointment booked successfully!");
  //     navigate("/appointments/confirmation", {
  //       state: {
  //         appointmentDetails: response,
  //       },
  //     });
  //   },
  //   onError: (error: any) => {
  //     console.error("Booking failed", error);
  //     message.error(error.message || "Failed to book appointment");
  //   },
  // });

  // Handle loading and error states
  if (isPatientLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Loading footer={true} />
      </div>
    );
  }

  if (!patientData) {
    return <BookingFailed />;
  }

  // Handle checkbox change for terms agreement
  const handleTermsChange = (e: any) => {
    setIsTermsAgreed(e.target.checked);
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
  };

  // Handle booking appointment
  const handleBookAppointment = () => {
    if (!isTermsAgreed) {
      message.warning("Please agree to the terms and conditions");
      return;
    }

    if (!selectedTimeSlot) {
      message.warning("Please select a time slot");
      return;
    }
    // Trigger the booking mutation
    // bookAppointmentMutation.mutate();

    // Navigate to AppointmentSuccessful with necessary details
    navigate("/patient/appointment/appointmentsuccessful", {
      state: {
        patientCount: selectedTimeSlot.patientCount,
        payment: sessionDetails.payment,
        location: sessionDetails.location,
        startTime: selectedTimeSlot.startTime,
        endTime: selectedTimeSlot.endTime,
      },
    });
  };

  return (
    <>
      <div>
        <div>
          <p className="text-xl font-bold ml-[1%] mt-[1%]">
            Book Appointment - {sessionDetails?.medicalCenterName}
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
                title: <a href=""> Book appointment </a>,
              },
            ]}
          />
        </div>
        <div className="bg-[#ffffff] rounded-[16px]  p-6 ml-[1%] mr-[1%] mt-3">
          <div className="grid grid-cols-3 gap-4 w-full rounded-lg">
            <div className="col-span-3">
              <h2 className="text-black font-bold">
                Details of the Appointment
              </h2>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Time Frame</p>
              <p className="font-semibold">{sessionDetails.time}</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Date</p>
              <p className="font-semibold">{sessionDetails.sessionDate}</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">
                Appointment Category
              </p>
              <p className="font-semibold">{sessionDetails.category}</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Doctor's Name</p>
              <a className="text-orange-500">
                <u>Dr. {sessionDetails.doctorName}</u>
              </a>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">
                Medical Center's Name
              </p>
              <a className="text-orange-500">
                <u>{sessionDetails.medicalCenterName}</u>
              </a>
            </div>
            <div></div>
            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Consultation Fee</p>
              <p>Rs. {sessionDetails.payment}</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">
                Consultation Room No.
              </p>
              <p>{sessionDetails.location}</p>
            </div>

            {/* Optional: Empty cell to complete the 3x3 grid */}
          </div>
          <div>
            <p className="text-black text-l font-bold mt-6">
              Additional Details
            </p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Doctor
            </p>
            <p className="">{sessionDetails?.doctorNote}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Medical Center
            </p>
            <p className="">{sessionDetails?.medicalCenterNote}</p>
          </div>
        </div>
        <div>
          <TimeSlotCard
            timeSlots={timeSlots || []}
            onTimeSlotSelect={handleTimeSlotSelect}
            selectedTimeSlot={selectedTimeSlot}
          />
        </div>

        <div className="relative bg-[#ffffff] rounded-[16px] p-6 ml-[1%] mt-3 mb-1 mr-[1%] h-50">
          <p className="font-bold mb-6">Terms and Conditions Agreement</p>
          <p>
            By proceeding with the appointment booking, you agree to our terms
            and conditions. Please review the terms carefully before continuing.
          </p>
          <Checkbox checked={isTermsAgreed} onChange={handleTermsChange}>
            I have read and agree to the{" "}
            <a style={{ color: "#FF7300" }}>
              <u>Terms and Conditions.</u>
            </a>
          </Checkbox>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: "#868686",
                borderColor: "#868686",
                height: "40px",
              }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleBookAppointment}
              style={{
                backgroundColor: "#FF7300",
                borderColor: "#FF7300",
                width: "200px",
                height: "40px",
              }}
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
