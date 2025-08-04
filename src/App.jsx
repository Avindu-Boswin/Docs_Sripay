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
import Instore from './pages/merchant/transactions/Instore.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
          <Route path="merchant-TerminalManagement" element={<MerchantTerminalManagement />} />
          <Route path="merchant-management/store/assign-users" element={<StoreUsersAssign />} />
          <Route path="merchant-transaction/alipay_instore" element={<Instore />} />
          <Route path="troubleshooting" element={<TroubleshootingMerchant/>} />
          <Route path="faq" element={<FaqMerchant/>} />
          <Route path='support' element={<MerchantSupport/>}/>
        </Route>


        {/* Fallbacks */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
