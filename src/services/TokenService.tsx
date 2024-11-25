import Swal from "sweetalert2";

interface TokenData {
  access_token: string;
}

export default class TokenService {
  // Method to get the access token from session storage
  static getToken(): string {
    let access_token: string = "";

    const sessionDataString: string | null = sessionStorage.getItem(
      "session_data-instance_0-ws3zT_tcti_dAXam7cpJ9eL9rvwa"
    );

    // If no session data found, show an error message
    if (!sessionDataString) {
      Swal.fire({
        title: "Error!",
        text: "No session token found. Please login!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return "";
    }

    try {
      // Parse session data to extract token
      const sessionData: TokenData = JSON.parse(sessionDataString);
      access_token = sessionData.access_token;

      // If token is empty, throw an error
      if (access_token === "") {
        throw new Error("Access token not found in session data");
      }

      return access_token;
    } catch (parseError) {
      // Handle JSON parse errors or invalid session data
      Swal.fire({
        title: "Error!",
        text: "Invalid session data, please login again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return "";
    }
  }
}
