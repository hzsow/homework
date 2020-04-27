import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PersonalAreaAccountCard from '../components/PersonalAreaAccountCard'
import PersonalAreaAccountList from '../components/PersonalAreaAccountList'
import PersonalAreaHeader from '../components/PersonalAreaHeader'
import PersonalAreaTransactions from '../components/PersonalAreaTransactions'
import { Layout } from 'antd';
import { accountsList, userSelector, currentAccountSelector } from '../selectors/PersonalAreaSelectors';
import { isAccountsListLoader } from '../actions';
import { getUser } from '../../Login/actions'


export const PersonalAreaPage = () => {
    const dispatch = useDispatch();
    const accounts = useSelector(accountsList);
    const user = useSelector(userSelector);
    const currentAccount = useSelector(currentAccountSelector);
    const userId = localStorage.getItem('userId');
    // console.log(currentAccount)     
    // console.log(useSelector(state => state))
    useEffect(() => {
        dispatch(getUser({userId}));
        dispatch(isAccountsListLoader({userId}));
    }, [])
      
    return(
        <Layout>
            <PersonalAreaHeader user={user}/>
            <Layout>
            <Layout>
                <PersonalAreaAccountCard account={currentAccount} userId={userId}/>
            </Layout>
                <PersonalAreaAccountList accounts={accounts} current={currentAccount} userId={userId}/>
            </Layout>
        </Layout>
    )
}