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
              <span className="whitespace-nowrap">{t("developer_sidebar_group_developer")}</span>
              <span className="flex-1 h-0.5 bg-gray-300 ml-2 mr-6" />
            </div>

            <Menu.Item key="gettingStart">
              <NavLink to="/docs/developer/gettingstart" onClick={handleLinkClick}>{t("developer_sidebar_getting_started")}</NavLink>
            </Menu.Item>

            <SubMenu key="system-architecture" title={t("developer_sidebar_system_overview")} className="!text-gray-700">
              <Menu.Item key="intro">
                <NavLink to="/docs/developer/introduction" onClick={handleLinkClick}>{t("developer_sidebar_introduction")}</NavLink>
              </Menu.Item>
              <Menu.Item key="system-architecture">
                <NavLink to="/docs/developer/system-architecture" onClick={handleLinkClick}>{t("developer_sidebar_system_architecture")}</NavLink>
              </Menu.Item>
              <Menu.Item key="web-application-architecture">
                <NavLink to="/docs/developer/web-application-architecture" onClick={handleLinkClick}>{t("developer_sidebar_web_application_architecture")}</NavLink>
              </Menu.Item>
              <Menu.Item key="mobile-application-architecture">
                <NavLink to="/docs/developer/mobile-application-architecture" onClick={handleLinkClick}>{t("developer_sidebar_mobile_application_architecture")}</NavLink>
              </Menu.Item>
              <Menu.Item key="backend-architecture">
                <NavLink to="/docs/developer/backend-architecture" onClick={handleLinkClick}>{t("developer_sidebar_backend_architecture")}</NavLink>
              </Menu.Item>
              <Menu.Item key="database-architecture">
                <NavLink to="/docs/developer/database-architecture" onClick={handleLinkClick}>{t("developer_sidebar_database_architecture")}</NavLink>
              </Menu.Item>
              <Menu.Item key="authentication-and-authorization">
                <NavLink to="/docs/developer/authentication-and-authorization" onClick={handleLinkClick}>{t("developer_sidebar_authentication_and_authorization")}</NavLink>
              </Menu.Item>
              <Menu.Item key="encryption-and-security">
                <NavLink to="/docs/developer/encryption-and-security" onClick={handleLinkClick}>{t("developer_sidebar_encryption_and_security")}</NavLink>
              </Menu.Item>
              <Menu.Item key="api-security">
                <NavLink to="/docs/developer/api-security" onClick={handleLinkClick}>{t("developer_sidebar_api_security")}</NavLink>
              </Menu.Item>
              <Menu.Item key="deployment-and-infrastructure">
                <NavLink to="/docs/developer/deployment-and-infrastructure" onClick={handleLinkClick}>{t("developer_sidebar_deployment_and_infrastructure")}</NavLink>
              </Menu.Item>
              <Menu.Item key="third-party-integration">
                <NavLink to="/docs/developer/third-party-integration" onClick={handleLinkClick}>{t("developer_sidebar_third_party_integration")}</NavLink>
              </Menu.Item>
              <Menu.Item key="compliance-and-privacy">
                <NavLink to="/docs/developer/compliance-and-privacy" onClick={handleLinkClick}>{t("developer_sidebar_compliance_and_privacy")}</NavLink>
              </Menu.Item>
              <Menu.Item key="maintenance-and-support">
                <NavLink to="/docs/developer/maintenance-and-support" onClick={handleLinkClick}>{t("developer_sidebar_maintenance_and_support")}</NavLink>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="api-acquirer" title={t("developer_sidebar_acquirer_apis")} className="!text-gray-700">
              <Menu.Item key="overview">
                <NavLink to="/docs/developer/acquirer-api/overview" onClick={handleLinkClick}>{t("developer_sidebar_overview")}</NavLink>
              </Menu.Item>
              <Menu.Item key="endpoints">
                <NavLink to="/docs/developer/acquirer-api/endpoints" onClick={handleLinkClick}>{t("developer_sidebar_endpoints")}</NavLink>
              </Menu.Item>
              <SubMenu key="api-instore" title={t("developer_sidebar_alipay_instore_apis")} className="!text-gray-700">
                <Menu.Item key="order-code-pay-qr">
                  <NavLink to="/docs/developer/acquirer-api/instore/order-code-pay-qr" onClick={handleLinkClick}>{t("developer_sidebar_order_code_pay_qr")}</NavLink>
                </Menu.Item>
                <Menu.Item key="order-code-result-listener">
                  <NavLink to="/docs/developer/acquirer-api/instore/order-code-result-listener" onClick={handleLinkClick}>{t("developer_sidebar_order_code_result_listener")}</NavLink>
                </Menu.Item>
                <Menu.Item key="user-present-pay">
                  <NavLink to="/docs/developer/acquirer-api/instore/user-present-pay" onClick={handleLinkClick}>{t("developer_sidebar_user_present_pay")}</NavLink>
                </Menu.Item>
                <Menu.Item key="user-present-pay-waiting">
                  <NavLink to="/docs/developer/acquirer-api/instore/user-present-pay-waiting" onClick={handleLinkClick}>{t("developer_sidebar_user_present_pay_waiting")}</NavLink>
                </Menu.Item>
                <Menu.Item key="void-transaction">
                  <NavLink to="/docs/developer/acquirer-api/instore/void-transaction" onClick={handleLinkClick}>{t("developer_sidebar_void_transaction")}</NavLink>
                </Menu.Item>
                <Menu.Item key="instore-payment-inquiry">
                  <NavLink to="/docs/developer/acquirer-api/instore/instore-payment-inquiry" onClick={handleLinkClick}>{t("developer_sidebar_instore_payment_inquiry")}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="api-online" title={t("developer_sidebar_alipay_online_apis")} className="!text-gray-700">
                <Menu.Item key="payment-link-create">
                  <NavLink to="/docs/developer/acquirer-api/online/payment-link-create" onClick={handleLinkClick}>{t("developer_sidebar_payment_link_create")}</NavLink>
                </Menu.Item>
                <Menu.Item key="payment-inquiry">
                  <NavLink to="/docs/developer/acquirer-api/online/payment-inquiry" onClick={handleLinkClick}>{t("developer_sidebar_payment_inquiry")}</NavLink>
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            <SubMenu key="api-merchant" title={t("developer_sidebar_merchant_apis")} className="!text-gray-700">
              <Menu.Item key="overview-mer">
                <NavLink to="/docs/developer/merchant-api/overview" onClick={handleLinkClick}>{t("developer_sidebar_overview")}</NavLink>
              </Menu.Item>
              <Menu.Item key="endpoints-mer">
                <NavLink to="/docs/developer/merchant-api/endpoints" onClick={handleLinkClick}>{t("developer_sidebar_endpoints")}</NavLink>
              </Menu.Item>
              <SubMenu key="api-instore-mer" title={t("developer_sidebar_alipay_instore_apis")} className="!text-gray-700">
                <Menu.Item key="order-code-pay-qr-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/order-code-pay-qr" onClick={handleLinkClick}>{t("developer_sidebar_order_code_pay_qr")}</NavLink>
                </Menu.Item>
                <Menu.Item key="order-code-result-listener-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/order-code-result-listener" onClick={handleLinkClick}>{t("developer_sidebar_order_code_result_listener")}</NavLink>
                </Menu.Item>
                <Menu.Item key="user-present-pay-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/user-present-pay" onClick={handleLinkClick}>{t("developer_sidebar_user_present_pay")}</NavLink>
                </Menu.Item>
                <Menu.Item key="user-present-pay-waiting-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/user-present-pay-waiting" onClick={handleLinkClick}>{t("developer_sidebar_user_present_pay_waiting")}</NavLink>
                </Menu.Item>
                <Menu.Item key="void-transaction-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/void-transaction" onClick={handleLinkClick}>{t("developer_sidebar_void_transaction")}</NavLink>
                </Menu.Item>
                <Menu.Item key="instore-payment-inquiry-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/instore-payment-inquiry" onClick={handleLinkClick}>{t("developer_sidebar_instore_payment_inquiry")}</NavLink>
                </Menu.Item>
                <Menu.Item key="instore-not-settled-latest-merchant">
                  <NavLink to="/docs/developer/merchant-api/instore/not-settled-latest-transactions" onClick={handleLinkClick}>{t("developer_sidebar_instore_not_settled_latest_transactions")}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="webframe-mer" title={t("developer_sidebar_web_frame_online_apis")} className="!text-gray-700">
                <Menu.Item key="overview-webframe-mer">
                  <NavLink to="/docs/developer/merchant-api/online-webframe/overview" onClick={handleLinkClick}>{t("developer_sidebar_overview")}</NavLink>
                </Menu.Item>
                <Menu.Item key="payment-request-webframe-mer">
                  <NavLink to="/docs/developer/merchant-api/online-webframe/payment-request" onClick={handleLinkClick}>{t("developer_sidebar_payment_request")}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="api-online-mer" title={t("developer_sidebar_alipay_online_apis")} className="!text-gray-700">
                <Menu.Item key="online-payment-link-create-merchant">
                  <NavLink to="/docs/developer/merchant-api/online/payment-link-create" onClick={handleLinkClick}>{t("developer_sidebar_payment_link_create")}</NavLink>
                </Menu.Item>
                <Menu.Item key="online-payment-inquiry-merchant">
                  <NavLink to="/docs/developer/merchant-api/online/payment-inquiry" onClick={handleLinkClick}>{t("developer_sidebar_payment_inquiry")}</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="api-card-mer" title={t("developer_sidebar_card_payments_apis")} className="!text-gray-700">
                <Menu.Item key="overview-card-mer">
                  <NavLink to="/docs/developer/merchant-api/card-payments/overview" onClick={handleLinkClick}>{t("developer_sidebar_overview")}</NavLink>
                </Menu.Item>
                <Menu.Item key="card-payment-link-create-mer">
                  <NavLink to="/docs/developer/merchant-api/card-payments/payment-link-create" onClick={handleLinkClick}>{t("developer_sidebar_payment_link_create")}</NavLink>
                </Menu.Item>
                <Menu.Item key="card-payment-inquiry-mer">
                  <NavLink to="/docs/developer/merchant-api/card-payments/payment-inquiry" onClick={handleLinkClick}>{t("developer_sidebar_payment_inquiry")}</NavLink>
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
