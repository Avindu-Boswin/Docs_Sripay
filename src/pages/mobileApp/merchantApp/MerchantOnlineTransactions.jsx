import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M11 from '../../../assets/images/merchant-app/m11.jpg';
import M12 from '../../../assets/images/merchant-app/m12.jpg';
import M13 from '../../../assets/images/merchant-app/m13.jpg';
import M14 from '../../../assets/images/merchant-app/m14.jpg';
import M15 from '../../../assets/images/merchant-app/m15.jpg';


function MerchantMobileMerchantOnlineTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'transaction-setup', label: t('merchantOnlineTransactions.sections.transactionSetup') },
            { id: 'select-amount', label: t('merchantOnlineTransactions.sections.selectAmount') },
            { id: 'payment-processing', label: t('merchantOnlineTransactions.sections.paymentProcessing') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantOnlineTransactions.title')}
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantOnlineTransactions.transactionSetup.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantOnlineTransactions.transactionSetup.outletLabel')} </strong> {t('merchantOnlineTransactions.transactionSetup.outletText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.transactionSetup.purposeLabel')} </strong> {t('merchantOnlineTransactions.transactionSetup.purposeText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.transactionSetup.nextLabel')} </strong> {t('merchantOnlineTransactions.transactionSetup.nextText')}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M11} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* SELECT AMOUNT */}
            <div id="select-amount" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantOnlineTransactions.selectAmount.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantOnlineTransactions.selectAmount.currencyLabel')} </strong> {t('merchantOnlineTransactions.selectAmount.currencyText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.selectAmount.amountLabel')} </strong> {t('merchantOnlineTransactions.selectAmount.amountText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.selectAmount.walletLabel')} </strong> {t('merchantOnlineTransactions.selectAmount.walletText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.selectAmount.userPayTypeLabel')} </strong> {t('merchantOnlineTransactions.selectAmount.userPayTypeText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.selectAmount.generateButtonLabel')} </strong> {t('merchantOnlineTransactions.selectAmount.generateButtonText')}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M12} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M13} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* PAYMENT PROCESSING */}
            <div id="payment-processing" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantOnlineTransactions.paymentProcessing.title')}
                </h2>
                <p className='text-gray-700 mb-3'>{t('merchantOnlineTransactions.paymentProcessing.navigation')}</p>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('merchantOnlineTransactions.paymentProcessing.remainingTimeLabel')} </strong> {t('merchantOnlineTransactions.paymentProcessing.remainingTimeText')}</li>
                    <li><strong>{t('merchantOnlineTransactions.paymentProcessing.completionLabel')} </strong> {t('merchantOnlineTransactions.paymentProcessing.completionText')}</li>
                    <li>
                        <ul className='list-disc mt-2 space-y-1'>
                            <li><strong>{t('merchantOnlineTransactions.paymentProcessing.withWalletLabel')} </strong> {t('merchantOnlineTransactions.paymentProcessing.withWalletText')}</li>
                            <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                                <img src={M14} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                            </div>
                            <li><strong>{t('merchantOnlineTransactions.paymentProcessing.withoutWalletLabel')} </strong> {t('merchantOnlineTransactions.paymentProcessing.withoutWalletText')}</li>
                            <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                                <img src={M15} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                            </div>
                        </ul>
                    </li>
                </ul>

            </div>

        </div>
    );
}

export default MerchantMobileMerchantOnlineTransactions;