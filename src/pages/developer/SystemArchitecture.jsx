import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/system_architecture_overview.png';

function SystemArchitecture() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('systemarch.sectionsMenu.overview') },
      { id: 'step-2', label: t('systemarch.sectionsMenu.diagram') },
      { id: 'step-3', label: t('systemarch.sectionsMenu.components') },
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('systemarch.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('systemarch.p1')}
      </p>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('systemarch.p2')}
      </p>

      {/* ---------- System Diagram ---------- */}
      <div id="step-2" className="mt-8 mb-6">
        <h4 className="text-xl sm:text-2xl mb-9 font-semibold text-gray-700">
          {t('systemarch.sectionsMenu.diagram')}
        </h4>
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('systemarch.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* ---------- Component Descriptions ---------- */}
      <div id="step-3" className="mt-8 mb-6">
        <h4 className="text-xl sm:text-2xl mb-9 font-semibold text-gray-700">
          {t('systemarch.components.title')}
        </h4>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>{t('systemarch.components.items.webApp')}</li>
          <li>{t('systemarch.components.items.mobileApp')}</li>
          <li>{t('systemarch.components.items.backend')}</li>
          <li>{t('systemarch.components.items.database')}</li>
          <li>{t('systemarch.components.items.notification')}</li>
          <li>{t('systemarch.components.items.openSeaApi')}</li>
          <li>{t('systemarch.components.items.security')}</li>
          <li>{t('systemarch.components.items.backupDb')}</li>
        </ol>
      </div>
    </div>
  );
}

export default SystemArchitecture;
