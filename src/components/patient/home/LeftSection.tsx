import InTheQueue from "./InTheQueue";

const LeftSection = () => {
  return (
    <>
      <div className="w-2/3 bg-[#E3E3E3]">
        <div className="flex justify-center ml-4 p-8 bg-[#ffffff] rounded-[16px]">
          <InTheQueue/>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
