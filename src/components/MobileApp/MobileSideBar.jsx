// Sidebar.tsx
import { useState } from "react";
import { Menu, Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = ({ collapsed, setCollapsed, isMobileOpen, onMobileClose }) => {
  const { t } = useTranslation("developer_sidebar");
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
      behavior: "smooth",
    });
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
              transform: "translateY(-50%)",
              height: 56,
              width: 48,
              background: "rgba(255,255,255,1)",
              borderRadius: "0 12px 12px 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
              cursor: "pointer",
            }}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            type="text"
            onClick={toggleCollapse}
            aria-label={collapsed ? t("developer_sidebar_expand") : t("developer_sidebar_collapse")}
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
          <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]} style={{ fontSize: 14, fontWeight: 500 }}>
            <Menu.Item key="home">
              <NavLink to="/" onClick={handleLinkClick}>{t("developer_sidebar_back_to_home")}</NavLink>
            </Menu.Item>

            <div className="flex items-center justify-center my-2 mt-5 mb-5">
              <span className="flex-1 h-0.5 bg-gray-300 ml-7 mr-2" />
              <span className="whitespace-nowrap">Mobile App</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            <Menu.Item key="introduction">
              <NavLink to="/docs/app/introduction" onClick={handleLinkClick}>Introduction to the App</NavLink>
            </Menu.Item>

            <SubMenu key="system-architecture" title={t("developer_sidebar_system_overview")} className="!text-gray-700">
              <Menu.Item key="intro">
                <NavLink to="/docs/app/introduction" onClick={handleLinkClick}>{t("developer_sidebar_introduction")}</NavLink>
              </Menu.Item>
            </SubMenu>

            {/* <SubMenu key="api-acquirer" title={t("developer_sidebar_acquirer_apis")} className="!text-gray-700">
              <Menu.Item key="overview">
                <NavLink to="/docs/app/acquirer-api/overview" onClick={handleLinkClick}>{t("developer_sidebar_overview")}</NavLink>
              </Menu.Item>         
              <SubMenu key="api-online" title={t("developer_sidebar_alipay_online_apis")} className="!text-gray-700">
                <Menu.Item key="payment-link-create">
                  <NavLink to="/docs/app/acquirer-api/online/payment-link-create" onClick={handleLinkClick}>{t("developer_sidebar_payment_link_create")}</NavLink>
                </Menu.Item>
              </SubMenu>
            </SubMenu> */}

          </Menu>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
