import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ActivateImage1 from '../../assets/images/acquirer/img304.jpg';
import ActivateImage2 from '../../assets/images/acquirer/img306.jpg';
import ActivateImage3 from '../../assets/images/acquirer/img307.jpg';

import { useSections } from '../../components/SectionContext';


function ActivatingSuspend() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: 'Merchant Activate ' },
   
  ,
      

    ]);

    return () => setSections([]);

  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('activatingSuspend.title')}</h1>
      <div className='w-full px-4 sm:px-6 md:px-10 py-6 bg-white '>
        <h2 className='text-xl  text-gray-800 mb-4'>{t('activatingSuspend.howToTitle')}</h2>
        <ol className='list-decimal list-inside space-y-3 text-gray-700 px-5 text-base leading-relaxed'>
          <div className='pb-2'>
            <li>{t('activatingSuspend.steps.0')}</li>
            <img src={ActivateImage1} alt='activateImage1' className="mx-auto  mb-10 my-6 block md:w-4/5" />
          </div>
          <div className='pb-2'>
            <li>{t('activatingSuspend.steps.1')}</li>
            <img src={ActivateImage2} alt='activateImage2' className="mx-auto  mb-10 my-6 block md:w-4/5" />
          </div>
          <div className='pb-2'>
            <li>{t('activatingSuspend.steps.2')}</li>
            <img src={ActivateImage3} alt='activateImage2' className="mx-auto  mb-10 my-6 block md:w-4/5" />
          </div>
        </ol>
      </div>
    </div>
  );
}

export default ActivatingSuspend