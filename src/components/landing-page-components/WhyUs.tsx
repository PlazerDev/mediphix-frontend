import BtnFilled from "./BtnFilled";

function WhyUs() {
  return (
    <div className="flex flex-col justify-center items-center bg-mediphix_text_a text-white p-8 rounded-lg">
      <p className="text-center font-bold text-2xl">Why Us?</p>
      <p className="text-center text-mediphix_background my-4">
        Mediphix puts your healthcare needs at your fingertips. Easily book
        appointments, access your medical records, and stay informed with timely
        notifications. By ensuring that your doctors have access to complete and
        accurate medical information, we help reduce the risk of misdiagnosis
        and improve your overall healthcare experience. Enjoy a seamless and
        convenient healthcare journey with Mediphix.
      </p>
      <div className="w-32">
        <BtnFilled
          title="Join Now"
          style="bg-white text-black hover:bg-black hover:text-white"
        />
      </div>
    </div>
  );
}

export default WhyUs;
