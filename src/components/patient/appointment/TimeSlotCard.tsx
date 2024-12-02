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
  return (
    <>
      <div className="relative bg-[#ffffff] rounded-[16px] p-3 ml-[1%] mt-3 mb-1 mr-[1%] h-96">
        <p className="font-bold">Select the time slot</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {timeSlots.map((slot) => (
            <div
              key={slot.id}
              className={`
              bg-[#DCDCDC] rounded-[15px] p-4 flex items-center justify-between
              ${selectedTimeSlot?.id === slot.id ? "bg-black" : ""}
            `}
              onClick={() => onTimeSlotSelect(slot)}
            >
              <div>
                <p className={`text-[#868686] text-sm`}>Time Slot</p>
                <p
                  className={`font-bold ${
                    selectedTimeSlot?.id === slot.id ? "text-white" : ""
                  }`}
                >
                  {slot.startTime} - {slot.endTime}
                </p>
                <p className={`text-[#868686] text-sm mt-1`}>
                  Current Last Queue Number
                </p>
                <button
                  className={`
                  rounded-full px-9 py-1
                  ${
                    selectedTimeSlot?.id === slot.id
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }
                `}
                >
                  {slot.patientCount}
                </button>
              </div>
              <div className={`mb-[13%] pl-[5%]`}>
                <p className={`text-[#868686] text-sm`}>
                  Maximum Number of Appointments
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
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeslotCard;
