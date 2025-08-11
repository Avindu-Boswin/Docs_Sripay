import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function MaintenanceAndSupport() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Maintenance and Support
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect provides comprehensive maintenance and support
                services to ensure system stability, optimal performance, and
                uninterrupted payment operations.
            </p>

            {/* ---------- Component Descriptions ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Updates:</span> Continuous delivery of security patches, bug fixes, and feature enhancements via the <span className="font-semibold">CI/CD pipeline</span>.
                    </li>
                    <li>
                        <span className="font-semibold">Monitoring: 24/7 real-time monitoring</span> with automated alerts for performance anomalies, security events, and service degradation.
                    </li>
                    <li>
                        <span className="font-semibold">Support:</span> Tiered support model (<span className="font-semibold">L1–L3</span>) available via <span className="font-semibold">email, phone</span>, for issue tracking and resolution.
                    </li>
                    <li>
                        <span className="font-semibold">Service Level Agreement (SLA): 99.9% uptime guarantee</span> with <span className="font-semibold">2-hour response times</span> for critical priority issues.
                    </li>
                    <li>
                        <span className="font-semibold">Documentation:</span> Comprehensive <span className="font-semibold">user guides, API documentation,</span> and <span className="font-semibold">administrative manuals</span> for merchants, admins, and developers.{' '}
                        <a
                            href="https://docs.sripay.lk/"
                            className="text-blue-600 underline hover:text-blue-800"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://docs.sripay.lk/
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MaintenanceAndSupport;