import { useAuthContext } from "@asgardeo/auth-react";
import logo from "./../../assets/images/mediphix_logo_white.png";
import BtnWithBorder from "./BtnWithBorder";
import BtnWithoutBorder from "./BtnWithoutBorder";
import DropDown from "./DropDown";
function Navigation() {
  const { signIn } = useAuthContext();
  return (
    <div className="bg-mediphix_accent px-24 py-4 flex flex-row justify-between items-center ">
      <img src={logo} alt="logo" className="object-contain h-8" />
      <div className="flex gap-4 text-[#ededed] ">
        <DropDown />
        <p className="hover:cursor-pointer hover:text-white">Features</p>
        <p className="hover:cursor-pointer hover:text-white">Feedbacks</p>
        <p className="hover:cursor-pointer hover:text-white">FAQ</p>
      </div>
      <div className="flex flex-row gap-4">
        <BtnWithoutBorder title="Login" onClickFunction={() => signIn()} />
        <BtnWithBorder title="Register" />
      </div>
    </div>
  );
}

export default Navigation;
