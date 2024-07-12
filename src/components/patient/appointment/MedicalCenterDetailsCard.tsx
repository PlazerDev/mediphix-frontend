import profilepic from "./../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg"

const MedicalCenterDetailsCard = () => {
  return (
    <>
      <div className="bg-[#DCDCDC] w-full rounded-[16px]">
        <div className=" flex justify-between">
          <div className=" text-[#FFFFFF] bg-[#363636] rounded-tl-lg rounded-br-lg p-3 w-fit flex items-center">
            <p className="mx-2">08.00 AM - 11.00 AM</p>
          </div>

          <div className="bg-[#FF7300] text-[#FFFFFF] rounded-md p-2 w-fit flex items-center mt-4 mr-4">
            <p className="mx-2">Book An Appointment</p>
          </div>
        </div>

        <div className="ml-4">
          <p className="text-[#868686] text-sm mt-3">Appointment Category </p>
          <p className="font-semibold">OPD</p>
        </div>

        <div>
          <div className="text-[#363636]">
            <p className="text-base font-semibold ml-4 mt-6 mb-3">Medical Center Details</p>
          </div>

          <div>
            <div className="flex justify">
              <div className="flex items-center justify-center">
                <img
                  className="w-20 h-20 rounded bg-contain ml-4 mr-6 mb-4"
                  src={profilepic}
                  alt="Nawaloka Hospitals"
                />
              </div>
              <div className="mr-20">
                <p className="text-[#868686] text-sm">Name</p>
                <p className="mb-1 text-[#FF7300] underline">Nawaloka Hospital</p>
                <p className="text-[#868686] text-sm">Contact Number</p>
                <p className="mb-1">011-5777777</p>
              </div>
              <div>
              <p className="text-[#868686] text-sm">Location</p>
                <p className="mb-1">23 , Deshamanya H K Dharmadasa Mawatha, Colombo 00200</p>
                <p className="text-[#868686] text-sm">E-mail</p>
                <p className="mb-1">nawaloka@slt.lk</p>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <div className="text-[#363636]">
              <p className="text-base font-semibold mt-6 mb-2">
                Additional Details
              </p>
            </div>
            <p className="text-[#868686] text-sm">Special Note From Doctor</p>
            <p>N/A</p>
          </div>
          <div className="ml-4">
            <div className="text-[#363636]">
              <p className="text-[#868686] text-sm mt-4">
                Special Note From Medical Center
              </p>
            </div>
            <p>
              Please arrive at least 15 minutes before your scheduled
              appointment time for payment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalCenterDetailsCard;
