import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Layout } from 'antd';
import { Table } from 'antd';
import { accountHistoryDataSelector, accountHistoryLoaderSelector, currentAccountLoader} from '../../selectors/PersonalAreaSelectors';
import { DatePicker } from 'antd';
import { accountHistoryFilter } from '../../actions/'
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Content } = Layout;


export default () => {
  const dispatch = useDispatch();
  const data = useSelector(accountHistoryDataSelector);
  const loaderHistory = useSelector(accountHistoryLoaderSelector);
  const loaderCurrentAccount = useSelector(currentAccountLoader);

  const onDateChange = (dates) => {
    if (dates){
      const dateOne = moment(dates[0]).format('YYYY.MM.DD, HH:mm:ss');
      const dateTwo = moment(dates[1]).format('YYYY.MM.DD, HH:mm:ss');
    dispatch(accountHistoryFilter({
          min: dateOne,
          max: dateTwo
      }))
    }
  }
  
  const datePicker =  (
    <div className="custom-filter-dropdown ant-table-filter-dropdown">
      <RangePicker showTime={true} onChange={onDateChange}/>
    </div>
  );
  
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
      filterDropdown: datePicker
    },
    {
      title: 'Сумма',
      dataIndex: 'value',
      key: 'value',
    },
  ];
  
    return(
        <Content>
          <Table columns={columns} pagination={{pageSize: 5, position: ["topCenter"]}} dataSource={data} loading={loaderHistory || loaderCurrentAccount} />
          </Content>
    )
}