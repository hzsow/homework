import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "antd";
import { AInput, AInputPassword, FormItemItemLayout } from "../../../common/combineAntd";
import { email, required } from '../validators/loginValidators'
import PropTypes from 'prop-types';


const LoginForm = React.memo((props) => {
  const { handleSubmit, pristine, submitting, setSubmit, showSignUp} = props;

  return (
    <form onSubmit={handleSubmit(setSubmit)}>
      <Field label="" name="Email" validate={[email, required]} component={AInput} placeholder="Email" hasFeedback/>
      <Field label="" name="Password" validate={[required]} component={AInputPassword} placeholder="Пароль" hasFeedback/>
      <FormItemItemLayout>
        <Button type="primary" disabled={pristine || submitting} htmlType="submit">
          Войти
        </Button>
      </FormItemItemLayout>
      <FormItemItemLayout>
        <Button type="dashed" htmlType="button" onClick={showSignUp}>
          Регистрация
        </Button>
      </FormItemItemLayout>
    </form>
  );
});

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    setSubmit: PropTypes.func,
    showSignUp: PropTypes.func,
}

export default reduxForm({form: 'login'})(LoginForm)
