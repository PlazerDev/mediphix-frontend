import Footer from "../Footer";
import wdgetBG from "./../../assets/images/signup/widgetsBg.png";
import PatientNavigationSteps from "./patient/PatientNavigationSteps";

interface Props {
  stepNumber: number;
  titleName: string;
  role: string;
}
function SignupBg({ stepNumber, titleName, role }: Props) {
  return (
    <div
      className=" w-screen h-screen p-10 pl-28 pr-28 bg-contain bg-right "
      style={{
        backgroundImage: `url(${wdgetBG})`,
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "luminosity",
      }}
    >
      <PatientNavigationSteps
        stepNumber={stepNumber}
        titleName={titleName}
        role={role}
      />

      <Footer />
    </div>
  );
}

export default SignupBg;
