import MCSGreeting from "./MCSGreeting";
import MCSGreetingVerificationName from "./MCSGreetingVerificationName";

function MCSMainGreeting() {
  return (
    <div className="flex md:flex-row md:items-center md:justify-between md:my-4 my-2 flex-col gap-2">
      <MCSGreeting />
      <MCSGreetingVerificationName />
    </div>
  );
}

export default MCSMainGreeting;
