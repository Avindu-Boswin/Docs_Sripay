import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function ThirdPartyIntegration() {
  const { t } = useTranslation('developer'); // use 'developer' namespace
  const { setSections } = useSections?.() || { setSections: () => {} };

  useEffect(() => {
    if (!setSections) return;
    setSections([
      { id: 'step-1', label: t('thirdparty.sectionsMenu.alipay') },
      { id: 'step-2', label: t('thirdparty.sectionsMenu.sms') },
      { id: 'step-3', label: t('thirdparty.sectionsMenu.ga') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('thirdparty.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('thirdparty.p1')}
      </p>

      {/* Alipay+ */}
      <div id="step-1" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('thirdparty.sectionsMenu.alipay')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('thirdparty.alipay.items.support')}</li>
          <li>{t('thirdparty.alipay.items.integrated')}</li>
        </ul>
      </div>

      {/* SMS Gateway */}
      <div id="step-2" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('thirdparty.sectionsMenu.sms')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('thirdparty.sms.items.powers')}</li>
          <li>{t('thirdparty.sms.items.templates')}</li>
        </ul>
      </div>

      {/* Google Analytics */}
      <div id="step-3" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('thirdparty.sectionsMenu.ga')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('thirdparty.ga.items.tracks')}</li>
          <li>{t('thirdparty.ga.items.gtm')}</li>
        </ul>
      </div>
    </div>
  );
}

export default ThirdPartyIntegration;
