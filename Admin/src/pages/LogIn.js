import React, { useState } from "react";
import { Layout, Button, Spin, Form, Input, Row,notification } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { DASHBOARD } from "../constants/routes";
import logo from "../assets/images/download.jpg";
import { loginRequest } from "../api/logIn";
import { LoadingOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography/Typography";
const { Content } = Layout;

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setEmail(values.email);
    setPassword(values.password);
    setLoading(true);
    await login(values.email, values.password);
  };

  const login = async (email, password) => {
    try {
      const response = await loginRequest({
        email,
        password,
      });
      console.log(response)
      if (response.message=="Login Successful") {
        notification.open({
          description: "Login successfully!",
          className: "success-notification",
        });
        setLocalStorage(response);
      } else {
        notification.open({
          description: response.message,
          className: "error-notification",
        });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onFinishFailed = ({ errorFields }) => {
    const emailError = errorFields.some(({ name }) => name[0] === "email");
    const passwordError = errorFields.some(
      ({ name }) => name[0] === "password"
    );
    setEmailError(emailError);
    setPasswordError(passwordError);
  };

  const setLocalStorage = (listenerStatus) => {
    const { token,user } = listenerStatus;
    localStorage.setItem("token", token);
    localStorage.setItem("email", user.email);
    localStorage.setItem("role", user.role);
    console.log("time to navigate");
    navigate(`${DASHBOARD}`);
    setEmailError(false);
    setPasswordError(false);
  };
  return (
    <Layout className="my-signin full-bg">
      <div className="blue-overlay"></div>
      <Content className="login-content p-5 pt-3">
        <Row className="signin-logo d-flex justify-content-center mt-25">
          <img
            src={logo}
            style={{ height: 100, objectFit: "contain", backgroundColor: "#191919", borderRadius: "20px" }}
            alt="logo"
          />
        </Row>
        <Row className="signin-container p-30">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col signin-form"
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
              validateStatus={emailError ? "error" : ""}
              help={
                emailError ? (
                  <span className="invalid-message">
                    Kindly provide a valid email
                  </span>
                ) : null
              }
            >
              <Input
                placeholder="Email"
                style={{ height: 40, width: 300 }}
                name="email"
                type="text"
                value={email}
              />
            </Form.Item>
            <Form.Item
              style={{ paddingTop: 15 }}
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              validateStatus={passwordError ? "error" : ""}
              help={
                passwordError ? (
                  <span className="invalid-message">
                    Kindly provide a valid password
                  </span>
                ) : null
              }
            >
              <Input.Password
                placeholder="Password"
                name="password"
                style={{ height: 40, width: 300 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item style={{ paddingTop: 20 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: 300 }}
                disabled={loading}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ marginRight: "8px", color: "white" }}>
                    Sign In
                  </Typography>
                  {loading && <Spin indicator={<LoadingOutlined spin />} />}
                </span>
              </Button>
              <div style={{ paddingTop: 15, textAlign: "center" }}>
              </div>
            </Form.Item>
          </Form>
        </Row>
      </Content>
    </Layout>
  );
};

export default LogIn;
