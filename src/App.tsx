import { useState } from "react";
import { Button, Space, Form, Input, Modal } from "antd";

export const App = () => {
  console.log("Hello world");
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>hello world</h1>
      <Space></Space>
      <Modal visible={visible}>
        <h2>Open the popup</h2>
      </Modal>
      <Button
      className="toggle"
        type="primary"
        onClick={() => {
          setVisible((prev) => !prev);
        }}
      >
        {visible ? "닫기" : "열기"}
      </Button>
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
