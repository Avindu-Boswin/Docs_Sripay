import React from 'react';
import { useTranslation } from 'react-i18next';

function DevGettingStart() {
  const { t } = useTranslation();

  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        What is SriPay Developer Documentation?
      </h1>


      <div className='space-y-6 text-gray-700 leading-relaxed'>
        <p className='text-gray-600'>
          SriPay Developer Documentation is a comprehensive guide designed to help developers integrate and utilize SriPay's payment solutions effectively. It provides detailed information on API endpoints, authentication methods, and best practices for building applications with SriPay.
        </p>
        <p>
          SriPay Connect is Built on a modern tech stack including React.js with Tailwind CSS and Ant Design for the frontend, Express.js with clustering for the backend, and Google Cloud Platform infrastructure, SriPay Connect offers robust payment processing capabilities. The system utilizes Firestore for structured data storage and Realtime Database for live transaction updates, ensuring optimal performance and scalability.
        </p>

        <p>
          Our platform provides comprehensive merchant management, store management, transaction processing, settlement handling, and detailed reporting capabilities. Security is paramount with JWT/OAuth 2.0 authentication, AES-256-CBC encryption, RSA2-signed communications with Alipay+, and full PCI DSS compliance through tokenization.
        </p>

        <p>
          The documentation covers system architecture, mobile Flutter applications with Firebase Cloud Messaging, RESTful API endpoints, third-party integrations including SMS gateways and Google Analytics, deployment on GCP Cloud Run, and comprehensive maintenance and support procedures with 99.9% uptime SLA and tiered L1-L3 support.
        </p>

        <p>
          Access detailed technical specifications, integration guides, and developer resources at{' '}
          <a
            href="https://docs.sripay.lk/"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs.sripay.lk
          </a>
          {' '}to get started with SriPay Connect integration.
        </p>
      </div>
    </div>
  );
}

export default DevGettingStart;
