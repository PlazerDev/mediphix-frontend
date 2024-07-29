interface Props {
  title: string;
}

function BtnFilled({ title }: Props) {
  return (
    <div className=" flex items-center justify-center rounded-md px-4 py-2 bg-black text-white hover:bg-white hover:text-mediphix_accent hover:cursor-pointer">
      {title}
    </div>
  );
}

export default BtnFilled;
