import { Layout, Menu, MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import Foter from '../ui/Foter';

const { Header, Content } = Layout;
const items: MenuProps['items'] = [
    {
        key: 'Home',
        label: <NavLink to={'/'}>Home</NavLink>
    },
    {
        key: 'Products',
        label: <NavLink to={'/products'}>Products</NavLink>
    },
    {
        key: 3,
        label: 'Contact us'
    },
    {
        key: 4,
        label: 'About Us'
    },

]
const MainLayout = () => {
    return (
        <Layout >
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
                    <Outlet />
                </div>
            </Content>
            <Foter/>
        </Layout>
    );
};

export default MainLayout;