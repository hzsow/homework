import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TransferForm from './TransferForm';
import {Button, Modal, message } from 'antd';
import { transferAccountLoaderSelector, transferAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { transferModalHide, transferModalShow, transferAccountLoader } from '../../../actions/';
import {reset} from 'redux-form';

export const TransferButton = (props) => {
    const { balance, id } = props;
    const dispatch = useDispatch();
    const visible = useSelector(transferAccountModalShow);
    const loader = useSelector(transferAccountLoaderSelector);
    const handleOk = (values) => {
        if (balance >= parseFloat(values.accountValueField))
            {dispatch(transferAccountLoader({
                payload: {
                    value: values.accountValueField, 
                    accountNumber: values.accountNumberField.replace(/\s/g, ''),
                    currentAccount: id,
                    currentAccountValue: balance
                }
            }));
            dispatch(reset('transferForm'));
        }
        else
            message.warning('Недостаточно средств для совершения перевода')

    }
    const handleCancel = () => {
        dispatch(transferModalHide());
    }
    const onTransferClick = () => {
        dispatch(transferModalShow())
    }
    return <div>
            <Button onClick={onTransferClick}>Перевод</Button>
            <Modal
                visible={visible}
                title="Перевод"
                onCancel={handleCancel}
                footer={[
                ]}
                >
                <TransferForm loader={loader} onSubmit={handleOk}/>
            </Modal>
        </div>
} 