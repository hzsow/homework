import React, {useState} from 'react';
import {Button, Modal, Typography } from 'antd';
import PersonalAreaTransactions from '../PersonalAreaTransactions/';
import { useSelector } from 'react-redux';
import { currentAccountBalanceSelector } from '../../selectors/PersonalAreaSelectors';

const { Text } = Typography;

export const StatementButton = (props) => {
    const { account } = props;
    const balance = useSelector(currentAccountBalanceSelector);
    const [visible, setVisible] = useState(false);
    const onClose = () => {
        setVisible(false);
    }
    const onClick = () => {
        setVisible(true);
    }
    return  <>
                <Button onClick={onClick}>Выписка</Button>
                <Modal
                    title="Выписка"
                    onCancel={onClose}
                    className="StatementButtonModal"
                    visible={visible}
                    footer={[]}
                    >
                        <Text className="StatementButtonModal__text">Счет №: {account.accountNumber}</Text>
                        <Text type="secondary" className="StatementButtonModal__text">Баланс: {balance}</Text>
                        <Text type="secondary" className="StatementButtonModal__text">Счет открыт: {account.dateCreated}</Text>
                        <PersonalAreaTransactions/>
                </Modal>
            </>
} 