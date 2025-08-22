import React from 'react';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/database_architecture.png';

function DatabaseArchitecture() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('databasearch.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('databasearch.p1')}
      </p>

      {/* Diagram */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('databasearch.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Feature List */}
      <div className="mt-8 mb-6">
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>
            <span className="font-semibold">{t('databasearch.features.collections.label')}:</span>{' '}
            {t('databasearch.features.collections.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('databasearch.features.schema.label')}:</span>{' '}
            {t('databasearch.features.schema.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('databasearch.features.indexing.label')}:</span>{' '}
            {t('databasearch.features.indexing.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('databasearch.features.backup.label')}:</span>{' '}
            {t('databasearch.features.backup.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('databasearch.features.integrity.label')}:</span>{' '}
            {t('databasearch.features.integrity.desc')}
          </li>
          <li>
            <span className="font-semibold">{t('databasearch.features.performance.label')}:</span>{' '}
            {t('databasearch.features.performance.desc')}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DatabaseArchitecture;
