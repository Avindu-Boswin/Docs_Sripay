import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/errorPages/NotFound';

import HomeLayout from './layouts/HomeLayout';
import AcquirerLayout from './layouts/AcquirerLayout';
import Merchantlayout from './layouts/MerchantLayout';

import AcquirerDocs from './pages/acquirer/AcquirerDocs';
import WhoCanbeAcquirer from './pages/acquirer/Introduction';
import AcquirerGettingStart from './pages/acquirer/AcquirerGettingStart';
import MerchantRegistrationWorkflow from './pages/acquirer/RegWorkflow';
import MerchantRegistrationBulk from './pages/acquirer/RegBulk';
import MerchantRegistrationSelf from './pages/acquirer/regSelf';
import StoreViewAll from './pages/acquirer/StoreViewAll';
import StoreCreate from './pages/acquirer/StoreCreate';
import StoreUserAssign from './pages/acquirer/StoreUserAssign.jsx';
import TerminalManagement from './pages/acquirer/TerminalManagement.jsx';
import Introduction from './pages/merchant/Introduction.jsx';
import MerchantSuspend from './pages/acquirer/MerchantSuspend';
import ActivatingSuspend from './pages/acquirer/ActivatingSuspend';
import AgreementUpload from './pages/acquirer/AgreementUpload';
import Troubleshooting from './pages/acquirer/Troubleshooting';
import Faq from './pages/acquirer/Faq';
import Support from './pages/acquirer/Support';
import GettingStart from './pages/merchant/GettingStart.jsx';
import SelfRegistration from './pages/merchant/SelfRegistration.jsx';
import TroubleshootingMerchant from './pages/merchant/Troubleshooting.jsx';
import FaqMerchant from './pages/merchant/Faq.jsx'
import MerchantSupport from './pages/merchant/Support.jsx'
import MerchantStoresView from './pages/merchant/MerchantStoresView.jsx';
import MerchantCategories from './pages/merchant/Categories.jsx';
import MerchantStoreCreate from './pages/merchant/StoreCreate.jsx';
import MerchantTerminalManagement from './pages/merchant/TerminalManagement.jsx';

import StoreUsersAssign from './pages/merchant/StoreUsersAssign.jsx';
import MerchantMultipleStore from './pages/merchant/MultipleStoreCreate.jsx';
import BrandingGuidelines from './pages/BrandingGuidelines.jsx';
import MarketingMaterials from './pages/MarketingMaterials.jsx';
import Agreement from './pages/Agreement.jsx';
import Instore from './pages/merchant/transactions/Instore.jsx';
import Online from './pages/merchant/transactions/online.jsx';
import CartPayment from './pages/merchant/transactions/CartPayment.jsx';
 
import Layout from './layouts/DeveloperLayout.jsx';
import DevGettingStart from './pages/developer/GettingStart.jsx';
import SystemIntroduction from './pages/developer/SystemIntro.jsx';
import SystemArchitecture from './pages/developer/SystemArchitecture.jsx';
import WebApplicationArchitecture from './pages/developer/WebApplicationArchitecture.jsx';
import MobileApplicationArchitecture from './pages/developer/MobileApplicationArchitecture.jsx';
import BackendArchitecture from './pages/developer/BackendArchitecture.jsx';
import DatabaseArchitecture from './pages/developer/DatabaseArchitecture.jsx';
import AuthenticationAndAuthorization from './pages/developer/AuthenticationAndAuthorization.jsx';
import EncryptionAndSecurity from './pages/developer/EncryptionAndSecurity.jsx';
import APISecurity from './pages/developer/APIsecurity.jsx';
import DeploymentAndInfrastructure from './pages/developer/DeploymentAndInfrastructure.jsx';
import ThirdPartyIntegration from './pages/developer/ThirdPartyIntegration.jsx';
import ComplianceAndPrivacy from './pages/developer/ComplianceAndPrivacy.jsx';
import MaintenanceAndSupport from './pages/developer/MaintenanceAndSupport.jsx';
import AgreementType from './pages/AgreementType.jsx';
import AcqApiOverview from './pages/developer/acquirer_api/Overview.jsx';
import AcqEndpoints from './pages/developer/acquirer_api/Endpoints.jsx';
import OrderCodePayQr from './pages/developer/acquirer_api/OrderCodePayQr.jsx';
import OrderCodeResultListner from './pages/developer/acquirer_api/OrderCodeResultListner.jsx';
import UserPresentPay from './pages/developer/acquirer_api/UserPresentPay.jsx';
import UserPresentPayWaiting from './pages/developer/acquirer_api/UserPresentPayWaiting.jsx';
import InstorePaymentInquiry from './pages/developer/acquirer_api/InstorePaymentInquiry.jsx';
import PaymentLinkCreate from './pages/developer/acquirer_api/PaymentLinkCreate.jsx';
import OnlinePaymentInquiry from './pages/developer/acquirer_api/OnlinePaymentInquiry.jsx';
import MerchantApiOverview from './pages/developer/merchant_api/Overview.jsx';
import MerchantEndpoints from './pages/developer/merchant_api/Endpoints.jsx';
import MerchantOrderCodePayQr from './pages/developer/merchant_api/OrderCodePayQr.jsx';
import MerchantOrderCodeResultListner from './pages/developer/merchant_api/OrderCodeResultListner.jsx';
import MerchantUserPresentPay from './pages/developer/merchant_api/UserPresentPay.jsx';
import MerchantUserPresentPayWaiting from './pages/developer/merchant_api/UserPresentPayWaiting.jsx';
import MerchantVoidTransaction from './pages/developer/merchant_api/VoidTransactions.jsx';
import MerchantInstorePaymentInquiry from './pages/developer/merchant_api/InstorePaymentInquiry.jsx';
import MerchantInstoreNotSettledLatest from './pages/developer/merchant_api/InstoreNotSettledLatest.jsx';
import VoidTransaction from './pages/developer/acquirer_api/VoidTransactions.jsx';
import WebFrameOverview from './pages/developer/merchant_api/WebFrameOverview.jsx';
import PaymentRequest from './pages/developer/merchant_api/PaymentRequest.jsx';
import MerchantPaymentLinkCreate from './pages/developer/merchant_api/PaymentLinkCreate.jsx';
import MerchantOnlinePaymentInquiry from './pages/developer/merchant_api/OnlinePaymentInquiry.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Separate Agreement Routes to view in connect.sripay.lk */}
        <Route path="/merchant_agreement" element={<Agreement />} />

        {/* Public Routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs/branding-guidelines" element={<BrandingGuidelines />} />
          <Route path="/docs/marketing-materials" element={<MarketingMaterials />} />
          <Route path="/docs/agreement" element={<AgreementType />} />
        </Route>

        {/* Acquirer Docs Layout */}
        <Route path="/docs/acquirer" element={<AcquirerLayout />}>
          <Route index element={<AcquirerDocs />} />
          <Route path="introduction" element={<WhoCanbeAcquirer />} />
          <Route path="gettingStart" element={<AcquirerGettingStart />} />
          <Route path="merchant-registration/workflow" element={<MerchantRegistrationWorkflow />} />
          <Route path="merchant-registration/bulk" element={<MerchantRegistrationBulk />} />
          <Route path="merchant-registration/self" element={<MerchantRegistrationSelf />} />
          <Route path="merchant-management/suspend" element={<MerchantSuspend />} />
          <Route path="merchant-management/activate" element={<ActivatingSuspend />} />
          <Route path="merchant-management/agreement" element={<AgreementUpload />} />
          <Route path="merchant-management/store/view" element={<StoreViewAll />} />
          <Route path="merchant-management/store/create" element={<StoreCreate />} />
          <Route path="merchant-management/store/assign-users" element={<StoreUserAssign />} />
          <Route path="merchant-management/store/terminal" element={<TerminalManagement />} />
          <Route path="troubleshooting" element={<Troubleshooting />} />
          <Route path="faq" element={<Faq />} />
          <Route path="support" element={<Support />} />
          
        </Route>

        {/* Merchant Docs Layout */}
        <Route path="/docs/merchant" element={<Merchantlayout />}>
          {/* <Route path="introduction" element={<Introduction />} /> */}
          <Route path="categories" element={<MerchantCategories />} />
          <Route path="gettingstart" element={<GettingStart />} />
          <Route path="merchant-selfregistration" element={<SelfRegistration />} />
          <Route path="merchant-StoresViewAll" element={<MerchantStoresView />} />
          <Route path="merchant-StoreCreate" element={<MerchantStoreCreate />} />
          <Route path="merchant-StoreCreateMultiple" element={<MerchantMultipleStore />} />
          <Route path="merchant-TerminalManagement" element={<MerchantTerminalManagement />} />
          <Route path="merchant-management/store/assign-users" element={<StoreUsersAssign />} />
          <Route path="merchant-transaction/alipay_instore" element={<Instore />} />
          <Route path="merchant-transaction/alipay_online" element={<Online />} />
          <Route path="merchant-transaction/card_payments" element={<CartPayment />} />
          <Route path="troubleshooting" element={<TroubleshootingMerchant/>} />
          <Route path="faq" element={<FaqMerchant/>} />
          <Route path='support' element={<MerchantSupport/>}/>
        </Route>


        {/* Developer Docs Layout */}
        <Route path="/docs/developer" element={<Layout />}>
          <Route path="gettingstart" element={<DevGettingStart />} />
          {/* System Overview */}
          <Route path="introduction" element={<SystemIntroduction />} />
          <Route path="system_architecture" element={<SystemArchitecture />} />
          <Route path="web_application_architecture" element={<WebApplicationArchitecture />} />
          <Route path="mobile_application_architecture" element={<MobileApplicationArchitecture />} />
          <Route path="backend_architecture" element={<BackendArchitecture />} />
          <Route path="database_architecture" element={<DatabaseArchitecture />} />
          <Route path="authentication_and_authorization" element={<AuthenticationAndAuthorization />} />
          <Route path="encryption_and_security" element={<EncryptionAndSecurity />} />
          <Route path="api_security" element={<APISecurity />} />
          <Route path="deployment_and_infrastructure" element={<DeploymentAndInfrastructure />} />
          <Route path="third_party_integration" element={<ThirdPartyIntegration />} />
          <Route path="compliance_and_privacy" element={<ComplianceAndPrivacy />} />
          <Route path="maintenance_and_support" element={<MaintenanceAndSupport />} />
          {/* Acquirer APIs */}
          <Route path="acquirer_api/overview" element={<AcqApiOverview />} />
          <Route path="acquirer_api/endpoints" element={<AcqEndpoints />} />
          <Route path="acquirer_api/instore/order_code_pay_qr" element={<OrderCodePayQr />} />
          <Route path="acquirer_api/instore/order_code_result_listener" element={<OrderCodeResultListner />} />
          <Route path="acquirer_api/instore/user_present_pay" element={<UserPresentPay />} />
          <Route path="acquirer_api/instore/user_present_pay_waiting" element={<UserPresentPayWaiting />} />
          <Route path="acquirer_api/instore/void_transaction" element={<VoidTransaction />} />
          <Route path="acquirer_api/instore/instore_payment_inquiry" element={<InstorePaymentInquiry />} />
          <Route path="acquirer_api/online/payment_link_create" element={<PaymentLinkCreate />} />
          <Route path="acquirer_api/online/payment_inquiry" element={<OnlinePaymentInquiry />} />
          { /* Merchant APIs */}
          <Route path="merchant_api/overview" element={<MerchantApiOverview />} />
          <Route path="merchant_api/endpoints" element={<MerchantEndpoints />} />
          <Route path="merchant_api/instore/order_code_pay_qr" element={<MerchantOrderCodePayQr />} />
          <Route path="merchant_api/instore/order_code_result_listener" element={<MerchantOrderCodeResultListner />} />
          <Route path="merchant_api/instore/user_present_pay" element={<MerchantUserPresentPay />} />
          <Route path="merchant_api/instore/user_present_pay_waiting" element={<MerchantUserPresentPayWaiting />} />
          <Route path="merchant_api/instore/void_transaction" element={<MerchantVoidTransaction />} />
          <Route path="merchant_api/instore/instore_payment_inquiry" element={<MerchantInstorePaymentInquiry />} />
          <Route path="merchant_api/instore/not_settled_latest_transactions" element={<MerchantInstoreNotSettledLatest />} />
          <Route path="merchant_api/online_webframe/overview" element={<WebFrameOverview />} />
          <Route path="merchant_api/online_webframe/payment_request" element={<PaymentRequest />} />
          <Route path="merchant_api/online/payment_link_create" element={<MerchantPaymentLinkCreate />} />
          <Route path="merchant_api/online/payment_inquiry" element={<MerchantOnlinePaymentInquiry />} />
        </Route>


        {/* Fallbacks */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
