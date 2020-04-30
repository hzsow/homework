import React from 'react';
import {useSelector } from 'react-redux';
import { Typography, Layout, Space, Skeleton } from 'antd';
import { currentAccountLoader, currentAccountBalanceSelector } from '../../selectors/PersonalAreaSelectors'
import {DeleteAccountButton} from './DeleteAccountButton';
import {CreateTemplateButton} from './CreateTemplateButton';
import {PaymentButton} from './PaymentButton/';
import {ReplenishAccountButton} from './ReplenishAccountButton/';
import {TransferButton} from './TransferButton/';
import {StatementButton} from './StatementButton';
const { Content } = Layout;
const { Text } = Typography;


export default (props) => {
    const { account, userId } = props;
    const loader = useSelector(currentAccountLoader);
    const balance = useSelector(currentAccountBalanceSelector);

    if (loader)
        return <Content><Skeleton active /></Content>
    return(
        <Content>
            {
                account && <div className="PersonalAreaAccountCard_content">
                <div>
                    <Text>Счет №: {account.account_number}</Text>
                    <Text type="secondary">Баланс: {balance}</Text>
                </div>
                <div>
                    <Space size='middle'>
                        <ReplenishAccountButton balance={account.account_balance} uuid={account.id}/>
                        <TransferButton/>
                        <PaymentButton/>
                    </Space>
                </div>
                <div>
                    <Space size='large'>
                        <StatementButton/>
                        <CreateTemplateButton/>
                        <DeleteAccountButton uuid={account.id} userId={userId}/>
                    </Space>
                </div>
            </div>
            }
            {
                !account && <div className="PersonalAreaAccountCard_content">
                    <Text>У вас нет открытых счетов :(</Text>
                    <Text>Нажмите на плюс справа, чтобы завести счет</Text>
                </div>
            }
        </Content>
    )
}