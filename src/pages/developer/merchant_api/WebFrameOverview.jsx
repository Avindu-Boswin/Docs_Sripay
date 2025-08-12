import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';


import Img1 from '../../../assets/images/developer/mer_webframe.png';

function WebFrameOverview() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Merchant Web Frame for Online Payment' },
            { id: 'step-2', label: 'Overview' },
            { id: 'step-3', label: 'Key Features' },
            { id: 'step-4', label: 'Merchant Benefits' }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Merchant Web Frame for Online Payment
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                The SriPay Connect Merchant Web Frame is a unified, secure, and responsive payment
                interface designed to simplify the online payment experience for merchants and
                customers alike. This dynamic payment frame aggregates multiple payment options into
                a single integration, reducing complexity and accelerating time-to-market.
            </p>

            {/* ---------- Overview ------------------------------------------------ */}
            <div id='step-2' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Overview
                </h4>
                <p className='text-gray-700 text-base leading-relaxed mb-8'>
                    Merchants can integrate a single API endpoint into their website or web store to enable a
                    complete suite of online payment methods without the need for multiple gateways or
                    configurations.
                </p>
                <Zoom>
                    <img src={Img1} alt="Merchant Web Frame Overview" />
                </Zoom>
            </div>

            {/* ---------- Key Features ------------------------------------------------ */}
            <div id='step-3' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Key Features
                </h4>
                
                <ul className='list-disc pl-6 mb-8 text-gray-800 space-y-4'>
                    <li>
                        <span className='font-semibold'>One Integration. All Payments.</span>
                        <p className='text-gray-700 text-base leading-relaxed mt-2'>
                            Supports a wide range of payment methods including <span className='text-blue-600 font-medium'>Visa, Mastercard, UnionPay, and Alipay+ Online</span>. <span className='text-blue-600 font-medium'>USDT (crypto)</span> via a <span className='font-semibold'>single endpoint</span>.
                        </p>
                    </li>
                    
                    <li>
                        <span className='font-semibold'>Multi-Currency Support</span>
                        <p className='text-gray-700 text-base leading-relaxed mt-2'>
                            Accepts payments in both <span className='font-semibold'>LKR and USD</span>.
                        </p>
                        <p className='text-gray-700 text-base leading-relaxed mt-1'>
                            <span className='font-semibold'>Note:</span> <span className='italic'>Alipay+ Online is available for USD transactions only</span>.
                        </p>
                    </li>
                    
                    <li>
                        <span className='font-semibold'>Real-Time Transaction Updates</span>
                        <p className='text-gray-700 text-base leading-relaxed mt-2'>
                            Customers receive instant <span className='font-semibold'>SMS notifications upon successful payments</span>, enhancing transparency and trust.
                        </p>
                    </li>
                    
                    <li>
                        <span className='font-semibold'>Secure & Compliant</span>
                        <p className='text-gray-700 text-base leading-relaxed mt-2'>
                            Built on <span className='font-semibold text-blue-600'>PCI DSS Level 1</span> infrastructure with tokenization and end-to-end encryption, ensuring the highest level of data security.
                        </p>
                    </li>
                    
                    <li>
                        <span className='font-semibold'>Responsive by Design</span>
                        <p className='text-gray-700 text-base leading-relaxed mt-2'>
                            Fully mobile optimized to ensure smooth checkout experiences across devices.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ---------- Merchant Benefits ------------------------------------------------ */}
            <div id='step-4' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Merchant Benefits
                </h4>
                
                <ul className='list-disc pl-6 mb-8 text-gray-800 space-y-3'>
                    <li>Reduce integration overhead and developer workload</li>
                    <li>Faster onboarding and deployment</li>
                    <li>Centralized reconciliation and reporting</li>
                    <li>Lower maintenance with unified backend architecture</li>
                    <li>Future-ready with support for upcoming payment methods</li>
                </ul>
            </div>

            
        </div>
    )
}

export default WebFrameOverview;