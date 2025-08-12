import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function CardPaymentOverview() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Card Payments For Online (Visa, Mastercard, Union Pay)
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect offers seamless online card payment acceptance through a unified
                interface, enabling merchants to accept Visa, Mastercard, UnionPay, and American
                Express (Amex) cards with a single integration.
            </p>

            {/* ---------- Overview ------------------------------------------------ */}
            <div id='step-2' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Overview
                </h4>
                <p className='text-gray-700 text-base leading-relaxed mb-8'>
                    Our online card payment solution is designed for high performance, security, and
                    flexibility, supporting both LKR and USD currencies. With built-in compliance and fraud
                    protection, merchants can confidently offer card payments to local and international
                    customers.
                </p>
            </div>
        </div>
    )
}

export default CardPaymentOverview;