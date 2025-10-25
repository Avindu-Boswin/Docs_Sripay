import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M4 from '../../../assets/images/merchant-app/m4.jpg';
import M5 from '../../../assets/images/merchant-app/m5.jpg';
import M6 from '../../../assets/images/merchant-app/m6.jpg';
import M7 from '../../../assets/images/merchant-app/m7.jpg';
import M8 from '../../../assets/images/merchant-app/m8.jpg';
import M9 from '../../../assets/images/merchant-app/m9.jpg';
import M10 from '../../../assets/images/merchant-app/m10.jpg';


function MerchantMobileMerchantInstoreTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'payment-method-selection', label: 'Payment Method Selection' },
            { id: 'alipay-payment-method', label: 'Alipay Payment Method' },
            { id: 'qr-scanner', label: 'QR Scan Payment Method' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                In-Store Transactions
            </h1>

            <div id="payment-method-selection" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Payment Method Selection
                </h2>

                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    After clicking "Next" from in-store transaction page navigate to the Select Payment Method page.
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>Options</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>Alipay - </strong> Select to process payment via Alipay integration.
                    </li>
                    <li>
                        <strong>QR Scanner - </strong> Choose to scan a customer's QR code for payment.
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M4} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* ALIPAY PAYMENT METHOD */}
            <div id="alipay-payment-method" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Alipay Payment Method
                </h2>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M5} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                {/* Order Value Section */}
                <div id="order-value" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>Order Value Section</h3>
                    <p className='text-gray-700 mb-3'>
                        Navigating to the Order Value section after selecting Alipay.
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>Currency Selection - </strong> Choose currency from a dropdown menu (LKR or USD).</li>
                        <li><strong>Transaction Amount - </strong> Enter the payment amount manually.</li>
                        <li><strong>Process to Payment Button - </strong> The "Process to Payment" button becomes enabled after entering the amount.</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M6} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                {/* Payment QR Code Section */}
                <div id="payment-qr" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>Payment QR Code Section</h3>
                    <p className='text-gray-700 mb-3'>
                        Clicking "Process to Payment" navigates to the Payment QR Code section.
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>QR Code Scanning - </strong> Scan the generated QR code to complete the payment.</li>
                        <li><strong>Cancel Payment - </strong> Use the "Cancel" button to abort the transaction.</li>
                        <li><strong>Share Payment Link - </strong> Use the relevant button to share the payment link with the customer.</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M7} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

            </div>


            {/* QR SCANNER */}
            <div id="qr-scanner" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    QR Scanner
                </h2>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M8} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                {/* QR Order Value Page */}
                <div id="qr-order-value" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>QR Order Value Page</h3>
                    <p className='text-gray-700 mb-3'>
                        Navigation: Selecting QR Scanner navigates to the QR Order Value page.
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>Currency Selection - </strong> Choose currency from a dropdown menu (LKR or USD).</li>
                        <li><strong>Amount Entry - </strong> Enter the transaction amount manually.</li>
                        <li><strong>Scan QR Code Button - </strong> The "Scan QR Code" button becomes enabled after entering the amount.</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M9} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                {/* Payment Processing */}
                <div id="qr-processing" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>Payment Processing</h3>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>Scanning - </strong> Use the "Scan QR Code" button to scan the customer's QR code and process the payment.</li>
                        <li><strong>Success Message - </strong> Upon successful payment, a "Payment Successful" message is displayed.</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M10} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MerchantMobileMerchantInstoreTransactions;