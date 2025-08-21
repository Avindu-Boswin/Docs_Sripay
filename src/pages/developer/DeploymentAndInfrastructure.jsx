import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/deployment_and_infrastructure.png';

function DeploymentAndInfrastructure() {
  const { t } = useTranslation('developer'); // use the 'developer' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('deployinfra.sectionsMenu.hosting') },
      { id: 'step-2', label: t('deployinfra.sectionsMenu.notify') },
      { id: 'step-3', label: t('deployinfra.sectionsMenu.backup') },
      { id: 'step-4', label: t('deployinfra.sectionsMenu.scaling') },
      { id: 'step-5', label: t('deployinfra.sectionsMenu.monitoring') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('deployinfra.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('deployinfra.p1')}
      </p>

      {/* Diagram */}
      <div className="mt-8 mb-6">
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('deployinfra.alts.diagram')}
          />
        </Zoom>
      </div>

      {/* Hosting & Compute */}
      <div id="step-1" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('deployinfra.sectionsMenu.hosting')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('deployinfra.hosting.items.cloudrun')}</li>
          <li>{t('deployinfra.hosting.items.hosting')}</li>
          <li>{t('deployinfra.hosting.items.firestore')}</li>
        </ul>
      </div>

      {/* Notification Services */}
      <div id="step-2" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('deployinfra.sectionsMenu.notify')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('deployinfra.notify.items.separate')}</li>
          <li>{t('deployinfra.notify.items.integrated')}</li>
        </ul>
      </div>

      {/* Backup & DR */}
      <div id="step-3" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('deployinfra.sectionsMenu.backup')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('deployinfra.backup.items.compute')}</li>
          <li>{t('deployinfra.backup.items.daily')}</li>
        </ul>
      </div>

      {/* Scaling & Performance */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('deployinfra.sectionsMenu.scaling')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('deployinfra.scaling.items.autoscale')}</li>
          <li>{t('deployinfra.scaling.items.coldstart')}</li>
        </ul>
      </div>

      {/* Monitoring & Alerts */}
      <div id="step-5" className="mt-8 mb-6">
        <p className="text-xl md:text-2xl font-bold text-gray-700 mb-8">
          {t('deployinfra.sectionsMenu.monitoring')}
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-800">
          <li>{t('deployinfra.monitoring.items.gcpmon')}</li>
          <li>{t('deployinfra.monitoring.items.alerts')}</li>
        </ul>
      </div>
    </div>
  );
}

export default DeploymentAndInfrastructure;
