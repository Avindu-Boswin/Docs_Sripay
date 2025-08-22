import React from 'react';
import { useTranslation } from 'react-i18next';

function MaintenanceAndSupport() {
  const { t } = useTranslation('developer'); // use the 'developer' namespace

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('maintenance.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('maintenance.p1')}
      </p>

      {/* LIST */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('maintenance.items.updates')}</li>
          <li>{t('maintenance.items.monitoring')}</li>
          <li>{t('maintenance.items.support')}</li>
          <li>{t('maintenance.items.sla')}</li>
          <li>
            {t('maintenance.items.docs')}{' '}
            <a
              href={t('maintenance.links.docsHref')}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('maintenance.links.docsLabel')}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MaintenanceAndSupport;
