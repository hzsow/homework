import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal, Card, Typography } from 'antd';
import { ChangePasswordButton } from './ChangePasswordButton/';
import { ChangeUserProfileButton } from './ChangeUserProfileButton/';
import { DeleteProfileButton } from './DeleteProfileButton';
import {changeUserProfileAvatarSelector} from '../../../selectors/PersonalAreaSelectors'
const { Text } = Typography;
export const UserSettingsButton = ({...props}) => {
    const { user } = props;
    const [visible, setVisible] = useState(false);
    const avatar = useSelector(changeUserProfileAvatarSelector);
    const onClick = () =>{
        setVisible(true);
    }
    const onClose = () =>{
        setVisible(false);
    }
    return(
    <>
        <Button {...props} onClick={onClick}/> 
        <Modal
            className="userSettingsModal"
            visible={visible}
            onCancel={onClose}
            title="Настройки профиля"
            footer={[]}>
                <Card
                    className="userSettingsModal_card"
                    bordered="false"
                    cover={<img alt="example" src={avatar ? avatar : user.img ? user.img : "no-photo.jpg"} />}>
                        <Text className="userSettingsModal_text"><b>Имя:</b> {user.firstName}</Text>
                        <Text className="userSettingsModal_text"><b>Email:</b> {user.email}</Text>
                        <Text className="userSettingsModal_text"><b>Статус:</b> {user.isModerated ? 'Клиент':'Пользователь' }</Text>
                </Card>
                    <ChangeUserProfileButton email={user.email}/>
                    <ChangePasswordButton email={user.email}/>
                    <DeleteProfileButton/>
        </Modal>
    </>
    )
}