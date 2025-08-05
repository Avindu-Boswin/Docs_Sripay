import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function SystemIntroduction() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Introduction' },
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Introduction
            </h1>


            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect is a cloud-based payment Enterprise Resource Planning
                (ERP) application designed to facilitate seamless international and local
                digital payments through Alipay+ (online and offline) for merchants,
                bridging global customers with businesses in Sri Lanka and beyond. This
                System Architecture Report is prepared for banking partners to provide a
                comprehensive overview of SriPay Connect technical architecture,
                security measures, integration capabilities, and operational resilience to
                support secure and scalable payment processing.
            </p>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect serves a diverse audience, including merchants, financial
                institutions, and payment service providers, offering robust features such
                as merchant management, store management, transaction
                management, settlement, and detailed transaction reporting. Built with
                modern technologies and hosted on a secure cloud infrastructure, the
                application ensures high availability, compliance, and customization to
                meet branding requirements.
            </p>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                This document outlines the systems architecture, detailing frontend and
                backend components, database design, security protocols, API
                integrations, compliance, and ensuring transparency and confidence for
                banking partners seeking integration.
            </p>
        </div>
    )
}

export default SystemIntroduction;