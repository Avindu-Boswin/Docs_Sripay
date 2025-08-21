import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useSections } from '../../../components/SectionContext';
import { useTranslation } from 'react-i18next';

import Img1 from '../../../assets/images/merchant/Img39.png';
import Img2 from '../../../assets/images/merchant/Img40.png';
import Img3 from '../../../assets/images/merchant/Img41.png';
import Img4 from '../../../assets/images/merchant/Img42.png';

function Instore() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('instorereports.sectionsMenu.step1') },
      { id: 'step-2', label: t('instorereports.sectionsMenu.step2') },
      { id: 'step-3', label: t('instorereports.sectionsMenu.step3') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] mt-6 sm:mt-8 mb-12 sm:mb-16">
      {/* Page Title */}
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-3 sm:mb-4">
          {t('instorereports.title')}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {t('instorereports.intro')}
        </p>
      </header>

      {/* Settled Transactions */}
      <section id="step-1" className="mt-8">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('instorereports.settled.title')}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          {t('instorereports.settled.desc')}
        </p>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img1}
              alt={t('instorereports.alts.kpi')}
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li>{t('instorereports.settled.kpis.success')}</li>
          <li>{t('instorereports.settled.kpis.refunded')}</li>
          <li>{t('instorereports.settled.kpis.voided')}</li>
          <li>{t('instorereports.settled.kpis.total')}</li>
        </ul>
      </section>

      {/* Search & Filter Cards */}
      <section id="step-2" className="mt-10 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('instorereports.table.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Search */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t('instorereports.table.searchTitle')}
            </h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img3}
                  alt={t('instorereports.alts.search')}
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>

          {/* Filter */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t('instorereports.table.filterTitle')}
            </h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img2}
                  alt={t('instorereports.alts.filter')}
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>
        </div>
      </section>

      {/* Columns */}
      <section id="step-3" className="mt-10 sm:mt-12">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('instorereports.columns.title')}
        </h2>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img4}
              alt={t('instorereports.alts.columns')}
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li>
            <strong>{t('instorereports.columns.labels.date')}:</strong>{' '}
            {t('instorereports.columns.items.date')}
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.id')}:</strong>{' '}
            {t('instorereports.columns.items.id')}
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.store')}:</strong>{' '}
            {t('instorereports.columns.items.store')}
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.currency')}:</strong>{' '}
            {t('instorereports.columns.items.currency')}
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.value')}:</strong>{' '}
            {t('instorereports.columns.items.value')}
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.status')}:</strong>{' '}
            {t('instorereports.columns.items.statusDesc')}{' '}
            <span className="text-green-600 font-medium">
              {t('instorereports.columns.statusBadges.success')}
            </span>{' '}
            (payment completed),{' '}
            <span className="text-blue-600 font-medium">
              {t('instorereports.columns.statusBadges.refunded')}
            </span>{' '}
            (amount returned),{' '}
            <span className="text-gray-600 font-medium">
              {t('instorereports.columns.statusBadges.voided')}
            </span>{' '}
            (canceled before settlement).
          </li>
          <li>
            <strong>{t('instorereports.columns.labels.actions')}:</strong>{' '}
            {t('instorereports.columns.items.actions')}
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Instore;
