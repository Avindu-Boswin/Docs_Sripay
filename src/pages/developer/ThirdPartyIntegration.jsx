import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function ThirdPartyIntegration() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Third-Party Integrations
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect leverages trusted third‑party services to extend its
                capabilities and deliver a seamless payment and management
                experience.
            </p>

            <div id='step-1' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Alipay+
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Supports online and offline payment methods, including QR code scanning and mobile wallet transactions.
                    </li>
                    <li>
                        Fully integrated via Alipay+ SDKs and APIs for secure transaction processing, settlement, and reconciliation
                    </li>
                </ul>
            </div>

            <div id='step-2' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    SMS Gateway
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Powers transaction alerts, multi‑factor authentication (MFA), and critical merchant communications.
                    </li>
                    <li>
                        Supports configurable notification templates for branding and personalized messaging.
                    </li>
                </ul>
            </div>

            <div id='step-3' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Google Analytics
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Tracks user interactions, transaction funnels, and merchant engagement metrics.
                    </li>
                    <li>
                        Integrated via Google Tag Manager for advanced frontend analytics and event tracking.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ThirdPartyIntegration;