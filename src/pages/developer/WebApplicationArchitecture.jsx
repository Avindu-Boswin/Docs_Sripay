import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import Img1 from '../../assets/images/developer/web_architecture.png';

function WebApplicationArchitecture() {
    const { t } = useTranslation();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
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
                <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='System Architecture Overview' />
            </div>
        </div>
    )
}

export default WebApplicationArchitecture;