import {  Layout, Menu, MenuProps } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const items : MenuProps['items'] = [
    {
        key  : 1,
        label : 'Home'
    },
    {
        key  : 2,
        label : 'Products'
    },
    {
        key  : 3,
        label : 'Contact us'
    },
    {
        key  : 4,
        label : 'About Us'
    },
   
]
const MainLayout = () => {
    return (
        <Layout style={{height : "100vh"}}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px' }}>
                
                <div
                    style={{
                        minHeight: 280,
                        padding: 24,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default MainLayout;