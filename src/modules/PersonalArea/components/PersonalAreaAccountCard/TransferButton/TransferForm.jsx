import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput } from "../../../../../common/combineAntd";
import { required, number, normalizeAccount, normalizeValue } from '../../../validators/PersonalAreaValidators'
import { Button } from 'antd';

const TransferForm = React.memo((props) => {
  const { handleSubmit, pristine, submitting, loader} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field label="" name="accountNumberField" validate={[required]} normalize={normalizeAccount} component={AInput} placeholder="Номер счета для перевода" hasFeedback/>
      <Field label="" name="accountValueField" validate={[required, number]} normalize={normalizeValue} component={AInput} placeholder="Сумма перевода" hasFeedback/>
      <Button type="primary" disabled={pristine || submitting} loading={loader} htmlType="submit">
        Перевод
      </Button>
    </form>
  );
})

export default reduxForm({form: 'transferForm'})(TransferForm)
