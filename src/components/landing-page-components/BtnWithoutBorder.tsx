interface Props {
  title: string;
}
function BtnWithoutBorder({ title }: Props) {
  return (
    <div className="flex items-center justify-center text-[#ededed] hover:text-white hover:cursor-pointer">
      {title}
    </div>
  );
}

export default BtnWithoutBorder;
