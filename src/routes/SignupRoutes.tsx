import SignupBg from "../components/signup/SignupBg";
import SignupLanding from "../components/signup/SignupLanding";
import SelectCheckbox from "../components/signup/SelectCheckbox";
import RegistrationComplete from "../components/signup/RegistrationComplete";
import ConfigProvider from "antd/es/config-provider";
import { Route, Routes } from "react-router-dom";

function SignupRoutes() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff7300",
          colorInfo: "#ff7300",
          borderRadius: 8,
        },
      }}
    >
      <Routes>
        <Route path="/" element={<SignupLanding />} />
        <Route path="/medicalofficials" element={<SelectCheckbox />} />
        <Route
          path="/registrationcomplete"
          element={<RegistrationComplete />}
        />
        <Route
          path="/patient"
          element={
            <SignupBg titleName="Mobile Number" stepNumber={1} role="patient" />
          }
        />
        <Route
          path="/doctor"
          element={
            <SignupBg
              titleName="Email & Documents"
              stepNumber={1}
              role="doctor"
            />
          }
        />
        <Route
          path="/medicalcenter"
          element={
            <SignupBg
              titleName="Email & Documents"
              stepNumber={1}
              role="medical center"
            />
          }
        />
        <Route
          path="/laboratary"
          element={
            <SignupBg
              titleName="Email & Documents"
              stepNumber={1}
              role="laboratary"
            />
          }
        />
      </Routes>
    </ConfigProvider>
  );
}

export default SignupRoutes;
