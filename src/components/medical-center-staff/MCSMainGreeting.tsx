import MCSGreeting from "./MCSGreeting";
import MCSGreetingVerificationName from "./MCSGreetingVerificationName";

interface Props {
  medicalCenterName: string;
  memberName: string;
}

function MCSMainGreeting({ medicalCenterName, memberName }: Props) {
  return (
    <div className="flex md:flex-row md:items-center md:justify-between md:my-4 my-2 flex-col gap-2">
      <MCSGreeting memberName={memberName} />
      <MCSGreetingVerificationName medicalCenterName={medicalCenterName} />
    </div>
  );
}

export default MCSMainGreeting;
