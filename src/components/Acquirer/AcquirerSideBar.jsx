import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
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
              Acquirer
          </Menu.Item>
       
          <Menu.Item key='4'>
           Getting Started
          </Menu.Item>
        
          <SubMenu key='sub1' title={'Features and Functionalities'}>
            <Menu.Item key='3'>Merchant Registration</Menu.Item>
            <Menu.Item key='4'>Merchant Registration Workflow</Menu.Item>
           
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
      width={270} 
      trigger={null}
      collapsedWidth={70}
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
      <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 15, fontWeight: 500 }}>
        <Menu.Item key="home">
          <NavLink to="/">Home</NavLink>
        </Menu.Item>
        <div className="flex items-center justify-center my-2">
          <span className="flex-1 h-0.5 bg-gray-300 mx-3" />
          <span className="whitespace-nowrap">Acquirer</span>
          <span className="flex-1 h-0.5 bg-gray-300 mx-2" />
        </div>
        <Menu.Item key="introduction">
          <NavLink to="/introduction">Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="getting-started">
          <NavLink to="/getting-started">Getting Started</NavLink>
        </Menu.Item>
        <SubMenu key="features" title={"Features and Functionalities"}>
          <SubMenu key="merchant-registration" title={"Merchant Registration"}>
            <Menu.Item key="registration-workflow">
              <NavLink to="/merchant-registration/workflow">Registration Workflow</NavLink>
            </Menu.Item>
            <Menu.Item key="bulk-registration">
              <NavLink to="/merchant-registration/bulk">Bulk Registration</NavLink>
            </Menu.Item>
            <Menu.Item key="self-sign-up">
              <NavLink to="/merchant-registration/self-sign-up">Self Sign-Up</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="merchant-management" title={"Merchant Management"}>
            <Menu.Item key="suspending-merchant">
              <NavLink to="/merchant-management/suspend">Suspending Merchant</NavLink>
            </Menu.Item>
            <Menu.Item key="activating-merchant">
              <NavLink to="/merchant-management/activate">Activating Suspended Merchant</NavLink>
            </Menu.Item>
            <Menu.Item key="merchant-agreement">
              <NavLink to="/merchant-management/agreement">Uploading Agreement</NavLink>
            </Menu.Item>
            <Menu.Item key="merchant-store-management">
              <NavLink to="/merchant-management/store">Merchant Store Management</NavLink>
            </Menu.Item>
            <SubMenu key="store-management" title={"Merchant Store Management"}>
              <Menu.Item key="create-new-store">
                <NavLink to="/merchant-management/store/create">Creating a New Store</NavLink>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="troubleshooting">
          <NavLink to="/troubleshooting">Troubleshooting</NavLink>
        </Menu.Item>
        <Menu.Item key="faq">
          <NavLink to="/faq">Frequently Asked Questions</NavLink>
        </Menu.Item>
        <Menu.Item key="support">
          <NavLink to="/support">Support Information</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default AcquirerSideBar;