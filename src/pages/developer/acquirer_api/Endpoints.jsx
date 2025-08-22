import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';

function AcqEndpoints() {
  const { t } = useTranslation('developer');
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'instore', label: t('acqEndpoints.sections.instore') },
      { id: 'online',  label: t('acqEndpoints.sections.online') }
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('acqEndpoints.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('acqEndpoints.intro')}
      </p>

      <ol className="list-decimal pl-6 space-y-4 text-gray-800">
        <li id="instore">
          <span className="font-semibold">{t('acqEndpoints.instore.title')}</span>
          <p className="text-gray-700 text-base leading-relaxed mt-5">
            {t('acqEndpoints.instore.desc')}
          </p>
          <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2 mb-10">
            <li>{t('acqEndpoints.instore.items.orderCodePayQr')}</li>
            <li>{t('acqEndpoints.instore.items.orderCodeResultListener')}</li>
            <li>{t('acqEndpoints.instore.items.userPresentPay')}</li>
            <li>{t('acqEndpoints.instore.items.userPresentPayWaiting')}</li>
            <li>{t('acqEndpoints.instore.items.instorePaymentInquiry')}</li>
          </ol>
        </li>

        <li id="online">
          <span className="font-semibold">{t('acqEndpoints.online.title')}</span>
          <p className="text-gray-700 text-base leading-relaxed mt-5">
            {t('acqEndpoints.online.desc')}
          </p>
          <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
            <li>{t('acqEndpoints.online.items.paymentLinkCreate')}</li>
            <li>{t('acqEndpoints.online.items.paymentInquiry')}</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}

export default AcqEndpoints;
