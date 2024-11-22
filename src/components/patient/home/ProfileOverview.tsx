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
}: ProfileProps) => {
  return (
    <>
      <div className="bg-[#ffffff] h-full rounded-[16px]  p-4 mt-3">
        <div className=" flex justify-between mb-1">
          <div>
            <h1 className="text-lg font-bold">Profile Overview</h1>
          </div>

          <div className="mt-1">
            <p className="text-[#FF7300] text-sm font-semibold">Edit</p>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-8">
            <div className="flex items-center justify-center ">
              <img
                className="w-24 h-24 rounded-full bg-contain"
                src={profilepic}
                alt="Profile Pic"
              />
            </div>
            <div>
              <div>
                <p className="text-[#868686] text-sm">Name</p>
                <p className="mb-1">{first_name + " " + last_name}</p>
                <div className="flex gap-4 mb-1">
                  <div>
                    <p className="text-[#868686] text-sm">Age</p>
                    <p>{birthday ? calculateAge(birthday) : "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[#868686] text-sm">Gender</p>
                    <p>{"N/A"}</p>
                  </div>
                  <div>
                    <p className="text-[#868686] text-sm">NIC</p>
                    <p className="mb-1">{nic}</p>
                  </div>
                </div>
                <p className="text-[#868686] text-sm">Address</p>
                <p>{address}</p>
              </div>
              <div>
                <p className="text-[#868686] text-sm">Email</p>
                <p className="mb-1"> {email}</p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-[#868686] text-sm">Mobile Number</p>
                    <p className="mb-1">{mobile_number}</p>
                  </div>
                  <div>
                    <p className="text-[#868686] text-sm">Nationality</p>
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
