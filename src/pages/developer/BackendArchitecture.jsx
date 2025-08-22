import React from 'react';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/backend_architecture.png';

function BackendArchitecture() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('backendarch.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('backendarch.p1')}
      </p>

      {/* Image */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('backendarch.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Feature List */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>
            <span className="font-semibold">{t('backendarch.features.framework.label')}:</span>{' '}
            {t('backendarch.features.framework.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.clustering.label')}:</span>{' '}
            {t('backendarch.features.clustering.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.api.label')}:</span>{' '}
            {t('backendarch.features.api.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.integration.label')}:</span>{' '}
            {t('backendarch.features.integration.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.error.label')}:</span>{' '}
            {t('backendarch.features.error.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.scalability.label')}:</span>{' '}
            {t('backendarch.features.scalability.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('backendarch.features.monitoring.label')}:</span>{' '}
            {t('backendarch.features.monitoring.desc')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BackendArchitecture;
