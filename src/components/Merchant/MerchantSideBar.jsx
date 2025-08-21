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
  const { t } = useTranslation("merchant_sidebar");
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
            aria-label={collapsed ? t("merchant_sidebar_expand") : t("merchant_sidebar_collapse")}
          />
        </div>
      )}
      {!collapsed && (
        <div className="overflow-y-auto scrollbar-thin h-full pt-6">
          <Menu theme='light' mode='inline' defaultSelectedKeys={['1']} style={{ fontSize: 14, fontWeight: 500 }}>
            <Menu.Item key="home">
              <NavLink to="/" onClick={handleLinkClick}>{t("merchant_sidebar_back_to_home")}</NavLink>
            </Menu.Item>

            <div className="flex items-center justify-center my-2 mt-5 mb-5">
              <span className="flex-1 h-0.5 bg-gray-300 ml-7 mr-2" />
              <span className="whitespace-nowrap">{t("merchant_sidebar_group_merchant")}</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            {/* <Menu.Item key="introduction">
              <NavLink to="/docs/merchant/introduction" onClick={handleLinkClick}>{t("merchant_sidebar_introduction")}</NavLink>
            </Menu.Item> */}
            <Menu.Item key="gettingStart">
              <NavLink to="/docs/merchant/gettingStart" onClick={handleLinkClick}>{t("merchant_sidebar_getting_started")}</NavLink>
            </Menu.Item>
            <Menu.Item key="categories">
              <NavLink to="/docs/merchant/categories" onClick={handleLinkClick}>{t("merchant_sidebar_categories")}</NavLink>
            </Menu.Item>
            <SubMenu key="features" title={t("merchant_sidebar_features")}>

              <Menu.Item key="self-registration">
                <NavLink to="/docs/merchant/merchant-selfregistration" onClick={handleLinkClick}>{t("merchant_sidebar_merchant_registration")}</NavLink>
              </Menu.Item>

              <SubMenu key="store-management" title={t("merchant_sidebar_store_management")}>
                <Menu.Item key="view-all-stores">
                  <NavLink to="/docs/merchant/merchant-StoresViewAll" onClick={handleLinkClick}>{t("merchant_sidebar_view_all_stores")}</NavLink>
                </Menu.Item>
                <Menu.Item key="create-new-store">
                  <NavLink to="/docs/merchant/merchant-StoreCreate" onClick={handleLinkClick}>{t("merchant_sidebar_single_store_creation")}</NavLink>
                </Menu.Item>
                <Menu.Item key="create-new-stores-bulk">
                  <NavLink to="/docs/merchant/merchant-StoreCreateMultiple" onClick={handleLinkClick}>{t("merchant_sidebar_multiple_store_creation")}</NavLink>
                </Menu.Item>
                <Menu.Item key="assign-store-users">
                  <NavLink to="/docs/merchant/merchant-management/store/assign-users" onClick={handleLinkClick}>{t("merchant_sidebar_assign_store_users")}</NavLink>
                </Menu.Item>
                <Menu.Item key="terminal-management">
                  <NavLink to="/docs/merchant/merchant-TerminalManagement" onClick={handleLinkClick}>{t("merchant_sidebar_terminal_management")}</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key='merchant-transaction' title={t('merchant_sidebar_merchant_transactions')}>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/alipay-instore'> {t('merchant_sidebar_alipay_instore')} </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/alipay-online'> {t('merchant_sidebar_alipay_online')} </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/card-payments'> {t('merchant_sidebar_card_payments')}</NavLink>
                </Menu.Item>
              </SubMenu>

              <SubMenu key='merchant-transaction-reports' title={t('merchant_sidebar_transaction_reports')}>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/reports/alipay-instore'> {t('merchant_sidebar_reports_alipay_instore')} </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/reports/alipay-online'> {t('merchant_sidebar_reports_alipay_online')} </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to='/docs/merchant/merchant-transaction/reports/card-payments'> {t('merchant_sidebar_reports_card_payments')}</NavLink>
                </Menu.Item>
              </SubMenu>

            </SubMenu>
            <Menu.Item key="troubleshooting">
              <NavLink to="/docs/merchant/troubleshooting" onClick={handleLinkClick}>{t("merchant_sidebar_troubleshooting")}</NavLink>
            </Menu.Item>
            <Menu.Item key="faq">
              <NavLink to="/docs/merchant/faq" onClick={handleLinkClick}>{t("merchant_sidebar_faq")}</NavLink>
            </Menu.Item>
            <Menu.Item key="support">
              <NavLink to="/docs/merchant/support" onClick={handleLinkClick}>{t("merchant_sidebar_support_information")}</NavLink>
            </Menu.Item>
          </Menu>

        </div>
      )}
    </div>
  );
};

export default Sidebar;
