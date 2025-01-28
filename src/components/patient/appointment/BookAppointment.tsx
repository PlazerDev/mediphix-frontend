import { Breadcrumb } from "antd";
import { Checkbox } from "antd";
import { Button, message } from "antd";
import Footer from "../../Footer";
import TimeSlotCard from "./TimeSlotCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import TokenService from "../../../services/TokenService";
import { PatientService } from "../../../services/PatientService";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";
interface TimeSlot {
  slotId: number;
  startTime: string;
  maxNoOfPatients: number;
  status: string;
  queue?: {
    appointments: number[];
    queueOperations?: {
      defaultIncrementQueueNumber: number;
      ongoing: number;
      nextPatient1: number;
      nextPatient2: number;
      finished: number[];
      absent: number[];
    };
  };
}

interface AppointmentSuccessDetails {
  appointmentNumber: number;
  queueNumber: number;
  startTime: string;
  payment: number;
  hallNo: string;
  message: string;
}

const BookAppointment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sessionDetails = location.state.sessionDetails;
  const centerDetails = location.state.details;

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(
    null
  );
  const [isTermsAgreed, setIsTermsAgreed] = useState<boolean>(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TokenService.getToken()}`,
    },
  };

  const { data: patientData, isLoading: isPatientLoading } = useQuery({
    queryKey: ["patientData", backendURL],
    queryFn: () => PatientService.getPatientData(backendURL, config),
  });

  const { data: doctorData, isLoading: isdoctorLoading } = useQuery({
    queryKey: ["doctorData", sessionDetails.doctorId],
    queryFn: () =>
      PatientService.getDoctorDetailsByDoctorId(
        backendURL,
        sessionDetails.doctorId,
        config
      ),
  });

  const bookAppointmentMutation = useMutation({
    mutationFn: async () => {
      try {
        if (
          !selectedTimeSlot ||
          !patientData ||
          !doctorData ||
          !sessionDetails ||
          !centerDetails
        ) {
          throw new Error("Error Occured, Please Try again later.");
        }

        let bookingPayload = {
          sessionId: sessionDetails._id,
          timeSlot: selectedTimeSlot.slotId,
          patientId: patientData._id,
          patientName: `${patientData.first_name} ${patientData.last_name}`,
          queueNumber: selectedTimeSlot.queue?.appointments?.length
            ? selectedTimeSlot.queue.appointments.length + 1
            : 1,
          aptCategories: sessionDetails.aptCategories,
          doctorId: sessionDetails.doctorId,
          doctorName: doctorData.name,
          medicalCenterId: sessionDetails.medicalCenterId,
          medicalCenterName: centerDetails.name,
          paymentAmount: Number(sessionDetails.payment),
          aptStatus:
            sessionDetails.overallSessionStatus === "ONGOING"
              ? "INQUEUE"
              : "ACTIVE",
        };

        return await PatientService.bookAppointment(
          backendURL,
          bookingPayload,
          config
        );
      } catch (error: any) {
        throw new Error(`Booking failed: ${error.message}`);
      }
    },
    onSuccess: (response) => {
      message.success("Appointment booked successfully!");
      const appointmentDetails: AppointmentSuccessDetails = {
        appointmentNumber: response.appointmentNumber,
        queueNumber: selectedTimeSlot!.queue?.appointments?.length
          ? selectedTimeSlot!.queue.appointments.length + 1
          : 1,
        startTime: selectedTimeSlot!.startTime,
        payment: Number(sessionDetails.payment),
        hallNo: sessionDetails.hallNumber,
        message: response.message,
      };

      navigate("/patient/appointment/appointmentsuccessful", {
        state: {
          appointmentDetails,
        },
      });
    },
    onError: (error: any) => {
      console.error("Booking failed", error);
      message.error(error.message || "Failed to book appointment");
      navigate("patient/appointment/bookingfailed");
    },
  });

  if (isPatientLoading || isdoctorLoading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
        <Loading footer={true} />
      </div>
    );
  }

  const handleTermsChange = (e: any) => {
    setIsTermsAgreed(e.target.checked);
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot);
  };

  const handleBookAppointment = () => {
    if (!isTermsAgreed) {
      message.warning("Please agree to the terms and conditions");
      return;
    }

    if (!selectedTimeSlot) {
      message.warning("Please select a time slot");
      return;
    }

    bookAppointmentMutation.mutate();
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
              <p className="font-semibold">
                {sessionDetails.formattedDateTime.time}
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Date</p>
              <p className="font-semibold">
                {sessionDetails.formattedDateTime.sessionDate}
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">
                Appointment Category
              </p>
              <p className="font-semibold">
                {sessionDetails.aptCategories.join(", ")}
              </p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">Doctor's Name</p>
              <a className="text-orange-500">
                <u>Dr. {doctorData?.name}</u>
              </a>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[#868686] text-sm mb-1">
                Medical Center's Name
              </p>
              <a className="text-orange-500">
                <u>{centerDetails.name}</u>
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
              <p>{sessionDetails.hallNumber}</p>
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
            <p className="">{sessionDetails?.noteFromDoctor}</p>
          </div>
          <div>
            <p className="text-[#868686] text-sm mt-3">
              Special Note From Medical Center
            </p>
            <p className="">{sessionDetails?.noteFromCenter}</p>
          </div>
        </div>
        <div>
          <TimeSlotCard
            timeSlots={sessionDetails.timeSlots}
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
