import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/auth_and_authorization.png';

function AuthenticationAndAuthorization() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('auth.sectionsMenu.authentication') },
      { id: 'step-2', label: t('auth.sectionsMenu.authorization') },
      { id: 'step-3', label: t('auth.sectionsMenu.session') },
      { id: 'step-4', label: t('auth.sectionsMenu.best') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('auth.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('auth.p1')}
      </p>

      {/* Diagram */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('auth.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Authentication */}
      <div id="step-1" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('auth.sectionsMenu.authentication')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li><span className="font-semibold">{t('auth.authentication.items.jwt.label')}:</span> {t('auth.authentication.items.jwt.desc')}</li>
          <li><span className="font-semibold">{t('auth.authentication.items.oauth.label')}:</span> {t('auth.authentication.items.oauth.desc')}</li>
          <li><span className="font-semibold">{t('auth.authentication.items.tokenization.label')}:</span> {t('auth.authentication.items.tokenization.desc')}</li>
          <li>
            <span className="font-semibold">{t('auth.authentication.items.tokenValidity.label')}</span>
            <ul className="list-[circle] pl-6 mt-3">
              <li>{t('auth.authentication.items.tokenValidity.points.access')}</li>
              <li>{t('auth.authentication.items.tokenValidity.points.refresh')}</li>
            </ul>
          </li>
          <li><span className="font-semibold">{t('auth.authentication.items.aes.label')}:</span> {t('auth.authentication.items.aes.desc')}</li>
        </ul>
      </div>

      {/* Authorization */}
      <div id="step-2" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('auth.sectionsMenu.authorization')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li><span className="font-semibold">{t('auth.authorization.items.rbac.label')}:</span> {t('auth.authorization.items.rbac.desc')}</li>
          <li><span className="font-semibold">{t('auth.authorization.items.policy.label')}:</span> {t('auth.authorization.items.policy.desc')}</li>
        </ul>
      </div>

      {/* Session Management */}
      <div id="step-3" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('auth.sectionsMenu.session')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('auth.session.items.short')}</li>
          <li>{t('auth.session.items.storage')}</li>
          <li>{t('auth.session.items.invalidate')}</li>
        </ul>
      </div>

      {/* Security Best Practices */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('auth.sectionsMenu.best')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('auth.best.items.requireJwt')}</li>
          <li>{t('auth.best.items.httpsOnly')}</li>
          <li>{t('auth.best.items.monitoring')}</li>
          <li>{t('auth.best.items.rateLimit')}</li>
        </ul>
      </div>
    </div>
  );
}

export default AuthenticationAndAuthorization;
