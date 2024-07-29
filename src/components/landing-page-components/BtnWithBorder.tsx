interface Props {
  title: string;
}
function BtnWithBorder({ title }: Props) {
  return (
    <div className="border-2 border-white flex items-center justify-center rounded-md px-4 py-1 text-white hover:bg-white hover:text-mediphix_accent hover:cursor-pointer">
      {title}
    </div>
  );
}

export default BtnWithBorder;
