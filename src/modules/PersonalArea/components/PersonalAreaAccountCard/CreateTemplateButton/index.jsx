import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CreateTemplateForm from './createTemplateForm';
import {Button, Drawer } from 'antd';
import { createTemplateModalShowSelector, templateSelector} from './../../../selectors/PersonalAreaSelectors';
import { createTemplateLoader, createTemplateModalHide, createTemplateModalShow, getTemplateLoader  } from '../../../actions/';
import {reset} from 'redux-form';

export const CreateTemplateButton = (props) => {
    const { accountNumber } = props;
    const dispatch = useDispatch();
    const visible = useSelector(createTemplateModalShowSelector);
    const template = useSelector(templateSelector);
    const handleCancel = () => {
        dispatch(createTemplateModalHide());
    }
    const onClick = () => {
        dispatch(getTemplateLoader(accountNumber));
        dispatch(createTemplateModalShow())
    }
    const handleSubmit = (values) => {
        dispatch(createTemplateLoader({
            payload: {
                ...values,
                accountNumberReceiver: typeof(values.accountNumberReceiver) == "string" ? values.accountNumberReceiver.replace(/\s/g, ''): values.accountNumberReceiver,
                accountNumberCurrent: accountNumber 
            }
        }));
        dispatch(reset('paymentForm'));
    }
    return <>
            <Button onClick={onClick}>Создать шаблон</Button>
            <Drawer
                title="Создать шаблон платежа"
                placement="right"
                closable={true}
                onClose={handleCancel}
                visible={visible}
                >
                { template && "Шаблон уже существует. Вы можете его редактировать"}
                <CreateTemplateForm onSubmit={handleSubmit} initialValues={template}/>
            </Drawer>
           </>
} 