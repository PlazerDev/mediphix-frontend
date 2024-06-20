import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg";

const ProfileOverview = () => {
  return (
    <>
      <div className="bg-[#fff] rounded-[16px] h-1/2 p-8">
        <div className=" flex justify-between mb-4">
          <div>
            <h1 className="font-Roboto font-[700] text-1xl text-[#151515]">
              Profile Overview
            </h1>
          </div>

          <div className="mt-1">
            <p className="font-Roboto font-[700] text-1xl text-[#FF7300] text-right">
              Edit
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <img
              className="w-20 h-20 rounded-full bg-contain"
              src={profilepic}
              alt="Profile Pic"
            />
          </div>
          <div>
            <p className="text-[#868686]">Name</p>
            <p>Vishwa Sandaruwan</p>
            <div className="flex gap-4">
              <div>
                <p className="text-[#868686]">Age</p>
                <p>23</p>
              </div>
              <div>
                <p className="text-[#868686]">Gender</p>
                <p>Male</p>
              </div>
            </div>
            <p className="text-[#868686]">NIC</p>
            <p>20010*****82</p>
            <p className="text-[#868686]">Address</p>
            <p>N/A</p>
          </div>
          <div>
            <p className="text-[#868686]">Mobile Number</p>
            <p>0713072404</p>
            <p className="text-[#868686]">Email</p>
            <p>N/A</p>
            <p className="text-[#868686]">Nationality</p>
            <p>LK</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
