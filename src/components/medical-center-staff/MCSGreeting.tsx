interface Props {
  memberName: string;
}

function MCSGreeting({ memberName }: Props) {
  return (
    <div className="inline-flex flex-col">
      <p className="text-lg font-bold">Good Evening , {memberName}</p>
      <p>We hope you're having a great day.</p>
    </div>
  );
}

export default MCSGreeting;
