import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function AppSupport() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: t('appSupport.sections.overview') },
            { id: 'support-information', label: t('appSupport.sections.supportInformation') },
            { id: 'office-address', label: t('appSupport.sections.officeAddress') },
            { id: 'additional-support', label: t('appSupport.sections.additionalSupport') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('appSupport.title')}
            </h1>

            <div id="overview" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('appSupport.sections.overview')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('appSupport.overview.description')}
                </p>
            </div>

            <div id="support-information" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('appSupport.sections.supportInformation')}
                </h2>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li><strong>{t('appSupport.supportInformation.email')} - </strong>{t('appSupport.supportInformation.emailDesc')} <a className='text-blue-600 underline' href='mailto:info@sripay.lk'>info@sripay.lk</a> {t('appSupport.supportInformation.emailDescEnd')}</li>
                    <li><strong>{t('appSupport.supportInformation.phone')} - </strong>{t('appSupport.supportInformation.phoneDesc')} <a className='text-blue-600 underline' href='tel:+94767035500'>+94 76 703 5500</a> {t('appSupport.supportInformation.phoneDescEnd')}</li>
                    <li><strong>{t('appSupport.supportInformation.website')} - </strong>{t('appSupport.supportInformation.websiteDesc')} <a className='text-blue-600 underline' href='https://sripay.lk'>sripay.lk</a> {t('appSupport.supportInformation.websiteDescEnd')}</li>
                </ul>
            </div>

            <div id="office-address" className='mt-8 mb-8'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('appSupport.sections.officeAddress')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('appSupport.officeAddress.address')}
                    <br />
                    <strong>{t('appSupport.officeAddress.operatingHours')} - </strong>{t('appSupport.officeAddress.hours')}
                </p>
            </div>

            <div id="additional-support" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('appSupport.sections.additionalSupport')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('appSupport.additionalSupport.description')} <a className='text-blue-600 underline' href='https://sripay.lk/contact'>sripay.lk</a>.
                </p>
            </div>
        </div>
    );
}

export default AppSupport;
