import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';

import Img1 from '../../../assets/images/merchant/Img45.png';
import Img3 from '../../../assets/images/merchant/Img41.png';
import Img2 from '../../../assets/images/merchant/Img40.png';
import Img4 from '../../../assets/images/merchant/Img46.png';

function CardPayment() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('cardreports.sectionsMenu.step1') },
      { id: 'step-2', label: t('cardreports.sectionsMenu.step2') },
      { id: 'step-3', label: t('cardreports.sectionsMenu.step3') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] mt-6 sm:mt-8 mb-12 sm:mb-16">
      <header>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-3 sm:mb-4">
          {t('cardreports.title')}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {t('cardreports.intro')}
        </p>
      </header>

      {/* Settled Transactions */}
      <section className="mt-8">
        <h2 id="step-1" className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('cardreports.settled.title')}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          {t('cardreports.settled.desc')}
        </p>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img1}
              alt={t('cardreports.alts.kpi')}
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li>{t('cardreports.settled.kpis.totalTx')}</li>
          <li>{t('cardreports.settled.kpis.success')}</li>
          <li>{t('cardreports.settled.kpis.totalUsd')}</li>
          <li>{t('cardreports.settled.kpis.totalLkr')}</li>
        </ul>

        <div className="mt-4 rounded-lg bg-blue-50 border p-4">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">
            {t('cardreports.settled.notesTitle')}
          </h4>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1.5">
            <li>{t('cardreports.settled.notes.n1')}</li>
            <li>{t('cardreports.settled.notes.n2')}</li>
            <li>{t('cardreports.settled.notes.n3')}</li>
            <li>{t('cardreports.settled.notes.n4')}</li>
          </ul>
        </div>
      </section>

      {/* Search & Filter Cards */}
      <section className="mt-10 sm:mt-12">
        <h2 id="step-2" className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('cardreports.table.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Search */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t('cardreports.table.searchTitle')}
            </h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img3}
                  alt={t('cardreports.alts.search')}
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>

          {/* Filter */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {t('cardreports.table.filterTitle')}
            </h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img2}
                  alt={t('cardreports.alts.filter')}
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>
        </div>
      </section>

      {/* Columns */}
      <section className="mt-10 sm:mt-12">
        <h2 id="step-3" className="text-lg sm:text-xl font-semibold text-gray-800 py-2">
          {t('cardreports.columns.title')}
        </h2>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img4}
              alt={t('cardreports.alts.columns')}
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li>
            <strong>{t('cardreports.columns.labels.date')}:</strong>{' '}
            {t('cardreports.columns.items.date')}
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.id')}:</strong>{' '}
            {t('cardreports.columns.items.id')}
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.store')}:</strong>{' '}
            {t('cardreports.columns.items.store')}
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.currency')}:</strong>{' '}
            {t('cardreports.columns.items.currency')}
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.value')}:</strong>{' '}
            {t('cardreports.columns.items.value')}
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.status')}:</strong>{' '}
            {t('cardreports.columns.items.statusDesc')}{' '}
            <span className="text-green-600 font-medium">
              {t('cardreports.columns.statusBadges.success')}
            </span>{' '}
            {t('cardreports.columns.statusHints.completed')},{' '}
            <span className="text-blue-600 font-medium">
              {t('cardreports.columns.statusBadges.refunded')}
            </span>{' '}
            {t('cardreports.columns.statusHints.returned')},{' '}
            <span className="text-gray-600 font-medium">
              {t('cardreports.columns.statusBadges.voided')}
            </span>{' '}
            {t('cardreports.columns.statusHints.canceled')}.
          </li>
          <li>
            <strong>{t('cardreports.columns.labels.actions')}:</strong>{' '}
            {t('cardreports.columns.items.actions')}
          </li>
        </ul>
      </section>
    </main>
  );
}

export default CardPayment;
