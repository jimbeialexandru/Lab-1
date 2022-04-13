import React from 'react';
import { Layout, Menu} from 'antd';

const { Header } = Layout;

const Layout_content = () =>{
    return(
        <Layout>
          <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Nav 1</Menu.Item>
              <Menu.Item key="2">Nav 2</Menu.Item>
              <Menu.Item key="3">Nav 3</Menu.Item>
              <Menu.Item key="4">Nav 4</Menu.Item>
              <Menu.Item key="5">Nav 5</Menu.Item>
              <Menu.Item key="5">Nav 6</Menu.Item>
            </Menu>
          </Header>
        </Layout>
      )
}
export default Layout_content;