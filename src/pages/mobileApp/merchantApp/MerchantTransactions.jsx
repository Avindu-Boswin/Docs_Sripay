import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M1 from '../../../assets/images/merchant-app/m1.jpg'
import M2 from '../../../assets/images/merchant-app/m2.jpg'
import M3 from '../../../assets/images/merchant-app/m3.jpg'


function MerchantMobileMerchantTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();



    useEffect(() => {
        setSections([
            { id: 'overview', label: t('merchantTransactions.sections.overview') },
            { id: 'transaction-types', label: t('merchantTransactions.sections.transactionTypes') },
            { id: 'transaction-setup', label: t('merchantTransactions.sections.transactionSetup') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantTransactions.title')}
            </h1>

            {/* OVERVIEW SECTION */}
            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-6 font-semibold text-gray-700'>
                    {t('merchantTransactions.overview.title')}
                </h2>
                <p className='text-gray-700 text-base leading-relaxed mb-6'>
                    {t('merchantTransactions.overview.description')}
                </p>
                <p className='text-gray-700 text-md'>
                    <strong>{t('merchantTransactions.overview.navigationLabel')} </strong> {t('merchantTransactions.overview.navigationText')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M1} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
            {/* TRANSACTION TYPES SECTION */}
            <div id="transaction-types" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantTransactions.transactionTypes.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>{t('merchantTransactions.transactionTypes.instoreLabel')} </strong> {t('merchantTransactions.transactionTypes.instoreText')}
                    </li>
                    <li>
                        <strong>{t('merchantTransactions.transactionTypes.onlineLabel')} </strong> {t('merchantTransactions.transactionTypes.onlineText')}
                    </li>
                    <li>
                        <strong>{t('merchantTransactions.transactionTypes.cardLabel')} </strong> {t('merchantTransactions.transactionTypes.cardText')}
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M2} alt="transaction types example 2" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SETUP SECTION */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantTransactions.transactionSetup.title')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>{t('merchantTransactions.transactionSetup.outletLabel')} </strong> {t('merchantTransactions.transactionSetup.outletText')}
                    </li>
                    <li>
                        <strong>{t('merchantTransactions.transactionSetup.terminalLabel')} </strong> {t('merchantTransactions.transactionSetup.terminalText')}
                    </li>
                    <li>
                        <strong>{t('merchantTransactions.transactionSetup.purposeLabel')} </strong> {t('merchantTransactions.transactionSetup.purposeText')}
                    </li>
                    <li>
                        <strong>{t('merchantTransactions.transactionSetup.nextLabel')} </strong> {t('merchantTransactions.transactionSetup.nextText')}
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M3} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

        </div>
    );
}

export default MerchantMobileMerchantTransactions;