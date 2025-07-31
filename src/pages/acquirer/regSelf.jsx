
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function MerchantRegistrationSelf() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Section titles for right side menu (remove 'Step X:' or similar prefixes)
    const rawTitles = [
        t('regSelf.steps.0.title'),
        t('regSelf.steps.1.title'),
        t('regSelf.steps.2.title'),
        t('regSelf.steps.3.title'),
        t('regSelf.benefitsTitle'),
        t('regSelf.troubleshoot'),
    ];
    const sectionTitles = rawTitles.map(title =>
        title.replace(/^Step\s*\d+[:：]?\s*/i, '').trim()
    );

    useEffect(() => {
        setSections(
            sectionTitles.map((title, idx) => ({
                id: `section${idx + 1}`,
                label: title
            }))
        );
        return () => setSections([]);
    }, [setSections, ...sectionTitles]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TITLE & INTRO */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4'>{t('regSelf.title')}</h1>
            <div className='text-base sm:text-lg md:text-xl text-gray-600 mb-6'>{t('regSelf.intro')}</div>

            {/* HOW TO GET STARTED */}
            <h2 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.howToTitle')}</h2>

            {/* Step 1 */}
            <div id="section1" className='mb-8'>
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
            <div id="section2" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.1.title')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.steps.1.points', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Step 3 */}
            <div id="section3" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.2.title')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.steps.2.points', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Step 4 */}
            <div id="section4" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.steps.3.title')}</h3>
                <div className='text-gray-700 text-sm mb-2'>{t('regSelf.steps.3.desc')}</div>
                <div className='font-semibold text-gray-700'>
                    <span>{t('regSelf.steps.3.flow')}</span>
                </div>
            </div>

            {/* Benefits */}
            <div id="section5" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regSelf.benefitsTitle')}</h3>
                <ul className='list-disc ml-6 text-gray-700 text-sm'>
                    {t('regSelf.benefits', { returnObjects: true }).map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
                <div className='mt-3 text-xs text-gray-600'><b>{t('regSelf.noteTitle', 'Note:')}</b> {t('regSelf.note')}</div>
            </div>

            {/* Troubleshooting */}
            <div id="section6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
                    <div className="flex items-center mb-6">
                        <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
                    </div>
                    <ul className="space-y-7 text-sm">
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I did not receive a response after submitting my registration email.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Please check your spam or junk folder. If you still do not see a response, ensure you sent the email to the correct address and try resending. You may also contact support for assistance.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>My registration information is incorrect or incomplete.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Double-check all the details you provided in your email. If you notice an error after submission, reply to the confirmation email or contact support to update your information.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I am not sure what documents to include.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Refer to the "Include" section above for the required documents. If you are still unsure, reach out to support for clarification.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>The page is not loading or is stuck.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Check your internet connection and try reloading the page. If the issue continues, try using a different browser or device.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MerchantRegistrationSelf;
