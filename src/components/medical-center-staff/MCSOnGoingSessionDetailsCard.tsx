import { Link } from "react-router-dom";

interface Props {
  doctorImg: string;
  doctorName: string;
  doctorEducation: string;
  timeFrame: string;
  date: string;
  hallNumber: string;
  status: string;
}

function MCSOnGoingSessionDetailsCard({
  doctorImg,
  doctorName,
  doctorEducation,
  timeFrame,
  date,
  hallNumber,
  status,
}: Props) {
  return (
    <Link to="#">
      <div className="bg-mediphix_card_background my-4 rounded-lg p-8 hover:shadow-md">
        <p className="font-bold">Clinic Session Details</p>
        <div className="flex justify-between my-2">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Time Frame</p>
            <p>{timeFrame}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Date</p>
            <p>{date}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Hall Number</p>
            <p>{hallNumber}</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Status</p>
            <p className="text-mediphix_accent">{status}</p>
          </div>
        </div>
        <p className="font-bold mb-2">Doctor Details</p>
        <div className="flex gap-2">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-lg"
              src={doctorImg}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Name</p>
              <p>{doctorName}</p>
            </div>
            <div className="flex-1">
              <p className="text-mediphix_text_c text-sm">Education</p>
              <p>{doctorEducation}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MCSOnGoingSessionDetailsCard;
