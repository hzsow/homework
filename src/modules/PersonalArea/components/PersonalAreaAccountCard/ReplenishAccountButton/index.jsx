import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplenishForm from './ReplenishForm';
import {Button, Modal } from 'antd';
import {formValueSelector, currentAccountValueSelector, replenishAccountLoaderSelector, replenishAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { replenishAccountLoader, replenishModalHide, replenishModalShow } from '../../../actions/';

export const ReplenishAccountButton = (props) => {
    const { balance, uuid } = props;
    const dispatch = useDispatch();
    const replenishValue = useSelector(formValueSelector);
    const visible = useSelector(replenishAccountModalShow);
    const id = useSelector(currentAccountValueSelector);
    const loader = useSelector(replenishAccountLoaderSelector);
    const handleOk = () => {
        const values = replenishValue.replenish.values;
        if (values){
            const newBalance = parseFloat(values.replenishField)+parseFloat(balance);
            dispatch(replenishAccountLoader({newBalance, value: values.replenishField, id, uuid}));
        }
    }
    const handleCancel = () => {
        dispatch(replenishModalHide());
    }
    const onReplenishClick = () => {
        dispatch(replenishModalShow())
    }
    return <div>
            <Button onClick={onReplenishClick}>Пополнить</Button>
            <Modal
                visible={visible}
                title="На какую сумму вы хотите пополнить этот счет?"
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                    Отмена
                    </Button>,
                    <Button key="submit" type="button" loading={loader} onClick={handleOk}>
                    Пополнить
                    </Button>,
                ]}
                >
                <ReplenishForm/>
            </Modal>
        </div>
} 