import React, { Children, useState } from 'react';
import Footer from '../components/Footer';
import AcqNav from '../components/Acquirer/AcquirerNavBar';
import AcquirerSideBar from '../components/Acquirer/AcquirerSideBar';
import { Outlet } from 'react-router-dom';


function AcquirerLayout() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [feedback, setFeedback] = useState(null);

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
        <main
        
          className={`transition-all  font-arial bg-white flex w-full mx-auto  nav:mt-16 duration-300 ease-in-out ${
            isMobileSidebarOpen ? "md:ml-56" : "md:ml-10"
          }`}
        >

          <Outlet />
    
        </main>
        <div className='flex w-[18%] mt-[100px] flex-col items-start gap-2'>
        <span className='mb-2'>Is this page helpful?</span>
        <div className='flex gap-3'>
          <button
            className={`px-3 py-1  flex items-center gap-1 transition-colors duration-200 ${feedback === 'like' ? 'bg-green-100 border-green-500 text-green-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setFeedback('like')}
            aria-label='Like'
          >
            <span role='img' aria-label='Like'>👍</span> Like
          </button>
          <button
            className={`px-3 py-1   flex items-center gap-1 transition-colors duration-200 ${feedback === 'unlike' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'}`}
            onClick={() => setFeedback('unlike')}
            aria-label='Unlike'
          >
            <span role='img' aria-label='Unlike'>👎</span> Unlike
          </button>
        </div>
        {feedback && (
          <span className='text-sm mt-1 text-gray-500'>Thank you for your feedback!</span>
        )}
      </div>
       
      </div>

      <Footer />
    </div>
  );
}

export default AcquirerLayout;