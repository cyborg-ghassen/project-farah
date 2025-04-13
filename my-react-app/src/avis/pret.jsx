import React from 'react';
import { Table, Button } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css'; // Ant Design base reset

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Heure',
    dataIndex: 'heure',
    key: 'heure',
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Nom & Prénom patient',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '4 sur 4',
    key: 'action',
    render: () => (
      <Button icon={<CopyOutlined />} shape="circle" />
    ),
  },
];

const data = [
  { key: '1', name: 'test12' },
  { key: '2', name: 'QWERTY' },
  { key: '3', name: 'dvdsvsvd' },
  { key: '4', name: 'amamix' },
];

const Pret = () => {
  return (
    <div style={{ padding: 24 }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 20,
          showSizeChanger: true,
          pageSizeOptions: ['20', '100', '500', '2500'],
        }}
        rowSelection={{}}
        rowClassName={() => 'highlight-green-row'} // Class defined in index.css
      />
    </div>
  );
};

export default Pret;
