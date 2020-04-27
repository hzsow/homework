import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';
import { PageHeader, Button } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { accountsBalanceSelector } from '../../selectors/PersonalAreaSelectors';
const { Text } = Typography;



export default (props) => {
    const { user } = props;
    const { firstName } = user;
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
            <Text key="5">23.04.2020</Text>,
            <Text key="4" >{firstName}</Text>,
            <Button key="3" size={64} shape='circle' icon={<SettingOutlined />} />,
            <Avatar key="2" size="large" icon={<UserOutlined />} />,
            <Button key="1" shape='circle-outline' size='large' icon={<LogoutOutlined />} onClick={onClick}/>
          ]}> 
        </PageHeader>
    )
}