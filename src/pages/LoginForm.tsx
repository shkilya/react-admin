import React, {ChangeEvent, FC, useState} from 'react';
import {Button, Checkbox, Form, Input} from 'antd';
import {rules} from '../utils/rules';
import {useDispatch} from 'react-redux';
import {AuthActionCreator} from '../store/reducers/auth/action-creators';
import {useTypesSelector} from '../hooks/useTypesSelector';
import {useAction} from '../hooks/useAction';

const LoginForm: FC = () => {
  const dispatch = useDispatch();

  const {error, isLoading} = useTypesSelector((state) => state.auth);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {login} = useAction();

  const onFinish = () => {
    dispatch(login(username, password));
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
        <Input
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
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
