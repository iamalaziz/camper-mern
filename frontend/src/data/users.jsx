import { Space, Button } from 'antd';

export const userColumns = [
  {
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite</a>
        <Button type="link" danger style={{ padding: '0' }}>
          Delete
        </Button>
      </Space>
    ),
  },
];

export const userData = [
  {
    key: '1',
    name: 'John Brown',
    phone: '01032080203',
    email: 'john@gmail.com',
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    phone: '01042093445',
    email: 'jim@gmail.com',
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    phone: '01023670394',
    email: 'joe@gmail.com',
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
