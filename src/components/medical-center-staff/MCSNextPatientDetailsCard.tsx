import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  DownOutlined,
  UpOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Divider } from "antd";
import { useState } from "react";
import MCSSelectedSessionBtn from "./MCSSelectedSessionBtn";
import MCSScanQRBtn from "./MCSScanQRBtn";

function MCSNextPatientDetailsCard() {
  const [isDown, setIsDown] = useState(true);

  return (
    <div className="bg-mediphix_card_background my-4 p-8 rounded-lg">
      <p className="font-bold text-mediphix_accent">Next Patient Details</p>
      <div className="my-2 flex md:flex-row flex-col gap-2 md:gap-0">
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Queue Number</p>
            <p>04</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">
              Appointment Reference Number
            </p>
            <p>REF_A0021</p>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Name</p>
            <p>Vishwa Sandaruwan</p>
          </div>
          <div className="flex-1">
            <p className="text-mediphix_text_c text-sm">Age</p>
            <p>20 - 30</p>
          </div>
        </div>
      </div>
      {!isDown && (
        <div className="flex flex-col md:flex-row gap-2">
          <MCSScanQRBtn />
          <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4 mt-4 md:mt-0">
            <MCSSelectedSessionBtn
              title="Set Next"
              isDisabled={true}
              icon={ArrowUpOutlined}
            />
            <MCSSelectedSessionBtn
              title="Set Default"
              isDisabled={true}
              icon={ArrowDownOutlined}
            />
          </div>
          <Divider className="my-0 md:hidden"></Divider>
          <div className="flex flex-col md:flex-row gap-2 justify-center md:ml-4">
            <MCSSelectedSessionBtn
              title="Mark as Absent"
              isDisabled={false}
              icon={UserDeleteOutlined}
            />
            <MCSSelectedSessionBtn
              title="Mark as Present"
              isDisabled={true}
              icon={UserAddOutlined}
            />
          </div>
        </div>
      )}
      <div className="text-center mt-4">
        {isDown && (
          <Button
            size="small"
            shape="circle"
            icon={<DownOutlined />}
            onClick={() => setIsDown(!isDown)}
          />
        )}
        {!isDown && (
          <Button
            size="small"
            shape="circle"
            icon={<UpOutlined />}
            onClick={() => setIsDown(!isDown)}
          />
        )}
      </div>
    </div>
  );
}

export default MCSNextPatientDetailsCard;
