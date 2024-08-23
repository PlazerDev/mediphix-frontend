import ProfileOverview from "./ProfileOverview";
import UpcomingAppointment from "./UpcomingAppointment ";
import Footer from "./../../Footer";
import "../../../assets/css/page_loading_animation.css";
import {useState, useEffect} from "react";
import NoAppointment from "./NoAppointment";
import OngoingAppointment from "./OngoingAppointment";
import NoUpcomingAppointment from "./NoUpcomingAppointment";
import Token from "./Token";
import {useQuery} from "@tanstack/react-query";
import axios, {AxiosRequestConfig} from "axios";
import Loading from "../../Loading.tsx";
import Swal from 'sweetalert2';
import LandingPage from "../../../pages/LandingPage.tsx";
import {data} from "autoprefixer";
import {Navigate} from "react-router-dom";

const backendURL = import.meta.env.VITE_BACKEND_URL;

interface Patient {
    mobile_number: string;
    first_name: string;
    last_name: string;
    nic: string;
    birthday: string;
    email: string;
    address: string;
    nationality: string;
}

interface TokenData {
    access_token: string;
}

const PatientHome = () => {
    const [isOngoingAppointment, setIsOngoingAppointment] = useState(true);
    // const [loaded, setLoaded] = useState(false);
    // 0-start
    // 1-in the queue
    // 2-ongoing
    //These status are according to steps component in ant DesignTokenContext. So don't change them
    const [ongoingAppointmentStatus, setOngoingAppointmentStatus] = useState(0);

    const [appointmentDetails, setAppointmentDetails] = useState({
        date: "2024/06/17",
        time: "06.00 PM - 07.00PM",
        doctor: "B.KARUNARATNE",
        category: "OPD",
        queueNo: "07",
        referenceNo: "REF_8056",
        medicalCenter: "Aloka Clinic & Laboratory",
        phoneNo: "0114500500",
    });

    const [queueDetails, setQueueDetails] = useState({
        currentNo: 3,
        yourNo: 7,
        hallReference: "HALL-A",
    });

    const [isUpcomingAppointment, setIsUpcomingAppointment] = useState(true);

    //take only latest two from the backend
    const [upcommingAppointments, setUpcommingAppointments] = useState([
        {
            date: "JUN 17",
            time: "05.00 PM - 06.00 PM",
            number: "07",
            doctor: "B.KARUNARATNE",
            location: "Aloka Clinic & Laboratory",
        },
        {
            date: "JUN 29",
            time: "10.00 AM - 11.00 AM",
            number: "01",
            doctor: "B.KARUNARATNE",
            location: "Aloka Clinic & Laboratory",
        },
    ]);

    // const [patientDetails, setPatientDetails] = useState({
    //     mobile_number: "0766936981",
    //     first_name: "Kasun",
    //     last_name: "Atigala",
    //     nic: "200011504872",
    //     birthday: "2000-04-24",
    //     email: "sashmitharavindu77@gmail.com",
    //     address: "9A, Samudra Mawatha, Wellawatta",
    //     nationality: "srilankan",
    // });

    let access_token: string = "";

    function getToken(): string {
        const sessionDataString: string | null = sessionStorage.getItem('session_data-instance_0-ws3zT_tcti_dAXam7cpJ9eL9rvwa');

        if (!sessionDataString) {
            Swal.fire({
                title: 'Error!',
                text: 'No session token found. Please login!',
                icon: 'error',
                confirmButtonText: 'OK',
            })
            return "";
        }

        try {
            const sessionData: TokenData = JSON.parse(sessionDataString);
            access_token = sessionData.access_token;
            if (access_token == "") {
                throw new Error("Access token not found in session data");
            }
            return access_token;
        } catch (parseError) {
            Swal.fire({
                title: 'Error!',
                text: "Invalid session data please login again.",
                icon: "error",
                confirmButtonText: 'OK'
            })
            return "";
        }
    }

    access_token = getToken();

    console.log("Access token: " + access_token);

    // if (access_token == "") {
    //
    // }

    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    };

    const {
        data: patientDetails,
        isError,
        isPending,
        error
    } = useQuery({
        queryKey: ["patient", {backendURL}, {config}],
        queryFn: async () => {
            const response = await axios.get<Patient>(`${backendURL}/patient/patientdata`, config);

            if (response.status === 200) {
                // Swal.fire({
                //     title: 'Success!',
                //     text: 'Welcome to Patient Dashboard! Patient Data fetched successfully.',
                //     icon: 'success',
                //     confirmButtonText: 'OK',
                // });
                return (await response.data) as Patient;
            } else if (response.status === 401) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Unauthorized, please login again (401).',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            } else if (response.status === 403) {
                Swal.fire({
                    title: 'Error!',
                    text: 'You do not have access to patient dashboard, please login via correct portal (403).',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            } else if (response.status === 404) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Patient not found (404).',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            } else if (response.status === 500) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Internal server error (500). Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: `Unexpected error occurred (status code: ${response.status}).`,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            }
        },
    });

    if (!patientDetails) {

    }

    if (isError) {
        return (<span>Error occurred: ${error}</span>);
    }

    // useEffect(() => {
    //     const fetchPatient = async () => {
    //
    //         setIsLoading(true);
    //         const sessionDataString = sessionStorage.getItem('session_data-instance_0-ws3zT_tcti_dAXam7cpJ9eL9rvwa');
    //         const sessionData = JSON.parse(sessionDataString);
    //         const token = sessionData.access_token;
    //
    //         console.log("token: "+token);
    //         try{
    //             const resp = await fetch("http://localhost:9000/patient/patientdata", {
    //                 method: 'GET',
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Authorization": `Bearer ${token}`,
    //                 }
    //             }).then(response => response.json()).then(data => {
    //                 console.log(data);
    //                 setPatientDetails(data);
    //             });
    //             // const patient = await resp.json() as Patient;
    //             // setPatientDetails(patient);
    //         }catch (e){
    //             setError(e);
    //         }finally {
    //             setIsLoading(false);
    //         }
    //
    //     }
    //     fetchPatient();
    // }, []);
    //
    // if (error) {
    //     return (<span>Error occurred: ${error}</span>);
    // }

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         // setLoaded(true);
    //     }, 100);
    //
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            <div className="flex flex-col">
                {isPending && <Loading footer={true}/>}
                {!isPending &&
                    <div className={`flex flex-col ${!isPending ? "fade-in" : ""}`}>
                        <div className="mt-2 ml-4">
                            <p className="  text-xl font-bold">
                                Good Evening, {patientDetails?.first_name}
                            </p>
                            <p className="text-sm mb-2">We hope you're having a great day.</p>
                        </div>
                        <div className="flex flex-grow">
                            <div className="w-2/3 flex-grow ">
                                <div className="flex justify-center ml-4 p-4 bg-[#ffffff] rounded-[16px]">
                                    {isOngoingAppointment ? (
                                        <>
                                            {" "}
                                            <div className="flex flex-col  w-full">
                                                <OngoingAppointment
                                                    status={ongoingAppointmentStatus}
                                                    appointmentDetails={appointmentDetails}
                                                    queueDetails={queueDetails}
                                                />
                                                <div className="flex justify-center mt-1">
                                                    <Token {...appointmentDetails} />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <NoAppointment/>
                                    )}
                                </div>
                            </div>

                            <div className="w-1/3  flex flex-col mx-4">
                                {isUpcomingAppointment ? (
                                    <UpcomingAppointment
                                        upcomingAppointments={upcommingAppointments}
                                    />
                                ) : (
                                    <NoUpcomingAppointment/>
                                )}

                                <ProfileOverview {...patientDetails} />
                            </div>
                        </div>
                        <Footer/>
                    </div>
                }

            </div>
        </>
    );
};

export default PatientHome;
