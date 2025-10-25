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
            { id: 'overview', label: t('merchantProfile.sections.overview') },
            { id: 'profile-management', label: t('merchantProfile.sections.profileManagement') },
            { id: 'kyc-verification', label: t('merchantProfile.sections.kycVerification') },
            { id: 'store-users', label: t('merchantProfile.sections.storeUsers') },
            { id: 'security-settings', label: t('merchantProfile.sections.securitySettings') },
            { id: 'log-out', label: t('merchantProfile.sections.logOut') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantProfile.title')}
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.overview.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantProfile.overview.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M32} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="profile-management" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.profileManagement.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantProfile.profileManagement.description')}
                </p>
                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.profileManagement.editableFields')}</strong>{t('merchantProfile.profileManagement.editableFieldsDesc')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M31} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="kyc-verification" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.kycVerification.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantProfile.kycVerification.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M33} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="store-users" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.storeUsers.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.storeUsers.overview.title')} - </strong>{t('merchantProfile.storeUsers.overview.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M34} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.storeUsers.viewDetails.title')} - </strong>{t('merchantProfile.storeUsers.viewDetails.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M35} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.storeUsers.editUser.title')} - </strong>{t('merchantProfile.storeUsers.editUser.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M36} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.storeUsers.addUser.title')} - </strong>{t('merchantProfile.storeUsers.addUser.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M37} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="security-settings" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.securitySettings.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.securitySettings.overview.title')} - </strong>{t('merchantProfile.securitySettings.overview.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M38} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.securitySettings.passwordChange.title')} - </strong>{t('merchantProfile.securitySettings.passwordChange.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M39} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <p className='text-gray-700 mb-4'>
                    <strong>{t('merchantProfile.securitySettings.passcodeChange.title')} - </strong>{t('merchantProfile.securitySettings.passcodeChange.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M41} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="log-out" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantProfile.logOut.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantProfile.logOut.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M40} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantProfile;