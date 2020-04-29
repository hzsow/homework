import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput, FormItemItemLayout } from "../../../../../common/combineAntd";
import { required, normalizeValue, normalizeAccount, email } from '../../../validators/PersonalAreaValidators'
import { Button } from 'antd';

const PaymentForm = React.memo((props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field label="Номер счета" name="accountNumber" validate={[required]} normalize={normalizeAccount} component={AInput} placeholder="Введите номер счета" hasFeedback/>
      <Field label="Название платежа" name="paymentName" validate={[required]} component={AInput} placeholder="Введите название платежа" hasFeedback/>
      <Field label="На кого платеж" name="receiverName" validate={[required]} component={AInput} placeholder="Введите на кого платеж" hasFeedback/>
      <Field label="Email получателя" name="receiverEmail" validate={[required, email]} component={AInput} placeholder="Введите email получателя" hasFeedback/>
      <Field label="Назначение платежа" name="paymentPurpose" validate={[required]} component={AInput} placeholder="Введите назначение платежа" hasFeedback/>
      <Field label="Сумма платежа" name="paymentValue" validate={[required]} normalize={normalizeValue} component={AInput} placeholder="Введите сумму платежа" hasFeedback/>
      <FormItemItemLayout>
          <Button type="primary" disabled={pristine || submitting} htmlType="submit">
          Отправить
          </Button>
      </FormItemItemLayout>
    </form>
  );
})

export default reduxForm({form: 'paymentForm'})(PaymentForm)
