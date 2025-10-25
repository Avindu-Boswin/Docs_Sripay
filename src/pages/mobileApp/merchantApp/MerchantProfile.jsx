import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M30 from '../../../assets/images/merchant-app/m30.jpg';
import M31 from '../../../assets/images/merchant-app/m31.jpg';
import M32 from '../../../assets/images/merchant-app/m32.jpg';
import M33 from '../../../assets/images/merchant-app/m33.jpg';
import M34 from '../../../assets/images/merchant-app/m34.jpg';
import M35 from '../../../assets/images/merchant-app/m35.jpg';
import M36 from '../../../assets/images/merchant-app/m36.jpg';
import M37 from '../../../assets/images/merchant-app/m37.jpg';
import M38 from '../../../assets/images/merchant-app/m38.jpg';
import M39 from '../../../assets/images/merchant-app/m39.jpg';
import M40 from '../../../assets/images/merchant-app/m40.jpg';
import M41 from '../../../assets/images/merchant-app/m41.jpg';



function MerchantProfile() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: 'Overview' },
            { id: 'profile-management', label: 'Profile Management' },
            { id: 'kyc-verification', label: 'KYC Verification' },
            { id: 'store-users', label: 'Store Users' },
            { id: 'security-settings', label: 'Security Settings' },
            { id: 'log-out', label: 'Log Out' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Merchant Profile
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Overview
                </h2>
                <p className='text-gray-700 mb-4'>
                    The Profile section allows merchants to manage their account, verify KYC, manage store users,
                    and adjust security settings. Click the "Profile" button in the
                    navigation bar to access this section.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M32} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="profile-management" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Profile Management
                </h2>
                <p className='text-gray-700 mb-4'>
                    View and edit merchant data.
                </p>
                <p className='text-gray-700 mb-4'>
                    <strong>Editable Fields - </strong> Update personal details. (Email editing
                    is locked.) And save changes to update merchant profile
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M31} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="kyc-verification" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    KYC Verification
                </h2>
                <p className='text-gray-700 mb-4'>
                    Review KYC verification details. Check status and submitted documents in
                    this section.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M33} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="store-users" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Store Users
                </h2>
                <p className='text-gray-700 mb-4'>
                    <strong>Overview - </strong>View all store users associated with the merchant account.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M34} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>Store User Details - </strong>Click on a store user to view their details and edit their assigned outlets.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M35} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>Edit Store User - </strong>Use the separate "Edit" button to modify store user details and change outlet status (active/inactive).
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M36} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>Add Store User - </strong>Enter valid data (e.g., name, email) and click "Add User" to
                    create a new store user.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M37} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="security-settings" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Security Settings
                </h2>
                <p className='text-gray-700 mb-4'>
                    <strong>Overview - </strong>Manage password and passcode settings for enhanced account security.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M38} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>Reset Password - </strong>Enter current password and new password, then click "Reset
                    Password" to update your password.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M39} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>Void/Refund Passcode - </strong>First enter your password, then input a 4-digit
                    passcode. This passcode is used for refund and void transactions.
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M41} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="log-out" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Log Out
                </h2>
                <p className='text-gray-700 mb-4'>
                    Click "Log Out" to end the current session. Confirm the action to sign out and return to the login screen.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M40} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantProfile;