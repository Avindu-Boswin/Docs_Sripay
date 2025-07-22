import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Sider
      width={200}
      trigger={null}
      collapsedWidth={50}
      theme='light'
      collapsed={collapsed}
      style={{
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        zIndex: 10,
      }}
    >
      <div className='flex items-center justify-end p-2'>
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
        />
      </div>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='/' >
          <NavLink to='/' />
          {!collapsed && 'Home'}
        </Menu.Item>
        <Menu.Item key='2'>
          {!collapsed && 'About'}
        </Menu.Item>
        <SubMenu key='sub1' title={!collapsed ? 'Submenu' : ''}>
          <Menu.Item key='3'>{!collapsed && 'Option 1'}</Menu.Item>
          <Menu.Item key='4'>{!collapsed && 'Option 2'}</Menu.Item>
          <Menu.Item key='5'>{!collapsed && 'Option 3'}</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SideBar;