import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInputPassword, AInput } from "../../../../../../common/combineAntd";
import { required, minLength3, email} from '../../../../validators/PersonalAreaValidators'
import { Button } from 'antd';

const ChangeUserProfileForm = React.memo((props) => {
  const { pristine, submitting, handleSubmit, loader} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field label="" name="newFirstName" validate={[required, minLength3]} component={AInput} placeholder="Введите новое имя" hasFeedback/>
      <Field label="" name="newEmail" validate={[required, email]} component={AInput} placeholder="Введите новый email" hasFeedback/>
      <Field label="" name="confirmPassword" validate={[required]} component={AInputPassword} placeholder="Подтвердите пароль" hasFeedback/>
      <Button type="primary" disabled={pristine || submitting} loading={loader} htmlType="submit">
        Изменить профиль
      </Button>
    </form>
  );
})

export default reduxForm({form: 'changeUserProfile'})(ChangeUserProfileForm)
