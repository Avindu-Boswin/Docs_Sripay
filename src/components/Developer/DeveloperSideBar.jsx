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
          <style>
            {`
              /* Allow menu text to wrap to multiple lines instead of truncating with ellipsis */
              .ant-menu-item .ant-menu-title-content {
                white-space: normal !important;
                word-break: break-word !important;
                line-height: 1.3 !important;
              }
              
              /* Fix submenu item text wrapping */
              .ant-menu-submenu .ant-menu-title-content {
                white-space: normal !important;
                word-break: break-word !important;
              }

              /* Adjust item height and padding for wrapped text */
              .ant-menu-item {
                height: auto !important;
                padding-top: 8px !important;
                padding-bottom: 8px !important;
                line-height: 1.3 !important;
              }

              /* Make sure links fill the entire item space */
              .ant-menu-item a {
                display: inline-block !important;
                line-height: 1.3 !important;
              }
            `}
          </style>
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
              <NavLink to="/docs/developer/gettingstart" onClick={handleLinkClick}>Getting Started</NavLink>
            </Menu.Item>

            <SubMenu key="system-architecture" title={"System Overview"} className="!text-gray-700">
                <Menu.Item key="intro">
                  <NavLink to="/docs/developer/introduction" onClick={handleLinkClick}>Introduction</NavLink>
                </Menu.Item>
                <Menu.Item key="system-architecture">
                  <NavLink to="/docs/developer/system_architecture" onClick={handleLinkClick}>System Architecture</NavLink>
                </Menu.Item>
                <Menu.Item key="web-application-architecture">
                  <NavLink to="/docs/developer/web_application_architecture" onClick={handleLinkClick}>Web App Architecture</NavLink>
                </Menu.Item>
                <Menu.Item key="mobile-application-architecture">
                  <NavLink to="/docs/developer/mobile_application_architecture" onClick={handleLinkClick}>Mobile App Architecture</NavLink>
                </Menu.Item>
                <Menu.Item key="backend-architecture">
                  <NavLink to="/docs/developer/backend_architecture" onClick={handleLinkClick}>Backend Architecture</NavLink>
                </Menu.Item>
                <Menu.Item key="database-architecture">
                  <NavLink to="/docs/developer/database_architecture" onClick={handleLinkClick}>Database Architecture</NavLink>
                </Menu.Item>
                <Menu.Item key="authentication-and-authorization">
                  <NavLink to="/docs/developer/authentication_and_authorization" onClick={handleLinkClick}>Authentication & Authorization</NavLink>
                </Menu.Item>
                <Menu.Item key="encryption-and-security">
                  <NavLink to="/docs/developer/encryption_and_security" onClick={handleLinkClick}>Encryption & Security</NavLink>
                </Menu.Item>
                <Menu.Item key="api-security">
                  <NavLink to="/docs/developer/api_security" onClick={handleLinkClick}>API Security</NavLink>
                </Menu.Item>
                <Menu.Item key="deployment-and-infrastructure">
                  <NavLink to="/docs/developer/deployment_and_infrastructure" onClick={handleLinkClick}>Deployment & Infrastructure</NavLink>
                </Menu.Item>
                <Menu.Item key="third-party-integration">
                  <NavLink to="/docs/developer/third_party_integration" onClick={handleLinkClick}>Third Party Integration</NavLink>
                </Menu.Item>
                <Menu.Item key="compliance-and-privacy">
                  <NavLink to="/docs/developer/compliance_and_privacy" onClick={handleLinkClick}>Compliance & Privacy</NavLink>
                </Menu.Item>
                <Menu.Item key="maintenance-and-support">
                  <NavLink to="/docs/developer/maintenance_and_support" onClick={handleLinkClick}>Maintenance & Support</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="api-acquirer" title={"Acquirer APIs"} className="!text-gray-700">
                <Menu.Item key="overview">
                  <NavLink to="/docs/developer/acquirer_api/overview" onClick={handleLinkClick}>Overview</NavLink>
                </Menu.Item>
                <Menu.Item key="endpoints">
                  <NavLink to="/docs/developer/acquirer_api/endpoints" onClick={handleLinkClick}>Endpoints</NavLink>
                </Menu.Item>
                <SubMenu key="api-instore" title={"Alipay+ Instore APIs"} className="!text-gray-700">
                  <Menu.Item key="order-code-pay-qr">
                    <NavLink to="/docs/developer/acquirer_api/instore/order_code_pay_qr" onClick={handleLinkClick}>Order Code Pay QR</NavLink>
                  </Menu.Item>
                  <Menu.Item key="order-code-result-listener">
                    <NavLink to="/docs/developer/acquirer_api/instore/order_code_result_listener" onClick={handleLinkClick}>Order Code Result Listener</NavLink>
                  </Menu.Item>
                  <Menu.Item key="user-present-pay">
                    <NavLink to="/docs/developer/acquirer_api/instore/user_present_pay" onClick={handleLinkClick}>User Present Pay</NavLink>
                  </Menu.Item>
                </SubMenu>
              </SubMenu>

          </Menu>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
