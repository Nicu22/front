import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks/hooks';
import { auth, authReducer, testAPIcall } from '../redux-toolkit/slices/authSlice';



const AuthForm: React.FC = () => {
  const [form]=useForm()
  const navigate=useNavigate()

  const {users} = useAppSelector((state)=>({...state.auth}))
  const dispatch = useAppDispatch()
 
  
  const onFinish = async(values: any) => {
    console.log('Success:', form.getFieldsValue());
    const{username,password}=await form.validateFields();
    //if(username && password)(navigate("/schedule"))
    dispatch(auth({username,password}))
    dispatch(testAPIcall(3))
    navigate('/schedule-maker')
  };


  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 6 }}
      component={false}
      form={form}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" onClick={onFinish} >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;