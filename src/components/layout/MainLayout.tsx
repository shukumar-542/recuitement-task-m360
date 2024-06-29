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
    

]
const MainLayout = () => {
    return (
        <Layout >
            <Header style={{ display: 'flex', alignItems: 'center' ,backgroundColor: '#445876' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 , backgroundColor: '#445876'}}
                />
            </Header>
            <Content style={{ }}>

                <div
                    style={{
                        minHeight: 150,
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