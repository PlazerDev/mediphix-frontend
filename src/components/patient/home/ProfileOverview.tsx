import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg";

interface ProfileProps {
  name: string;
  age: number;
  gender: string;
  nic: string;
  address: string;
  phoneNo: string;
  email: string;
  nationality: string;
}

const ProfileOverview = ({
  name,
  age,
  gender,
  nic,
  address,
  phoneNo,
  email,
  nationality,
}: ProfileProps) => {
  return (
    <>
      <div className="bg-[#ffffff] rounded-[16px]  p-4">
        <div className=" flex justify-between mb-4">
          <div>
            <h1 className="text-lg font-bold">Profile Overview</h1>
          </div>

          <div className="mt-1">
            <p className="text-[#FF7300] text-sm font-semibold">Edit</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center justify-center">
              <img
                className="w-20 h-20 rounded-full bg-contain"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div>
              <p className="text-[#868686] text-sm">Name</p>
              <p className="mb-1">{name}</p>
              <div className="flex gap-4 mb-1">
                <div>
                  <p className="text-[#868686] text-sm">Age</p>
                  <p>{age}</p>
                </div>
                <div>
                  <p className="text-[#868686] text-sm">Gender</p>
                  <p>{gender}</p>
                </div>
              </div>
              <p className="text-[#868686] text-sm">NIC</p>
              <p className="mb-1">{nic}</p>
              <p className="text-[#868686] text-sm">Address</p>
              <p>{address}</p>
            </div>
            <div className="mr-20">
              <p className="text-[#868686] text-sm">Mobile Number</p>
              <p className="mb-1">{phoneNo}</p>
              <p className="text-[#868686] text-sm">Email</p>
              <p className="mb-1"> {email}</p>
              <p className="text-[#868686] text-sm">Nationality</p>
              <p>{nationality}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
