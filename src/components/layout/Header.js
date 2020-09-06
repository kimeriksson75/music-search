import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal'>
        <Menu.Item key='1'>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/about'>About this app</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Header;
