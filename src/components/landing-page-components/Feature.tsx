interface Props {
  isReverse: boolean;
  title: string;
  description: string;
  img: string;
}

function Feature({ isReverse, title, description, img }: Props) {
  return (
    <div
      className={
        "flex justify-center items-center py-16 " +
        (isReverse ? " flex-row-reverse gap-8" : "flex-row gap-8")
      }
    >
      <div
        className={
          "flex-1 flex flex-row w-full " +
          (isReverse ? "justify-end" : "justify-start")
        }
      >
        <img src={img} alt="Feature" className="object-contain" />
      </div>
      <div
        className="flex-1 flex flex-col gap-8"
        data-aos={isReverse ? "fade-right" : "fade-left"}
      >
        <p className="font-bold text-3xl">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Feature;
