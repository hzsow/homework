import React from "react";
import { Field, reduxForm } from "redux-form";
import { AInputPassword } from "../../../../../../common/combineAntd";
import { required, minLength4} from '../../../../validators/PersonalAreaValidators'
import { Button } from 'antd';

const ChangePasswordForm = React.memo((props) => {
  const { pristine, submitting, handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field label="" name="oldPassword" validate={[required, minLength4]} component={AInputPassword} placeholder="Введите старый пароль" hasFeedback/>
      <Field label="" name="newPassword" validate={[required, minLength4]} component={AInputPassword} placeholder="Введите новый пароль" hasFeedback/>
      <Field label="" name="confrmNewPassword" validate={[required, minLength4]} component={AInputPassword} placeholder="Подтвердите новый пароль" hasFeedback/>
      <Button type="primary" disabled={pristine || submitting} htmlType="submit">
        Изменить пароль
      </Button>
    </form>
  );
})

export default reduxForm({form: 'changeUserPassword'})(ChangePasswordForm)
