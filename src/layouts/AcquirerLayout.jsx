import React, { Children, useState } from 'react';
import Footer from '../components/Footer';
import AcqNav from '../components/Acquirer/AcquirerNavBar';
import AcquirerSideBar from '../components/Acquirer/AcquirerSideBar';
import { Outlet } from 'react-router-dom';


function AcquirerLayout() {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    // Handler to toggle sidebar from nav
    const handleMobileSidebarToggle = () => {
        setIsMobileSidebarOpen((prev) => !prev);
    };

    // Handler to close sidebar (for overlay click or close button)
    const handleMobileSidebarClose = () => {
        setIsMobileSidebarOpen(false);
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <AcqNav onMobileMenuClick={handleMobileSidebarToggle} />
            <div style={{ display: 'flex', flex: 1 }}>
                {/* Desktop Sidebar */}
                <div className="hidden md:block">
                <AcquirerSideBar />
                </div>
                {/* Mobile Sidebar Drawer */}
                {/* Mobile Sidebar Drawer with smooth transition */}
                <div className={`fixed inset-0 z-40 md:hidden pointer-events-none transition-all duration-300 ${isMobileSidebarOpen ? 'visible' : 'invisible'}`}>
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-black opacity-40 transition-opacity duration-300 pointer-events-auto ${isMobileSidebarOpen ? 'opacity-40' : 'opacity-0'}`}
                    onClick={handleMobileSidebarClose}
                  ></div>
                  {/* Sidebar Drawer */}
                  <div
                    className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 pointer-events-auto
                      ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
                  >
                    <AcquirerSideBar onClose={handleMobileSidebarClose} isMobile />
                  </div>
                </div>
                <main style={{ marginLeft: 0, padding: 24, width: '100%' }}>
           
              <Outlet/>
        
                </main>
                <div className='bg-blue-400'>
                Is this page helpful?
                </div>
            </div>
           
            <Footer />
        </div>
    );
}

export default AcquirerLayout;