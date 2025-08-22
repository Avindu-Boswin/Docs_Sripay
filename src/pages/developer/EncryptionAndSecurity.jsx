import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/encryption_and_security.png';

function EncryptionAndSecurity() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('encsec.sectionsMenu.transit') },
      { id: 'step-2', label: t('encsec.sectionsMenu.atRest') },
      { id: 'step-3', label: t('encsec.sectionsMenu.token') },
      { id: 'step-4', label: t('encsec.sectionsMenu.audits') },
      { id: 'step-5', label: t('encsec.sectionsMenu.network') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('encsec.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('encsec.p1')}
      </p>

      {/* Diagram */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('encsec.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Data in Transit */}
      <div id="step-1" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('encsec.sectionsMenu.transit')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('encsec.transit.items.https')}</li>
          <li>{t('encsec.transit.items.rsa')}</li>
          <li>{t('encsec.transit.items.hash')}</li>
        </ul>
      </div>

      {/* Data at Rest */}
      <div id="step-2" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('encsec.sectionsMenu.atRest')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('encsec.atRest.items.aes')}</li>
          <li>{t('encsec.atRest.items.gcp')}</li>
          <li>{t('encsec.atRest.items.backup')}</li>
        </ul>
      </div>

      {/* Tokenization */}
      <div id="step-3" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('encsec.sectionsMenu.token')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('encsec.token.items.scope')}</li>
          <li>{t('encsec.token.items.store')}</li>
        </ul>
      </div>

      {/* Security Audits & Monitoring */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('encsec.sectionsMenu.audits')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('encsec.audits.items.pentest')}</li>
          <li>{t('encsec.audits.items.logging')}</li>
        </ul>
      </div>

      {/* Network & Application Protection */}
      <div id="step-5" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('encsec.sectionsMenu.network')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('encsec.network.items.waf')}</li>
          <li>{t('encsec.network.items.allow')}</li>
          <li>{t('encsec.network.items.ratelimit')}</li>
        </ul>
      </div>
    </div>
  );
}

export default EncryptionAndSecurity;
