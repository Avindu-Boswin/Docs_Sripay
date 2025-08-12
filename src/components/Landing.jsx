// src/components/DocumentationHero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';

import Document_Image from '../assets/documents.svg';

// ===== Collage images =====
import PhoneCenter from '../assets/hero/Center-phon.png';
import LeftWide from '../assets/hero/left-wide.png';
import RightTopTall from '../assets/hero/right-top-tall.png';
import RightWeather from '../assets/hero/right-weather-wide.png';
import BottomLeft from '../assets/hero/bottom-left.png';
import BottomRight from '../assets/hero/bottom-right.png';

const DocumentationHero = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="relative">
      {/* Background glows (hidden on mobile for perf) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-100 to-white" />
        <div className="absolute -top-24 -left-28 w-[38rem] h-[38rem] rounded-full blur-[100px] opacity-80 bg-[radial-gradient(circle_at_center,_#5ED6FF,_#3BB9F5_60%,_transparent_70%)]" />
        <div className="absolute hidden md:block -right-32 top-10 w-[42rem] h-[42rem] rounded-full blur-[120px] opacity-50 bg-[radial-gradient(circle_at_center,_#0025E0,_#0012A5_55%,_transparent_70%)]" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full h-[28rem] rounded-[999px] blur-[120px] opacity-70 bg-[linear-gradient(90deg,_#60A5FA,_#0EA5E9,_#22D3EE)]" />
      </div>

      {/* Soft fallback bg on mobile */}
      {/* <div className="md:hidden absolute inset-0 bg-gradient-to-b from-sky-50 via-blue-50 to-white" aria-hidden /> */}

      <Navbar />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-20 pb-14 md:pb-16">
        <header className="text-center">
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3 sm:mb-4">
            {t('doc')}
          </h1>
          <p className="text-[15px] sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8">
            {t('subtitle')}
          </p>
        </header>

        {/* ===== Mobile hero (shown on < md) ===== */}
        <div className="md:hidden mb-8">
          <img
            src={Document_Image}
            alt={t('doc')}
            className="mx-auto w-[92%] max-w-sm drop-shadow-lg"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 92vw, 480px"
          />
        </div>

        {/* ===== Collage — hidden on mobile ===== */}
        <div className="relative mx-auto mb-10 md:mb-16 lg:mb-20 max-w-[1200px] hidden md:block">
          <div className="relative h-[420px] md:h-[560px] lg:h-[600px] mt-4">
            <img
              src={PhoneCenter}
              alt="App preview"
              loading="lazy"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] md:h-[520px] lg:h-[560px] w-auto rounded-[2rem] shadow-2xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 520px, 560px"
            />
            <img
              src={LeftWide}
              alt="Dashboard card"
              loading="lazy"
              className="absolute left-[-7%] top-[10%] h-[180px] md:h-[230px] lg:h-[250px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 230px, 250px"
            />
            <img
              src={RightTopTall}
              alt="Analytics wheel"
              loading="lazy"
              className="absolute right-[2%] top-[16%] h-[150px] md:h-[190px] lg:h-[210px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 190px, 210px"
            />
            <img
              src={RightWeather}
              alt="Weather widget"
              loading="lazy"
              className="absolute right-[2%] top-[60%] h-[160px] md:h-[200px] lg:h-[210px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 200px, 210px"
            />
            <img
              src={BottomLeft}
              alt="Stats card"
              loading="lazy"
              className="absolute left-[2%] bottom-[2%] h-[140px] md:h-[140px] lg:h-[170px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 140px, 170px"
            />
            <img
              src={BottomRight}
              alt="Payment receipt"
              loading="lazy"
              className="absolute right-[18%] md:right-[20%] bottom-0 h-[130px] md:h-[175px] lg:h-[185px] w-auto rounded-2xl shadow-2xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 175px, 185px"
            />
          </div>
        </div>
        {/* ===== /Collage ===== */}

        {/* Role cards */}
        <section aria-label="Primary roles" className="max-w-4xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {['acquirer', 'merchant', 'developer'].map((roleKey) => (
              <Link
                key={roleKey}
                to={`/docs/${roleKey}/${roleKey === 'acquirer' ? 'introduction' : 'gettingstart'}`}
                onClick={handleLinkClick}
                className="bg-[#000D7A] px-5 py-5 md:px-8 md:py-8 rounded-2xl shadow-lg border border-blue-900/20 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#001AAB] focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[0.99]"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                  {t(`roles.${roleKey}.title`)}
                </h3>
                <p className="text-white/90 text-xs sm:text-sm font-light">
                  {t(`roles.${roleKey}.desc`)}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick links */}
        <section aria-label="Quick links" className="max-w-4xl mx-auto mt-4 sm:mt-6 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <Link
              to="/docs/branding-guidelines"
              onClick={handleLinkClick}
              className="bg-[#000D7A] px-5 py-5 md:px-8 md:py-8 rounded-2xl shadow-lg border border-blue-900/20 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#001AAB] focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[0.99]"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                Branding Guidelines
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-light">
                Guidelines ensuring consistent brand voice
              </p>
            </Link>

            <Link
              to="/docs/marketing-materials"
              onClick={handleLinkClick}
              className="bg-[#000D7A] px-5 py-5 md:px-8 md:py-8 rounded-2xl shadow-lg border border-blue-900/20 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#001AAB] focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[0.99]"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                Marketing Materials
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-light">
                Assets showcasing our brand story
              </p>
            </Link>

            <Link
              to="/docs/agreement"
              onClick={handleLinkClick}
              className="bg-[#000D7A] px-5 py-5 md:px-8 md:py-8 rounded-2xl shadow-lg border border-blue-900/20 flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02] hover:shadow-2xl hover:bg-[#001AAB] focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-[0.99]"
            >
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                View Agreement
              </h3>
              <p className="text-white/90 text-xs sm:text-sm font-light">
                View acquirer and merchant agreements
              </p>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DocumentationHero;
