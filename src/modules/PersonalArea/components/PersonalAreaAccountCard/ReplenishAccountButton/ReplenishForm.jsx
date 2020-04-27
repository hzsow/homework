import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInput } from "../../../../../common/combineAntd";
import { required, number, normalizeReplenish } from '../../../validators/PersonalAreaValidators'

const ReplenishForm = React.memo(() => {
  return (
    <form>
      <Field label="" name="replenishField" validate={[required, number]} normalize={normalizeReplenish} component={AInput} placeholder="Введите количество бабок" hasFeedback/>
    </form>
  );
})

export default reduxForm({form: 'replenish'})(ReplenishForm)
