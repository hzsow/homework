import React from 'react';
import { Layout } from 'antd';
import { Table, Tag } from 'antd';

const { Content } = Layout;

const columns = [
  {
    title: 'Тип операции',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Дата/Время',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Сумма',
    dataIndex: 'summ',
    key: 'summ',
  },
];

const data = [
  {
    key: '1',
    type: 'Перевод',
    date: '29.04.2020 15:00',
    summ: 5000,
  },
];


export default () => {
    return(
        <Content><Table columns={columns} dataSource={data} /></Content>
    )
}