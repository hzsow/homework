import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput } from "../../../../../common/combineAntd";
import { required, number, normalizeAccount, normalizeValue } from '../../../validators/PersonalAreaValidators'

const TransferForm = React.memo(() => {
  return (
    <form>
      <Field label="" name="accountNumberField" validate={[required]} normalize={normalizeAccount} component={AInput} placeholder="Номер счета для перевода" hasFeedback/>
      <Field label="" name="accountValueField" validate={[required, number]} normalize={normalizeValue} component={AInput} placeholder="Сумма перевода" hasFeedback/>
    </form>
  );
})

export default reduxForm({form: 'transfer'})(TransferForm)
