import { useState } from 'react';
import Logo from '../assets/images/sripayLogo.jpg';

export default function FlowbiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4 w-full mx-auto">
        {/* Logo - Left side */}
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse md:order-1">
          <img src={Logo} className="h-7 md:h-8" alt="Sripay Logo" />
          <span className="self-center text-xl md:text-3xl font-bold whitespace-nowrap">
            DOCS
          </span>
        </a>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:order-2 md:hidden">
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-search" 
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        {/* Navigation Menu - Center */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-search">
          <ul className="flex flex-col justify-center p-4 md:p-0 mt-4 font-bold rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0" 
                aria-current="page"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
            </li>
          </ul>
        </div>

        {/* Language Selector & Search - Right side */}
        <div className="items-center gap-4 hidden md:flex md:order-3">
          {/* Custom Language Selector */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center px-3 py-2 text-sm font-semibold border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mr-1">EN</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown menu (hidden by default, shown on hover/focus) */}
            <div className="absolute left-0 z-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity">
              <ul className="py-1 text-sm text-gray-700" role="listbox">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option">EN</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option">中文</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input 
              type="text" 
              id="search-navbar" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-80 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 placeholder-gray-400 transition-colors" 
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Mobile Search - Only shown when menu is open */}
        {isMenuOpen && (
          <div className="relative w-full md:hidden md:order-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input 
              type="text" 
              id="search-navbar-mobile" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500" 
              placeholder="Search..."
            />
          </div>
        )}
      </div>
    </nav>
  );
}