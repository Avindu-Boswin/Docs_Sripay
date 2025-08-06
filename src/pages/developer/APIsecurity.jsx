import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/api_security.png';

function APISecurity() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Authentication & Authorization' },
            { id: 'step-2', label: 'Rate Limiting & Abuse Prevention' },
            { id: 'step-3', label: 'CORS & Domain Restrictions' },
            { id: 'step-4', label: 'Input Validation & Sanitization' },
            { id: 'step-5', label: 'API Gateway & Monitoring' },
            { id: 'step-6', label: 'Logging & Audit Trails' }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                API Security
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect’s RESTful APIs are protected with multi‑layered security
                measures to prevent unauthorized access, safeguard sensitive data, and
                maintain system integrity.
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Web App Architecture' />
                </Zoom>
            </div>

            <div id='step-1' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Authentication & Authorization
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        All API endpoints require JWT And Accesskey tokens for access
                    </li>
                    <li>
                        Token claims are validated via Express.js middleware before processing requests.
                    </li>
                </ul>
            </div>

            <div id='step-2' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Rate Limiting & Abuse Prevention
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Rate limiting implemented with Express.js middleware to control request frequency and mitigate abuse.
                    </li>
                    <li>
                        IP throttling for repeated failed authentication attempts.
                    </li>
                </ul>
            </div>

            <div id='step-3' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    CORS & Domain Restrictions
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Strict Cross‑Origin Resource Sharing (CORS) rules to allow access only from trusted domains.
                    </li>
                    <li>
                        Preflight checks enforce origin, method, and header restrictions.
                    </li>
                </ul>
            </div>

            <div id='step-4' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Input Validation & Sanitization
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        All incoming data is validated and sanitized using libraries like Joi to prevent injection attacks.
                    </li>
                    <li>
                        Protection against SQL injection, XSS, and malformed JSON payloads.
                    </li>
                </ul>
            </div>

            <div id='step-5' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    API Gateway & Monitoring
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Google Cloud API Gateway for additional security, traffic routing, and monitoring
                    </li>
                    <li>
                        Integration with Google Cloud Monitoring & Logging for real‑time tracking of API activity.
                    </li>
                </ul>
            </div>

            <div id='step-6' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Logging & Audit Trails
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        All API requests logged for auditing and debugging, with sensitive data excluded from logs.
                    </li>
                    <li>
                        Logs retained per compliance requirements for forensic analysis.
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default APISecurity;