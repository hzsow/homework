import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ReplenishForm from './ReplenishForm';
import {Button, Modal } from 'antd';
import {replenishAccountLoaderSelector, replenishAccountModalShow} from './../../../selectors/PersonalAreaSelectors';
import { replenishAccountLoader, replenishModalHide, replenishModalShow } from '../../../actions/';
import {reset} from 'redux-form';

export const ReplenishAccountButton = (props) => {
const { account: { accountNumber } } = props;
    const dispatch = useDispatch();
    const visible = useSelector(replenishAccountModalShow);
    const loader = useSelector(replenishAccountLoaderSelector);
    const handleOk = (values) => {
        dispatch(replenishAccountLoader({ 
            value: values.replenishField, 
            accountNumber
        }));
        dispatch(reset('replenishForm'));
    }
    const handleCancel = () => {
        dispatch(replenishModalHide());
    }
    const onReplenishClick = () => {
        dispatch(replenishModalShow())
    }
    return  <>
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
            </>
} 