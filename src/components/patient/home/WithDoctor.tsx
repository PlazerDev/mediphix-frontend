import image from "./../../../assets/images/patient/home/with_doctor.png";

const WithDoctor = () => {
  return (
    <>
      <div className="flex h-full justify-center items-center m-3">
        <div className="">
          <img className=" w-[187px] h-[152px]" src={image} />
        </div>
        <div className="flex flex-col max-w-[380px]">
          <p className="text-xl mb-3.5 font-semibold text-justify">
            You are now with the doctor. Please discuss your health concerns and
            follow the doctor's advice.
          </p>
        </div>
      </div>
    </>
  );
};

export default WithDoctor;
