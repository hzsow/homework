import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TransferForm from './TransferForm';
import {Button, Modal } from 'antd';
import { transferAccountLoaderSelector, transferAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { transferModalHide, transferModalShow, transferAccountLoader } from '../../../actions/';
import {reset} from 'redux-form';

export const TransferButton = () => {
    const dispatch = useDispatch();
    const visible = useSelector(transferAccountModalShow);
    const loader = useSelector(transferAccountLoaderSelector);
    const handleOk = (values) => {
        dispatch(transferAccountLoader({value: values.accountValueField, account_number: values.accountNumberField.replace(/\s/g, '')}));
        dispatch(reset('transferForm'));
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