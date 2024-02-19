import React, { useState, useEffect } from 'react';
import { CarOutlined, UserOutlined } from '@ant-design/icons';
import { CiLocationOn } from 'react-icons/ci';
import { Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const {Sider, Content} = Layout

const sideNav = [
  {
    key: '/admin/users',
    icon: <UserOutlined />,
    label: 'Users',
  },
  { key: '/admin/motors', icon: <CarOutlined />, label: 'Motors' },
  {
    key: '/admin/used-cars',
    icon: <CarOutlined />,
    label: 'Used Cars',
  },
  {
    key: '/admin/places',
    icon: <CiLocationOn />,
    label: 'Places',
  },
];

const AdminScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState('/admin/users');

  const handleNavigate = (key) => {
    console.log(key);
    navigate(key);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  return (
    <Layout
      style={{
        padding: '24px 0',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Sider
        style={{
          background: colorBgContainer,
        }}
        width={200}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKeys]}
          items={sideNav}
          onClick={({ key }) => handleNavigate(key)}
        />
      </Sider>
      <Content
        style={{
          padding: '0 24px',
          minHeight: 280,
        }}
      >
        <Outlet />
      </Content>
    </Layout>
  );
};
export default AdminScreen;
