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
            { id: 'payment-method-selection', label: 'Payment Process' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div id="payment-method-selection" className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                In-Store Transactions
            </h1>

            <div className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Payment Process
                </h2>

                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    Choose between Alipay Plus or Alipay QR Scan.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M47} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div className='mt-8 mb-12'>
                <p className='text-gray-700 mb-2'><strong>Amount Entry - </strong>Enter the amount in USD or LKR.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M48} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>Select Store Details - </strong>Select the store, terminal, and purpose of payment from the dropdowns.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M49} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>Next Button - </strong>Click <strong>"Next"</strong> to proceed.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M50} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'>
                    For Alipay Plus, scan the QR code and confirm the payment.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M51} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'>
                    For Alipay QR Scan, scan the QR code and confirm the payment.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M52} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>



        </div>
    );
}

export default MerchantMobileStoreUserInstoreTransactions;