import React, { useState, useEffect } from 'react';

import { Layout, Typography, Button, Menu } from 'antd';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const navItems = [
  {
    label: 'Home',
    key: '/',
  },
  { label: 'Admin', key: '/admin/users' },
];

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState('/');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);
  return (
    <Layout style={{ height: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title style={{ color: 'white', fontSize: 20 }}>Camper</Title>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKeys]}
          items={navItems}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
        <Button>
          <Link to="/login">Login</Link>
        </Button>
      </Header>
      <Content
        style={{
          padding: '30px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Camper ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};
export default App;
