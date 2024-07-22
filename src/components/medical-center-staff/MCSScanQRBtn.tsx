import { QrcodeOutlined } from "@ant-design/icons";
import { Button } from "antd";

function MCSScanQRBtn() {
  return (
    <Button type="primary" icon={<QrcodeOutlined />}>
      Scan QR
    </Button>
  );
}

export default MCSScanQRBtn;
