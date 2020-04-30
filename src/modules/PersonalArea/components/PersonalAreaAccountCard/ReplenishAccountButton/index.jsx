import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplenishForm from './ReplenishForm';
import {Button, Modal } from 'antd';
import {currentAccountValueSelector, replenishAccountLoaderSelector, replenishAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { replenishAccountLoader, replenishModalHide, replenishModalShow } from '../../../actions/';
import {reset} from 'redux-form';

export const ReplenishAccountButton = (props) => {
    const { balance, uuid } = props;
    const dispatch = useDispatch();
    const visible = useSelector(replenishAccountModalShow);
    const id = useSelector(currentAccountValueSelector);
    const loader = useSelector(replenishAccountLoaderSelector);
    const handleOk = (values) => {
        const newBalance = parseFloat(values.replenishField)+parseFloat(balance);
        dispatch(replenishAccountLoader({newBalance, value: values.replenishField, id, uuid}));
        dispatch(reset('replenishForm'));
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
                className="ant-modal-padding-zero"
                visible={visible}
                title="На какую сумму вы хотите пополнить этот счет?"
                onCancel={handleCancel}
                footer={[
                ]}
                >
                <ReplenishForm onSubmit={handleOk} loader={loader}/>
            </Modal>
        </div>
} 