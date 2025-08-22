import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Troubleshooting() {
  const { t } = useTranslation('merchant');
 

 

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-10 mb-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 sm:mb-8">
        {t('troubleshootings.title')}
      </h1>

      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
        {t('troubleshootings.intro')}
      </p>

      {/* Merchant Issues */}
      <section id="merchant-issues" className="mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
          {t('troubleshootings.merchantIssues.title')}
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-base">
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.0.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.0.solution')}
          </li>
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.1.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.1.solution')}
          </li>
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.2.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.2.solution')}
          </li>
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.3.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.merchantIssues.items.3.solution')}
          </li>
        </ul>
      </section>

      {/* Store User Issues */}
      <section id="store-user-issues" className="mb-12">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
          {t('troubleshootings.storeUserIssues.title')}
        </h2>
        <ul className="list-disc pl-5 sm:pl-6 space-y-6 text-gray-700 text-sm sm:text-base">
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.storeUserIssues.items.0.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.storeUserIssues.items.0.solution')}
          </li>
          <li>
            <strong>{t('troubleshootings.labels.issue')}:</strong>{' '}
            {t('troubleshootings.storeUserIssues.items.1.issue')}
            <br />
            <strong>{t('troubleshootings.labels.solution')}:</strong>{' '}
            {t('troubleshootings.storeUserIssues.items.1.solution')}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Troubleshooting;
