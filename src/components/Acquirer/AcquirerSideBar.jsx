// Sidebar.tsx
import { useState } from "react";
import { Menu, Button, Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ collapsed, setCollapsed, isMobileOpen, onMobileClose }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleFeatures = () => {
    setFeaturesOpen(!featuresOpen);
  };

  return (
    <div
      className={`transition-all duration-300 fixed top-[4.5rem] left-0 z-30 h-[calc(100vh-4.5rem)] bg-white shadow-md ${
        isMobileOpen ? "w-64 md:hidden" : collapsed ? "w-0" : "w-64"
      } ${!isMobileOpen && isMobile ? "hidden" : ""}`}
    >
      {/* Collapse button (desktop only) */}
      {!isMobile && (
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 z-40 ${
            collapsed ? "left-0" : "left-64"
          }`}
        >

        <Button
        style={{
        
          transform: 'translateY(-50%)',
          height: 56,
          width: 48,
          background: 'rgba(255,255,255,1)',
          borderRadius: '0 12px 12px 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s',
          cursor: 'pointer',
        }}

          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          type="text"
          onClick={toggleCollapse}
        />
      </div>
)}
      {!collapsed && (
<div className="overflow-y-auto scrollbar-thin h-full pt-6">
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
          <NavLink to="/docs/acquirer/introduction">Introduction</NavLink>
        </Menu.Item>
        <Menu.Item key="gettingStart">
          <NavLink to="/docs/acquirer/gettingStart">Getting Started</NavLink>
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

 </div>
      )}
    </div>
  );
};

export default Sidebar;
