import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput, ASelect } from "../../../../../common/combineAntd";
import { required, number, normalizeValue } from '../../../validators/PersonalAreaValidators'
import { Button, Select } from 'antd';
const { Option } = Select;

const TransferEachOtherForm = React.memo((props) => {
  const { handleSubmit, pristine, submitting, loader, accounts} = props;
  return (
    <form onSubmit={handleSubmit}>
        <Field label="Счет списания" name="currentAccount" component={ASelect} defaultValue={accounts.length > 0 ? accounts[0].account_number: ""} placeholder="" >
            { 
              accounts.map((element) => {
                return <Option key={element.account_number} value={element.account_number}>{element.account_number}</Option>
              }) 
            }
        </Field>
        <Field label="Счет зачисления" name="receiverAccount" component={ASelect} defaultValue={accounts.length > 0 ? accounts[0].account_number: ""}  placeholder="" >
            { 
              accounts.map((element) => {
                return <Option key={element.account_number} value={element.account_number}>{element.account_number}</Option>
              }) 
            }
        </Field>
      <Field label="" name="value" validate={[required, number]} normalize={normalizeValue} component={AInput} placeholder="Сумма" hasFeedback/>
      <Button type="primary" disabled={pristine || submitting} loading={loader} htmlType="submit">
        Перевод
      </Button>
    </form>
  );
})

export default reduxForm({form: 'transferEachOtherForm'})(TransferEachOtherForm)
