import React, { useState } from "react";
import { useNavigate , Link} from "react-router-dom";
import axios from "axios";
import "./login.scss";

import { Button, Checkbox, Form, Input, message } from "antd";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoading(true);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-container container">
        <h1>Sign In</h1>
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
        >
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
            <Input size="large" placeholder="Enter Email" />
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
            <Input.Password size="large" placeholder="Enter Password" />
          </Form.Item>

          <p>Forgot Password?</p>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              loading={loading}
              className="submit-btn"
            >
              Sing in
            </Button>
          </Form.Item>
          <p className="footer-info">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </div>
    </>
  );
};

export default Login;
