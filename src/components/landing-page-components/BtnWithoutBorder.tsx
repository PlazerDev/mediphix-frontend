interface Props {
  title: string;
  onClickFunction?: () => void;
}
function BtnWithoutBorder({ title, onClickFunction }: Props) {
  return (
    <button
      onClick={onClickFunction}
      className="flex items-center justify-center text-[#ededed] hover:text-white hover:cursor-pointer"
    >
      {title}
    </button>
  );
}

export default BtnWithoutBorder;
