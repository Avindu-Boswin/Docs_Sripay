import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/auth_and_authorization.png';

function AuthenticationAndAuthorization() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Authentication' },
            { id: 'step-2', label: 'Authorization' },
            { id: 'step-3', label: 'Session Management' },
            { id: 'step-4', label: 'Security Best Practices' }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);


    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Authentication and Authorization
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect implements strong authentication and authorization
                measures to ensure secure access and protect sensitive user data. All
                requests to backend APIs are token‑based and validated before
                processing.
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Auth Service Architecture' />
                </Zoom>
            </div>

            <div id='step-1' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Authentication
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">JWT (JSON Web Tokens):</span> Stateless session management with tokens signed using RSA256 for strong cryptographic security.
                    </li>
                    <li>
                        <span className="font-semibold">OAuth 2.0:</span> Supports third‑party authentication (e.g., Google, Alipay) for merchants and admins.
                    </li>
                    <li>
                        <span className="font-semibold">Tokenization:</span> All sensitive data exchanges use tokenized payloads to prevent direct exposure of sensitive information
                    </li>
                    <li>
                        <span className="font-semibold">Token Validity</span>
                        <ul className='list-[circle] pl-6 mt-3'>
                            <li>Access tokens have a maximum lifetime of 1 hour</li>
                            <li>Refresh tokens are issued for longer validity and securely stored for renewing sessions without re‑authentication.</li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">AES‑256 Encryption:</span> All stored and transmitted sensitive data is encrypted with AES‑256‑CBC.
                    </li>
                </ul>
            </div>
            <div id='step-2' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Authorization
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Role‑Based Access Control (RBAC):</span> Roles include Admin, Merchant, Store Manager, and Viewer.

                    </li>
                    <li>
                        <span className="font-semibold">Policy Enforcement:</span> Middleware in Express.js checks JWT claims to validate role permissions before granting access to protected routes.
                    </li>
                </ul>
            </div>
            <div id='step-3' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Session Management
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Short‑lived access tokens (1 hour max) paired with refresh tokens for session continuity.
                    </li>
                    <li>
                        Secure HTTPS‑only cookies or encrypted local storage for token storage.
                    </li>
                    <li>
                        Automatic token invalidation upon logout, password change, or account deactivation.
                    </li>
                </ul>
            </div>
            <div id='step-4' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Security Best Practices
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        All API endpoints require valid JWT authentication before access.
                    </li>
                    <li>
                        Tokens are transmitted only over HTTPS to prevent interception.
                    </li>
                    <li>
                        Middleware logs and monitors failed authentication attempts for anomaly detection.
                    </li>
                    <li>
                        Rate limiting and IP throttling to mitigate brute force or token abuse attempts.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AuthenticationAndAuthorization;