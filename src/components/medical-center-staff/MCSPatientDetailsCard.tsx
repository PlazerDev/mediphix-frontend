function MCSPatientDetailsCard() {
  return (
    <div className="bg-mediphix_card_background my-4 p-8 rounded-lg">
      <p className="font-bold text-mediphix_accent">Current Patient Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Queue Number</p>
            <p>04</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Appointment Reference Number
            </p>
            <p>REF_A0021</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Started Time</p>
            <p>08.11 AM</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Time Duration</p>
            <p>03 Minutes 40 Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MCSPatientDetailsCard;
