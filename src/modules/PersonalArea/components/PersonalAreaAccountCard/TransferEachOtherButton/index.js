import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TransferEachOtheForm from './TransferEachOtherForm';
import {Button, Modal, message } from 'antd';
import { transferEachOtherAccountLoaderSelector, transferEachOtherAccountModalShowSelector} from './../../../selectors/PersonalAreaSelectors';
import { transferEachOtherModalHide, transferEachOtherModalShow, transferEachOtherAccountLoader } from '../../../actions/';
import {reset} from 'redux-form';


export const TransferEachOtherButton = (props) => {
    const { accounts } = props;
    const dispatch = useDispatch();
    const visible = useSelector(transferEachOtherAccountModalShowSelector);
    const loader = useSelector(transferEachOtherAccountLoaderSelector);
    const checkAccount = (current, value) => {
        const currentAcc = accounts.find((el) => el.account_number === current);
        if (currentAcc && currentAcc.account_balance >= value)
                return true; 
        return false;
    }
    const handleOk = (values) => {
        if (checkAccount(values.currentAccount, values.value))
            {dispatch(transferEachOtherAccountLoader({
                payload: values
            }));
            dispatch(reset('transferForm'));
        }
        else
            message.warning('Недостаточно средств для совершения перевода')
    }
    const handleCancel = () => {
        dispatch(transferEachOtherModalHide());
    }
    const onTransferClick = () => {
        dispatch(transferEachOtherModalShow())
    }
    return <div>
            <Button onClick={onTransferClick}>Перевод между своими счетами</Button>
            <Modal
                visible={visible}
                title="Перевод между своими счетами"
                onCancel={handleCancel}
                footer={[
                ]}
                >
                <TransferEachOtheForm accounts={accounts} loader={loader} onSubmit={handleOk}/>
            </Modal>
        </div>
} 