import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PaymentForm from './PaymentForm';
import {Button, Drawer, message } from 'antd';
import { paymentAccountModalShowSelector, templateSelector} from './../../../selectors/PersonalAreaSelectors';
import { paymentAccountLoader, paymentAccountModalHide, paymentAccountModalShow, getTemplateLoader } from '../../../actions/';
import {reset} from 'redux-form';

export const PaymentButton = (props) => {
    const { balance, id} = props
    const [ useTemplate, setUseTemplate ] = useState(false);
    const dispatch = useDispatch();
    const visible = useSelector(paymentAccountModalShowSelector);
    const template = useSelector(templateSelector);
    const handleCancel = () => {
        dispatch(paymentAccountModalHide());
        dispatch(reset('paymentForm'));
    }
    const onClick = () => {
        dispatch(getTemplateLoader(id));
        dispatch(paymentAccountModalShow())
    }
    const handleSubmit = (values) => {
        if (balance >= parseFloat(values.paymentValue)){
            dispatch(paymentAccountLoader({
                payload: {
                    ...values,
                    currentAccount: id,
                    currentBalance: balance,
                    accountNumber: values.accountNumber.replace(/\s/g, ''),
                    useTemplate
                }
            }));
            dispatch(reset('paymentForm'));
        }else
            message.warning('Недостаточно средств для совершения перевода')
    }
    const useTemplateClick = () => {
        setUseTemplate(true);
    }
    const clearClick = () => {
        dispatch(reset('paymentForm'));
        setUseTemplate(false);
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
                { !useTemplate && template && <span>У вас есть шаблон. <a onClick={useTemplateClick}>Использовать</a></span>}
                { useTemplate && <a onClick={clearClick}>Очистить</a>}
                <PaymentForm onSubmit={handleSubmit} initialValues={useTemplate ? template : null }/>
            </Drawer>
           </>
} 