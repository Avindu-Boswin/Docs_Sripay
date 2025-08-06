import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/web_architecture.png';

function WebApplicationArchitecture() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Web Application Architecture
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                The frontend of SriPay Connect is Web application developed using
                React.js, styled with Tailwind CSS for utility first styling, and enhanced with
                Ant Design (AntD) for consistent, enterprise-grade UI components. The
                architecture emphasizes modularity, performance, and customization to
                support branding requirements.
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Web App Architecture' />
                </Zoom>
            </div>

             {/* ---------- Architecture Feature List ------------------------------------------------ */}
            <div className="mt-8 mb-6">
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Framework:</span> React.js for component-based development, enabling reusable UI elements.
                    </li>
                    <li>
                        <span className="font-semibold">Styling:</span> Tailwind CSS for rapid, responsive design. AntD for pre-built components like tables, forms, and modals.
                    </li>
                    <li>
                        <span className="font-semibold">State Management:</span> React Context API and Redux for managing application state, ensuring seamless updates for transaction and merchant data.
                    </li>
                    <li>
                        <span className="font-semibold">Routing:</span> React Router for navigation across modules (e.g., Merchant Management, Transaction Reports).
                    </li>
                    <li>
                        <span className="font-semibold">Customization:</span> Supports white-labeling, allowing merchants to customize UI elements (logos, colors, themes) while retaining Powered by SriPay branding.
                    </li>
                    <li>
                        <span className="font-semibold">Performance:</span> Lazy loading, code splitting, and optimized asset delivery via Webpack.
                    </li>
                    <li>
                        <span className="font-semibold">Accessibility:</span> Adheres to WCAG 2.1 standards for inclusive access.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WebApplicationArchitecture;