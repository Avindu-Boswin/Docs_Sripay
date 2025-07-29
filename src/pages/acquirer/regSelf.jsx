
import React from 'react';
import { useTranslation } from 'react-i18next';

function MerchantRegistrationSelf() {
    const { t } = useTranslation();
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TITLE & INTRO */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4'>{t('regSelf.title')}</h1>
            <div className='text-base sm:text-lg md:text-xl text-gray-600 mb-6'>{t('regSelf.intro')}</div>

            {/* HOW TO GET STARTED */}
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.howToTitle')}</h2>

            {/* Step 1 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.0.title')}</h3>
                <div className='mb-2'>{t('regSelf.steps.0.desc')}</div>
                <div className='bg-gray-50 border border-gray-200 rounded p-4 mb-2'>
                    <div><b>Email:</b> <span className='font-mono'>{t('regSelf.steps.0.email')}</span></div>
                    <div><b>Subject:</b> <span className='font-mono'>{t('regSelf.steps.0.subject')}</span></div>
                </div>
                <div className='mt-5 mb-5'>
                    <span className="font-semibold text-gray-700">{t('regSelf.steps.0.include') && t('regSelf.steps.0.include').length > 0 ? t('regSelf.steps.0.includeTitle', 'Include') : 'Include'}</span>
                </div>
                <div className='ml-2'>
                    <ul className='list-disc ml-6 text-gray-700 text-sm'>
                        {t('regSelf.steps.0.include', { returnObjects: true }).map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Step 2 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.1.title')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.steps.1.points', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Step 3 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.2.title')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.steps.2.points', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Step 4 */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.3.title')}</h3>
                <div className='text-gray-700 text-sm mb-2'>{t('regSelf.steps.3.desc')}</div>
                <div className='font-semibold text-gray-700'>
                    <span>{t('regSelf.steps.3.flow')}</span>
                </div>
            </div>

            {/* Benefits */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.benefitsTitle')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.benefits', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <div className='mt-3 text-xs text-gray-600'><b>{t('regSelf.noteTitle', 'Note:')}</b> {t('regSelf.note')}</div>
            </div>
        </div>
    );
}

export default MerchantRegistrationSelf;
