import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M16 from '../../../assets/images/merchant-app/m16.jpg';
import M17 from '../../../assets/images/merchant-app/m17.jpg';
import M18 from '../../../assets/images/merchant-app/m18.jpg';



function MerchantMobileMerchantCardTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'transaction-setup', label: t('merchantCardTransactions.sections.transactionSetup') },
            { id: 'payment-generation', label: t('merchantCardTransactions.sections.paymentGeneration') },
            { id: 'payment-processing', label: t('merchantCardTransactions.sections.paymentProcessing') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantCardTransactions.title')}
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantCardTransactions.transactionSetup.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantCardTransactions.transactionSetup.storeLabel')} </strong> {t('merchantCardTransactions.transactionSetup.storeText')}</li>
                    <li><strong>{t('merchantCardTransactions.transactionSetup.purposeLabel')} </strong> {t('merchantCardTransactions.transactionSetup.purposeText')}</li>
                    <li><strong>{t('merchantCardTransactions.transactionSetup.currencyLabel')} </strong> {t('merchantCardTransactions.transactionSetup.currencyText')}</li>
                    <li><strong>{t('merchantCardTransactions.transactionSetup.amountLabel')} </strong> {t('merchantCardTransactions.transactionSetup.amountText')}</li>
                    <li><strong>{t('merchantCardTransactions.transactionSetup.proceedButtonLabel')} </strong> {t('merchantCardTransactions.transactionSetup.proceedButtonText')}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M16} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* PAYMENT GENERATION */}
            <div id="payment-generation" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantCardTransactions.paymentGeneration.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantCardTransactions.paymentGeneration.clientRefLabel')} </strong> {t('merchantCardTransactions.paymentGeneration.clientRefText')}</li>
                    <li><strong>{t('merchantCardTransactions.paymentGeneration.requestIdLabel')} </strong> {t('merchantCardTransactions.paymentGeneration.requestIdText')}</li>
                    <li><strong>{t('merchantCardTransactions.paymentGeneration.expiresLabel')} </strong> {t('merchantCardTransactions.paymentGeneration.expiresText')}</li>
                    <li><strong>{t('merchantCardTransactions.paymentGeneration.openButtonLabel')} </strong> {t('merchantCardTransactions.paymentGeneration.openButtonText')}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M17} alt="payment generation example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* PAYMENT PROCESSING */}
            <div id="payment-processing" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantCardTransactions.paymentProcessing.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantCardTransactions.paymentProcessing.paymentPageLabel')} </strong>{t('merchantCardTransactions.paymentProcessing.paymentPageText')}</li>
                    <li><strong>{t('merchantCardTransactions.paymentProcessing.completionLabel')} </strong>{t('merchantCardTransactions.paymentProcessing.completionText')}</li>
                </ul>
                <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M18} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantMobileMerchantCardTransactions;