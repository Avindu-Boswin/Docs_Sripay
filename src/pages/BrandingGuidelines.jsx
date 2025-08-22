import React from 'react';
import Header from '../components/Merchant/MerchantNavBar';
import pdfUrl from '../assets/images/Fundamental_Brand_Guidelines.pdf';
import ZipFolder from '../assets/GuideLineZip/Brand_Mark_Assets.zip?url';
import { useTranslation } from 'react-i18next';

export default function BrandingGuidelines() {
  const { t } = useTranslation();
  const safePdfUrl = typeof pdfUrl === 'string' ? encodeURI(pdfUrl) : pdfUrl;

  return (
    <>
      <Header />

      {/* Page container */}
      <main className="mt-24 md:py-2 sm:py-1 lg:py-3">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-[10rem]">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 mt-10">
            {t('branding.title')}
          </h1>

          {/* ===== Brand Mark Assets (ZIP) ===== */}
          <section className="mt-12">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {t('branding.brandAssets.title')}
              </h2>

              <p className="mt-3 text-gray-700 leading-relaxed">
                {t('branding.brandAssets.desc')}
              </p>

              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li>{t('branding.brandAssets.formats')}</li>
                <li>{t('branding.brandAssets.colorways')}</li>
                <li>{t('branding.brandAssets.backgrounds')}</li>
                <li>{t('branding.brandAssets.extras')}</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={ZipFolder}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  {t('branding.brandAssets.downloadBtn')}
                </a>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                {t('branding.brandAssets.note')}
              </p>
            </div>
          </section>

          {/* Section header */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {t('branding.guidelines.title')}
            </h2>
          </div>

          {/* ===== Mobile & Tablet ONLY: Download/Open links (no embed) ===== */}
          <div className="block lg:hidden mt-4">
            <div className="rounded-2xl border border-gray-200 bg-blue-100 p-6">
              <p className="text-gray-700 mb-4">
                {t('branding.mobile.notice')}
              </p>
              <div className="flex flex-wrap md:gap-5 gap-2 py-5">
                <a
                  href={safePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {t('branding.mobile.open')}
                </a>
                <a
                  href={safePdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  {t('branding.mobile.download')}
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              {t('branding.mobile.tip')}
            </p>
          </div>

          {/* ===== Desktop ONLY: Embedded iframe viewer ===== */}
          <div className="hidden lg:block">
            <div className="mt-4 rounded-2xl overflow-hidden">
              <div className="w-full h-[72vh] bg-white lg:px-[10rem]">
                <iframe
                  title={t('branding.title')}
                  src={`${safePdfUrl}`}
                  className="w-full h-full"
                  loading="lazy"
                  style={{ background: 'white' }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              {t('branding.desktop.fallback')}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
