import React from 'react';
import { reduxForm, Field } from "redux-form";
import { AInput, AInputPassword, tailFormItemLayout, FormItemItemLayout } from "../../../common/combineAntd";
import { Button } from "antd";
import { email, required, minLength3, minLength4 } from '../validators/loginValidators'
import PropTypes from 'prop-types';
import { RollbackOutlined } from '@ant-design/icons';


const SignupForm = React.memo((props) => {
    const { handleSubmit, pristine, submitting, backButton} = props;
    console.log(props);
    
    return (
        <form onSubmit={handleSubmit}>
            <FormItemItemLayout>
                <Button type="button" htmlType="button" onClick={backButton} icon={<RollbackOutlined />}/>
            </FormItemItemLayout>
            <Field label="" name="Email" validate={[required, email]} component={AInput} placeholder="Email адрес" hasFeedback/>
            <Field label="" name="First" validate={[required, minLength3]} component={AInput} placeholder="Ваше имя" hasFeedback/>
            <Field label="" name="Password" validate={[required, minLength4]} component={AInputPassword} placeholder="Пароль" hasFeedback/>
            <Field label="" name="ConfirmPassword" validate={[required, minLength4]} component={AInputPassword} placeholder="Подтвердите пароль" hasFeedback/>
            <FormItemItemLayout>
                <Button type="primary" disabled={pristine || submitting} htmlType="submit">
                Отправить
                </Button>
            </FormItemItemLayout>
        </form>
    );
})

SignupForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    setSubmit: PropTypes.func,
}

export default reduxForm({form: 'registration'})(SignupForm)
  
