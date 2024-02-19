import { Space, Button } from 'antd';

export const motorsColumns = [
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Color',
    dataIndex: 'color',
    key: 'color',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Details</a>
        <Button type="link" danger style={{ padding: '0' }}>
          Delete
        </Button>
      </Space>
    ),
  },
];

export const motorsData = [
  {
    key: '1',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2005,
    color: 'Blue',
    price: 25000,
  },
  {
    key: '2',
    brand: 'Honda',
    model: 'Civic',
    year: 2018,
    color: 'Red',
    price: 32000,
  },
  {
    key: '3',
    brand: 'Ford',
    model: 'F-150',
    year: 2010,
    color: 'Black',
    price: 38000,
  },
  {
    key: '4',
    brand: 'Chevrolet',
    model: 'Malibu',
    year: 2015,
    color: 'Grey',
    price: 29000,
  },
  {
    key: '5',
    brand: 'BMW',
    model: '3 Series',
    year: 2019,
    color: 'White',
    price: 42000,
  },
  {
    key: '6',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2017,
    color: 'Silver',
    price: 38000,
  },
  {
    key: '7',
    brand: 'Audi',
    model: 'A4',
    year: 2014,
    color: 'Black',
    price: 29000,
  },
  {
    key: '8',
    brand: 'Volkswagen',
    model: 'Golf',
    year: 2008,
    color: 'Blue',
    price: 18000,
  },
  {
    key: '9',
    brand: 'Toyota',
    model: 'Camry',
    year: 2003,
    color: 'Green',
    price: 22000,
  },
  {
    key: '10',
    brand: 'Ford',
    model: 'Mustang',
    year: 2016,
    color: 'Red',
    price: 35000,
  },
];
