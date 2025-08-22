import React from 'react';
import QuestionImage from '../../assets/images/acquirer/Questions-amico.svg';
import { useTranslation } from 'react-i18next';

function Faq() {
  const { t } = useTranslation('merchant');

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('faqs.title')}
      </h1>

      <div className="w-full flex flex-col justify-between items-center gap-10 mt-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={QuestionImage}
            alt={t('faqs.alts.illustration')}
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Right FAQ Content */}
        <div className="w-full p-5 sm:p-8 md:p-10 bg-blue-50 rounded-[3rem]">
          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {`Q1: ${t('faqs.q1.q')}`}
              </span>
              <p className="pl-5 mt-2 text-gray-700">A: {t('faq.q1.a')}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {`Q2: ${t('faqs.q2.q')}`}
              </span>
              <p className="pl-5 mt-2 text-gray-700">A: {t('faq.q2.a')}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {`Q3: ${t('faqs.q3.q')}`}
              </span>
              <p className="pl-5 mt-2 text-gray-700">A: {t('faq.q3.a')}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {`Q4: ${t('faqs.q4.q')}`}
              </span>
              <p className="pl-5 mt-2 text-gray-700">A: {t('faqs.q4.a')}</p>
            </div>

            <div>
              <span className="font-semibold text-gray-800 text-base sm:text-lg">
                {`Q5: ${t('faqs.q5.q')}`}
              </span>
              <p className="pl-5 mt-2 text-gray-700">A: {t('faq.q5.a')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
