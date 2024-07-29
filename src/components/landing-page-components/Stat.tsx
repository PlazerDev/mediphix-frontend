import StatElement from "./StatElement";
import img from "./../../assets/images/landing-page/stat_img.png";

function Stat() {
  return (
    <div className="bg-white px-24 py-8">
      <div className="flex flex-row justify-center items-center gap-8">
        <StatElement number={500} title={"Qualified Doctors"} />
        <p className="text-5xl font-extrabold">+</p>
        <StatElement number={150} title={"Certified Medical Centers"} />
        <p className="text-5xl font-extrabold">+</p>
        <StatElement number={75} title={"Certified Laboratories "} />
      </div>
      <div className="flex justify-center my-2">
        <img src={img} alt="" className="object-contain" />
      </div>
      <div>
        <StatElement number={10000} title={"Satisfied Patients"} />
      </div>
    </div>
  );
}

export default Stat;
