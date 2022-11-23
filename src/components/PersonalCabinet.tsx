import { Layout, MenuProps, PageHeader, Dropdown, Space, Typography, Button,Select,Form, Input} from 'antd';
import { MinusCircleOutlined, PlusOutlined  } from '@ant-design/icons';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import ScheduleTimetable from './Timetable1';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/hooks/hooks1';
import { event } from '../redux-toolkit/slices/eventSlice1';

const { Header, Footer, Sider, Content } = Layout;

const items = [
  {
    value: '1',
    label: 'FAF-211',
  },
  {
    value: '2',
    label: 'FAF-212',
  },
  {
    value: '3',
    label: 'FAF-213',
  },
];

const days = [
  {
    value: '1',
    label: 'Monday',
  },
  {
    value: '2',
    label: 'Tuesday',
  },
  {
    value: '3',
    label: 'Wednesday',
  },
  {
    value: '4',
    label: 'Thursday',
  },
  {
    value: '5',
    label: 'Friday',
  },
  {
    value: '6',
    label: 'Saturday',
  }
];
  
const PersonalCabinet: React.FC = () => {
  const {events} = useAppSelector((state)=>({...state.event}))
  const navigate= useNavigate()
  const dispatch=useAppDispatch()
  const[group,setGroup]=useState<string>('')
  const [dayNumber,setDayNumber]=useState<number>(0)

  const onFinish = (values: any) => {
    const lessons=Object.values(values)[0] as []
    const dayLessons=lessons?.map((lesson:Event)=>{
      return {
        ...lesson,
        daysOfWeek:[Number(dayNumber)],
        group:group,
        startTime: '09:45',
      endTime:'11:15'
      }
    })
    console.log('Received values of form:', dayLessons);
    dispatch(event(dayLessons))
    
  };
  localStorage.setItem('events',JSON.stringify(events))
  

  return(<>
    <Layout style={{height:'960px'}}>
      <PageHeader
        style={{backgroundColor: "#ffff", border:"#2f6ca7"}}>
        <b style={{color: '#2f6ca7', fontWeight:'bold', fontSize:'36px', marginRight:'5%'}}>FCIM Schedule</b>
        <Select
          style={{ width: 140}}
          placeholder="Group"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          options={items}
          onChange={(val)=>setGroup(val)}
        />
        <Select
          style={{ width: 140}}
          placeholder="Weekday"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          options={days}
          onChange={(val)=>setDayNumber(val)}
        />
        </PageHeader>

      <Content> <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="lessons">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'subject']}
                  rules={[{ required: true, message: 'Missing subject name' }]}
                >
                  <Input placeholder="Subject" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'teacher']}
                  rules={[{ required: false, message: 'Missing teacher name' }]}
                >
                  <Input placeholder="Teacher Name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'cabinet']}
                  rules={[{ required: false, message: 'Missing cabinet name' }]}
                >
                  <Input placeholder="Cabinet name" />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'lesson']}
                  rules={[{ required: true, message: 'Missing lesson nr.' }]}
                >
                  <Input placeholder="Lesson Nr." />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'week']}
                  rules={[{ required: true, message: 'Missing week type' }]}
                >
                  <Input placeholder="Week Type" />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form></Content>
      <Footer>Footer</Footer>
    </Layout>
  </>)
};

export default PersonalCabinet;