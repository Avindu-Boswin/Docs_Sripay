
import React from 'react';
import { useTranslation } from 'react-i18next';

function MerchantRegistrationSelf() {
    // No translation, just phrases from the screenshots
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TITLE & INTRO */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4'>Merchant Self Sign-Up</h1>
            <div className='text-base sm:text-lg md:text-xl text-gray-600 mb-6'>The Merchant Self Sign-Up feature allows Sub-Acquirers to enable their merchants to register independently using a dedicated, branded sign-up link. This simplifies the onboarding process by eliminating the need for manual merchant creation from the Sub-Acquirer dashboard.</div>

            {/* HOW TO GET STARTED */}
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>How to Get Started</h2>

            {/* Step 1 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 1: Send an Email Request</h3>
                <div className='mb-2'>To activate this feature, you must send a formal request to SriPay to enable <b>Merchant Self Sign-Up</b> for your Sub-Acquirer account.</div>
                <div className='bg-gray-50 border border-gray-200 rounded p-4 mb-2'>
                    <div><b>Email:</b> <span className='font-mono'>support@sripay.lk</span></div>
                    <div><b>Subject:</b> <span className='font-mono'>Request for Merchant Self Sign-Up Enablement</span></div>
                </div>
                <div className='mt-5 mb-5'>
                                    <span className="font-semibold text-gray-700">Include</span>

                </div>

                <div className='ml-2'>
                    <ul className='list-disc ml-6 text-gray-700 text-sm'>
                        <li>Your Sub-Acquirer Name and ID</li>
                        <li>Contact Person Details</li>
                        <li>Preferred branding details (optional – logo, color theme)</li>
                    </ul>
                </div>
            </div>

            {/* Step 2 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 2: SriPay Review &amp; Enablement</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    <li>SriPay will review your request and configure a <b>custom sign-up URL</b>.</li>
                    <li>The sign-up page will include your Sub-Acquirer’s name and branding colors.</li>
                    <li>You will be notified once the link is ready to be shared with merchants.</li>
                </ul>
            </div>

            {/* Step 4 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 3: Merchant Access &amp; KYC Submission</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    <li>Merchants can use the self-registration link to:
                        <ul className='list-disc ml-6'>
                            <li>Create their account</li>
                            <li>Submit KYC information</li>
                            <li>Upload required documents</li>
                        </ul>
                    </li>
                    <li>All submitted applications will appear under your <b>Sub-Acquirer Dashboard</b> for review.</li>
                </ul>
            </div>

            {/* Step 5 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 4: Proceed with Standard Evaluation Process</h3>
                <div className='text-gray-700 text-sm mb-2'>Once submitted, these merchants will follow the same approval flow:</div>
                <div className='font-semibold text-gray-700'>
                    <span>Sub-Acquirer Review &rarr; SriPay Review &rarr; Alipay Review &rarr; Activation</span>
                </div>
            </div>

            {/* Benefits */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Benefits of Merchant Self Sign-Up</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    <li>Saves time for Sub-Acquirers by reducing manual entry.</li>
                    <li>Enables merchants to take ownership of their onboarding.</li>
                    <li>Ensures faster scaling for large merchant acquisition campaigns.</li>
                    <li>Fully integrated into the existing evaluation and compliance workflow.</li>
                </ul>
                <div className='mt-3 text-xs text-gray-600'><b>Note:</b> All merchant data collected through the self-sign-up page is secure and traceable under your Sub-Acquirer ID.</div>
            </div>
        </div>
    );
}

export default MerchantRegistrationSelf;
