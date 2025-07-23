import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import NotFound from './pages/errorPages/NotFound';
import About from './pages/About';
import AboutLayout from './layouts/AboutLayout';
import AcquirerDocs from './pages/acquirer/AcquirerDocs';
import AcquirerLayout from './layouts/AcquirerLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/about"
          element={
      <HomeLayout>
      <About />
      </HomeLayout>
        
         
          }
        />

        <Route
          path="/docs/acquirer"
          element={
            <AcquirerLayout>
              <AcquirerDocs />
            </AcquirerLayout>
          }
        />




        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App