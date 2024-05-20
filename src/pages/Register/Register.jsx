import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, message } from "antd";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    setLoading(true);
    try {
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login-container">
      <h1>Sign up</h1>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="login-form"
        style={{
          maxWidth: 600,
        }}
        form={form}
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Enter name" size="large" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "Invalid email address",
            },
            {
              required: true,
              message: "Please enter your E-mail!",
            },
          ]}
          label="Email"
        >
          <Input size="large" placeholder="Enter email" />
        </Form.Item>

        <Form.Item name="phone"  label="Phone Number">
          <Input size="large" placeholder="Enter phone" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password size="large" placeholder="Enter password" />
        </Form.Item>
        <Form.Item name="code"  label="Refferal Code (Optional)">
          <Input size="large" placeholder="Enter code" />
        </Form.Item>
        <Form.Item>
          <Button  type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
              className="submit-btn">
            Signup
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
