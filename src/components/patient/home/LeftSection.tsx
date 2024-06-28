import NoAppointment from "./NoAppointment";

const LeftSection = () => {
  return (
    <>
      <div className="w-2/3  bg-[#E3E3E3] flex-grow">
        <div className="flex h-full justify-center ml-4 p-4 bg-[#ffffff] rounded-[16px]">
          <NoAppointment />
        </div>
      </div>
    </>
  );
};

export default LeftSection;
