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
}
