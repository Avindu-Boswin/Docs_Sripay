import { useState } from 'react';
import Logo from '../assets/images/sripayLogo.jpg';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

export default function FlowbiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b">
      <div className="flex flex-wrap items-center justify-between p-4 w-full">
        {/* Logo - Left side */}
        <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse md:order-1">
          <img src={Logo} className="h-7 md:h-8" alt="Sripay Logo" />
          <span className="self-center text-xl md:text-3xl  whitespace-nowrap">
            {t('docs')}
          </span>
        </a>

        {/* Language Selector - Right side */}
        <div className="items-center gap-4 md:order-3">
          {/* Custom Language Selector */}
          <div className="relative group">
            <button
              type="button"
              className="flex items-center px-3 py-2 text-sm font-semibold border border-gray-300 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mr-1">{i18n.language === 'zh' ? '中文' : 'EN'}</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown menu (hidden by default, shown on hover/focus) */}
            <div className="absolute left-0 z-10 mt-2 w-16 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity">
              <ul className="py-1 text-sm text-gray-700" role="listbox">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option" onClick={() => i18n.changeLanguage('en')}>EN</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="option" onClick={() => i18n.changeLanguage('zh')}>中文</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}