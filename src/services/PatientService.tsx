import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import Swal from "sweetalert2";
import ErrorService from "./ErrorService";

interface Patient {
  mobile_number: string;
  first_name: string;
  last_name: string;
  nic: string;
  birthday: string;
  email: string;
  address: string;
  nationality: string;
  gender: string;
}

interface Doctor {
  id: string;
  name: string;
  degree: string;
  speciality: string;
  appointmentCategory: string[];
  description: string;
  centers: string[];
}

interface Center {
  id: string;
  name: string;
  address: string;
  appointmentCategory: string[];
  noOfDoctors: number;
  description: string;
  phoneNo: string;
}

interface AppointmentDate {
  date: string; // Format: YYYY-MM-DD
}

interface Session {
  id: string;
  date: string;
  time: string;
  category: string;
  doctorName: string;
  centerName: string;
  doctorNote: string;
}

interface TimeSlot{
  id: string;
  startTime: string;
  endTime: string;
  maxPatientCount: number;
  patientCount: number;
}

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
        ErrorService.handleError(response); // Handle non-200 status codes
        return undefined; // Return undefined on failure
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return undefined; // Return undefined on error
    }
  }

  static async getDoctorData(
    backendURL: string,
    config: AxiosRequestConfig
  ): Promise<Doctor[] | undefined> {
    try {
      const response: AxiosResponse<Doctor[]> = await axios.get(
        `${backendURL}/patient/doctorData`,
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
        `${backendURL}/patient/centerData`,
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

  static async getDoctorAppointmentDates(
    backendURL: string,
    doctorId: string,
    config: AxiosRequestConfig
  ): Promise<AppointmentDate[] | undefined> {
    try {
      const response: AxiosResponse<AppointmentDate[]> = await axios.get(
        `${backendURL}/patient/${doctorId}/appointmentDates`,
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

  static async getSessionsByDoctorAndDate(
    backendURL: string,
    doctorId: string,
    appointmentDate: string,
    config: AxiosRequestConfig
  ): Promise<Session[] | undefined> {
    try {
      const response: AxiosResponse<Session[]> = await axios.get(
        `${backendURL}/patient/${doctorId}/sessions`,
        {
          ...config,
          params: { date: appointmentDate },
        }
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

  static async getTimeSlotsBySessionId(
    backendURL: string,
    sessionId: string,
    config: AxiosRequestConfig
  ): Promise<TimeSlot[] | undefined> {
    try {
      const response: AxiosResponse<TimeSlot[]> = await axios.get(
        `${backendURL}/session/${sessionId}/timeslots`,
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
}
