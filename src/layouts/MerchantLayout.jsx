import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Merchant/MerchantNavBar";
import Footer from "../components/Footer";
import Sidebar from "../components/Merchant/MerchantSideBar";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false); // desktop
  const [isMobileOpen, setIsMobileOpen] = useState(false); // mobile
  const [isMobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <div className="flex min-h-screen transition-all duration-300">
      <Header onMobileMenuClick={() => setIsMobileOpen(!isMobileOpen)} />

      {/* Sidebar for both desktop and mobile */}
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setIsMobileOpen(false)}
      />

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className="flex flex-col flex-1">
        <main
          className={`transition-all duration-300 ease-in-out ${
            isMobileSearchOpen ? "mt-28 nav:mt-16" : "mt-16"
          } ${
            collapsed ? "ml-0 md:ml-0" : "ml-0 md:ml-64"
          }`}
        >
          <Outlet />
          <Footer />
        </main>

      </div>
    </div>
    
  );
};

export default Layout;
