import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';
import { PageHeader, Button } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { accountsBalanceSelector, changeUserProfileAvatarSelector } from '../../selectors/PersonalAreaSelectors';
import {UserSettingsButton} from './UserSettingsButton/';
import moment from 'moment';
const { Text } = Typography;

export default (props) => {
    const { user } = props;
    const { firstName } = user;
    const avatar = useSelector(changeUserProfileAvatarSelector);
    const accountsBalance = useSelector(accountsBalanceSelector);
    const onClick = () =>{
        localStorage.removeItem('token');
        window.location.reload();
    } 
    return(
        <PageHeader     
        className="site-page-header"
        backIcon={false}
        onBack={() => null}
        title="Общий баланс: "
        subTitle={accountsBalance}
        extra={[
            <Text key="5">{moment().format("DD.MM.YYYY")}</Text>,
            <Text key="4" >{firstName}</Text>,
            <UserSettingsButton key="3" size={64} shape='circle' user={user} icon={<SettingOutlined />} />,
            <Avatar key="2" size="large" src={avatar ? avatar : user.img} icon={ user.img ? null : <UserOutlined/>}  />,
            <Button key="1" shape='circle-outline' size='large' icon={<LogoutOutlined />} onClick={onClick}/>
          ]}> 
        </PageHeader>
    )
}