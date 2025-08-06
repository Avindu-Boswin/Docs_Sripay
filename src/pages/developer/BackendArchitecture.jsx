import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/backend_architecture.png';

function BackendArchitecture() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Backend Architecture
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                The backend is built with Express.js, a lightweight Node.js framework,
                configured with clustering to utilize multi‑core systems for high
                throughput. It follows a microservices‑inspired design, with modular
                services for transaction processing, merchant management, and
                third‑party integrations.
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Backend Architecture' />
                </Zoom>
            </div>

            {/* ---------- Architecture Feature List ------------------------------------------------ */}
            <div className="mt-8 mb-6">
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Framework:</span>  Express.js for RESTful API development, with middleware for logging, error handling, and rate limiting.
                    </li>
                    <li>
                        <span className="font-semibold">Clustering:</span> Node.js Cluster module to distribute workloads across CPU cores, ensuring scalability and improved performance.
                    </li>
                    <li>
                        <span className="font-semibold">API Design:</span> RESTful endpoints with JSON payloads, documented via OpenAPI/Swagger for clarity and developer adoption.
                    </li>
                    <li>
                        <span className="font-semibold">Integration Layer:</span> Dedicated service modules for Alipay+ online/offline payment processing and Google Analytics tracking.
                    </li>
                    <li>
                        <span className="font-semibold">Error Handling:</span> Centralized error management with custom error codes, structured responses, and integrated logging for monitoring and troubleshooting.
                    </li>
                    <li>
                        <span className="font-semibold">Scalability:</span> Supports horizontal scaling via containerization (Docker) and orchestration (Kubernetes).
                    </li>
                    <li>
                        <span className="font-semibold">Monitoring:</span>  Integrated with logging frameworks (GCP Log) and performance monitoring tools for proactive system health tracking.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BackendArchitecture;