import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg";
const MedicalCenterCard = () => {
  return (
    <>
      <div className="bg-[#DCDCDC] w-full rounded-[16px]">
        <div className=" text-[#FFFFFF] bg-[#363636] rounded-tl-lg rounded-br-lg p-3 w-fit flex items-center">
          <p className="mx-2">08.00 AM - 11.00 AM</p>
        </div>

        <div className="mt-1 bg-[#FF7300] text-[#FFFFFF] rounded-md p-2 w-fit flex items-center">
          <p className="mx-2">Book An Appointment</p>
        </div>
        <div>
          <div className="text-[#363636]">
            <p className="text-base font-semibold ml-4 mt-4">Doctor Details</p>
          </div>

          <div>
            <div className="flex justify">
              <div className="flex items-center justify-center">
                <img
                  className="w-20 h-20 rounded bg-contain ml-4 mr-6 mb-4"
                  src={profilepic}
                  alt="Profile Pic"
                />
              </div>
              <div className="mr-20">
                <p className="text-[#868686] text-sm">Name</p>
                <p className="mb-1">Dr. Nishantha Perera</p>
                <p className="text-[#868686] text-sm">Education</p>
                <p className="mb-1">MBBS (COL) specialized in cardiology</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
          <div className="text-[#363636]">
            <p className="text-base font-semibold mt-4">Additional Details</p>
          </div>
          <p className="text-[#868686] text-sm">Special Note From Doctor</p>
          <p>N/A</p>
          </div>
          <div className="ml-4">
          <div className="text-[#363636]">
            <p className="text-base font-semibold mt-4">Special Note From Medical Center</p>
          </div>
          <p className="text-[#868686] text-sm">Please arrive at least 15 minutes before your scheduled appointment time for payment.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalCenterCard;
