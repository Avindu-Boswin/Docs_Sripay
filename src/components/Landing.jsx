// src/components/DocumentationHero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';

import Document_Image from '../assets/documents.svg';
import DeveloperHeading from '../components/DeveloperHeading';
import ThirdSection from '../components/ThirdSection';


// ===== Collage images =====
import PhoneCenter from '../assets/hero/Center-phon.jpeg';
import LeftWide from '../assets/hero/qrScan.webp';
import RightTopTall from '../assets/hero/right-top-tall.png';
import RightWeather from '../assets/hero/right-weather-wide.png';
import BottomLeft from '../assets/hero/bottom-left.webp';
import BottomRight from '../assets/hero/bottom-right.webp';
import RoleCards from './RoleCards';
import { div } from 'framer-motion/client';

const DocumentationHero = () => {
  const { t } = useTranslation();
  const handleLinkClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
  
    <div className="relative">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden "
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-100 to-white" />
        <div className="absolute -top-12 -left-14 sm:-top-24 sm:-left-28 w-[20rem] h-[20rem] sm:w-[38rem] sm:h-[38rem] rounded-full blur-[60px] sm:blur-[100px] opacity-60 sm:opacity-80 bg-[radial-gradient(circle_at_center,_#5ED6FF,_#3BB9F5_60%,_transparent_70%)]" />
        <div className="absolute -right-16 top-5 sm:-right-32 sm:top-10 w-[22rem] h-[22rem] sm:w-[42rem] sm:h-[42rem] rounded-full blur-[80px] sm:blur-[120px] opacity-40 sm:opacity-50 bg-[radial-gradient(circle_at_center,_#0025E0,_#0012A5_55%,_transparent_70%)]" />
        <div className="absolute -bottom-16 sm:-bottom-32 left-1/2 -translate-x-1/2 w-full h-[14rem] sm:h-[28rem] rounded-[999px] blur-[80px] sm:blur-[120px] opacity-50 sm:opacity-70 bg-[linear-gradient(90deg,_#60A5FA,_#0EA5E9,_#22D3EE)]" />
      </div>

      {/* Soft fallback bg on mobile */}
      {/* <div className="md:hidden absolute inset-0 bg-gradient-to-b from-sky-50 via-blue-50 to-white" aria-hidden /> */}

      <Navbar className="" />


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
        <div className="relative mx-auto  md:mb-16 lg:mb-20 max-w-[1200px] hidden md:block">
          <div className="relative h-[420px] md:h-[560px] lg:h-[600px] mt-[6%] ">
            <img
              src={PhoneCenter}
              alt="App preview"
              loading="lazy"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[460px] md:h-[450px] lg:h-[650px] w-auto rounded-[2rem] shadow-2xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 520px, 560px"
            />
            <img
              src={LeftWide}
              alt="Dashboard card"
              loading="lazy"
              className="absolute md:left-[4%] md:top-[17%] lg:top-[10%] h-[180px] md:h-[150px] lg:h-[230px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 230px, 250px"
            />
            <img
              src={RightTopTall}
              alt="Analytics wheel"
              loading="lazy"
              className="absolute md:right-[1%] lg:right-[-1.5%] md:top-[20%] lg:top-[14%] h-[150px] md:h-[123px] lg:h-[210px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 190px, 210px"
            />
            {/* <img
              src={RightWeather}
              alt="Weather widget"
              loading="lazy"
              className="absolute hidden lg:block right-[-3%] top-[55%] h-[160px] md:h-[200px] lg:h-[250px] w-[120px] rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 200px, 210px"
            /> */}
            <img
              src={BottomLeft}
              alt="Stats card"
              loading="lazy"
              className="absolute md:left-[4.5%] lg:left-[8%] md:bottom-[20%] lg:bottom-[3%] h-[140px] md:h-[150px] lg:h-[200px] w-auto rounded-2xl shadow-xl ring-1 ring-black/5 bg-white object-contain select-none border-4 border-white"
              sizes="(max-width: 1024px) 140px, 170px"
            />

            <img
              src={BottomRight}
              alt="Payment receipt"
              loading="lazy"
              className="absolute right-[12%] md:right-[2%]  lg:right-[10%] md:bottom-[20%] lg:bottom-10 h-[130px] md:h-[155px] lg:h-[185px] w-auto rounded-2xl shadow-2xl ring-1 ring-black/5 bg-white object-contain select-none"
              sizes="(max-width: 1024px) 175px, 185px"
            />
          </div>
        </div>
   
      </main>
         
      
    </div>
    <RoleCards/>
       <DeveloperHeading/>
         <ThirdSection/>
    </div>
  );
};

export default DocumentationHero;
