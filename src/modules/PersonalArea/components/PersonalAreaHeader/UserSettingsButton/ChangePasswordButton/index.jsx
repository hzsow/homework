import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, message } from 'antd';
import ChangePasswordForm from './ChangePasswordForm';
import {changeUserPasswordLoaderSelector, changeUserPasswordModalShowSelector} from '../../../../selectors/PersonalAreaSelectors'
import { changeUserPasswordModalHide, changeUserPasswordModalShow, changeUserPasswordLoader} from '../../../../actions/'

export const ChangePasswordButton = (props) => {
    const { email } = props;
    const dispatch = useDispatch();
    const visible = useSelector(changeUserPasswordModalShowSelector);
    const loader = useSelector(changeUserPasswordLoaderSelector);
    const onCancel = () => {
        dispatch(changeUserPasswordModalHide());
    }
    const onOk = (values) => {
        if (values.newPassword === values.confrmNewPassword){
            dispatch(changeUserPasswordLoader({
                payload:{
                    ...values,
                    email
                }
            }));
        } else {
            message.warning('Пароли не совпадают');
        }
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
                ]}
                >
                <ChangePasswordForm onSubmit={onOk} loader={loader}/>
            </Modal>
        </div>
    )
}