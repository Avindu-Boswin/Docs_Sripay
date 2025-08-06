import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function ComplianceAndPrivacy() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Compliance and Privacy
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect adheres to global and local regulations to ensure
                compliance, protect user privacy, and maintain trust with merchants and
                customers.
            </p>

            {/* ---------- Component Descriptions ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">PCI DSS:</span> Fully compliant with <span className="font-semibold">Level 1</span> payment processing requirements, leveraging <span className="font-semibold">Alipay+ tokenization</span> to minimize PCI scope.
                    </li>
                    <li>
                        <span className="font-semibold">GDPR:</span> Complies with EU <span className="font-semibold">General Data Protection Regulation</span> standards, including <span className="font-semibold">data minimization</span>, explicit <span className="font-semibold">user consent</span>, and <span className="font-semibold">right-to-erasure</span> practices.
                    </li>
                    <li>
                        <span className="font-semibold">Local Regulations:</span> Meets all <span className="font-semibold">Sri Lankan financial regulations</span> and <span className="font-semibold">Central Bank of Sri Lanka guidelines</span> for payment service providers.
                    </li>
                    <li>
                        <span className="font-semibold">Privacy Policy:</span> Transparent policies outlining <span className="font-semibold">data collection, usage, retention,</span> and <span className="font-semibold">sharing</span> practices.{' '}
                        <a
                            href="https://sripay.lk/privacy-policy"
                            className="text-blue-600 underline hover:text-blue-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Privacy Policy
                        </a>
                    </li>
                    <li>
                        <span className="font-semibold">Terms & Conditions:</span> Clearly defines service usage rules, merchant obligations, and dispute resolution procedures.{' '}
                        <a
                            href="https://sripay.lk/terms-conditions"
                            className="text-blue-600 underline hover:text-blue-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Terms & Conditions
                        </a>
                    </li>
                    <li>
                        <span className="font-semibold">Audits:</span> Regular <span className="font-semibold">third-party compliance audits</span> to verify adherence to regulatory and security standards.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ComplianceAndPrivacy;