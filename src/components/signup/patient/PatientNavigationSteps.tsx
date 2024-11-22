/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ConfigProvider, Steps } from "antd";

import LogoImg from "../../../assets/images/mediphix_withoutPadding.jpg";
import UserDetailsForm from "./UserDetailsForm";
import MobileNumberForm from "./MobileNumberForm";
import Verification from "./Verification";
import FormButtonSet from "./FormButtonSet";

import DoctorDetailsForm from "../doctor/DoctorDetailsForm";
import EmailandDocumetsFrom from "../EmailandDocumetsFrom";

import MedicalCenterDetailsForm from "../medical-officials/MedicalCenterDetailsForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Props {
  stepNumber: number;
  titleName: string;
  role: string;
}

function PatientNavigationSteps({ stepNumber, titleName, role }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); //this is handle axios erros
  const [errors, setErrors] = useState({}); //this is for form validation erros
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  let currentData: any;
  const validationErrors: any = {};
  const patientData = {
    fname: "",
    lname: "",
    mobile: "",
    dob: "",
    email: "",
    nationality: "",
    nic: "",
    address: "",
    password: "",
    confirmPassword: "",
  };
  const doctorData = {
    name: "",
    slmc: "",
    nic: "",
    education: "",
    mobile: "",
    specialization: [],
    email: "",
    password: "",
    confirmPassword: "",
    idfront: "",
    idback: "",
  };
  const otherData = {
    name: "",
    address: "",
    district: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
    idfront: "",
    idback: "",
  };
  if (role === "patient") {
    currentData = patientData;
  } else if (role === "doctor") {
    currentData = doctorData;
  } else if (role === "laboratary" || role === "medical center") {
    currentData = otherData;
  }

  const [formData, setFormData] = useState(currentData);

  const addMobile = (e: any) => {
    setFormData((prevData: any) => ({ ...prevData, mobile: e.target.value }));
  };

  const handleBackClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/signup/medicalofficials");
    }
  };

  const checkFormValidations = (role: any) => {
    if (currentStep == 1) {
      if (!formData.fname.trim()) {
        validationErrors.fname = "First Name is Requred";
      }

      if (!formData.lname.trim()) {
        validationErrors.lname = "Last Name is Requred";
      }
      if (!formData.dob.trim()) {
        validationErrors.dob = "Date of Birth is Requred";
      }
      if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formData.email)) {
        validationErrors.dob = "Email is invalid";
      }
    } else if (currentStep == 2) {
      if (!formData.mobile.trim()) {
        validationErrors.mobile = "Mobile Number is Requred";
      } else if (formData.mobile.length !== 9) {
        validationErrors.mobile = "Invalid Fromat";
      }

      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?`~])[A-Za-z\d!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?`~]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        validationErrors.password =
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.";
      } else if (formData.password !== formData.confirmPassword) {
        validationErrors.password = "Password Not match";
      }
    }
  };

  const handleNextClick = async () => {
    checkFormValidations(role);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setErrors({});
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      console.log(formData);

      // Update the formData state with the current formData values
      setFormData((prevData: any) => ({ ...prevData, ...formData }));
    } else if (currentStep === 3) {
      if (role === "patient") {
        setLoading(true);
        setError(null);
        try {
          // Make the POST request to the API endpoint for patient signup
          const response = await axios.post(
            "http://localhost:9090/signup/patient",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // navigate('/signup/registrationcomplete');
          // console.log('debug response');
          console.log(response);
          response.status == 200
            ? navigate("/")
            : console.error("Error in patientSignup:", error);

          // Handle success (e.g., navigate to a success page or show a success message)
        } catch (error) {
          console.log(error);
          console.log((error as any).response.data.message);
          // Handle the error as u need from here
        } finally {
          setLoading(false);
        }
      } else if (role === "doctor") {
        console.log(formData);
        setLoading(true);
        setError(null);
        try {
          // Make the POST request to the API endpoint for patient signup
          const response = await axios.post(
            "http://localhost:9090/signup/doctor",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // navigate('/signup/registrationcomplete');
          console.log("debug response");
          console.log(response);
          response.status == 200
            ? navigate("/signup/registrationcomplete")
            : console.error("Error in doctorSignup:", error);

          // Handle success (e.g., navigate to a success page or show a success message)
        } catch (error) {
          console.log(error);

          console.log((error as any).response.data.message);
          // Handle the error as u need from here
        } finally {
          setLoading(false);
        }
      } else if (role === "medical center") {
        console.log(formData);
        setLoading(true);
        setError(null);
        try {
          // Make the POST request to the API endpoint for patient signup
          const response = await axios.post(
            "http://localhost:9090/signup/medicalcenter",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // navigate('/signup/registrationcomplete');
          console.log("debug response");
          console.log(response);
          response.status == 200
            ? navigate("/signup/registrationcomplete")
            : console.error("Error in medicalCenterSignup:", error);

          // Handle success (e.g., navigate to a success page or show a success message)
        } catch (error) {
          console.log(error);

          console.log((error as any).response.data.message);
          // Handle the error as u need from here
        } finally {
          setLoading(false);
        }
      } else if (role === "laboratary") {
        console.log(formData);
        setLoading(true);
        setError(null);
        try {
          // Make the POST request to the API endpoint for patient signup
          const response = await axios.post(
            "http://localhost:9090/signup/laboratary",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // navigate('/signup/registrationcomplete');
          console.log("debug response");
          console.log(response);
          response.status == 200
            ? navigate("/signup/registrationcomplete")
            : console.error("Error in laboratarySignup:", error);

          // Handle success (e.g., navigate to a success page or show a success message)
        } catch (error) {
          console.log(error);

          console.log((error as any).response.data.message);
          // Handle the error as u need from here
        } finally {
          setLoading(false);
        }
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSpecializationChange = (value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      specialization: value,
    }));
  };

  const handleClick = () => {};

  // meken thami component handle wenne
  const renderComponent = () => {
    if (role === "patient") {
      const verificationTitles: string[] = [
        "First Name",
        "Last Name",
        "Mobile Number",
        "Date of Birth",
        "Email",
        "Nationality",
        "NIC",
        "Address",
      ];
      const verificationData: string[] = [
        "fname",
        "lname",
        "mobile",
        "dob",
        "email",
        "nationality",
        "nic",
        "address",
      ];
      switch (currentStep) {
        case 1:
          return (
            <UserDetailsForm
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick()}
              validationErrors={errors}
            />
          );
        case 2:
          return (
            <MobileNumberForm
              formData={formData}
              handleChange={handleChange}
              addMobile={addMobile}
              handleClick={handleClick}
              validationErrors={errors}
            />
          );
        case 3:
          return (
            <Verification
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              Voptions={verificationTitles}
              Vdata={verificationData}
              isLoading={loading}
            />
          );
        default:
          return null;
      }
    } else if (role === "doctor") {
      const verificationTitles: string[] = [
        "Name with Initials",
        "SLMC Reg No",
        "Education",
        "Mobile Number",
        "Email",
        "NIC",
        "Specialization",
      ];
      const verificationData: string[] = [
        "name",
        "slmc",
        "education",
        "mobile",
        "email",
        "nic",
        "specialization",
      ];
      switch (currentStep) {
        case 1:
          return (
            <DoctorDetailsForm
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              handleSelectChange={handleSpecializationChange}
              validationErrors={errors}
            />
          );
        case 2:
          return (
            <EmailandDocumetsFrom
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              validationErrors={errors}
            />
          );
        case 3:
          return (
            <Verification
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              Voptions={verificationTitles}
              Vdata={verificationData}
              isLoading={loading}
            />
          );
        default:
          return null;
      }
    } else if (role === "medical center") {
      const verificationTitles: string[] = [
        "Name",
        "Email",
        "Mobile",
        "District",
        "Address",
      ];
      const verificationData: string[] = [
        "name",
        "email",
        "mobile",
        "district",
        "address",
      ];
      switch (currentStep) {
        case 1:
          return (
            <MedicalCenterDetailsForm
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              validationErrors={errors}
              titleName={"Medical Center Name"}
            />
          );
        case 2:
          return (
            <EmailandDocumetsFrom
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              validationErrors={errors}
            />
          );
        case 3:
          return (
            <Verification
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              Voptions={verificationTitles}
              Vdata={verificationData}
              isLoading={loading}
            />
          );
        default:
          return null;
      }
    } else if (role === "laboratary") {
      const verificationTitles: string[] = [
        "Name",
        "Email",
        "Mobile",
        "District",
        "Address",
      ];
      const verificationData: string[] = [
        "name",
        "email",
        "mobile",
        "district",
        "address",
      ];
      switch (currentStep) {
        case 1:
          return (
            <MedicalCenterDetailsForm
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              validationErrors={errors}
              titleName={"Laboratary Name"}
            />
          );
        case 2:
          return (
            <EmailandDocumetsFrom
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              validationErrors={errors}
            />
          );
        case 3:
          return (
            <Verification
              formData={formData}
              handleChange={handleChange}
              handleClick={handleClick}
              Voptions={verificationTitles}
              Vdata={verificationData}
              isLoading={loading}
            />
          );
        default:
          return null;
      }
    }
  };

  let status1: "process" | "finish" | "wait" | "error" | undefined,
    status2: "process" | "finish" | "wait" | "error" | undefined,
    status3: "process" | "finish" | "wait" | "error" | undefined;

  switch (currentStep) {
    case 1:
      status1 = "process";
      status2 = status3 = "wait";
      break;
    case 2:
      status1 = "finish";
      status2 = "process";
      status3 = "wait";
      break;
    case 3:
      status1 = status2 = "finish";
      status3 = "process";
      break;
    default:
      status1 = status2 = status3 = "wait";
  }

  const nxt = () => {
    if (currentStep == 3) {
      return "Submit";
    } else {
      return "Continue";
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 16,
        },
      }}
    >
      <div className=" flex justify-center items-center mt-0">
        <div className="bg-[var(--card-background)] w-[62%] h-auto rounded-[25px] p-8 pt-0 flex flex-col items-center">
          <div className="flex justify-center w-full m-0">
            <img src={LogoImg} alt="Logo" className="w-[120px] h-[60px]" />
          </div>

          <div className="w-full">
            <Steps
              type="navigation"
              current={currentStep - 1} // 0-based index
              className="site-navigation-steps"
              items={[
                {
                  status: status1,
                  title: "User details",
                },
                {
                  status: status2,
                  title: titleName,
                },
                {
                  status: status3,
                  title: "Verification",
                },
              ]}
            />
          </div>

          <div className="w-full mt-4">{renderComponent()}</div>

          <FormButtonSet
            backDisplay={false}
            nxt={nxt()}
            onBackClick={handleBackClick}
            onNextClick={handleNextClick}
          />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default PatientNavigationSteps;
