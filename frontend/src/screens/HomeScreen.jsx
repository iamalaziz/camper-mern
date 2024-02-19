import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'antd';

const HomeScreen = () => {
  return (
    <div>
      HomeScreen
      <Button>
        <NavLink to="/admin/users">Admin</NavLink>
      </Button>
    </div>
  );
};

export default HomeScreen;
