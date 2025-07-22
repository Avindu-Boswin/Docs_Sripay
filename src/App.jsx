import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import HomeLayout from './layouts/HomeLayout';
import NotFound from './pages/errorPages/NotFound';
import About from './pages/About';
import AboutLayout from './layouts/AboutLayout';
import SideBar from './components/Acquirer/AcquirerSideBar';
import SideNavBar from './layouts/SideNavBar';
import AcquirerSideBar from './components/Acquirer/AcquirerSideBar';

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
            <AboutLayout>
              <About />
            </AboutLayout>
          }
        />
        
        <Route path="/acquirer_sidenav" element={
          <SideNavBar>
                <AcquirerSideBar/>
          </SideNavBar>
         
          } />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        


      </Routes>
    </BrowserRouter>
  )
}

export default App