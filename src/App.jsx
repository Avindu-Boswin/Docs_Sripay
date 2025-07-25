import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/errorPages/NotFound';

import HomeLayout from './layouts/HomeLayout';
import AcquirerLayout from './layouts/AcquirerLayout';

import AcquirerDocs from './pages/acquirer/AcquirerDocs';
import WhoCanbeAcquirer from './pages/acquirer/Introduction';
import AcquirerGettingStart from './pages/acquirer/AcquirerGettingStart';
import MerchantRegistrationWorkflow from './pages/acquirer/RegWorkflow';
import MerchantRegistrationBulk from './pages/acquirer/RegBulk';

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
        </Route>

        {/* Fallbacks */}
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
