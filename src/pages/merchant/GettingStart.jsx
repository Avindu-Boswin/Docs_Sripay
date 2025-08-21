import React , { useState, useEffect }  from 'react';
import { useTranslation } from 'react-i18next';

import Img1 from '../../assets/images/merchant/Img1.png';
import Img2 from '../../assets/images/merchant/Img2.png';
import Img3 from '../../assets/images/merchant/Img3.png';

import { useSections } from '../../components/SectionContext';


function GettingStart() {
  const { t } = useTranslation();
   const { setSections } = useSections();

     useEffect(() => {
       setSections([
         { id: 'step-1', label: t('merchantgettingstart.sections.section1') },
         { id: 'step-2', label: t('merchantgettingstart.sections.section2') },
         { id: 'step-3', label: t('merchantgettingstart.sections.section3') },
       
   
       ]);
       return () => setSections([]);
   
     }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
       {t('merchantgettingstart.title')}
      </h1>

      <h3 className='text-xl mt-10 py-1'>{t('merchantgettingstart.title2')}</h3>
      <span className='text-base text-gray-700'>
       {t('merchantgettingstart.desription1.section1')}<span className='text-blue-500'>SriPay</span>{t('merchantgettingstart.desription1.section2')}{' '}
        <a
          href="https://connect.sripay.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-500'
        >
          www.connect.sripay.lk
        </a>{' '}
        {t('merchantgettingstart.desription1.section3')}
      </span>

      <h3 className='text-xl mt-8 py-1'>{t('merchantgettingstart.title3')}</h3>
      <span className='text-gray-700'>
      {t('merchantgettingstart.desription2.section1')}
      </span>

      {/* Step 1 */}
      <div className='w-full mt-10'>
        <h2 id='step-1' className='text-3xl font-semibold py-3'>{t('merchantgettingstart.signup')}</h2>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>{t('merchantgettingstart.step1.title')}</span>
        <p className='py-4 ml-10'>
        {t('merchantgettingstart.step1.desc')}
        </p>
        <img src={Img1} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>

      {/* Step 2 */}
      <div id='step-2' className='w-full mt-10'>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>{t('merchantgettingstart.step2.title')}</span>
        <p className='py-4 ml-10'>
        {t('merchantgettingstart.step2.desc')}
        </p>
        <img src={Img2} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>

      {/* Step 3 */}
      <div id='step-3' className='w-full mt-10'>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>{t('merchantgettingstart.step3.title')}</span>
        <p className='py-4 ml-10'>
        {t('merchantgettingstart.step3.desc')}
        </p>
        <img src={Img3} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>
    </div>
  );
}

export default GettingStart;
