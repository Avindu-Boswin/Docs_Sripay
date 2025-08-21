import React from 'react';
import { useTranslation } from 'react-i18next';

function MobileApplicationArchitecture() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('mobilearch.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('mobilearch.p1')}
      </p>

      {/* Feature List */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>
            <span className="font-semibold">{t('mobilearch.features.framework.label')}:</span>{' '}
            {t('mobilearch.features.framework.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.styling.label')}:</span>{' '}
            {t('mobilearch.features.styling.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.state.label')}:</span>{' '}
            {t('mobilearch.features.state.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.routing.label')}:</span>{' '}
            {t('mobilearch.features.routing.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.notifications.label')}:</span>{' '}
            {t('mobilearch.features.notifications.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.performance.label')}:</span>{' '}
            {t('mobilearch.features.performance.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('mobilearch.features.security.label')}:</span>{' '}
            {t('mobilearch.features.security.desc')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileApplicationArchitecture;
