import React from 'react'
import { Layout, Card, Button, Tooltip, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Account from './PersonalAreaAccount';
import {accountsLoader, accountsLengthSelector} from '../../selectors/PersonalAreaSelectors';
import {useSelector, useDispatch} from 'react-redux';
import {newAccountLoader} from '../../actions/index';

const { Sider } = Layout;
const { confirm } = Modal;



export default (props) => {
  const { accounts, current } = props;
  const dispatch = useDispatch();
  const loader = useSelector(accountsLoader);
  const length = useSelector(accountsLengthSelector);
  const showConfirm = () => {
    confirm({
      title: 'Вы точно желаете открыть новый счет?',
      okText: 'Да',
      cancelText: 'Нет',
      onOk() {
        dispatch(newAccountLoader({length}));
      },
      onCancel() {
      },
    });
  }

  return (
      <Sider>
        <div className="site-card-wrapper">
            {loader && <Card loading={true}/>}
            {!loader &&
              accounts.map((account, index) => {
                return <Account key={index} data={account} currentId={current ? current.id : null} index={index} />
              })
            }
            <Tooltip title="Открыть новый счет">
              <Button type="button" size='large' shape="circle" onClick={showConfirm} icon={<PlusOutlined />} />
            </Tooltip>
      </div>
    </Sider>
  )
}
