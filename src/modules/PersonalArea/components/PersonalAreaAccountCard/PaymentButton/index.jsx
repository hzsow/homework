import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PaymentForm from './PaymentForm';
import {Button, Drawer, message } from 'antd';
import { paymentAccountModalShowSelector} from './../../../selectors/PersonalAreaSelectors';
import { paymentAccountLoader, paymentAccountModalHide, paymentAccountModalShow } from '../../../actions/';
import {reset} from 'redux-form';

export const PaymentButton = (props) => {
    const { balance, id} = props
    const dispatch = useDispatch();
    const visible = useSelector(paymentAccountModalShowSelector);
    const handleCancel = () => {
        dispatch(paymentAccountModalHide());
    }
    const onClick = () => {
        dispatch(paymentAccountModalShow())
    }
    const handleSubmit = (values) => {
        if (balance >= parseFloat(values.paymentValue)){
            dispatch(paymentAccountLoader({
                payload: {
                    ...values,
                    currentAccount: id,
                    currentBalance: balance,
                    accountNumber: values.accountNumber.replace(/\s/g, '')
                }
            }));
            dispatch(reset('paymentForm'));
        }else
            message.warning('Недостаточно средств для совершения перевода')
    }
    return <>
            <Button onClick={onClick}>ПЛАТЕЖ</Button>
            <Drawer
                title="Платеж"
                placement="right"
                closable={true}
                onClose={handleCancel}
                visible={visible}
                >
                <PaymentForm onSubmit={handleSubmit}/>
            </Drawer>
           </>
} 