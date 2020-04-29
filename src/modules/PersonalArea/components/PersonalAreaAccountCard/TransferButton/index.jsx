import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TransferForm from './TransferForm';
import {Button, Modal } from 'antd';
import { formValueSelector, transferAccountLoaderSelector, transferAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { transferModalHide, transferModalShow, transferAccountLoader } from '../../../actions/';

export const TransferButton = () => {
    const dispatch = useDispatch();
    const visible = useSelector(transferAccountModalShow);
    const loader = useSelector(transferAccountLoaderSelector);
    const form = useSelector(formValueSelector);
    const handleOk = () => {
        const values = form.transfer.values;
        if(values){
            dispatch(transferAccountLoader({value: values.accountValueField, account_number: values.accountNumberField.replace(/\s/g, '')}));
        }
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
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Отмена
                    </Button>,
                    <Button key="submit" type="button" loading={loader} onClick={handleOk}>
                    Совершить перевод
                    </Button>,
                ]}
                >
                <TransferForm/>
            </Modal>
        </div>
} 