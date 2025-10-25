import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M43 from '../../../assets/images/merchant-app/m43.jpg';
import M44 from '../../../assets/images/merchant-app/m44.jpg';
import M45 from '../../../assets/images/merchant-app/m45.jpg';

function MerchantStores() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: 'Overview' },
            { id: 'view-details', label: 'View Details' },
            { id: 'qr-actions', label: 'QR Code Actions' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Stores
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Overview
                </h2>
                <p className='text-gray-700 mb-4'>
                    The Stores section allows merchants to manage and view their store details.
                    Click the "Store" tab in the navigation bar to view your stores.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M43} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <div id="view-details">
                    <p className='text-gray-700 mb-4'>
                        Click <strong>"View Details"</strong> to see store-specific information.
                    </p>
                    <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M44} alt="store details example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                <div id="qr-actions">
                    <p className='text-gray-700 mb-4'>
                        <strong>QR Code Actions</strong>
                    </p>

                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>View QR Code - </strong>Display the store's QR code for payment purposes.</li>
                        <li><strong>Download QR Code - </strong>Option to download the QR code.</li>
                        <li><strong>Share QR Code - </strong>Option to share the QR code with others.</li>
                    </ul>
                    <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M45} alt="store qr example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchantStores;