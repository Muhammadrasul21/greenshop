import React from "react";
import { Button, Input, Form, Select, InputNumber } from "antd";
const { Option } = Select;

// Telefon raqam uchun prefix selector
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="998">+998</Option>
      <Option value="1">+1</Option>
    </Select>
  </Form.Item>
);

// Submit button faqat valid bo‘lsa ishlaydi
const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const App = () => {
  const [form] = Form.useForm();

  return (
    <div className="container flex flex-col gap-4">
      <div className="flex items-center gap-2 mt-[36px] mb-[36px]">
        <p className="font-semibold">Home</p>
        <p>/ Shop</p>
        <p>/ Checkout</p>
      </div>
      <p className="font-bold text-[17px]">Billing Address</p>

      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        className="grid grid-cols-2 gap-4 place-items-center mt-6"
      >
        <Form.Item
          name="First Name"
          label="First Name"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Last Name"
          label="Last Name"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Country / Region"
          label="Country / Region"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input placeholder="Select a country / region" />
        </Form.Item>

        <Form.Item
          name="Town / City"
          label="Town / City"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Street Address"
          label="Street Address"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input placeholder="House number and street name" />
        </Form.Item>

        <Form.Item name="Apartment" className="w-[350px]">
          <Input placeholder="Apartment, suite, unit, etc. (optional)" />
        </Form.Item>

        <Form.Item
          name="State"
          label="State"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input placeholder="Select a state" />
        </Form.Item>

        <Form.Item
          name="Zip"
          label="Zip"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Email address"
          label="Email address"
          className="w-[350px]"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Phone Number"
          label="Phone Number"
          className="w-[350px]"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
