import image from "./../../../assets/images/patient/home/queue_details.png";

const QueueDetails = () => {
  return (
    <>
      <div className="flex h-full justify-center items-center m-3">
        <div className="">
          <img className=" w-[233px] h-[142px]" src={image} />
        </div>
        <div className="flex flex-col max-w-[400px]">
          <p className="text-xl mb-3.5 font-semibold">
            You are currently in the queue. Please <br />
            wait for your turn.
          </p>
          <div className="grid grid-cols-3 gap-1">
            <div>
              <p className="text-[12px] ">Current Queue Number</p>
            </div>
            <div>
              <p className="text-[12px] ml-5">Your Number</p>
            </div>
            <div>
              <p className="text-[12px]">Hall Reference</p>
            </div>
            <div>
              <p className="text-sm text-[#FFFFFF] bg-[#363636] h-8 w-8 p-1 text-center rounded-lg">
                03
              </p>
            </div>
            <div>
              <p className="text-sm ml-5 text-[#FFFFFF] bg-[#FF7300] h-8 w-8 p-1 text-center rounded-lg">
                07
              </p>
            </div>
            <div>
              <p className="text-sm text-[#FFFFFF] bg-[#363636] h-8 w-20 p-1 text-center rounded-lg">
                HALL-A
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueueDetails;
