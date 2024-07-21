import { HiCheckBadge } from "react-icons/hi2";
import companyLogo from "./../../assets/images/medical-center-staff/medical_center_logo.png";

function MCSGreetingVerificationName() {
  return (
    <div className="bg-mediphix_card_background inline-flex items-center gap-4 px-4 py-2 rounded-lg">
      <img src={companyLogo} className="rounded-2xl w-12 h-12" />
      <div>
        <p className="font-bold text-mediphix_accent">
          Medical Center Staff Member
        </p>
        <p>at Nawaloka Hospital</p>
      </div>
      <HiCheckBadge className="text-2xl text-mediphix_accent" />
    </div>
  );
}

export default MCSGreetingVerificationName;
