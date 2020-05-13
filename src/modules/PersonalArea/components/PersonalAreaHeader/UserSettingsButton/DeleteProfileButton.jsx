import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'antd';
import { deleteUserProfileLoader } from '../../../actions/';
import { accountsBalanceSelector } from '../../../selectors/PersonalAreaSelectors';

const { confirm } = Modal;

export const DeleteProfileButton = () => {
    const dispatch = useDispatch();
    const accountsBalance = useSelector(accountsBalanceSelector);
    const showConfirm = () => {
        confirm({
          title: 'Вы точно хотите удалить аккаунт?',
          okText: 'Да',
          cancelText: 'Нет',
          onOk() {
            if (accountsBalance === "0.00")
                dispatch(deleteUserProfileLoader());
              else
                confirm({
                  title: 'На счетах остались средства.',
                  okText: 'Удалить аккаунт',
                  cancelText: 'Отмена',
                  onOk(){
                    dispatch(deleteUserProfileLoader());
                  }
                })
          },
        });
      }
    return (
    <div className="userSettingsModal_button"> 
        <a onClick={showConfirm}>Удалить аккаунт</a>
    </div>)
} 