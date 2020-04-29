import React from "react";
import { Form, Input, Radio, Select, Checkbox, DatePicker } from "antd";

export const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 240 },
    sm: { span: 160 }
  },
  wrapperCol: {
    xs: { span: 160 },
    md: { span: 160 }
  }
};

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 14,
      offset: 6
    }
  }
};
export const FormItemItemLayout = ({...props}) => {
  return (
    <FormItem {...formItemLayout}{...props} />
  )
}

const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItemItemLayout
      rules={[{ required: true }]}
      label={label}
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component {...input} {...rest} children={children} />
    </FormItemItemLayout>
  );
};

export const AInput = makeField(Input);
export const AInputPassword = makeField(Input.Password);
export const ARadioGroup = makeField(RadioGroup);
export const ASelect = makeField(Select);
export const ACheckbox = makeField(Checkbox);
export const ATextarea = makeField(TextArea);
export const ARangePicker = makeField(RangePicker);
