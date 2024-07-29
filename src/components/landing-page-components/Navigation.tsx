import logo from "./../../assets/images/mediphix_logo_white.png";
import BtnWithBorder from "./BtnWithBorder";
import BtnWithoutBorder from "./BtnWithoutBorder";
import DropDown from "./DropDown";
function Navigation() {
  return (
    <div className="bg-mediphix_accent px-24 py-4 flex flex-row justify-between items-center">
      <img src={logo} alt="logo" className="object-contain h-8" />
      <div className="flex gap-4 text-[#ededed] hover:cursor-pointer hover:text-white">
        <DropDown />
        <p>Features</p>
        <p>Feedbacks</p>
        <p>FAQ</p>
      </div>
      <div className="flex flex-row gap-4">
        <BtnWithoutBorder title="Login" />
        <BtnWithBorder title="Register" />
      </div>
    </div>
  );
}

export default Navigation;
