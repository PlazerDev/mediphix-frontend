interface TimeSlot {
  slotId: number;
  startTime: string;
  maxNoOfPatients: number;
  status: string;
  queue?: {
    appointments: number[];
    queueOperations?: {
      defaultIncrementQueueNumber: number;
      ongoing: number;
      nextPatient1: number;
      nextPatient2: number;
      finished: number[];
      absent: number[];
    };
  };
}
interface FormattedSession {
  _id: string;
  doctorId: string;
  medicalCenterId: string;
  aptCategories: string[];
  payment: number;
  hallNumber: string;
  noteFromCenter?: string;
  noteFromDoctor?: string;
  overallSessionStatus: string;
  timeSlots: TimeSlot[];
  formattedDateTime: {
    sessionDate: string; // Format: "YYYY-MM-DD"
    time: string; // Format: "HH:MM AM - HH:MM PM"
  };
}

interface TimeSlotCardProps {
  timeSlots: TimeSlot[];
  selectedTimeSlot: TimeSlot | null;
  onTimeSlotSelect: (slot: TimeSlot) => void;
}

const TimeslotCard: React.FC<TimeSlotCardProps> = ({
  timeSlots,
  selectedTimeSlot,
  onTimeSlotSelect,
}) => {
  const getCurrentQueueNumber = (slot: TimeSlot) => {
    if (!slot.queue?.appointments) return 0;
    return slot.queue.appointments.length;
  };

  const isSlotAvailable = (slot: TimeSlot) => {
    const currentPatients = getCurrentQueueNumber(slot);
    return currentPatients < slot.maxNoOfPatients;
  };

  const handleTimeSlotSelect = (slot: TimeSlot) => {
    if (isSlotAvailable(slot)) {
      onTimeSlotSelect(slot);
    }
  };

  return (
    <>
      <div className="relative bg-[#ffffff] rounded-[16px] p-6 ml-[1%] mt-3 mb-1 mr-[1%] ">
        <p className="font-bold">Select the time slot</p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {timeSlots.map((slot) => {
            const isSelected = selectedTimeSlot?.slotId === slot.slotId;
            const isAvailable = isSlotAvailable(slot);
            const currentQueueNumber = getCurrentQueueNumber(slot);

            return (
              <div
                key={slot.slotId}
                onClick={() => handleTimeSlotSelect(slot)}
                className={`
                rounded-2xl p-4 cursor-pointer transition-all duration-300
                ${isSelected ? "bg-black text-white" : "bg-gray-100"}
                ${
                  !isAvailable
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }
              `}
              >
                <div className="flex justify-between items-start px-6">
                  <div>
                    <p
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Time Slot
                    </p>
                    <p className="font-bold mt-1">{slot.startTime}</p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Maximum Number of Appointments
                    </p>
                    <p className="mt-1">{slot.maxNoOfPatients}</p>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-6 px-6">
                  <div>
                    <p
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Current Queue Number
                    </p>
                    <button
                      className={`
                      rounded-full px-6 py-1 mt-2
                      ${
                        isSelected
                          ? "bg-white text-black"
                          : "bg-black text-white"
                      }
                      ${!isAvailable ? "line-through" : ""}
                    `}
                      disabled={!isAvailable}
                    >
                      {currentQueueNumber}
                    </button>
                  </div>
                  <div className="text-right">
                    {/* <p
                      className={`text-sm ${
                        isSelected ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      Status
                    </p>
                    <p
                      className={`mt-2 font-medium ${
                        isAvailable ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {isAvailable ? "Available" : "Full"}
                    </p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TimeslotCard;
