
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Merchant/MerchantNavBar";
import Sidebar from "../components/Merchant/MerchantSideBar";
import Footer from "../components/Footer";
import RightSideMenu from "../components/RightSideMenu";
import PageFeedback from "../components/Feedback";
import { useSections } from "../components/SectionContext";


const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);
  const { sections } = useSections();

  return (
    <div className="flex flex-col min-h-screen transition-all duration-300">
      {/* Top bar */}
      <Header onMobileMenuClick={() => setIsMobileOpen(!isMobileOpen)} />

      {/* Main area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          isMobileOpen={isMobileOpen}
          onMobileClose={() => setIsMobileOpen(false)}
        />

        {/* mobile backdrop */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Center column - content and footer */}
        <div className="flex flex-col flex-1">
          {/* Content area */}
          <main
            className={`flex-grow transition-all duration-300 ease-in-out ${isMobileSearchOpen ? "mt-28 nav:mt-16" : "mt-16"} ${collapsed ? "" : "md:ml-64"}`}
          >
            <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 gap-10">
              <div className="flex-1 min-w-0">
                <Outlet />
              </div>
            </div>
          </main>

          {/* Footer */}
          <div className={`lg:mr-10 ${collapsed ? "" : "md:ml-64"}`}>
            <Footer />
          </div>
        </div>

        {/* Right-side panel */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="fixed right-8 top-20 w-64 flex flex-col space-y-4">
            {/* Feedback */}
            <PageFeedback />
            {/* Scrollable Menu */}
            {sections && sections.length > 0 && (
              <div className="max-h-[calc(90vh-96px)] overflow-y-auto pr-1">
                <RightSideMenu sections={sections} />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Layout;
