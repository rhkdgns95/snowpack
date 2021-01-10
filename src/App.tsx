import { Button, Space, Form, Input, Modal } from "antd";

export const App = () => {
  console.log("Hello world");
  return (
    <div>
      <h1>hello world</h1>
      <Modal>
        <div>dzdz</div>
      </Modal>
      <Space></Space>
      <Button type="primary">클릭!</Button>
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
