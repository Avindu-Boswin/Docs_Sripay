import React from 'react';
import { useTranslation } from 'react-i18next';

function ComplianceAndPrivacy() {
  const { t } = useTranslation('developer'); // use the 'developer' namespace if you have one

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('compliance.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('compliance.p1')}
      </p>

      {/* LIST */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('compliance.items.pci')}</li>
          <li>{t('compliance.items.gdpr')}</li>
          <li>{t('compliance.items.local')}</li>
          <li>
            {t('compliance.items.privacy')}{' '}
            <a
              href={t('compliance.links.privacyHref')}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('compliance.links.privacyLabel')}
            </a>
          </li>
          <li>
            {t('compliance.items.terms')}{' '}
            <a
              href={t('compliance.links.termsHref')}
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('compliance.links.termsLabel')}
            </a>
          </li>
          <li>{t('compliance.items.audits')}</li>
        </ul>
      </div>
    </div>
  );
}

export default ComplianceAndPrivacy;
