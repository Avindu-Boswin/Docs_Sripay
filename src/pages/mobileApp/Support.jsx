import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function AppSupport() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: 'Overview' },
            { id: 'support-information', label: 'Support Information' },
            { id: 'office-address', label: 'Office Address' },
            { id: 'additional-support', label: 'Additional Support' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Contact
            </h1>

            <div id="overview" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Overview
                </h2>
                <p className='text-gray-700 mb-4'>
                    The Contact section provides support and assistance options for SriPay Merchant App users.
                </p>
            </div>

            <div id="support-information" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Support Information
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>Email - </strong>Reach out to support at <a className='text-blue-600 underline' href='mailto:info@sripay.lk'>info@sripay.lk</a> for general inquiries or technical issues.</li>
                    <li><strong>Phone - </strong>Contact the support team at <a className='text-blue-600 underline' href='tel:+94767035500'>+94 76 703 5500</a> (available during business hours: 9:00 AM - 5:00 PM SLST).</li>
                    <li><strong>Website - </strong>Visit <a className='text-blue-600 underline' href='https://sripay.lk'>sripay.lk</a> for FAQs, user guides, and additional resources.</li>
                </ul>
            </div>

            <div id="office-address" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Office Address
                </h2>
                <p className='text-gray-700 mb-4'>
                    No.12, Second lane, Beddagana Road, Pita Kotte, Sri Lanka.
                    <br />
                    <strong>Operating Hours - </strong>Monday to Friday, 9:00 AM - 5:00 PM SLST.
                </p>
            </div>

            <div id="additional-support" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Additional Support
                </h2>
                <p className='text-gray-700 mb-4'>
                    Submit feedback or report issues via the "Contact Us" form on <a className='text-blue-600 underline' href='https://sripay.lk/contact'>sripay.lk</a>.
                </p>
            </div>
        </div>
    );
}

export default AppSupport;
