import React from 'react';
import { Layout, Menu, Switch} from 'antd';
import { Routes, Route, Link, Router } from "react-router-dom";
import Home from './Home';
import Nav from './Nav';

const { Header } = Layout;

const LayoutContent = () =>{
  return(
    <Layout>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {[...Array(10)].map((x,i)=> <Link to={"/nav"+(i+1)}><Menu.Item key={i+1}>nav {i+1}</Menu.Item></Link>)}
        </Menu>
      </Header>
    </Layout>
  )
}
export default LayoutContent;