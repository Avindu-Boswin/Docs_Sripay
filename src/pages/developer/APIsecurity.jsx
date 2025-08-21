import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/api_security.png';

function APISecurity() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('apisec.sectionsMenu.auth') },
      { id: 'step-2', label: t('apisec.sectionsMenu.rate') },
      { id: 'step-3', label: t('apisec.sectionsMenu.cors') },
      { id: 'step-4', label: t('apisec.sectionsMenu.input') },
      { id: 'step-5', label: t('apisec.sectionsMenu.gateway') },
      { id: 'step-6', label: t('apisec.sectionsMenu.logging') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('apisec.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('apisec.p1')}
      </p>

      {/* Diagram */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('apisec.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Authentication & Authorization */}
      <div id="step-1" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.auth')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.auth.items.require')}</li>
          <li>{t('apisec.auth.items.claims')}</li>
        </ul>
      </div>

      {/* Rate Limiting & Abuse Prevention */}
      <div id="step-2" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.rate')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.rate.items.limit')}</li>
          <li>{t('apisec.rate.items.throttle')}</li>
        </ul>
      </div>

      {/* CORS & Domain Restrictions */}
      <div id="step-3" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.cors')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.cors.items.strict')}</li>
          <li>{t('apisec.cors.items.preflight')}</li>
        </ul>
      </div>

      {/* Input Validation & Sanitization */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.input')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.input.items.validate')}</li>
          <li>{t('apisec.input.items.protect')}</li>
        </ul>
      </div>

      {/* API Gateway & Monitoring */}
      <div id="step-5" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.gateway')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.gateway.items.gcp')}</li>
          <li>{t('apisec.gateway.items.monitor')}</li>
        </ul>
      </div>

      {/* Logging & Audit Trails */}
      <div id="step-6" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('apisec.sectionsMenu.logging')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('apisec.logging.items.audit')}</li>
          <li>{t('apisec.logging.items.retain')}</li>
        </ul>
      </div>
    </div>
  );
}

export default APISecurity;
