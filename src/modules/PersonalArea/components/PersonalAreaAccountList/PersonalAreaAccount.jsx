import React from 'react';
import { useDispatch } from 'react-redux';
import {setCurrentAccount} from '../../actions/index'
import { Card } from 'antd';
import classNames from 'classnames';
import { checkAccountBalance } from '../../selectors/PersonalAreaSelectors';

export default (props) => {
  const dispatch = useDispatch();
  const { data, index, currentId } = props;
  const { accountBalance, accountNumber, id } = data;
  const userId = localStorage.getItem('userId');
  const onClick = () => {
    dispatch(setCurrentAccount({value:index, userId}));
  }
  const accountClass = classNames({
    'ant-card': currentId !== id,
    'ant-card current': currentId === id 
  });

  return (
    <Card title={`Счет: ${accountNumber}`} className={accountClass} bordered={true} onClick={onClick}>
      Баланс: {checkAccountBalance(accountBalance)}
    </Card> 
  )
}
