// Sidebar.tsx
import { useState } from "react";
import { Menu, Button, Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { NavLink, useNavigate } from 'react-router-dom';

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

  // Function to handle scrolling to top when a link is clicked
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`transition-all duration-300 fixed top-[4.5rem] left-0 z-30 h-[calc(100vh-4.5rem)] bg-white shadow-md ${isMobileOpen ? "w-64 md:hidden" : collapsed ? "w-0" : "w-64"
        } ${!isMobileOpen && isMobile ? "hidden" : ""}`}
    >
      {/* Collapse button (desktop only) */}
      {!isMobile && (
        <div
          className={`absolute top-1/2 transform -translate-y-1/2 z-40 ${collapsed ? "left-0" : "left-64"
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
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 14, fontWeight: 500 }}>
            <Menu.Item key="home">
              <NavLink to="/" onClick={handleLinkClick}>Back To Home</NavLink>
            </Menu.Item>

            <div className="flex items-center justify-center my-2 mt-5 mb-5">
              <span className="flex-1 h-0.5 bg-gray-300 ml-7 mr-2" />
              <span className="whitespace-nowrap">Developer</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            <Menu.Item key="gettingStart">
              <NavLink to="/docs/merchant/gettingStart" onClick={handleLinkClick}>Getting Started</NavLink>
            </Menu.Item>
          </Menu>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
