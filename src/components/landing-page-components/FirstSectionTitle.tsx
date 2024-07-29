import BtnFilled from "./BtnFilled";

function FirstSectionTitle() {
  return (
    <div className="flex flex-col jutify-center items-center gap-4 pt-8">
      <p className="font-bold text-4xl text-white">
        Welcome to Mediphix for Patients
      </p>
      <p className="text-center text-white">
        Streamline Your Healthcare Experience with Easy Appointments,
        Comprehensive Records, and Accurate Diagnoses
      </p>
      <BtnFilled
        title="Join Now"
        style="bg-black hover:bg-white text-white hover:text-mediphix_accent"
      />
    </div>
  );
}

export default FirstSectionTitle;
