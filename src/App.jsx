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
import Online from './pages/merchant/transactions/Online.jsx';

import CartPayment from './pages/merchant/transactions/CartPayment.jsx';
 
import InstoreReports from './pages/merchant/Reports/Instore.jsx';
import OnlineReports from './pages/merchant/Reports/Online.jsx';


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
import CardPayment from './pages/merchant/Reports/CardPayment.jsx';
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
import CardPaymentOverview from './pages/developer/merchant_api/CardPaymentOverview.jsx';
import MerchantPaymentLinkCreateCard from './pages/developer/merchant_api/PaymentLinkCreateCard.jsx';
import CardPaymentInquiry from './pages/developer/merchant_api/CardPaymentInquiry.jsx';
import MobileLayout from './layouts/MobileAppLayout.jsx';
import MobileAppIntroduction from './pages/mobileApp/Introduction.jsx';

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
          <Route path="merchant-transaction/alipay-instore" element={<Instore />} />
          <Route path="merchant-transaction/alipay-online" element={<Online />} />
          <Route path="merchant-transaction/card-payments" element={<CartPayment />} />
          <Route path="merchant-transaction/reports/alipay-instore" element={<InstoreReports />} />
          <Route path="merchant-transaction/reports/alipay-online" element={<OnlineReports />} />
          <Route path="merchant-transaction/reports/card-payments" element={<CardPayment />} />
          <Route path="troubleshooting" element={<TroubleshootingMerchant/>} />
          <Route path="faq" element={<FaqMerchant/>} />
          <Route path='support' element={<MerchantSupport/>}/>
        </Route>


        {/* Developer Docs Layout */}
        <Route path="/docs/developer" element={<Layout />}>
          <Route path="gettingstart" element={<DevGettingStart />} />
          {/* System Overview */}
          <Route path="introduction" element={<SystemIntroduction />} />
          <Route path="system-architecture" element={<SystemArchitecture />} />
          <Route path="web-application-architecture" element={<WebApplicationArchitecture />} />
          <Route path="mobile-application-architecture" element={<MobileApplicationArchitecture />} />
          <Route path="backend-architecture" element={<BackendArchitecture />} />
          <Route path="database-architecture" element={<DatabaseArchitecture />} />
          <Route path="authentication-and-authorization" element={<AuthenticationAndAuthorization />} />
          <Route path="encryption-and-security" element={<EncryptionAndSecurity />} />
          <Route path="api-security" element={<APISecurity />} />
          <Route path="deployment-and-infrastructure" element={<DeploymentAndInfrastructure />} />
          <Route path="third-party-integration" element={<ThirdPartyIntegration />} />
          <Route path="compliance-and-privacy" element={<ComplianceAndPrivacy />} />
          <Route path="maintenance-and-support" element={<MaintenanceAndSupport />} />
          {/* Acquirer APIs */}
          <Route path="acquirer-api/overview" element={<AcqApiOverview />} />
          <Route path="acquirer-api/endpoints" element={<AcqEndpoints />} />
          <Route path="acquirer-api/instore/order-code-pay-qr" element={<OrderCodePayQr />} />
          <Route path="acquirer-api/instore/order-code-result-listener" element={<OrderCodeResultListner />} />
          <Route path="acquirer-api/instore/user-present-pay" element={<UserPresentPay />} />
          <Route path="acquirer-api/instore/user-present-pay-waiting" element={<UserPresentPayWaiting />} />
          <Route path="acquirer-api/instore/void-transaction" element={<VoidTransaction />} />
          <Route path="acquirer-api/instore/instore-payment-inquiry" element={<InstorePaymentInquiry />} />
          <Route path="acquirer-api/online/payment-link-create" element={<PaymentLinkCreate />} />
          <Route path="acquirer-api/online/payment-inquiry" element={<OnlinePaymentInquiry />} />
          { /* Merchant APIs */}
          <Route path="merchant-api/overview" element={<MerchantApiOverview />} />
          <Route path="merchant-api/endpoints" element={<MerchantEndpoints />} />
          <Route path="merchant-api/instore/order-code-pay-qr" element={<MerchantOrderCodePayQr />} />
          <Route path="merchant-api/instore/order-code-result-listener" element={<MerchantOrderCodeResultListner />} />
          <Route path="merchant-api/instore/user-present-pay" element={<MerchantUserPresentPay />} />
          <Route path="merchant-api/instore/user-present-pay-waiting" element={<MerchantUserPresentPayWaiting />} />
          <Route path="merchant-api/instore/void-transaction" element={<MerchantVoidTransaction />} />
          <Route path="merchant-api/instore/instore-payment-inquiry" element={<MerchantInstorePaymentInquiry />} />
          <Route path="merchant-api/instore/not-settled-latest-transactions" element={<MerchantInstoreNotSettledLatest />} />
          <Route path="merchant-api/online-webframe/overview" element={<WebFrameOverview />} />
          <Route path="merchant-api/online-webframe/payment-request" element={<PaymentRequest />} />
          <Route path="merchant-api/online/payment-link-create" element={<MerchantPaymentLinkCreate />} />
          <Route path="merchant-api/online/payment-inquiry" element={<MerchantOnlinePaymentInquiry />} />
          <Route path="merchant-api/card-payments/overview" element={<CardPaymentOverview />} />
          <Route path="merchant-api/card-payments/payment-link-create" element={<MerchantPaymentLinkCreateCard />} />
          <Route path="merchant-api/card-payments/payment-inquiry" element={<CardPaymentInquiry />} />
        </Route>

        {/* Mobile App Layout */}
        <Route path="/docs/app" element={<MobileLayout />}>
          {/* <Route path="introduction" element={<Introduction />} /> */}
          <Route path="introduction" element={<MobileAppIntroduction />} />
        </Route>



        {/* Fallbacks */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
