import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M63 from '../../../assets/images/merchant-app/m63.jpg';
import M64 from '../../../assets/images/merchant-app/m64.jpg';
import M65 from '../../../assets/images/merchant-app/m65.jpg';
import M66 from '../../../assets/images/merchant-app/m66.jpg';
import M67 from '../../../assets/images/merchant-app/m67.jpg';
import M68 from '../../../assets/images/merchant-app/m68.jpg';
import M69 from '../../../assets/images/merchant-app/m69.jpg';
import M70 from '../../../assets/images/merchant-app/m70.jpg';

function StoreUserProfile() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: t('storeUserProfile.sections.overview') },
            { id: 'profile-management', label: t('storeUserProfile.sections.profileManagement') },
            { id: 'reset-passcode', label: t('storeUserProfile.sections.resetPasscode') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('storeUserProfile.title')}
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('storeUserProfile.sections.overview')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('storeUserProfile.overview.description')}
                </p>
                <p className='text-gray-700 mb-4'>
                    {t('storeUserProfile.overview.navigation')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M63} alt="Store user profile interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="profile-management" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('storeUserProfile.sections.profileManagement')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('storeUserProfile.profileManagement.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M64} alt="Store user profile management" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M65} alt="Store user profile interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M66} alt="Store user profile interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M67} alt="Store user profile interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M68} alt="Store user profile interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            <div id="reset-passcode" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('storeUserProfile.sections.resetPasscode')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('storeUserProfile.resetPasscode.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M69} alt="Reset passcode interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M70} alt="Reset passcode interface" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default StoreUserProfile;