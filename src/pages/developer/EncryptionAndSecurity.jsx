import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/encryption_and_security.png';

function EncryptionAndSecurity() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
            setSections([
                { id: 'step-1', label: 'Data in Transit' },
                { id: 'step-2', label: 'Data at Rest' },
                { id: 'step-3', label: 'Tokenization' },
                { id: 'step-4', label: 'Security Audits & Monitoring' },
                { id: 'step-5', label: 'Network & Application Protection' }
            ]);
            return () => setSections([]);
            // eslint-disable-next-line
        }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Encryption and Security
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect prioritizes data security by implementing
                industry‑standard encryption, secure communication protocols, and
                multi‑layered protection mechanisms.
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Web App Architecture' />
                </Zoom>
            </div>

            <div id='step-1' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Data in Transit
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        All communications use HTTPS with TLS 1.3 for maximum security and forward secrecy.                    
                    </li>
                    <li>
                        RSA256 for digital signatures and asymmetric encryption.
                    </li>
                    <li>
                        SHA‑256 and MD5 (where legacy compatibility is required) for hashing and integrity checks.
                    </li>
                </ul>
            </div>

            <div id='step-2' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Data at Rest
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        AES‑256‑CBC encryption for sensitive fields stored in Firestore databases.
                    </li>
                    <li>
                        Google Cloud’s default encryption for Firestore and Realtime Database.
                    </li>
                    <li>
                        Encrypted backups for Firestore archives.
                    </li>
                </ul>
            </div>

            <div id='step-3' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Tokenization
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Sensitive payment data is tokenized using Alipay+ APIs, minimizing PCI DSS compliance scope.
                    </li>
                    <li>
                        Tokenized values are stored instead of raw payment data, reducing risk in the event of a breach.
                    </li>
                </ul>
            </div>

            <div id='step-4' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Security Audits & Monitoring
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Regular penetration testing and vulnerability scanning to detect and fix weaknesses.
                    </li>
                    <li>
                        Centralized logging and monitoring for detecting suspicious activity.
                    </li>
                </ul>
            </div>

            <div id='step-5' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Network & Application Protection
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Web Application Firewall (WAF) to block DDoS attacks, SQL injection, and cross‑site scripting (XSS).
                    </li>
                    <li>
                        IP allowlisting and geofencing for sensitive admin endpoints.
                    </li>
                    <li>
                        Rate limiting to prevent abuse of public APIs.
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default EncryptionAndSecurity;