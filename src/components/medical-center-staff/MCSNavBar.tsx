import {
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import logo from "./../../assets/images/mediphix_withoutPadding.jpg";

function MCSNavBar() {
  return (
    <div>
      {" "}
      <>
        <div className="flex justify-between bg-white h-[85px]">
          <div>
            <img className="w-24 h-24 ml-5" src={logo} alt="logo" />
          </div>
          <div></div>
          <div>
            <div className="flex  m-5  bg-[#E3E3E3] rounded-full">
              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                icon={<BellOutlined style={{ color: "#FF7300" }} />}
              />

              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                icon={<SettingOutlined style={{ color: "#FF7300" }} />}
              />

              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                icon={<LogoutOutlined style={{ color: "#FF7300" }} />}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default MCSNavBar;
