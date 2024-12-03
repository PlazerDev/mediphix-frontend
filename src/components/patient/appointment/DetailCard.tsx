import profilepic from "./../../../assets/images/patient/appoinment/doctorImage.jpeg";
import centerlogo from "./../../../assets/images/patient/appoinment/NawalokaHospitals.jpeg";

interface DetailCardProps {
  detailType: "doctor" | "center";
  name: string;
  topic2Value: string;
  appointmentCategory: string[];
  topic4Value?: string;
}

const DetailCard = ({
  detailType,
  name,
  topic2Value,
  appointmentCategory,
  topic4Value,
}: DetailCardProps) => {
  const topic2 = detailType === "doctor" ? "Education" : "Location";
  const topic4 = detailType === "doctor" ? "Available at" : "Number of Doctors";

  // Display string with "X more"
  const createDisplayString = (
    items: string[] | undefined,
    maxLength: number = 150
  ): string => {
    if (!items || items.length === 0) return "";

    let displayString = "";
    let length = 0;
    let itemCount = 0;

    for (let item of items) {
      if (length + item.length > maxLength) break;
      displayString += (displayString ? ", " : "") + item;
      length += item.length + 2;
      itemCount++;
    }

    const remainingCount = items.length - itemCount;
    if (remainingCount > 0) {
      displayString += `, ${remainingCount} more`;
    }

    return displayString;
  };

  const maxLineLength = 150; //max length of items fit in one line
  const displayedCategories = createDisplayString(
    appointmentCategory,
    maxLineLength
  );
  const displayedItems = topic4Value
    ? createDisplayString(topic4Value.split(", "), maxLineLength)
    : "";

  return (
    <>
      <div className="bg-[#ffffff] rounded-[16px]  p-4 mx-[1%] mb-4">
        <div className="flex">
          <div className="flex items-center ml-8 mr-16 w-44">
            {detailType === "doctor" ? (
              <img
                className="w-36 h-36 rounded-full object-cover"
                src={profilepic}
                alt="Profile Pic"
              />
            ) : (
              <img
                className="w-36 h-36  rounded-[16px] object-contain"
                src={centerlogo}
                alt="Center Logo"
              />
            )}
          </div>
          <div className="w-full">
            <div className="flex gap-4 mb-2">
              <div className="w-1/2">
                <p className="text-[#868686] text-sm">Name</p>
                <p>{name}</p>
              </div>
              <div className="flex flex-col ml-10 ">
                <p className="text-[#868686] text-sm ">{topic2}</p>
                <p>{topic2Value}</p>
              </div>
            </div>

            <div className="flex gap-4 mb-2">
              <div>
                <p className="text-[#868686] text-sm">
                  Supported Appointment Categories
                </p>
                <p>{displayedCategories}</p>
              </div>
              <div className="flex flex-col ml-10 "></div>
            </div>
            {topic4Value && (
              <div>
                <p className="text-[#868686] text-sm">{topic4}</p>
                <p>{displayedItems}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailCard;
