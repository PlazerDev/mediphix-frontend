interface Prop {
  timeRange: string;
  maxPatientSessions: number;
  status: string;
}

function MCSTimeSlotCard({ timeRange, maxPatientSessions, status }: Prop) {
  return (
    <div className="bg-mediphix_card_background rounded-lg p-8">
      <p className="font-bold">Clinic Session Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Start Time - End Time </p>
          <p>{timeRange}</p>
        </div>
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">
            Maximum Number of Patient Sessions
          </p>
          <p>{maxPatientSessions}</p>
        </div>

        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Status</p>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}

export default MCSTimeSlotCard;
