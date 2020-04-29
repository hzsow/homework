import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput } from "../../../../../common/combineAntd";
import { required, number, normalizeValue } from '../../../validators/PersonalAreaValidators'

const ReplenishForm = React.memo(() => {
  return (
    <form>
      <Field label="" name="replenishField" validate={[required, number]} normalize={normalizeValue} component={AInput} placeholder="Введите сумму пополнения" hasFeedback/>
    </form>
  );
})

export default reduxForm({form: 'replenish'})(ReplenishForm)
