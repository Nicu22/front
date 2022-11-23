import { Layout, PageHeader} from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const { Header, Footer, Sider, Content } = Layout;

const AuthLayout: React.FC = () => {
    const navigate = useNavigate()
    const handleBack = () => {navigate ("/")}
    return (<>
    <Layout>
    <PageHeader
      className="site-page-header"
      onBack={handleBack}
      title="FCIM Schedule">

      </PageHeader>
      <Content><AuthForm/></Content>
      <Footer>Footer</Footer>
    </Layout>
    </>)
};
export default AuthLayout;