import image from "./../../../assets/images/patient/home/queue_details.png";

interface QueueDetailsProps {
  currentNo: number;
  yourNo: number;
  hallReference: string;
}
const QueueDetails = ({currentNo, yourNo, hallReference}: QueueDetailsProps) => {
  return (
    <>
      <div className="flex h-full justify-center items-center">
        <div className="">
          <img className=" w-[203px] h-[112px] mr-10" src={image} />
        </div>
        <div className="flex flex-col max-w-[400px]">
          <p className="text-lg mb-1 font-semibold">
            You are currently in the queue. Please <br />
            wait for your turn.
          </p>
          <div className="grid grid-cols-3 gap-x-1">
            <div>
              <p className="text-[12px] ">Current Queue Number</p>
            </div>
            <div>
              <p className="text-[12px] ml-5">Your Number</p>
            </div>
            <div>
              <p className="text-[12px]">Hall Reference</p>
            </div>
            <div className="">
              <p className="text-sm text-[#FFFFFF] bg-[#363636] h-8 w-8 p-1 text-center rounded-lg">
                {currentNo}
              </p>
            </div>
            <div>
              <p className="text-sm ml-5 text-[#FFFFFF] bg-[#FF7300] h-8 w-8 p-1 text-center rounded-lg">
                {yourNo}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#FFFFFF] bg-[#363636] h-8 w-20 p-1 text-center rounded-lg">
                {hallReference}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueueDetails;
