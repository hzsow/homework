import React from 'react';
import { useDispatch } from 'react-redux';
import {setCurrentAccount} from '../../actions/index'
import { Card } from 'antd';
import classNames from 'classnames';


export default (props) => {
  const dispatch = useDispatch();
  const { data, index, currentId } = props;
  const { account_balance, account_number, id } = data;
  const userId = localStorage.getItem('userId');
  const onClick = () => {
    dispatch(setCurrentAccount({value:index, userId}));
  }

  const accountClass = classNames({
    'ant-card': currentId !== id,
    'ant-card current': currentId === id 
  });
  return (
    <Card title={account_number} className={accountClass} bordered={true} onClick={onClick}>
      {account_balance}
    </Card> 
  )
}
