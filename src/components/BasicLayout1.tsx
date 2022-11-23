import { Layout, MenuProps, PageHeader, Dropdown, Space, Typography, Button,Select} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import ScheduleTimetable from './Timetable1';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../redux-toolkit/hooks/hooks';
import { testAPIcall } from '../redux-toolkit/slices/authSlice';

const { Header, Footer, Sider, Content } = Layout;

/*const items = [
  {
    value: '1',
    label: 'Group',
  },
  {
    value: '2',
    label: 'Teacher',
  },
  {
    value: '3',
    label: 'Cabinet',
  },
];*/

const provinceData = ['Group', 'Teacher', 'Cabinet'];
const cityData = {
  Group: ['FAF-211', 'FAF-212', 'FAF-213','FAF-214'],
  Teacher: ['Galcenco Boris', 'Vdovicenco Alexandr', 'Viorel Bostan'],
  Cabinet: ['108','113','118']
};

type CityName = keyof typeof cityData;
  
const BasicLayout: React.FC = () => {
  const dispatch=useAppDispatch()
  useEffect(()=>{
    //axios.get("http://127.0.0.1:8000/api/lesson/").then((res)=>console.log(res.data))
    dispatch(testAPIcall())
  },[])
  const [cities, setCities] = useState(cityData[provinceData[0] as CityName]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0] as CityName][0]);

  const handleProvinceChange = (value: CityName) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value: CityName) => {
    setSecondCity(value);
  };
  const navigate= useNavigate()
  const handleLogin =()=>{navigate("/login")}
  return(<>
    <Layout style={{height:'960px'}}>
      <PageHeader
        style={{backgroundColor: "#ffff", border:"#2f6ca7"}}>
        <b style={{color: '#2f6ca7', fontWeight:'bold', fontSize:'36px', marginRight:'5%'}}>FCIM Schedule</b>
        <Select
        placeholder="Schedule type"
        defaultValue={"Group"}
        //defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
        options={provinceData.map(province => ({ label: province, value: province }))}
        />
        <Select
          style={{ width: 120 }}
          //value={secondCity}
          onChange={onSecondCityChange}
          options={cities.map(city => ({ label: city, value: city }))}
        />
          

        <Button onClick={handleLogin}style={{float:'right',marginTop:'1.2em'}}>Log in</Button>
          
        </PageHeader>

      <Content ><ScheduleTimetable/></Content>
      <Footer>Footer</Footer>
    </Layout>
  </>)
};

export default BasicLayout;