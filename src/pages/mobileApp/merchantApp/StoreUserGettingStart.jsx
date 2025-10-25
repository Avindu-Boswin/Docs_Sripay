import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M46 from '../../../assets/images/merchant-app/m46.jpg';

function StoreUserMobileGettingStart() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Store User Overview
            </h1>

            <div id="overview" className='mt-8 mb-12'>

                <p className='text-gray-700 mb-4 mt-6'>
                    Store user can log in using store user account credentials through the same SriPay merchant app.
                </p>
                <p className='text-gray-700 mb-4'>
                    In the Store User account, merchants can select transaction types: In-Store, Online Store, or Card Payment.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M46} alt="store user transaction types" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default StoreUserMobileGettingStart;