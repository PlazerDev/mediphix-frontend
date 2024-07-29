interface Props {
  img: string;
  feedback: string;
  name: string;
}
function FeedbackItem({ img, feedback, name }: Props) {
  return (
    <div className="flex flex-row">
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <p className="text-lg">{'"' + feedback + '"'}</p>
        <p>{"-" + name}</p>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={img} alt="" className="object-contain h-72" />
      </div>
    </div>
  );
}

export default FeedbackItem;
