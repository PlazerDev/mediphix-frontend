import { Button } from "antd";
import emptyImg from "./../../assets/images/patient/home/ongoing_appointment.png";

function MCSEmptyCard() {
  return (
    <div className="bg-mediphix_card_background p-8 rounded-lg flex flex-col items-center">
      <img src={emptyImg} alt="" className="md:w-60 w-28 object-contain" />
      <p className="text-center font-bold md:text-lg text-mediphix_text_b">
        There is no ongoing clinic sessions assigned to you at the moment.{" "}
      </p>
      <p className="text-center text-mediphix_text_c">
        Once a session is scheduled, details will appear here starting one hour
        before its commencement. Please check back later for updates.
      </p>
      <Button type="primary" className="mt-4">
        Back
      </Button>
    </div>
  );
}

export default MCSEmptyCard;
