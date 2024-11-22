import Swal from "sweetalert2";

interface ErrorResponse {
  status: number; // HTTP status code
  statusText?: string; // Optional status text
  data?: any; // Optional data payload from the response
}

export default class ErrorService {
  static handleError(response: ErrorResponse): void {
    const status = response?.status;
    let title = "Error!";
    let text = "An unexpected error occurred.";
    let icon = "error";

    switch (status) {
      case 401:
        title = "Unauthorized Access";
        text =
          "Your session has expired or you are not authorized. Please log in again.";
        icon = "warning";
        break;
      case 403:
        title = "Access Denied";
        text =
          "You do not have permission to perform this action. Please contact support if you believe this is a mistake.";
        break;
      case 404:
        title = "Not Found";
        text =
          "The requested resource could not be found. Please try again later or check the URL.";
        icon = "info";
        break;
      case 500:
        title = "Server Error";
        text =
          "An error occurred on the server. Please try again later or contact support if the issue persists.";
        break;
      default:
        text = `Unexpected error occurred. (Error Code: ${
          status || "Unknown"
        })`;
        break;
    }

    Swal.fire({
      title: title,
      text: text,
      icon: "error", // fix it later
      confirmButtonText: "OK",
    });
  }
}
