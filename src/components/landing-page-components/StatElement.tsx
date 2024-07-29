import CountUp from "react-countup";

interface Props {
  number: number;
  title: String;
}

function StatElement({ number, title }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Over</p>
      <CountUp className="text-5xl font-extrabold" end={number} separator="," />
      <p>{title}</p>
    </div>
  );
}

export default StatElement;
