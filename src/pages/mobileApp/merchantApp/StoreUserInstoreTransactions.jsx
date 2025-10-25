import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M47 from '../../../assets/images/merchant-app/m47.jpg';
import M48 from '../../../assets/images/merchant-app/m48.jpg';
import M49 from '../../../assets/images/merchant-app/m49.jpg';
import M50 from '../../../assets/images/merchant-app/m50.jpg';
import M51 from '../../../assets/images/merchant-app/m51.jpg';
import M52 from '../../../assets/images/merchant-app/m52.jpg';


function MerchantMobileStoreUserInstoreTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'payment-method-selection', label: t('storeUserInstoreTransactions.paymentProcess.title') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div id="payment-method-selection" className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('storeUserInstoreTransactions.title')}
            </h1>

            <div className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('storeUserInstoreTransactions.paymentProcess.title')}
                </h2>

                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('storeUserInstoreTransactions.paymentProcess.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M47} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div className='mt-8 mb-12'>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserInstoreTransactions.paymentProcess.amountEntry')} - </strong>{t('storeUserInstoreTransactions.paymentProcess.amountEntryDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M48} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserInstoreTransactions.paymentProcess.selectStoreDetails')} - </strong>{t('storeUserInstoreTransactions.paymentProcess.selectStoreDetailsDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M49} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserInstoreTransactions.paymentProcess.nextButton')} - </strong>{t('storeUserInstoreTransactions.paymentProcess.nextButtonDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M50} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'>
                    {t('storeUserInstoreTransactions.paymentProcess.alipayPlusDesc')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M51} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'>
                    {t('storeUserInstoreTransactions.paymentProcess.alipayQRDesc')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M52} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>



        </div>
    );
}

export default MerchantMobileStoreUserInstoreTransactions;