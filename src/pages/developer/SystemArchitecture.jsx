import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';


import Img1 from '../../assets/images/developer/system_architecture_overview.png';

function SystemArchitecture() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Overview' },
            { id: 'step-2', label: 'System Diagram' },
            { id: 'step-3', label: 'Component Descriptions' },
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                System Architecture Overview
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect is engineered as a cloud-native, modular platform that
                combines a microservices-driven backend, a responsive web/mobile
                frontend, and hardened database infrastructure. It natively integrates
                Alipay+ for both online and offline payments, while plug-in connectors
                handle notifications, analytics, and other third-party services. Open,
                RESTful APIs ensure effortless extensibility across partners.

            </p>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                Security and observability are woven throughout the stack: JWT/OAuth 2.0
                for auth, AES-256-CBC secrets managed via GCP KMS, RSA2-signed calls
                to Alipay+, plus centralised logging and distributed tracing for
                end-to-end visibility and rapid incident response.
            </p>

            {/* ---------- System Diagram ------------------------------------------------ */}
            <div id='step-2' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    System Diagram
                </h4>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='System Architecture Overview' />
                </Zoom>
            </div>

            {/* ---------- Component Descriptions ------------------------------------------------ */}
            <div id='step-3' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Component Descriptions
                </h4>
                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Web Application</span>: Built with React.js, Tailwind CSS, and Ant Design (AntD) for a responsive, customizable user interface supporting merchant and store management, transaction reporting, settlement and different user roles.
                    </li>
                    <li>
                        <span className="font-semibold">Mobile Application</span>: Built with Flutter (Dart) using Material 3, integrates Firebase Cloud Messaging for push alerts, and delivers merchant & store management, transaction reporting, settlement, and role-based access all in one cross-platform app.
                    </li>
                    <li>
                        <span className="font-semibold">Back-End Server</span>: Powered by Express.js with clustering for scalability, handling business logic, API orchestration, and integrations.
                    </li>
                    <li>
                        <span className="font-semibold">Database</span>: Firestore for structured data and Realtime Database for realtime transaction updates, with daily JSON backups for recovery.
                    </li>
                    <li>
                        <span className="font-semibold">Notification Server</span>: Node.js Express server hosted on GCP, handling SMS and email notifications.
                    </li>
                    <li>
                        <span className="font-semibold">Open Sea API Server</span>: Built on Express.js with clustering for high performance and scalability, responsible for executing core business logic, orchestrating APIs, and managing integrations with external services.
                    </li>
                    <li>
                        <span className="font-semibold">Security Layer</span>: JWT and OAuth for secure authentication, along with AES encryption and tokenization to protect sensitive data, ensuring confidentiality, integrity, and compliance with industry security standards.
                    </li>
                    <li>
                        <span className="font-semibold">Backup DB</span>: A separate Firestore database dedicated to storing JSON backups, ensuring data redundancy, disaster recovery readiness, and long-term archival of critical information.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default SystemArchitecture;