
import React , { useState, useEffect }  from 'react';
import { useTranslation } from 'react-i18next';
import SuspendImage from '../../assets/images/acquirer/img302.jpg';

import { useSections } from '../../components/SectionContext';


function MerchantSuspend() {
  const { t } = useTranslation();
   const { setSections } = useSections();

     useEffect(() => {
       setSections([
         { id: 'step-1', label: 'Suspend Merchant' },
       
   
       ]);
       return () => setSections([]);
   
     }, [setSections, t]);
   
    
  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('merchantSuspend.title')}
      </h1>

      <div className='w-full px-4 sm:px-6 md:px-10 py-6 bg-white '>
        <h2 className='text-xl  text-gray-800 mb-4'>{t('merchantSuspend.howToTitle')}</h2>
        <ol className='list-decimal list-inside space-y-3 text-gray-700 px-5 text-base leading-relaxed'>
          <li>{t('merchantSuspend.steps.0')}</li>
          <li>{t('merchantSuspend.steps.1')}</li>
          <li>{t('merchantSuspend.steps.2')}</li>
        </ol>
      </div>

      <img src={SuspendImage} alt='suspentImage' className="mx-auto  mb-10 my-6 block md:w-4/5" />
      <span className="block text-sm sm:text-base leading-relaxed px-4 sm:px-6 md:px-8 text-gray-700">
        {t('merchantSuspend.note')}
      </span>
    </div>
  );
}

export default MerchantSuspend;
