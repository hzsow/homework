import React from 'react';
import {useDispatch} from 'react-redux';
import {Button, Modal} from 'antd';
import { deleteAccountLoader } from '../../actions';

const { confirm } = Modal;

export const DeleteAccountButton = (props) => {
    const {uuid, balance} = props;
    const dispatch = useDispatch();
    const showConfirm = () => {
        confirm({
          title: 'Вы точно желаете закрыть счет?',
          okText: 'Да',
          cancelText: 'Нет',
          onOk() {
            if (balance === 0){
              dispatch(deleteAccountLoader({uuid}));
            }else{
              confirm({
                title: "Остались средства на счету.",
                okText: 'Закрыть счет',
                cancelText: 'Отмена',
                onOk(){
                  dispatch(deleteAccountLoader({uuid}));
                }
              })
            }
          },
          onCancel() {
          },
        });
      }
    return <Button onClick={showConfirm}>Закрыть счет</Button>
} 