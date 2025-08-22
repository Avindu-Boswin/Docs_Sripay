import React, { useEffect, useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';

import Img6 from '../../../assets/images/merchant/Img26.png';
import Img7 from '../../../assets/images/merchant/Img27.png';
import Img8 from '../../../assets/images/merchant/Img28.png';
import Img9 from '../../../assets/images/merchant/Img30.png';
import Img10 from '../../../assets/images/merchant/Img31.png';
import Img11 from '../../../assets/images/merchant/Img32.png';
import Img12 from '../../../assets/images/merchant/Img33.png';
import Img13 from '../../../assets/images/merchant/Img34.png';
import Img14 from '../../../assets/images/merchant/Img35.png';
import Img15 from '../../../assets/images/merchant/Img36.png';
import Img16 from '../../../assets/images/merchant/Img29.png';

function Online() {
  // internal ids (not translated)
  const TAB_TARGET = 'target';
  const TAB_ALL = 'all';

  const [activeTab, setActiveTab] = useState(TAB_TARGET);
  const [haveWalletPayType, setHaveWalletPayType] = useState('web');
  const [noWalletPayType, setNoWalletPayType] = useState('web');

  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace

  // right-side navigation
  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('online.sectionsMenu.step1') },
      { id: 'step-2', label: t('online.sectionsMenu.step2') },
      { id: 'step-3', label: t('online.sectionsMenu.step3') },
      { id: 'step-4', label: t('online.sectionsMenu.step4') },
      { id: 'step-5', label: t('online.sectionsMenu.step5') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        {t('online.title')}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 gap-6">
        <p className="text-gray-600 sm:text-sm md:w-[55%] max-w-3xl text-base whitespace-pre-line">
          {t('online.heroLead')}
        </p>
        <div className="w-full max-w-xs sm:max-w-sm md:w-[430px] aspect-video shadow rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7cIP0NDv-0s?autoplay=1&mute=1&loop=1&playlist=7cIP0NDv-0s"
            title={t('online.videoTitle')}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Step 1 */}
      <h3 id="step-1" className="text-2xl text-gray-700 py-7">
        {t('online.howTo.title')}
      </h3>
      <p>
        <strong>{t('online.howTo.navPath')}</strong>
      </p>

      <div className="mt-6 mb-10">
        <Zoom>
          <img src={Img6} alt={t('online.howTo.alts.createTx')} className="rounded-md shadow mx-auto md:w-4/5" />
        </Zoom>
        <p className="bg-blue-100 border rounded-md py-6 text-gray-600 text-sm px-8 my-10">
          {t('online.note')}
        </p>
      </div>

      {/* Step 2 - Tabs */}
      <div id="step-2">
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab(TAB_TARGET)}
            className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
              activeTab === TAB_TARGET ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
          >
            {t('online.tabs.targetWallet')}
          </button>
          <button
            onClick={() => setActiveTab(TAB_ALL)}
            className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
              activeTab === TAB_ALL ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
          >
            {t('online.tabs.targetAllWallets')}
          </button>
        </div>

        {/* TARGET WALLET */}
        {activeTab === TAB_TARGET && (
          <>
            <p className="text-gray-600 sm:text-sm max-w-3xl text-base mb-6">
              {t('online.targetWallet.lead')}
            </p>

            {/* Sub-tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => setHaveWalletPayType('web')}
                className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
                  haveWalletPayType === 'web' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {t('online.tabs.web')}
              </button>
              <button
                onClick={() => setHaveWalletPayType('mobile')}
                className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
                  haveWalletPayType === 'mobile' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {t('online.tabs.mobile')}
              </button>
            </div>

            {haveWalletPayType === 'web' && (
              <div className="mt-4">
                <h4 id="step-3" className="text-xl text-gray-700 mb-3">
                  {t('online.targetWallet.web.title')}
                </h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetWallet.web.desc')}</p>
                <Zoom>
                  <img src={Img9} alt={t('online.targetWallet.web.alts.flow')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 id="step-4" className="text-xl text-gray-700 mb-3 mt-8">
                  {t('online.targetWallet.web.selectTitle')}
                </h4>
                <p className="text-sm text-gray-700 py-1">
                  {t('online.targetWallet.web.selectDesc')}{' '}
                  <strong>
                    <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      SriPay
                    </a>
                  </strong>.
                </p>
                <Zoom>
                  <img src={Img13} alt={t('online.targetWallet.web.alts.method')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 id="step-5" className="text-xl text-gray-700 mb-3 mt-8">
                  {t('online.targetWallet.web.receiptTitle')}
                </h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetWallet.web.receiptDesc')}</p>
                <Zoom>
                  <img src={Img10} alt={t('online.targetWallet.web.alts.receipt')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
              </div>
            )}

            {haveWalletPayType === 'mobile' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">{t('online.targetWallet.mobile.title')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetWallet.mobile.desc')}</p>
                <Zoom>
                  <img src={Img15} alt={t('online.targetWallet.mobile.alts.flow')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetWallet.mobile.selectTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">
                  {t('online.targetWallet.mobile.selectDesc')}{' '}
                  <strong>
                    <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      SriPay
                    </a>
                  </strong>.
                </p>
                <Zoom>
                  <img src={Img13} alt={t('online.targetWallet.mobile.alts.method')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetWallet.mobile.receiptTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetWallet.mobile.receiptDesc')}</p>
                <Zoom>
                  <img src={Img12} alt={t('online.targetWallet.mobile.alts.receipt')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
              </div>
            )}
          </>
        )}

        {/* TARGET ALL WALLETS */}
        {activeTab === TAB_ALL && (
          <>
            <p className="text-gray-600 sm:text-sm max-w-3xl text-base mb-6">
              {t('online.targetAll.lead')}
            </p>

            {/* Sub-tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => setNoWalletPayType('web')}
                className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
                  noWalletPayType === 'web' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {t('online.tabs.web')}
              </button>
              <button
                onClick={() => setNoWalletPayType('mobile')}
                className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${
                  noWalletPayType === 'mobile' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                {t('online.tabs.mobile')}
              </button>
            </div>

            {noWalletPayType === 'web' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">{t('online.targetAll.web.title')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetAll.web.desc')}</p>
                <Zoom>
                  <img src={Img7} alt={t('online.targetAll.web.alts.flow')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetAll.web.selectTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">
                  {t('online.targetAll.web.selectDesc')}{' '}
                  <strong>
                    <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      SriPay
                    </a>
                  </strong>.
                </p>
                <Zoom>
                  <img src={Img8} alt={t('online.targetAll.web.alts.method')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetAll.web.receiptTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetAll.web.receiptDesc')}</p>
                <Zoom>
                  <img src={Img14} alt={t('online.targetAll.web.alts.receipt')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
              </div>
            )}

            {noWalletPayType === 'mobile' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">{t('online.targetAll.mobile.title')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetAll.mobile.desc')}</p>
                <Zoom>
                  <img src={Img11} alt={t('online.targetAll.mobile.alts.flow')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetAll.mobile.selectTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">
                  {t('online.targetAll.mobile.selectDesc')}{' '}
                  <strong>
                    <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      SriPay
                    </a>
                  </strong>.
                </p>
                <Zoom>
                  <img src={Img8} alt={t('online.targetAll.mobile.alts.method')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>

                <h4 className="text-xl text-gray-700 mb-3 mt-8">{t('online.targetAll.mobile.receiptTitle')}</h4>
                <p className="text-sm text-gray-700 py-1">{t('online.targetAll.mobile.receiptDesc')}</p>
                <Zoom>
                  <img src={Img16} alt={t('online.targetAll.mobile.alts.receipt')} className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Online;
