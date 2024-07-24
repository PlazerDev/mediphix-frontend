import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";
import MCSScanQRBtn from "./MCSScanQRBtn";
import MCSSelectedSessionBtn from "./MCSSelectedSessionBtn";
import { Divider } from "antd";

interface Props {
  patientName: string;
  age: string;
  isSetNextActive: boolean;
  isSetDefaultActive: boolean;
  isMarkAsAbsentActive: boolean;
  isMarlAsPresentActive: boolean;
}

function MCSQueueCollapseDesc({
  patientName,
  age,
  isSetNextActive,
  isSetDefaultActive,
  isMarkAsAbsentActive,
  isMarlAsPresentActive,
}: Props) {
  return (
    <div>
      <div className="flex mb-2">
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Patient Name</p>
          <p>{patientName}</p>
        </div>
        <div className="flex-1">
          <p className="text-mediphix_text_c text-sm">Age</p>
          <p>{age}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <MCSScanQRBtn />
        <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4 mt-2 md:mt-0">
          <MCSSelectedSessionBtn
            title="Set Next"
            isDisabled={!isSetNextActive}
            icon={ArrowUpOutlined}
          />
          <MCSSelectedSessionBtn
            title="Set Default"
            isDisabled={!isSetDefaultActive}
            icon={ArrowDownOutlined}
          />
        </div>
        <Divider className="my-0 md:hidden"></Divider>
        <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4">
          <MCSSelectedSessionBtn
            title="Mark as Absent"
            isDisabled={!isMarkAsAbsentActive}
            icon={UserDeleteOutlined}
          />
          <MCSSelectedSessionBtn
            title="Mark as Present"
            isDisabled={!isMarlAsPresentActive}
            icon={UserAddOutlined}
          />
        </div>
      </div>
    </div>
  );
}

export default MCSQueueCollapseDesc;
