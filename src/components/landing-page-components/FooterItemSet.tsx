interface Props {
  title: string;
  items: string[];
}
function FooterItemSet({ title, items }: Props) {
  return (
    <div>
      <p className="text-mediphix_text_c mb-4">{title}</p>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <p
            key={index}
            className="hover:text-mediphix_accent hover:cursor-pointer text-sm"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FooterItemSet;
