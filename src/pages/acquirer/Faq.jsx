import React from 'react';
import { useTranslation } from 'react-i18next';

function Faq() {
  const { t } = useTranslation();
  const questions = t('faq.questions', { returnObjects: true });
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
        {t('faq.title')}
      </h1>
      <div className='pt-7'>
        <span className='font-semibold  text-gray-800 text-lg '>{questions[0].q}</span>
        <p className='pl-5 mt-3 text-gray-700'>{questions[0].a}</p>
      </div>
      <div className='pt-6'>
        <span className='font-semibold  text-gray-800 text-lg '>{questions[1].q}</span>
        <p className='pl-5 mt-3 text-gray-700'>{questions[1].a}</p>
      </div>
      <div className='pt-6'>
        <span className='font-semibold  text-gray-800 text-lg '>{questions[2].q}</span>
        <p className='pl-5 mt-3 text-gray-700'>{questions[2].a}</p>
      </div>
      <div className='pt-6'>
        <span className='font-semibold  text-gray-800 text-lg '>{questions[3].q}</span>
        <p className='pl-5 mt-3 text-gray-700'>{questions[3].a}</p>
      </div>
      <div className='pt-6'>
        <span className='font-semibold  text-gray-800 text-lg '>{questions[4].q}</span>
        <p className='pl-5 mt-3 text-gray-700'>{questions[4].a}</p>
      </div>
    </div>
  );
}

export default Faq