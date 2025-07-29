import React from 'react';
import { useTranslation } from 'react-i18next';

function StoreUserAssign() {
    const { t } = useTranslation();
    const steps = t('storeUserAssign.steps', { returnObjects: true });

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('storeUserAssign.title')}</h1>

            {/* DESCRIPTION */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                {t('storeUserAssign.desc')}
            </p>

            {/* INSTRUCTIONS */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('storeUserAssign.instructionsTitle')}</h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>{t('storeUserAssign.steps.0')}</li>
                    <li>{t('storeUserAssign.steps.1')}</li>
                    <li>{t('storeUserAssign.steps.2')}</li>
                </ol>
                <p className='italic text-gray-600 mt-4'>
                    {t('storeUserAssign.note')}
                </p>
            </div>
        </div>
    );
}

export default StoreUserAssign;
