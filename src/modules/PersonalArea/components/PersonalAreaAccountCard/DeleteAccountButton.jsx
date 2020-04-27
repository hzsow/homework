import React from 'react';
import {useDispatch} from 'react-redux';
import {Button, Modal} from 'antd';
import { deleteAccountLoader } from '../../actions';

const { confirm } = Modal;

export const DeleteAccountButton = (props) => {
    const {uuid, userId} = props;
    const dispatch = useDispatch();
    const showConfirm = () => {
        confirm({
          title: 'Вы точно желаете закрыть счет?',
          okText: 'Да',
          cancelText: 'Нет',
          onOk() {
            dispatch(deleteAccountLoader({uuid, userId}));
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
    return <Button onClick={showConfirm}>Закрыть счет</Button>
} 