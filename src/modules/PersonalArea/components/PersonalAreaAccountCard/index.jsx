import React from 'react';
import {useSelector } from 'react-redux';
import { Typography, Layout, Space, Skeleton } from 'antd';
import { currentAccountLoader, currentAccountBalanceSelector } from '../../selectors/PersonalAreaSelectors'
import {DeleteAccountButton} from './DeleteAccountButton';
import {CreateTemplateButton} from './CreateTemplateButton/';
import {PaymentButton} from './PaymentButton/';
import {ReplenishAccountButton} from './ReplenishAccountButton/';
import {TransferButton} from './TransferButton/';
import {StatementButton} from './StatementButton';
import {TransferEachOtherButton} from './TransferEachOtherButton/';
const { Content } = Layout;
const { Text } = Typography;


export default (props) => {
    const { accounts, account } = props;
    const loader = useSelector(currentAccountLoader);
    const balance = useSelector(currentAccountBalanceSelector);

    if (loader)
        return <Content><Skeleton active /></Content>
    return(
        <Content>
            {
                account && <div className="PersonalAreaAccountCard_content">
                <div>
                    <Text>Счет №: {account.accountNumber}</Text>
                    <Text type="secondary">Баланс: {balance}</Text>
                </div>
                <div>
                    <Space size='middle'>
                        <ReplenishAccountButton account={account}/>
                        <TransferButton accountId={account.id} balance={account.accountBalance} currentAccount={account.accountNumber}/>
                        <TransferEachOtherButton accountId={account.id} accounts={accounts}/>
                        <PaymentButton accountId={account.id} balance={account.accountBalance} currentAccount={account.accountNumber} id={account.id}/>
                    </Space>
                </div>
                <div>
                    <Space size='large'>
                        <StatementButton account={account}/>
                        <CreateTemplateButton accountNumber={account.accountNumber}/>
                        <DeleteAccountButton uuid={account.id} balance={account.accountBalance}/>
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