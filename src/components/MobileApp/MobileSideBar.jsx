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
              <span className="whitespace-nowrap">{t("mobileApp_sidebar_mobile_app")}</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            <Menu.Item key="introduction">
              <NavLink to="/docs/app/introduction" onClick={handleLinkClick}>{t("mobileApp_sidebar_introduction_to_app")}</NavLink>
            </Menu.Item>

            <SubMenu key="merchant-app" title={t("mobileApp_sidebar_merchant_app")} className="!text-gray-700">
              <Menu.Item key="intro">
                <NavLink to="/docs/app/merchant/getting-started" onClick={handleLinkClick}>{t("mobileApp_sidebar_getting_started")}</NavLink>
              </Menu.Item>
              <SubMenu key="merchant-features" title={t("mobileApp_sidebar_merchant_features")} className="!text-gray-700">
                <Menu.Item key="transactions">
                  <NavLink to="/docs/app/merchant/features/transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="instore-transactions">
                  <NavLink to="/docs/app/merchant/features/instore-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_instore_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="online-transactions">
                  <NavLink to="/docs/app/merchant/features/online-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_online_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="card-transactions">
                  <NavLink to="/docs/app/merchant/features/card-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_card_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="transactions-history">
                  <NavLink to="/docs/app/merchant/features/transactions-history" onClick={handleLinkClick}>{t("mobileApp_sidebar_transactions_history")}</NavLink>
                </Menu.Item>
                <Menu.Item key="merchant-profile">
                  <NavLink to="/docs/app/merchant/features/merchant-profile" onClick={handleLinkClick}>{t("mobileApp_sidebar_merchant_profile")}</NavLink>
                </Menu.Item>
                <Menu.Item key="merchant-wallets">
                  <NavLink to="/docs/app/merchant/features/wallets" onClick={handleLinkClick}>{t("mobileApp_sidebar_wallets")}</NavLink>
                </Menu.Item>
                <Menu.Item key="merchant-stores">
                  <NavLink to="/docs/app/merchant/features/stores" onClick={handleLinkClick}>{t("mobileApp_sidebar_stores")}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="store-user-features" title={t("mobileApp_sidebar_store_user_features")} className="!text-gray-700">
                <Menu.Item key="user-intro">
                  <NavLink to="/docs/app/store-user/overview" onClick={handleLinkClick}>{t("mobileApp_sidebar_overview")}</NavLink>
                </Menu.Item>
                <Menu.Item key="store-user-instore-transactions">
                  <NavLink to="/docs/app/store-user/features/instore-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_store_user_instore_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="store-user-online-transactions">
                  <NavLink to="/docs/app/store-user/features/online-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_store_user_online_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="store-user-card-transactions">
                  <NavLink to="/docs/app/store-user/features/card-transactions" onClick={handleLinkClick}>{t("mobileApp_sidebar_store_user_card_transactions")}</NavLink>
                </Menu.Item>
                <Menu.Item key="store-user-profile">
                  <NavLink to="/docs/app/store-user/features/store-user-profile" onClick={handleLinkClick}>{t("mobileApp_sidebar_store_user_profile")}</NavLink>
                </Menu.Item>
              </SubMenu>
            </SubMenu>


            <SubMenu key="user-app" title={t("mobileApp_sidebar_user_app")} className="!text-gray-700">
              {/* Shown but disabled for now - keeps the menu visible without navigation */}
              <Menu.Item key="intro" disabled>
                <span className="text-gray-400 cursor-not-allowed">{t("mobileApp_sidebar_app_under_development")}</span>
              </Menu.Item>
            </SubMenu>

            <Menu.Item key="support">
              <NavLink to="/docs/app/support" onClick={handleLinkClick}>{t("mobileApp_sidebar_support")}</NavLink>
            </Menu.Item>

          </Menu>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
