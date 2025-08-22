import React, { useState, useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';

import UserCode from '../../../assets/images/merchant/AlipayLogo.png';
import Img1 from '../../../assets/images/merchant/Img19.png';
import Img2 from '../../../assets/images/merchant/Img20.png';
import Img3 from '../../../assets/images/merchant/Img21.png';
import Img4 from '../../../assets/images/merchant/Img23.png';
import Img5 from '../../../assets/images/merchant/Img24.png';
import Img6 from '../../../assets/images/merchant/Img25.png';
import OrderCode from '../../../assets/images/merchant/Qr.jpg';
import EntryCode from '../../../assets/images/Sripay_logo_traingle.png';
import VisaIcon from '../../../assets/images/merchant/VisaMaster.jpg';
import UsdtIcon from '../../../assets/images/merchant/USDT.png';

function Instore() {
  const [selectedMethodIdx, setSelectedMethodIdx] = useState(0); // Auto-select Alipay Plus
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace!

  // Right-side steps menu
  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('instore.sectionsMenu.step1') },
      { id: 'step-2', label: t('instore.sectionsMenu.step2') },
      { id: 'step-3', label: t('instore.sectionsMenu.step3') },
      { id: 'step-4', label: t('instore.sectionsMenu.step4') },
      { id: 'step-5', label: t('instore.sectionsMenu.step5') }
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  const methods = [
    {
      title: t('instore.methods.alipayPlus.cardTitle'),
      description: t('instore.methods.alipayPlus.cardDesc'),
      icon: UserCode,
      disabled: false,
      details: (
        <>
          <h4 id="step-3" className="text-2xl font-bold mb-2">
            {t('instore.methods.alipayPlus.detailsTitle')}
          </h4>
          <div className="mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              {t('instore.methods.alipayPlus.enterTitle')}
            </h4>
            <span className="text-sm text-gray-600">
              {t('instore.methods.alipayPlus.enterHint')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img3} alt={t('instore.methods.alipayPlus.alts.enter')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 id="step-4" className="text-xl font-semibold text-gray-700 mb-4 mt-10">
              {t('instore.methods.alipayPlus.scanTitle')}
            </h4>
            <span className="text-gray-700 text-base">
              {t('instore.methods.alipayPlus.scanTextPre')}{' '}
              <a href="https://sripay.lk/wallets" target="_blank" rel="noopener noreferrer">
                <strong>{t('instore.methods.alipayPlus.scanTextAnchor')}</strong>
              </a>{' '}
              {t('instore.methods.alipayPlus.scanTextPost')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img4} alt={t('instore.methods.alipayPlus.alts.scan')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 id="step-5" className="text-xl font-semibold text-gray-700 mb-4 mt-10">
              {t('instore.methods.alipayPlus.completeTitle')}
            </h4>
            <span className="text-gray-700 text-base">
              {t('instore.methods.alipayPlus.completeText')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img5} alt={t('instore.methods.alipayPlus.alts.success')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>
          </div>
        </>
      )
    },
    {
      title: t('instore.methods.scanPay.cardTitle'),
      description: t('instore.methods.scanPay.cardDesc'),
      icon: OrderCode,
      disabled: false,
      details: (
        <>
          <h4 className="text-2xl font-bold mb-2">
            {t('instore.methods.scanPay.detailsTitle')}
          </h4>
          <div className="mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">
              {t('instore.methods.scanPay.enterTitle')}
            </h4>
            <span className="text-sm text-gray-600">
              {t('instore.methods.scanPay.enterHint')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img3} alt={t('instore.methods.scanPay.alts.enter')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">
              {t('instore.methods.scanPay.scanTitle')}
            </h4>
            <span className="text-sm text-gray-600">
              {t('instore.methods.scanPay.scanText')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img6} alt={t('instore.methods.scanPay.alts.camera')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">
              {t('instore.methods.scanPay.completeTitle')}
            </h4>
            <span className="text-gray-700 text-base">
              {t('instore.methods.scanPay.completeText')}
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img5} alt={t('instore.methods.scanPay.alts.success')} className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>
          </div>
        </>
      )
    },
    {
      title: t('instore.methods.sripay.cardTitle'),
      description: t('instore.methods.sripay.cardDesc'),
      icon: EntryCode,
      disabled: false,
      details: (
        <div className="p-8 bg-white rounded-lg border border-yellow-300 shadow-md text-center">
          <h4 className="text-2xl font-bold text-yellow-700 mb-4">
            {t('instore.methods.sripay.soonTitle')}
          </h4>
          <p className="text-base text-gray-700">
            {t('instore.methods.sripay.soonText')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {t('instore.methods.sripay.soonSub')}
          </p>
        </div>
      )
    },
    {
      title: t('instore.methods.visamaster.cardTitle'),
      description: t('instore.methods.visamaster.cardDesc'),
      icon: VisaIcon,
      disabled: true,
      details: (
        <>
          <h4 className="text-lg font-bold mb-2 text-blue-700">
            {t('instore.methods.visamaster.detailsTitle')}
          </h4>
          <p className="text-gray-700 mb-2">
            {t('instore.methods.visamaster.p1')}
          </p>
          <p className="text-sm text-gray-500">
            {t('instore.methods.visamaster.p2')}
          </p>
        </>
      )
    },
    {
      title: t('instore.methods.usdt.cardTitle'),
      description: t('instore.methods.usdt.cardDesc'),
      icon: UsdtIcon,
      disabled: true,
      details: (
        <>
          <h4 className="text-lg font-bold mb-2 text-blue-700">
            {t('instore.methods.usdt.detailsTitle')}
          </h4>
          <p className="text-gray-700 mb-2">
            {t('instore.methods.usdt.p1')}
          </p>
          <p className="text-sm text-gray-500">
            {t('instore.methods.usdt.p2')}
          </p>
        </>
      )
    }
  ];

  const selectedMethod = methods[selectedMethodIdx] ?? null;

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('instore.title')}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 gap-6">
        <p className="text-gray-600 sm:text-sm md:w-[55%] max-w-3xl text-base">
          {t('instore.heroLead')}
        </p>
        <div className="w-full max-w-xs sm:max-w-sm md:w-[430px] aspect-video shadow rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7cIP0NDv-0s?autoplay=1&mute=1&loop=1&playlist=7cIP0NDv-0s"
            title={t('instore.videoTitle')}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Step 1 */}
      <h3 id="step-1" className="text-2xl text-gray-700 py-7">
        {t('instore.howTo.title')}
      </h3>
      <p>
        {t('instore.howTo.instruction')} <strong>{t('instore.howTo.navPath')}</strong>.
      </p>
      <ul className="list-disc list-inside ml-4 mt-4 mb-10">
        <li>{t('instore.howTo.bullets.store')}</li>
        <li>{t('instore.howTo.bullets.terminal')}</li>
        <li>{t('instore.howTo.bullets.purpose')}</li>
      </ul>
      <Zoom>
        <img
          src={Img1}
          alt={t('instore.howTo.alts.createTx')}
          className="mx-auto my-6 block md:w-4/5 rounded-lg shadow"
        />
      </Zoom>

      {/* Step 2 */}
      <h3 id="step-2" className="text-2xl text-gray-700 py-7">
        {t('instore.sectionsMenu.step2')}
      </h3>
      <Zoom>
        <img
          src={Img2}
          alt={t('instore.howTo.alts.selectMethod')}
          className="mx-auto my-6 block md:w-4/5 rounded-lg shadow"
        />
      </Zoom>

      <div className="bg-blue-100 my-10 border px-4 py-4 rounded-md text-blue-700 text-center">
        {t('instore.infoBanner')}
      </div>

      {/* Methods grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {methods.map((method, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 text-center transition duration-300
              ${method.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg cursor-pointer'}
              ${selectedMethodIdx === index && !method.disabled ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => { if (!method.disabled) setSelectedMethodIdx(index); }}
          >
            <img src={method.icon} alt={method.title} className="mx-auto h-20 md:h-24 mb-4 object-contain" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
        ))}
      </div>

      {/* Method details */}
      {selectedMethod && !selectedMethod.disabled && (
        <div className="mt-10 p-6 bg-blue-100 rounded-xl shadow-lg border border-blue-100 max-w-full mx-auto animate-fade-in">
          {selectedMethod.details}
        </div>
      )}

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Instore;
