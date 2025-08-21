import React from 'react';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/web_architecture.png';

function WebApplicationArchitecture() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('webarch.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('webarch.p1')}
      </p>

      {/* Image */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('webarch.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Feature List */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>
            <span className="font-semibold">{t('webarch.features.framework.label')}:</span>{' '}
            {t('webarch.features.framework.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.styling.label')}:</span>{' '}
            {t('webarch.features.styling.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.state.label')}:</span>{' '}
            {t('webarch.features.state.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.routing.label')}:</span>{' '}
            {t('webarch.features.routing.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.customization.label')}:</span>{' '}
            {t('webarch.features.customization.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.performance.label')}:</span>{' '}
            {t('webarch.features.performance.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('webarch.features.accessibility.label')}:</span>{' '}
            {t('webarch.features.accessibility.desc')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WebApplicationArchitecture;
