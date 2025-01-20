import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Swal from "sweetalert2";
import ErrorService from "./ErrorService";

interface Patient {
  _id: string;
  mobile_number: string;
  first_name: string;
  last_name: string;
  nic: string;
  birthday: string;
  email: string;
  address: string;
  nationality: string;
  gender: string;
  allergies: string[];
  special_notes: string[];
  doctors: string[];
  medical_centers: string[];
  appointments: string[];
  medical_records: string[];
  lab_reports: string[];
}

interface Doctor {
  _id: string;
  name: string;
  slmc: string;
  nic: string;
  education: string[];
  mobile: string;
  specialization: string[];
  email: string;
  category: string[];
  availability: string[];
  verified: boolean;
  patients: string[];
  medical_centers: string[];
  sessions: string[];
  channellings: string[];
  medical_records: string[];
  lab_reports: string[];
  profileImage: string;
}

interface Center {
  _id: string;
  name: string;
  address: string;
  email: string;
  appointmentCategories: string[];
  noOfDoctors?: number;
  description?: string;
  mobile: string;
}

interface FormattedDateTime {
  sessionDate: string; // Format: "YYYY-MM-DD"
  time: string; // Format: "HH:MM AM - HH:MM PM"
}

interface Timestamp {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  timeAbbrev: string;
  dayOfWeek: number;
}

interface QueueOperations {
  defaultIncrementQueueNumber: number;
  ongoing: number;
  nextPatient1: number;
  nextPatient2: number;
  finished: number[];
  absent: number[];
}

interface Queue {
  appointments: number[];
  queueOperations?: QueueOperations;
}

interface TimeSlot {
  slotId: number;
  startTime: string;
  maxNoOfPatients: number;
  status: string;
  queue?: Queue;
}

interface Session {
  _id: string;
  endTimestamp: Timestamp;
  startTimestamp: Timestamp;
  doctorId: string;
  medicalCenterId: string;
  aptCategories: string[];
  payment: number;
  hallNumber: string;
  noteFromCenter?: string;
  noteFromDoctor?: string;
  overallSessionStatus: string;
  timeSlots: TimeSlot[];
  formattedDateTime: FormattedDateTime;
}

interface AppointmentResponse {
  message: string;
  appointmentNumber: number;
}

interface BookingPayload {
  sessionId: string;
  timeSlot: number;
  patientId: string;
  patientName: string;
  queueNumber: number;
  aptCategories: string[];
  doctorId: string;
  doctorName: string;
  medicalCenterId: string;
  medicalCenterName: string;
  paymentAmount: number;
}

interface UpcomingAppointment {
  _id: string;
  aptNumber: number;
  sessionId: string;
  timeSlot: number;
  aptCategories: string[];
  doctorId: string;
  doctorName: string;
  medicalCenterId: string;
  medicalCenterName: string;
  payment: {
    isPaid: boolean;
    amount: number;
    handleBy: string;
  };
  aptCreatedTimestamp: Timestamp;
  aptStatus: string;
  patientId: string;
  patientName: string;
  queueNumber: number;
  medicalRecord:{

  }
}

interface ReportDetails {
  testStartedTimestamp: Timestamp;
  testEndedTimestamp: Timestamp;
  additionalNote?: string;
  resultFiles?: string[];
}

interface LabReport {
  requestedTimestamp: Timestamp;
  isHighPrioritize: boolean;
  testType: string;
  testName: string;
  noteToLabStaff: string;
  status: number;
  reportDetails?: ReportDetails;
}

interface Treatment {
  medications: string[];
  description: string[];
}

interface Diagnosis {
  category: string[];
  description: string[];
}

interface Payment {
  isPaid: boolean;
  amount: number;
  handleBy: string;
  paymentTimestamp?: Timestamp;
}

interface MedicalRecord {
  aptNumber: number;
  startedTimestamp: Timestamp;
  endedTimestamp: Timestamp;
  symptoms: string[];
  diagnosis: Diagnosis;
  treatments: Treatment;
  noteToPatient?: string;
  isLabReportRequired: boolean;
  labReport?: LabReport;
}

interface Appointment {
  _id?: string;
  aptNumber: number;
  sessionId: string;
  timeSlot: number;
  aptCategories: string[];
  doctorId: string;
  doctorName: string;
  medicalCenterId: string;
  medicalCenterName: string;
  payment: Payment;
  aptCreatedTimestamp: Timestamp;
  aptStatus: string;
  patientId: string;
  patientName: string;
  queueNumber: number;
  medicalRecord?: MedicalRecord;
}

export const formatSessionDateTime = (session: Session) => {
  const padNumber = (num: number): string => num.toString().padStart(2, "0");

  const formatToAmPm = (hour: number, minute: number): string => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${padNumber(formattedHour)}:${padNumber(minute)} ${period}`;
  };

  const sessionDate = `${session.startTimestamp.year}-${padNumber(
    session.startTimestamp.month
  )}-${padNumber(session.startTimestamp.day)}`;
  const startTime = formatToAmPm(
    session.startTimestamp.hour,
    session.startTimestamp.minute
  );
  const endTime = formatToAmPm(
    session.endTimestamp.hour,
    session.endTimestamp.minute
  );

  return {
    sessionDate,
    time: `${startTime} - ${endTime}`,
  };
};

export class PatientService {
  static async getPatientData(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<Patient | undefined> {
    try {
      const response: AxiosResponse<Patient> = await axios.get(
        `${backendURL}/patient/patientdata`,
        config
      );

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }

  static async getDoctorData(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<Doctor[] | undefined> {
    try {
      const response: AxiosResponse<Doctor[]> = await axios.get(
        `${backendURL}/patient/doctordata`,
        config
      );

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }

  static async getCenterData(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<Center[] | undefined> {
    try {
      const response: AxiosResponse<Center[]> = await axios.get(
        `${backendURL}/patient/centerdata`,
        config
      );

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }

  static async getSessionsByDoctorId(
    backendURL: string,
    doctorId: string,
    config: AxiosRequestConfig
  ): Promise<Session[] | undefined> {
    try {
      const response: AxiosResponse<Session[]> = await axios.get(
        `${backendURL}/patient/appointment/${doctorId}/sessiondetails`,
        config
      );

      if (response.status === 200) {
        return response.data.map((session) => ({
          ...session,
          formattedDateTime: formatSessionDateTime(session),
        }));
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }

  static async getDoctorDetailsByDoctorId(
    backendURL: string,
    doctorId: string,
    config: AxiosRequestConfig
  ): Promise<Doctor | undefined> {
    try {
      const response: AxiosResponse<Doctor> = await axios.get(
        `${backendURL}/patient/getDoctorDetails/${doctorId}`,
        config
      );

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }
 

  static async bookAppointment(
    backendURL: string,
    bookingPayload: BookingPayload,
    config: any
  ) :Promise<AppointmentResponse>{
    try {
      const response = await axios.post<AppointmentResponse>(
        `${backendURL}/patient/appointment`,
        bookingPayload,
        config
      );

      return {
        message: response.data.message,
        appointmentNumber: response.data.appointmentNumber
      };
      
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(
            error.response.data.message ||
              "Failed to book appointment. Please try again."
          );
        } else if (error.request) {
          throw new Error(
            "No response received from server. Please check your connection."
          );
        } else {
          throw new Error("Error setting up appointment booking request.");
        }
      } else {
        throw new Error(
          "An unexpected error occurred while booking appointment."
        );
      }
    }
  }

  static async getUpcomingAppointments(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<UpcomingAppointment | undefined> {
    try {
      const response: AxiosResponse<UpcomingAppointment> = await axios.get(
        `${backendURL}/patient/getUpcomingAppointments`,
        config
      );

      console.log("Response from upcoming appointments:", response.data);

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }

  static async getPreviousAppointments(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<Appointment | undefined> {
    try {
      const response: AxiosResponse<Appointment> = await axios.get(
        `${backendURL}/patient/getPreviousAppointments`,
        config
      );

      console.log("Response from previous appointments:", response.data);

      if (response.status === 200) {
        return response.data;
      } else {
        ErrorService.handleError(response);
        return undefined;
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined;
    }
  }
}
