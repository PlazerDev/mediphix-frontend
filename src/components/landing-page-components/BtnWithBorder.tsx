interface Props {
  title: string;
  onClickFunction?: () => void;
}
function BtnWithBorder({ title, onClickFunction }: Props) {
  return (
    <button
      onClick={onClickFunction}
      className="border-2 border-white flex items-center justify-center rounded-md px-4 py-1 text-white hover:bg-white hover:text-mediphix_accent hover:cursor-pointer"
    >
      {title}
    </button>
  );
}

export default BtnWithBorder;
