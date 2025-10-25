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
            { id: 'transaction-setup', label: 'Transaction Setup' },
            { id: 'payment-generation', label: 'Payment Generation' },
            { id: 'payment-processing', label: 'Payment Processing' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Card Payment Transactions
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Setup
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Store - </strong> Select the store from a dropdown menu.</li>
                    <li><strong>Payment Purpose - </strong> Choose the purpose from a dropdown menu.</li>
                    <li><strong>Currency - </strong> Select currency from a dropdown menu (LKR or USD).</li>
                    <li><strong>Amount - </strong> Manually enter the transaction amount.</li>
                    <li><strong>Proceed to Pay Button - </strong> Click to generate the payment details.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M16} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* PAYMENT GENERATION */}
            <div id="payment-generation" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Payment Generation
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Client Reference - </strong> A unique client-provided identifier for this transaction (optional but recommended).</li>
                    <li><strong>Request ID - </strong> System-generated request identifier returned by the API to track the payment request.</li>
                    <li><strong>Expires At - </strong> ISO timestamp indicating when the payment link or request will expire.</li>
                    <li><strong>Open Payment Page Button - </strong> Button to open the generated payment page where the customer completes the card entry.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M17} alt="payment generation example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* PAYMENT PROCESSING */}
            <div id="payment-processing" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Payment Processing
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Payment Page - </strong>Enter your bank card details on the opened payment page.</li>
                    <li><strong>Transaction Completion - </strong>Successfully create the transaction after submitting card details.</li>
                </ul>
                <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M18} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantMobileMerchantCardTransactions;