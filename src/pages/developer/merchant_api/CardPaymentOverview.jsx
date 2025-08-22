import React from 'react'
import { useTranslation } from 'react-i18next';

function CardPaymentOverview() {
  const { t } = useTranslation();

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('cpo_title')}
      </h1>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('cpo_intro')}
      </p>

      {/* ---------- Overview ------------------------------------------------ */}
      <div id='step-2' className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {t('cpo_overview_title')}
        </h4>
        <p className='text-gray-700 text-base leading-relaxed mb-8'>
          {t('cpo_overview_body')}
        </p>
      </div>
    </div>
  )
}

export default CardPaymentOverview;
