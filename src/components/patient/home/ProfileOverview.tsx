import profilepic from "./../../../assets/images/patient/home/profile_pic.jpg";

interface ProfileProps {
  mobile_number?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  nic?: string | undefined;
  birthday?: string | undefined;
  email?: string | undefined;
  address?: string | undefined;
  nationality?: string | undefined;
  gender?: string | undefined;
  profileImage?: string | undefined;
}

function calculateAge(birthday: string) {
  const birthDate = new Date(birthday);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const ProfileOverview = ({
  mobile_number,
  first_name,
  last_name,
  nic,
  birthday,
  email,
  address,
  nationality,
  gender,
  profileImage,
}: ProfileProps) => {
  return (
    <>
      <div className="bg-[#ffffff] h-full rounded-[16px]  p-4 mt-2">
        <div className=" flex justify-between">
          <div>
            <h1 className="text-lg font-bold">Profile Overview</h1>
          </div>

          <div className="mt-1">
            <p className="text-[#FF7300] text-sm font-semibold">Edit</p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-10">
            <div className="flex items-center justify-center ">
              <img
                className="ml-4 w-24 h-24 rounded-full bg-contain"
                src={profileImage ? profileImage : profilepic}
                alt="Profile Pic"
              />
            </div>
            <div>
              <div>
                <p className="text-[#868686] text-xs">Name</p>
                <p className="mb-1">{first_name + " " + last_name}</p>
                <div className="flex gap-16 mb-1">
                  <div>
                    <p className="text-[#868686] text-xs">Age</p>
                    <p>{birthday ? calculateAge(birthday) : "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[rgb(134,134,134)] text-xs">Gender</p>
                    <p>{gender}</p>
                  </div>
                  <div>
                    <p className="text-[#868686] text-xs">NIC</p>
                    <p className="mb-1">{nic}</p>
                  </div>
                </div>
                <p className="text-[#868686] text-xs">Address</p>
                <p>{address}</p>
              </div>
              <div>
                <p className="text-[#868686] text-xs">Email</p>
                <p className="mb-1"> {email}</p>
                <div className="flex gap-16">
                  <div>
                    <p className="text-[#868686] text-xs">Mobile Number</p>
                    <p className="mb-1">{mobile_number}</p>
                  </div>
                  <div>
                    <p className="text-[#868686] text-xs">Nationality</p>
                    <p>{nationality}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;
