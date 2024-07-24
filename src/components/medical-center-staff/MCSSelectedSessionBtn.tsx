import { Button } from "antd";

interface Props {
  title: string;
  isDisabled: boolean;
  icon: React.ElementType;
}

function MCSSelectedSessionBtn({ title, isDisabled, icon: Icon }: Props) {
  return (
    <Button className="w-full" icon={<Icon />} disabled={isDisabled}>
      {title}
    </Button>
  );
}

export default MCSSelectedSessionBtn;
