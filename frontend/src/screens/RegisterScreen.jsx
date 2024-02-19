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

const RegisterScreen = () => {
  return (
    <Form
      name="basic"
      style={{ minWidth: 400 }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={2} style={{ textAlign: 'center' }}>
        Register
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
        <Input placeholder="Enter your name..." style={{ maxWidth: '300px' }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        style={{ justifyContent: 'space-between' }}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input placeholder="Enter Password..." style={{ maxWidth: '300px' }} />
      </Form.Item>

      <Form.Item
        label="Confirm"
        name="confirm"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input
          placeholder="Enter Password Again..."
          style={{ maxWidth: '300px' }}
        />
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
        Already have an account? <NavLink to="/login">Login</NavLink>
      </Text>
    </Form>
  );
};
export default RegisterScreen;
