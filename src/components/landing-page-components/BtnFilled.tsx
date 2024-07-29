interface Props {
  title: string;
  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;
  hoverTextColor?: string;
}

function BtnFilled({
  title,
  bgColor,
  hoverBgColor,
  textColor,
  hoverTextColor,
}: Props) {
  return (
    <div
      className={
        "flex items-center justify-center rounded-md px-4 py-2 hover:cursor-pointer " +
        bgColor +
        " hover:" +
        hoverBgColor +
        " " +
        textColor +
        " hover:" +
        hoverTextColor
      }
    >
      {title}
    </div>
  );
}

export default BtnFilled;
