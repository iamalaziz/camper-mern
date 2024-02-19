import React from 'react';
import { Table, Typography, Input, Flex } from 'antd';
import { userColumns, userData } from '../../data/users.jsx';
import { motorsColumns, motorsData } from '../../data/motos.jsx';
import { AudioOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const UsersTable = () => {
  return (
    <React.Fragment>
      <Flex
        justify="space-between"
        align="center"
        horizontal
        style={{ marginBottom: '16px' }}
      >
        <Title style={{ margin: 0 }} level={4}>
          Users
        </Title>
        <Search
          placeholder="Type here..."
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: '300px' }}
        />
      </Flex>
      <Table columns={userColumns} dataSource={userData} overflowY='auto' />;
    </React.Fragment>
  );
};
const MotorsTable = () => {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        horizontal
        style={{ marginBottom: '16px' }}
      >
        <Title style={{ margin: 0 }} level={4}>
          Motors
        </Title>
        <Search
          placeholder="Type here..."
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: '300px' }}
        />
      </Flex>
      <Table
        columns={motorsColumns}
        dataSource={motorsData}
        pagination={{ pageSize: 8, total: motorsData.length }}
        scroll={{
          y: 400,
        }}
      />
    </div>
  );
};

const UsedCarsTable = () => {
  return (
    <div >
      <Flex
        justify="space-between"
        align="center"
        horizontal
        style={{ marginBottom: '16px' }}
      >
        <Title style={{ margin: 0 }} level={4}>
          Used Cars
        </Title>
        <Search
          placeholder="Type here..."
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: '300px' }}
        />
      </Flex>
      <Table columns={userColumns} dataSource={userData} style={{flex: 1}}/>
    </div>
  );
};

const PlacesTable = () => {
  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        horizontal
        style={{ marginBottom: '16px' }}
      >
        <Title style={{ margin: 0 }} level={4}>
          Places
        </Title>
        <Search
          placeholder="Type here..."
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: '300px' }}
        />
      </Flex>
      <Table columns={userColumns} dataSource={userData} />
    </div>
  );
};

export { UsersTable, MotorsTable, UsedCarsTable, PlacesTable };
