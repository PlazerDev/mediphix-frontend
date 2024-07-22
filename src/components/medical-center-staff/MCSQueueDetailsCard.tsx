import MCSQueueCollapseCard from "./MCSQueueCollapseCard";

function MCSQueueDetailsCard() {
  return (
    <div className="bg-mediphix_card_background p-8 rounded-lg">
      <p className="font-bold text-mediphix_text_a">Queue Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Patients in the queue
            </p>
            <p>08</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Completed Patients Sessions
            </p>
            <p>03</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Absent Patient Sessions
            </p>
            <p>01</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Number of Remaining Patient Sessions{" "}
            </p>
            <p>04</p>
          </div>
        </div>
      </div>
      <MCSQueueCollapseCard />
    </div>
  );
}

export default MCSQueueDetailsCard;
