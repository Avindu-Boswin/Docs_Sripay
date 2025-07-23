import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;


function AcquirerSideBar({ isMobile = false, onClose }) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  if (isMobile) {
    // Render as a drawer for mobile
    return (
      <div className="h-full flex flex-col w-64 bg-white shadow-lg pt-20">
        <div className="flex items-center justify-between p-2 border-b">
          <Button
            type='text'
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapse}
          />
          <Button type="text" onClick={onClose}>&times;</Button>
        </div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='/'>
            <NavLink to='/' />
            Home
          </Menu.Item>
          <Menu.Item key='2'>
            About
          </Menu.Item>
          <SubMenu key='sub1' title={'Submenu'}>
            <Menu.Item key='3'>Option 1</Menu.Item>
            <Menu.Item key='4'>Option 2</Menu.Item>
            <Menu.Item key='5'>Option 3</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }

  // Desktop sidebar
  if (collapsed) {
    // Only show a small bar with expand icon, styled for visibility
    return (
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: 56,
          width: 48,
          background: 'rgba(255,255,255,1)',
          borderRadius: '0 12px 12px 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
          cursor: 'pointer',
        }}
        onClick={toggleCollapse}
        onMouseOver={e => e.currentTarget.style.background = 'rgba(240,240,240,1)'}
        onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.95)'}
      >
        <MenuUnfoldOutlined style={{ fontSize: 24, color: '#1677ff' }} />
      </div>
    );
  }

  // Expanded sidebar
  return (
    <Sider
      width={220}
      trigger={null}
      collapsedWidth={50}
      theme='light'
      collapsed={false}
      style={{
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        zIndex: 20,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        borderRight: '1px solid #f0f0f0',
        background: '#fff',
        paddingTop: 12,
        paddingBottom: 12,
      }}
    >
      <div className='flex items-center justify-end p-2' style={{ marginBottom: 8 }}>
        <Button
          type='text'
          icon={<MenuFoldOutlined style={{ fontSize: 20, color: '#1677ff' }} />}
          onClick={toggleCollapse}
          style={{ borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
        />
      </div>
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 16, fontWeight: 500 }}>
        <Menu.Item key='/'>
          <NavLink to='/' />
          {'Home'}
        </Menu.Item>
        <Menu.Item key='2'>
          {'About'}
        </Menu.Item>
        <SubMenu key='sub1' title={'Submenu'}>
          <Menu.Item key='3'>{'Option 1'}</Menu.Item>
          <Menu.Item key='4'>{'Option 2'}</Menu.Item>
          <Menu.Item key='5'>{'Option 3'}</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default AcquirerSideBar;