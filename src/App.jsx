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
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs/branding-guidelines" element={<BrandingGuidelines />} />
          <Route path="/docs/marketing-materials" element={<MarketingMaterials />} />
          <Route path="/docs/agreement" element={<Agreement />} />
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
          <Route path="troubleshooting" element={<TroubleshootingMerchant/>} />
          <Route path="faq" element={<FaqMerchant/>} />
          <Route path='support' element={<MerchantSupport/>}/>
        </Route>


        {/* Developer Docs Layout */}
        <Route path="/docs/developer" element={<Layout />}>
          <Route path="gettingstart" element={<DevGettingStart />} />
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
        </Route>


        {/* Fallbacks */}ß
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
