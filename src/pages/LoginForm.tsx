import React, {FC} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {rules} from '../utils/rules';
import {useDispatch} from 'react-redux';
import {AuthActionCreator} from '../store/reducers/auth/action-creators';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(AuthActionCreator.login('user@user.com', 'password'));
  };
  const onFinishFailed = () => {
    console.log('dsa');
  };

  return (
    <Form
      name="basic"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          rules.required('Email is required'),
          {type: 'email'},
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password/>
      </Form.Item>
      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{offset: 8, span: 16}}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit">
                    Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
