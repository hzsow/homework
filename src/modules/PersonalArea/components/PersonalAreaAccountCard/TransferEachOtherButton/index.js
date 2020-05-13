import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TransferEachOtheForm from './TransferEachOtherForm';
import {Button, Modal, message } from 'antd';
import { transferEachOtherAccountLoaderSelector, transferEachOtherAccountModalShowSelector} from './../../../selectors/PersonalAreaSelectors';
import { transferEachOtherModalHide, transferEachOtherModalShow, transferEachOtherAccountLoader } from '../../../actions/';
import {reset} from 'redux-form';


export const TransferEachOtherButton = (props) => {
    const { accounts, accountId } = props;
    const dispatch = useDispatch();
    const visible = useSelector(transferEachOtherAccountModalShowSelector);
    const loader = useSelector(transferEachOtherAccountLoaderSelector);
    const checkAccount = (current, value) => {
        const currentAcc = accounts.find((el) => el.accountNumber === current);
        if (currentAcc && currentAcc.accountBalance >= value)
                return true; 
        return false;
    }
    const handleOk = (values) => {
        if (checkAccount(values.currentAccount, values.value))
            {dispatch(transferEachOtherAccountLoader({
                payload: {
                    ...values,
                    accountId
                }
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