import React from "react";

function MCSSelectedDate() {
  return (
    <div className="bg-mediphix_card_background rounded-lg p-8 my-2 md:my-4 flex flex-col gap-2 md:flex-row md:gap-0 md:items-center justify-between">
      <div className="flex">
        <div className="bg-mediphix_accent rounded-lg text-mediphix_card_background w-12 h-12 flex justify-center items-center">
          <p className="font-bold text-xl">15</p>
        </div>
        <div className="ml-4">
          <p>Tuesday</p>
          <p>June 2024</p>
        </div>
      </div>
      <div className="font-bold">02 Clinic Sessions Found</div>
    </div>
  );
}

export default MCSSelectedDate;
