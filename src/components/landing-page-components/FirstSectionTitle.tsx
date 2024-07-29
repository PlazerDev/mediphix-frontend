import React from "react";
import BtnFilled from "./BtnFilled";

function FirstSectionTitle() {
  return (
    <div className="flex flex-col jutify-center items-center gap-4 pt-8">
      <p className="font-bold text-4xl text-white">Welcome to Mediphix</p>
      <p className="w-2/4 text-center text-white">
        Streamline Your Healthcare Experience with Easy Appointments,
        Comprehensive Records, and Accurate Diagnoses
      </p>
      <BtnFilled title="Join Now" />
    </div>
  );
}

export default FirstSectionTitle;
