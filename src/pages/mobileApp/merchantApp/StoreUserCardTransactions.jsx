import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M59 from '../../../assets/images/merchant-app/m59.jpg';
import M60 from '../../../assets/images/merchant-app/m60.jpg';
import M61 from '../../../assets/images/merchant-app/m61.jpg';
import M62 from '../../../assets/images/merchant-app/m62.jpg';


function MerchantMobileStoreUserCardTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'process', label: t('storeUserCardTransactions.paymentProcess.title') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('storeUserCardTransactions.title')}
            </h1>


            <div id="process" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('storeUserCardTransactions.paymentProcess.title')}
                </h2>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserCardTransactions.paymentProcess.amountEntry')} - </strong>{t('storeUserCardTransactions.paymentProcess.amountEntryDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M59} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserCardTransactions.paymentProcess.purposeSelection')} - </strong>{t('storeUserCardTransactions.paymentProcess.purposeSelectionDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M60} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>{t('storeUserCardTransactions.paymentProcess.createPayment')} - </strong>{t('storeUserCardTransactions.paymentProcess.createPaymentDesc')}</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M61} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M62} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantMobileStoreUserCardTransactions;