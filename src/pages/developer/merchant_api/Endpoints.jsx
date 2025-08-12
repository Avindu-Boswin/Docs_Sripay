import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';

function MerchantEndpoints() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Endpoints
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect provides the following API endpoints, enabling acquirers to seamlessly integrate with their Web, POS systems or other payment platforms.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                <li>
                    <span className="font-semibold">Alipay+ Instore API</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>Order Code Pay QR</li>
                        <li>Order Code Result Listener</li>
                        <li>User Present Pay</li>
                        <li>User Present Pay Waiting</li>
                        <li>Void Transactions</li>
                        <li>Instore Payment Inquiry</li>
                        <li>Instore Not Settled Latest Transactions</li>
                    </ol>
                </li>
                <li>
                    <span className="font-semibold">Merchant Web Frame for Online Payment</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>Payment Request</li>
                    </ol>
                </li>
                <li>
                    <span className="font-semibold">Alipay+ Online API</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>Payment Link Create</li>
                        <li>Payment Inquiry</li>
                    </ol>
                </li>
                <li>
                    <span className="font-semibold">Card Payments For Online (Visa, Mastercard, Union Pay)</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>Payment Link Create</li>
                        <li>Payment Inquiry</li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

export default MerchantEndpoints;