import { AiFillAudio } from "react-icons/ai";
import { Button, message } from "antd";
import RightSection from "./components/patient/RightSection";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };
  return (
    <>
      <RightSection/>
    </>
  );
}

export default App;
