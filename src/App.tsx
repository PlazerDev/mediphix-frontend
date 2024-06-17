import { AiFillAudio } from "react-icons/ai";
import { Button, message } from "antd";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br />
      <AiFillAudio />
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
}

export default App;
