
import React from 'react'
import QuestionImage from '../../assets/images/acquirer/Questions-amico.svg'


import { useTranslation } from 'react-i18next';

function Faq() {
  const { t } = useTranslation();
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('faq.title')}
      </h1>

      <div className='w-full flex flex-col lg:flex-col justify-between items-center gap-10 mt-10'>
        {/* Left Image */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img src={QuestionImage} alt='FAQ Illustration' className='w-3/4 md:w-full max-w-[500px] h-auto' />
        </div>

        {/* Right FAQ Content */}
        <div className='w-full p-5 sm:p-8 md:p-10 bg-blue-50 rounded-[3rem]'>
          <div className='space-y-6 text-sm sm:text-base mt-5 md:mt-0'>
            <div>
              <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                {t('faq.questions.0.q')}
              </span>
              <p className='pl-5 mt-2 text-gray-700'>
                {t('faq.questions.0.a')}
              </p>
            </div>
            <div>
              <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                {t('faq.questions.1.q')}
              </span>
              <p className='pl-5 mt-2 text-gray-700'>
                {t('faq.questions.1.a')}
              </p>
            </div>
            <div>
              <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                {t('faq.questions.2.q')}
              </span>
              <p className='pl-5 mt-2 text-gray-700'>
                {t('faq.questions.2.a')}
              </p>
            </div>
            <div>
              <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                {t('faq.questions.3.q')}
              </span>
              <p className='pl-5 mt-2 text-gray-700'>
                {t('faq.questions.3.a')}
              </p>
            </div>
            <div>
              <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                {t('faq.questions.4.q')}
              </span>
              <p className='pl-5 mt-2 text-gray-700'>
                {t('faq.questions.4.a')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
