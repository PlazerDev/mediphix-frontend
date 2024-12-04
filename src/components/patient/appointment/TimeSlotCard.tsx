interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  maxPatientCount: number;
  patientCount: number;
}

interface TimeSlotCardProps {
  timeSlots: TimeSlot[];
  onTimeSlotSelect: (slot: TimeSlot) => void;
  selectedTimeSlot: TimeSlot | null;
}

const TimeslotCard = ({
  timeSlots,
  onTimeSlotSelect,
  selectedTimeSlot,
}: TimeSlotCardProps) => {

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    // Prevent selection if patient count has reached maximum
    if (slot.patientCount < slot.maxPatientCount) {
      onTimeSlotSelect(slot);
    }
  };

  return (
    <>
      <div className="relative bg-[#ffffff] rounded-[16px] p-6 ml-[1%] mt-3 mb-1 mr-[1%] h-96">
        <p className="font-bold">Select the time slot</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {timeSlots.map((slot) => (
            <div
              key={slot.id}
              className={`
                bg-[#DCDCDC] rounded-[15px] p-4 flex flex-col justify-between
                ${selectedTimeSlot?.id === slot.id ? "bg-black" : ""}
                ${slot.patientCount >= slot.maxPatientCount ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"}
                transition-opacity duration-300
              `}
              onClick={() => handleTimeSlotSelect(slot)}
            >
              <div className="flex justify-between items-start px-12">
                <div>
                  <p className={`text-[#868686] text-sm`}>Time Slot</p>
                  <p
                    className={`font-bold ${
                      selectedTimeSlot?.id === slot.id ? "text-white" : ""
                    }`}
                  >
                    {slot.startTime} - {slot.endTime}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-[#868686] text-sm`}>
                    Maximum Appointments
                  </p>
                  <p
                    className={`text-sm ${
                      selectedTimeSlot?.id === slot.id ? "text-white" : ""
                    }`}
                  >
                    {slot.maxPatientCount}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end mt-4 px-12">
                <div>
                  <p className={`text-[#868686] text-sm`}>
                    Current Last Queue Number
                  </p>
                  <button
                     className={`
                      rounded-full px-9 py-1 mt-1
                      ${
                        selectedTimeSlot?.id === slot.id
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }
                      ${
                        slot.patientCount >= slot.maxPatientCount
                          ? "line-through"
                      : ""}
                    `}
                  >
                    {slot.patientCount}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeslotCard;
