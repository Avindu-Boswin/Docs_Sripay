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
            { id: 'transaction-setup', label: 'Overview' },
            { id: 'transaction-selection', label: 'Transaction Selection' },
            { id: 'transaction-summary', label: 'Transaction Summary' },
            { id: 'transaction-actions', label: 'Transaction Actions' },
            { id: 'void-transaction', label: 'Void Transaction' },
            { id: 'refund-transaction', label: 'Refund Transaction' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Transactions History
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Overview
                </h2>
                <p className='text-gray-700 mb-4'>
                    The Transaction History feature allows merchants to view, refund, and void transactions. Click the <strong>"History"</strong> tab on the Home page to navigate to the Transaction History page.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M19} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SELECTION */}
            <div id="transaction-selection" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Selection
                </h2>
                <p className='text-gray-700 mb-2'>
                    Select from In-Store, Online Store, or Card Payment to filter transaction history. Choosing a type displays all related transaction history.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M20} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SUMMARY */}
            <div id="transaction-summary" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Summary
                </h2>
                <p className='text-gray-700 mb-2'>
                    Top of Page, shows counts of successful, refunded, and voided transactions, along with total transaction value in USD and LKR.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M21} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION ACTIONS */}
            <div id="transaction-actions" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Actions
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>View Details - </strong>Click a transaction to see detailed information.</li>
                    <li><strong>Download Receipt - </strong>Option to download the receipt for the selected transaction.</li>
                    <li><strong>Refund and Void - </strong>Perform refund or void actions on eligible transactions.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M22} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <h3 className='text-lg sm:text-xl mt-6 mb-2 font-semibold text-gray-700'>Specific Actions</h3>

                <div id="void-transaction" className='mt-4'>
                    <h4 className='font-semibold text-gray-700 mb-4'>Void Transaction</h4>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>Eligibility - </strong>Click a successful transaction within 24 hours to see the "Void" button.</li>
                        <li><strong>Process - </strong>Void the transaction within the day using a 4-digit passcode.</li>
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
                    <h4 className='font-semibold text-gray-700 mb-4'>Refund Transaction</h4>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>Process - </strong>Initiate a refund on eligible transactions using a 4-digit passcode.</li>
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