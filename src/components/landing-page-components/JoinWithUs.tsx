import BtnFilled from "./BtnFilled";

function JoinWithUs() {
  return (
    <div className="flex flex-col justify-center items-center bg-mediphix_accent text-white p-8 rounded-lg">
      <p className="text-center font-bold text-2xl">Ready to Join With Us ?</p>
      <p className="text-center text-mediphix_background my-4">
        Take control of your healthcare journey today. Sign up to access a
        network of top medical professionals, seamless appointment scheduling,
        and secure medical records all in one place.
      </p>
      <div className="w-32">
        <BtnFilled
          title="Join Now"
          style="bg-black hover:bg-white text-white hover:text-black"
        />
      </div>
    </div>
  );
}

export default JoinWithUs;
