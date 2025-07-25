import React from 'react';
import { useTranslation } from 'react-i18next';
import Businessman_pana from '../../assets/Businessman_pana.svg';

function WhoCanbeAcquirer() {
  const { t } = useTranslation();
  return (
    <div className="w-full  sm:py-10">
      <div className="mx-auto w-full max-w-4xl flex flex-col md:flex-row justify-center gap-7 items-center">
        <div className="w-full md:w-full text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-blue-700 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-tight">
            {t('acquirerIntro.title')} <span className='block md:inline pl-0 md:pl-[40%]'>{t('acquirerIntro.titleSpan')}</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Businessman_pana} alt="acquirer" className="w-48 h-32 sm:w-72 sm:h-44 md:w-[500px] md:h-[300px] object-contain" />
        </div>
      </div>
      <div className='pl-[150px]'>
        <div className='w-full sm:w-[80%] mx-auto mt-8 sm:mt-10 font-semibold text-base sm:text-lg text-gray-700'>
          <p>{t('acquirerIntro.intro')}</p>
        </div>
        <div className='mx-auto w-full sm:w-[80%] py-4'>
          <h2 className="text-base sm:text-[2rem] text-gray-700 font-semibold mb-2">{t('acquirerIntro.requirementsTitle')}</h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px] py-2">
            <li className='py-1'>{t('acquirerIntro.requirement1')}</li>
            <li className='py-1'>{t('acquirerIntro.requirement2')}</li>
            <li className='py-1'>{t('acquirerIntro.requirement3')}</li>
            <li className='py-1'>{t('acquirerIntro.requirement4')}</li>
            <li className='py-1'>{t('acquirerIntro.requirement5')}</li>
          </ul>
        </div>
        <div className="mx-auto w-full sm:w-[80%] py-4">
          <h2 className="text-base sm:text-[2rem] text-gray-700 font-semibold mb-5">{t('acquirerIntro.whyTitle')}</h2>
          <p className="text-sm sm:text-[14px] text-gray-700 mb-6 sm:mb-10">{t('acquirerIntro.whyText')}</p>
          <h2 className="text-base sm:text-[2rem] mb-5 sm:mb-7 text-gray-700 font-semibold">{t('acquirerIntro.benefitsTitle')}</h2>
          <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px]">
            <li className='py-1'>{t('acquirerIntro.benefit1')}</li>
            <li className='py-1'>{t('acquirerIntro.benefit2')}</li>
            <li className='py-1'>{t('acquirerIntro.benefit3')}</li>
            <li className='py-1'>{t('acquirerIntro.benefit4')}</li>
            <li className='py-1'>{t('acquirerIntro.benefit5')}</li>
            <li className='py-1'>{t('acquirerIntro.benefit6')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhoCanbeAcquirer