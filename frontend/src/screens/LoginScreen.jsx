import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Button, Checkbox, Form, Input } from 'antd';
const { Title, Text } = Typography;

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginScreen = () => {
  return (
    <Form
      name="basic"
      style={{
        maxWidth: 400,
        margin: '0 auto',
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} style={{ textAlign: 'center' }}>
        Login
      </Title>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Text>
        You don't have an account yet? <NavLink to="/register">Register</NavLink>
      </Text>
    </Form>
  );
};
export default LoginScreen;
