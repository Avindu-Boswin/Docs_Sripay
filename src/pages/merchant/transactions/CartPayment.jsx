import React, { useEffect } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../../assets/images/merchant/Img37.png';
import Img2 from '../../../assets/images/merchant/Img38.png';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';

function CartPayment() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('cardpayments.sectionsMenu.step1') },
      { id: 'step-2', label: t('cardpayments.sectionsMenu.step2') }
    ]);
    return () => setSections([]);
    // re-run when language changes so labels update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        {t('cardpayments.title')}
      </h1>

      <p id="step-1" className="text-gray-700 text-base md:text-base mb-6">
        {t('cardpayments.intro')}
      </p>

      <div className="mt-6 mb-10">
        <Zoom>
          <img
            src={Img2}
            alt={t('cardpayments.alts.ui')}
            className="rounded-md shadow mx-auto md:w-4/5"
          />
        </Zoom>
      </div>

      {/* Styled Description Block */}
      <div className="p-6 mb-6">
        <h2 id="step-2" className="text-xl font-semibold text-gray-800 mb-3">
          {t('cardpayments.paymentLink.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('cardpayments.paymentLink.p1')}
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li className="py-1">{t('cardpayments.paymentLink.list.clientRef')}</li>
          <li className="py-1">{t('cardpayments.paymentLink.list.requestId')}</li>
          <li className="py-1">{t('cardpayments.paymentLink.list.expiresAt')}</li>
          <li className="py-1">{t('cardpayments.paymentLink.list.paymentUrl')}</li>
        </ul>
        <p className="text-gray-700 mt-4">
          {t('cardpayments.paymentLink.p2')}
        </p>
      </div>

      <div className="mt-6 mb-10">
        <Zoom>
          <img
            src={Img1}
            alt={t('cardpayments.alts.txn')}
            className="rounded-md shadow mx-auto md:w-4/5"
          />
        </Zoom>
      </div>
    </div>
  );
}

export default CartPayment;
