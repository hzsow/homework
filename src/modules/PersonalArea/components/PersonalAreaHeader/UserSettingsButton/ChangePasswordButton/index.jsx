import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import ChangePasswordForm from './ChangePasswordForm';
import {changeUserPasswordLoaderSelector, formValueSelector, changeUserPasswordModalShowSelector} from '../../../../selectors/PersonalAreaSelectors'
import { changeUserPasswordModalHide, changeUserPasswordModalShow, changeUserPasswordLoader} from '../../../../actions/'

export const ChangePasswordButton = () => {
    const dispatch = useDispatch();
    const visible = useSelector(changeUserPasswordModalShowSelector);
    const loader = useSelector(changeUserPasswordLoaderSelector);
    const form = useSelector(formValueSelector);
    const onCancel = () => {
        dispatch(changeUserPasswordModalHide());
    }
    const onOk = () => {
        const values = form.changeUserPassword.values;
        if (values)
            dispatch(changeUserPasswordLoader({newPassword: values.newPassword, oldPassword: values.oldPassword}));
    }
    const onClick = () => {
        dispatch(changeUserPasswordModalShow());
    }
    return(
        <div className="userSettingsModal_button">  
            <Button onClick={onClick}>Изменить пароль</Button>
            <Modal
                visible={visible}
                title="Изменить пароль"
                onCancel={onCancel}
                footer={[
                    <Button key="back" onClick={onCancel}>
                    Отмена
                    </Button>,
                    <Button key="submit" type="button" loading={loader} onClick={onOk}>
                    Изменить пароль
                    </Button>,
                ]}
                >
                <ChangePasswordForm/>
            </Modal>
        </div>
    )
}