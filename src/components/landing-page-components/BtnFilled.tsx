interface Props {
  title: string;
  style: string;
}

function BtnFilled({ title, style }: Props) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-md px-4 py-2 hover:cursor-pointer " +
        style
      }
    >
      {title}
    </div>
  );
}

export default BtnFilled;
