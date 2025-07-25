import { useState } from 'react';
import Logo from '../../assets/images/sripayLogo.jpg';
import { useTranslation } from 'react-i18next';

export default function AcqNav({ onMobileMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (onMobileMenuClick) onMobileMenuClick();
  };

  const toggleLangDropdown = () => {
    setIsLangOpen(!isLangOpen);
  };

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 bg-white border-b w-full">
      <div className="flex items-center justify-between mx-auto p-4">
        {/* Logo - Left side */}
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={Logo} className="h-7 md:h-8" alt="Sripay Logo" />
          <span className="self-center text-xl md:text-3xl font-bold whitespace-nowrap">
            {t('docs')}
          </span>
        </a>

        {/* Right side (Lang + Mobile toggle) */}
        <div className="flex items-center space-x-3 md:space-x-6">
          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={toggleLangDropdown}
              className="flex items-center px-3 py-2 text-sm font-semibold border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-haspopup="listbox"
              aria-expanded={isLangOpen}
            >
              <span className="mr-1">{i18n.language === 'zh' ? '中文' : 'EN'}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Language Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 z-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul className="py-1 text-sm text-gray-700" role="listbox">
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option" onClick={() => handleLangChange('en')}>EN</button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option" onClick={() => handleLangChange('zh')}>中文</button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
             onClick={onMobileMenuClick}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 17 14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Optional: Dropdown or menu can go here if needed in mobile view */}
      {/* Example: <div id="navbar-menu" className={`${isMenuOpen ? 'block' : 'hidden'}`}>...</div> */}
    </nav>
  );
}
