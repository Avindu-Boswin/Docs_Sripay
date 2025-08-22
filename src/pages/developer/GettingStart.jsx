import React from 'react';
import { useTranslation } from 'react-i18next';

function DevGettingStart() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('devgettingstart.title')}
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-gray-600">{t('devgettingstart.p1')}</p>
        <p>{t('devgettingstart.p2')}</p>
        <p>{t('devgettingstart.p3')}</p>
        <p>{t('devgettingstart.p4')}</p>

        <p>
          {t('devgettingstart.p5_prefix')}{' '}
          <a
            href="https://docs.sripay.lk/"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('devgettingstart.p5_link_text')}
          </a>{' '}
          {t('devgettingstart.p5_suffix')}
        </p>
      </div>
    </div>
  );
}

export default DevGettingStart;
