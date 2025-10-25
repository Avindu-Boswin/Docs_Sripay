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
            { id: 'overview', label: 'Overview' },
            { id: 'transaction-types', label: 'Transaction Types' },
            { id: 'transaction-setup', label: 'Transaction Setup' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Transactions
            </h1>

            {/* OVERVIEW SECTION */}
            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-6 font-semibold text-gray-700'>
                    Overview
                </h2>
                <p className='text-gray-700 text-base leading-relaxed mb-6'>
                    The Transactions section of the SriPay Merchant App is designed for merchants in physical stores to manage payment activities efficiently.
                </p>
                <p className='text-gray-700 text-md'>
                    <strong>Navigation - </strong> Access the Transaction page by clicking the center button on the navigation bar.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M1} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
            {/* TRANSACTION TYPES SECTION */}
            <div id="transaction-types" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Types
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>In-Store Transaction - </strong> Process payments made directly at your physical outlet using QR codes or other supported methods.
                    </li>
                    <li>
                        <strong>Online Store Transaction - </strong> Handle payments received through your online store via integrated payment gateways.
                    </li>
                    <li>
                        <strong>Card Payment Transaction - </strong> Manage transactions processed through credit or debit card payments.
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M2} alt="transaction types example 2" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* TRANSACTION SETUP SECTION */}
            <div id="transaction-setup" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Transaction Setup
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>Outlet Selection - </strong> Choose your outlet from a dropdown menu listing available locations.
                    </li>
                    <li>
                        <strong>Terminal Selection - </strong> Select the terminal device from a dropdown menu for transaction processing.
                    </li>
                    <li>
                        <strong>Purpose of Payment - </strong> Specify the payment purpose using a dropdown menu.
                    </li>
                    <li>
                        <strong>Next Button - </strong> Click "Next" to proceed to the payment method selection page.
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