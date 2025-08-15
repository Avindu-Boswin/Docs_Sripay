import React from 'react';
import Header from '../components/Merchant/MerchantNavBar';
import pdfUrl from '../assets/images/Fundamental_Brand_Guidelines.pdf';

export default function BrandingGuidelines() {
  const safePdfUrl = typeof pdfUrl === 'string' ? encodeURI(pdfUrl) : pdfUrl;

  return (
    <>
      <Header />

      {/* Page container */}
      <main className="mt-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-[10rem]">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 mt-10">
            SriPay Fundamental Brand Guidelines
          </h1>

          {/* Intro / description */}
          <section className="mt-6 text-gray-700 leading-relaxed text-base sm:text-[1.05rem]">
            <p className="mb-4">
              <strong>SriPay Fundamental Brand Guidelines</strong> and
              <strong> Brand Display Guidelines</strong> jointly constitute the
              <strong> SriPay Brand Guidelines</strong>. This page provides the online PDF
              for <strong>SriPay Fundamental Brand Guidelines</strong>.
            </p>

            <p className="mb-4">
              The <strong>SriPay Fundamental Brand Guidelines</strong> provide a general
              introduction to SriPay’s brand mark, including the logo composition, color
              specifications, co-branding lockups, and related elements. The fundamental
              guidelines also define SriPay’s brand assets, including graphics, typography,
              and design principles.
            </p>

            <p className="mb-4">
              All SriPay partners, merchants, and other authorized licensees must correctly
              apply the SriPay brand mark across all physical and digital channels. Adhering
              to the <strong>SriPay Fundamental Brand Guidelines</strong> is essential to
              accurately represent SriPay’s role in payments, partnerships, events, and
              marketing initiatives.
            </p>

            <p>
              The <strong>Brand Display Guidelines</strong> provide detailed instructions
              for presenting SriPay brand elements on specific SriPay products and
              touchpoints. For more information, see the
              <strong> Brand Display Guidelines for Cashier Payment</strong>.
            </p>
          </section>

          {/* Section header */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Fundamental Brand Guidelines
            </h2>
          </div>

          {/* ===== Mobile & Tablet ONLY: Download/Open links (no embed) ===== */}
          <div className="block lg:hidden mt-4">
            <div className="rounded-2xl border border-gray-200 bg-blue-100 p-6">
              <p className="text-gray-700 mb-4">
                PDF preview is disabled on mobile and tablet. Use the links below:
              </p>
              <div className="flex flex-wrap md:gap-5 gap-2 py-5">
                <a
                  href={safePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Open in new tab
                </a>
                <a
                  href={safePdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Download Guidelines
                </a>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Tip: If opening in a new tab doesn’t work, try the Download button.
            </p>
          </div>

          {/* ===== Desktop ONLY: Embedded iframe viewer ===== */}
          <div className="hidden lg:block">
            <div className="mt-4 rounded-2xl overflow-hidden">
              <div className="w-full h-[72vh] bg-white lg:px-[10rem]">
                <iframe
                  title="SriPay Fundamental Brand Guidelines (PDF)"
                  src={`${safePdfUrl}`}
                  className="w-full h-full"
                  loading="lazy"
                  style={{ background: 'white' }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              If the embedded PDF doesn’t load, use “Open in new tab” or “Download PDF”.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
