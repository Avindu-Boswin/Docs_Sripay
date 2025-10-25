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
            { id: 'transaction-setup', label: 'Transaction Setup' },
            { id: 'select-amount', label: 'Select Amount' },
            { id: 'payment-processing', label: 'Payment Processing' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Online-Store Transactions
            </h1>

            {/* TRANSACTION SETUP */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Setup
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Outlet Selection - </strong> Select your outlet from a dropdown menu.</li>
                    <li><strong>Purpose of Payment - </strong> Choose the payment purpose from a dropdown menu</li>
                    <li><strong>Next Button - </strong> Click "Next" to proceed to the Select Amount page.</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M11} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* SELECT AMOUNT */}
            <div id="select-amount" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Select Amount Page
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Currency - </strong> Only USD is available for online store transactions.</li>
                    <li><strong>Amount Entry - </strong> Enter the transaction amount manually.</li>
                    <li><strong>Wallet Selection - </strong> Optionally select a wallet (Alipay HK or Alipay CN) from a dropdown menu.</li>
                    <li><strong>User Pay Type - </strong> Choose between "Web" or "Mobile" from a dropdown menu.</li>
                    <li><strong>Generate Payment Link Button - </strong> Click to navigate to the Payment Processing page.</li>
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
                    Payment Processing Page
                </h2>
                <p className='text-gray-700 mb-3'>Navigation: After clicking "Generate Payment Link," proceed to the Payment Processing page.</p>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Remaining Time - </strong> Displays the remaining time to complete the transaction.</li>
                    <li><strong>Transaction Completion - </strong> Create the transaction within the allotted time.</li>
                    <li>
                        <ul className='list-disc mt-2 space-y-1'>
                            <li><strong>With Wallet Selected - </strong> If Alipay HK or Alipay CN is chosen, a QR code is displayed for scanning to process payment.</li>
                            <div className="py-6 flex flex-wrap gap-4 items-center justify-center">
                                <img src={M14} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                            </div>
                            <li><strong>Without Wallet - </strong> If no wallet is selected, use the provided payment link to complete the transaction.</li>
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