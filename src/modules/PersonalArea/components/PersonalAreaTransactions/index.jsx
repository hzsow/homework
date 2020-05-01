import React from 'react';
import { useSelector} from 'react-redux';
import { Layout } from 'antd';
import { Table } from 'antd';
import { accountHistoryDataSelector, accountHistoryLoaderSelector} from '../../selectors/PersonalAreaSelectors';

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
    dataIndex: 'value',
    key: 'value',
  },
];


export default () => {
  const data = useSelector(accountHistoryDataSelector);
  const loader = useSelector(accountHistoryLoaderSelector);
    return(
        <Content><Table columns={columns} pagination={{pageSize: 5, position: ["topCenter"]}} dataSource={data} loading={loader} /></Content>
    )
}