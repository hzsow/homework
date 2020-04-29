import React from 'react';
import {useDispatch} from 'react-redux';
import {Modal} from 'antd';
import { deleteUserProfileLoader } from '../../../actions/';

const { confirm } = Modal;

export const DeleteProfileButton = () => {
    const dispatch = useDispatch();
    const showConfirm = () => {
        confirm({
          title: 'Вы точно хотите удалить аккаунт?',
          okText: 'Да',
          cancelText: 'Нет',
          onOk() {
            dispatch(deleteUserProfileLoader());
          },
          onCancel() {
          },
        });
      }
    return (
    <div className="userSettingsModal_button"> 
        <a onClick={showConfirm}>Удалить аккаунт</a>
    </div>)
} 