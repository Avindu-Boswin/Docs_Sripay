import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';

function AcqEndpoints() {
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
                    <p className='text-gray-700 text-base leading-relaxed mt-5'>
                        Facilitates secure, real‑time payment initiation, processing, and status tracking for in‑store transactions using Alipay+ QR technology. These APIs enable merchants to accept payments by scanning customer‑presented codes or generating merchant‑issued QR codes, while providing reliable mechanisms to query and monitor transaction outcomes.
                    </p>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2 mb-10">
                        <li>Order Code Pay QR</li>
                        <li>Order Code Result Listener</li>
                        <li>User Present Pay</li>
                        <li>User Present Pay Waiting</li>
                        <li>Instore Payment Inquiry</li>
                    </ol>
                </li>
                <li>
                    <span className="font-semibold">Alipay+ Online API</span>
                    <p className='text-gray-700 text-base leading-relaxed mt-5'>
                        Alipay+ Online API is a lightweight REST interface that plugs your website or any internet-facing app straight into the global Alipay+ wallet network. With a single endpoint you spin up a secure, branded payment link, redirect the buyer to Alipay+ checkout, and then get real-time callbacks for payment status, refunds, and settlement data with no additional gateway layers or region-specific code needed.
                    </p>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>Payment Link Create</li>
                        <li>Payment Inquiry</li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

export default AcqEndpoints;