import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M19 from '../../../assets/images/merchant-app/m19.jpg';
import M20 from '../../../assets/images/merchant-app/m20.jpg';
import M21 from '../../../assets/images/merchant-app/m21.jpg';
import M22 from '../../../assets/images/merchant-app/m22.jpg';
import M23 from '../../../assets/images/merchant-app/m23.jpg';
import M24 from '../../../assets/images/merchant-app/m24.jpg';
import M25 from '../../../assets/images/merchant-app/m25.jpg';
import M26 from '../../../assets/images/merchant-app/m26.jpg';
import M27 from '../../../assets/images/merchant-app/m27.jpg';
import M28 from '../../../assets/images/merchant-app/m28.jpg';
import M29 from '../../../assets/images/merchant-app/m29.jpg';


function TransactionHistory() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'transaction-setup', label: t('transactionHistory.sections.overview') },
            { id: 'transaction-selection', label: t('transactionHistory.sections.transactionSelection') },
            { id: 'transaction-summary', label: t('transactionHistory.sections.transactionSummary') },
            { id: 'transaction-actions', label: t('transactionHistory.sections.transactionActions') },
            { id: 'void-transaction', label: t('transactionHistory.sections.voidTransaction') },
            { id: 'refund-transaction', label: t('transactionHistory.sections.refundTransaction') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('transactionHistory.title')}
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('transactionHistory.overview.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('transactionHistory.overview.description')}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M19} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SELECTION */}
            <div id="transaction-selection" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('transactionHistory.transactionSelection.title')}
                </h2>
                <p className='text-gray-700 mb-2'>
                    {t('transactionHistory.transactionSelection.description')}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M20} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SUMMARY */}
            <div id="transaction-summary" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('transactionHistory.transactionSummary.title')}
                </h2>
                <p className='text-gray-700 mb-2'>
                    {t('transactionHistory.transactionSummary.description')}
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M21} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION ACTIONS */}
            <div id="transaction-actions" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('transactionHistory.transactionActions.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('transactionHistory.transactionActions.viewDetailsLabel')} </strong>{t('transactionHistory.transactionActions.viewDetailsText')}</li>
                    <li><strong>{t('transactionHistory.transactionActions.downloadReceiptLabel')} </strong>{t('transactionHistory.transactionActions.downloadReceiptText')}</li>
                    <li><strong>{t('transactionHistory.transactionActions.refundVoidLabel')} </strong>{t('transactionHistory.transactionActions.refundVoidText')}</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M22} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <h3 className='text-lg sm:text-xl mt-6 mb-2 font-semibold text-gray-700'>{t('transactionHistory.transactionActions.specificActionsTitle')}</h3>

                <div id="void-transaction" className='mt-4'>
                    <h4 className='font-semibold text-gray-700 mb-4'>{t('transactionHistory.voidTransaction.title')}</h4>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('transactionHistory.voidTransaction.eligibilityLabel')} </strong>{t('transactionHistory.voidTransaction.eligibilityText')}</li>
                        <li><strong>{t('transactionHistory.voidTransaction.processLabel')} </strong>{t('transactionHistory.voidTransaction.processText')}</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M26} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M27} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M28} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M29} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                <div id="refund-transaction" className='mt-6'>
                    <h4 className='font-semibold text-gray-700 mb-4'>{t('transactionHistory.refundTransaction.title')}</h4>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('transactionHistory.refundTransaction.processLabel')} </strong>{t('transactionHistory.refundTransaction.processText')}</li>
                    </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M23} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M24} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M25} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default TransactionHistory;