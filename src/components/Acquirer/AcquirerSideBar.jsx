// Sidebar.tsx
import { useState } from "react";
import { Menu, Button, Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ collapsed, setCollapsed, isMobileOpen, onMobileClose }) => {
  const { t } = useTranslation("sidebar");
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
            aria-label={collapsed ? t("sidebar_expand") : t("sidebar_collapse")}
          />
        </div>
      )}
      {!collapsed && (
        <div className="overflow-y-auto scrollbar-thin h-full pt-6">
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 14, fontWeight: 500 }}>
            <Menu.Item key="home">
              <NavLink to="/" onClick={handleLinkClick}>{t("sidebar_back_to_home")}</NavLink>
            </Menu.Item>

            <div className="flex items-center justify-center my-2 mt-5 mb-5">
              <span className="flex-1 h-0.5 bg-gray-300 ml-7 mr-2" />
              <span className="whitespace-nowrap">{t("sidebar_group_acquirer")}</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            <Menu.Item key="introduction">
              <NavLink to="/docs/acquirer/introduction" onClick={handleLinkClick}>{t("sidebar_introduction")}</NavLink>
            </Menu.Item>

            <Menu.Item key="gettingStart">
              <NavLink to="/docs/acquirer/gettingStart" onClick={handleLinkClick}>{t("sidebar_getting_started")}</NavLink>
            </Menu.Item>

            <SubMenu key="features" title={t("sidebar_features")}>
              <SubMenu key="merchant-registration" title={t("sidebar_merchant_registration")}>
                <Menu.Item key="registration-workflow">
                  <NavLink to="/docs/acquirer/merchant-registration/workflow" onClick={handleLinkClick}>{t("sidebar_registration_workflow")}</NavLink>
                </Menu.Item>
                <Menu.Item key="bulk-registration">
                  <NavLink to="/docs/acquirer/merchant-registration/bulk" onClick={handleLinkClick}>{t("sidebar_bulk_registration")}</NavLink>
                </Menu.Item>
                <Menu.Item key="self-registration">
                  <NavLink to="/docs/acquirer/merchant-registration/self" onClick={handleLinkClick}>{t("sidebar_self_registration")}</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="merchant-management" title={t("sidebar_merchant_management")}>
                <Menu.Item key="suspending-merchant">
                  <NavLink to="/docs/acquirer/merchant-management/suspend" onClick={handleLinkClick}>{t("sidebar_suspending_merchant")}</NavLink>
                </Menu.Item>
                <Menu.Item key="activating-merchant">
                  <NavLink to="/docs/acquirer/merchant-management/activate" onClick={handleLinkClick}>{t("sidebar_activating_merchant")}</NavLink>
                </Menu.Item>
                <Menu.Item key="merchant-agreement">
                  <NavLink to="/docs/acquirer/merchant-management/agreement" onClick={handleLinkClick}>{t("sidebar_uploading_agreement")}</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key="store-management" title={t("sidebar_store_management")}>
                <Menu.Item key="view-all-stores">
                  <NavLink to="/docs/acquirer/merchant-management/store/view" onClick={handleLinkClick}>{t("sidebar_view_all_stores")}</NavLink>
                </Menu.Item>
                <Menu.Item key="create-new-store">
                  <NavLink to="/docs/acquirer/merchant-management/store/create" onClick={handleLinkClick}>{t("sidebar_create_new_store")}</NavLink>
                </Menu.Item>
                <Menu.Item key="assign-store-users">
                  <NavLink to="/docs/acquirer/merchant-management/store/assign-users" onClick={handleLinkClick}>{t("sidebar_assign_store_users")}</NavLink>
                </Menu.Item>
                <Menu.Item key="terminal-management">
                  <NavLink to="/docs/acquirer/merchant-management/store/terminal" onClick={handleLinkClick}>{t("sidebar_terminal_management")}</NavLink>
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="troubleshooting">
              <NavLink to="/docs/acquirer/troubleshooting" onClick={handleLinkClick}>{t("sidebar_troubleshooting")}</NavLink>
            </Menu.Item>
            <Menu.Item key="faq">
              <NavLink to="/docs/acquirer/faq" onClick={handleLinkClick}>{t("sidebar_faq")}</NavLink>
            </Menu.Item>
            <Menu.Item key="support">
              <NavLink to="/docs/acquirer/support" onClick={handleLinkClick}>{t("sidebar_support_information")}</NavLink>
            </Menu.Item>
          </Menu>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
