import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/deployment_and_infrastructure.png';

function DeploymentAndInfrastructure() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Hosting & Compute' },
            { id: 'step-2', label: 'Notification Services' },
            { id: 'step-3', label: 'Backup & Disaster Recovery' },
            { id: 'step-4', label: 'Scaling & Performance Optimization' },
            { id: 'step-5', label: 'Monitoring & Alerts' }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Deployment & Infrastructure
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect is deployed on a multi‑cloud architecture primarily
                leveraging Google Cloud Platform (GCP) with a separate server for
                notifications, ensuring high availability, scalability, and redundancy
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Web App Architecture' />
                </Zoom>
            </div>

            <div id='step-1' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Hosting & Compute
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        GCP Cloud Run for containerized Express.js backend services, enabling serverless scaling and efficient resource utilization.
                    </li>
                    <li>
                        GCP Firebase Hosting for serving static React.js frontend assets with global CDN delivery.
                    </li>
                    <li>
                        Firestore and Realtime Database hosted in US‑Central1 for low‑latency access.
                    </li>
                </ul>
            </div>

            <div id='step-2' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Notification Services
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Separate Server for high‑throughput SMS and email notifications.
                    </li>
                    <li>
                        Integrated with backend services for transactional and alert messages.
                    </li>
                </ul>
            </div>

            <div id='step-3' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Backup & Disaster Recovery
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        GCP Compute Engine instances for scheduled SQL backups and recovery operations.
                    </li>
                    <li>
                        Daily Firestore and Realtime Database backups to secondary GCP regions for redundancy.
                    </li>
                </ul>
            </div>

            <div id='step-4' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Scaling & Performance Optimization
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Auto‑scaling policies for Cloud Run triggered by CPU and memory utilization thresholds.
                    </li>
                    <li>
                        Optimized cold start performance for backend services.
                    </li>
                </ul>
            </div>

            <div id='step-5' className="mt-8 mb-6">
                <p className='text-xl md:text-2xl font-bold text-gray-700 mb-8'>
                    Monitoring & Alerts
                </p>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        Google Cloud Monitoring for real‑time performance tracking and uptime checks.
                    </li>
                    <li>
                        Automated alerts for anomalies, latency spikes, or failed deployments.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DeploymentAndInfrastructure;