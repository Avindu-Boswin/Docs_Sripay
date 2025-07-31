import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/acquirer/img281.jpg'
import Img2 from '../../assets/images/acquirer/img283.jpg'
import Img3 from '../../assets/images/acquirer/img286.jpg'
import Img4 from '../../assets/images/acquirer/img288.jpg'
import Img5 from '../../assets/images/acquirer/img290.jpg'

function MerchantRegistrationWorkflow() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Section titles for right side menu (remove 'Step X:' or similar prefixes)
    const rawTitles = [
        t('regBulk.steps.0.title'),
        t('regBulk.steps.1.title'),
        t('regBulk.steps.2.title'),
        t('regBulk.steps.3.title'),
        t('regBulk.steps.4.title'),
        t('regBulk.steps.5.title'),
        t('regBulk.steps.6.title'),
        t('regBulk.steps.7.title'),
    ];
    const sectionTitles = rawTitles.map(title =>
        title.replace(/^Step\s*\d+[:：]?\s*/i, '').trim()
    );

    useEffect(() => {
        setSections(
            sectionTitles.map((title, idx) => ({
                id: `step${idx + 1}`,
                label: title
            }))
        );
        return () => setSections([]);
    }, [setSections, ...sectionTitles]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('regBulk.title')}</h1>
            <h3 className='text-xl sm:text-2xl font-semibold text-gray-700'>{t('regBulk.subtitle')}</h3>
            <span className='text-base sm:text-lg md:text-xl text-gray-600'>{t('regBulk.desc')}</span>

            {/* ---------- STEP 1 ------------------------------------------------ */}
            <div id="step1" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.0.title')}</h3>
                <img src={Img1} alt={t('regBulk.steps.0.imgAlt')} className="mx-auto mb-8 my-6 block md:w-4/5" />
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                            <li className='p-1.5'>{t('regBulk.steps.0.points.0')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.0.points.1')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 2 ------------------------------------------------ */}
            <div id="step2" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.1.title')}</h3>
                <img src={Img2} alt={t('regBulk.steps.1.imgAlt')} className="mx-auto mb-8 my-6 block md:w-4/5" />
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <span className='font-semibold text-gray-600'>{t('regBulk.steps.1.desc')}</span>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                            <li className='p-1.5'>{t('regBulk.steps.1.points.0')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.1.points.1')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.1.points.2')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 3 ------------------------------------------------ */}
            <div id="step3" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.2.title')}</h3>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <ol className='list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3'>
                        <li>{t('regBulk.steps.2.points.0')}</li>
                        <li>
                            <span className='font-semibold'>{t('regBulk.steps.2.points.1')}</span>
                            <ul className='list-disc ml-6 mt-2 space-y-1'>
                                <li>{t('regBulk.steps.2.rules.0')}</li>
                                <li>{t('regBulk.steps.2.rules.1')}</li>
                                <li>{t('regBulk.steps.2.rules.2')}</li>
                                <li>{t('regBulk.steps.2.rules.3')}</li>
                                <li>{t('regBulk.steps.2.rules.4')}</li>
                                <li>{t('regBulk.steps.2.rules.5')}</li>
                                <li>{t('regBulk.steps.2.rules.6')}</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            {/* ---------- STEP 4 ------------------------------------------------ */}
            <div id="step4" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.3.title')}</h3>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                    <li>{t('regBulk.steps.3.points.0')}</li>
                </ul>
                <div className="hidden sm:block w-full mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm border border-gray-300">
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.headers.0')}</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.headers.1')}</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.headers.2')}</div>

                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.0.0')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.0.1')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.0.2')}</div>

                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.1.0')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.1.1')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.1.2')}</div>

                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.2.0')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.2.1')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.2.2')}</div>

                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.3.0')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.3.1')}</div>
                        <div className="border-t border-gray-300 px-3 py-2">{t('regBulk.steps.3.validationTable.rows.3.2')}</div>
                    </div>
                </div>
                <div className="mt-6">
                    <span className="font-semibold text-gray-700">{t('regBulk.steps.3.fail')}</span>
                    <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                        <li>{t('regBulk.steps.3.failPoints.0')}</li>
                        <li>{t('regBulk.steps.3.failPoints.1')}</li>
                    </ul>
                </div>
                <img src={Img3} alt={t('regBulk.steps.3.imgAlt')} className="mx-auto mb-8 my-6 block md:w-4/5" />
            </div>

            {/* ---------- STEP 5 ------------------------------------------------ */}
            <div id="step5" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.4.title')}</h3>
                <img src={Img4} alt={t('regBulk.steps.4.imgAlt')} className="mx-auto mb-8 my-6 block md:w-4/5" />
                <span className="font-semibold text-gray-700">{t('regBulk.steps.4.success')}</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm'>
                            <li className='p-1.5'>{t('regBulk.steps.4.points.0')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.4.points.1')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 6 ------------------------------------------------ */}
            <div id="step6" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.5.title')}</h3>
                <img src={Img5} alt={t('regBulk.steps.5.imgAlt')} className="mx-auto mb-8 my-6 block md:w-4/5" />
                <span className="font-semibold text-gray-700 text-lg">{t('regBulk.steps.5.desc')}</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm'>
                            <li className='p-1.5'>{t('regBulk.steps.5.points.0')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.5.points.1')}</li>
                            <li className='p-1.5'>{t('regBulk.steps.5.points.2')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 7 ------------------------------------------------ */}
            <div id="step7" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('regBulk.steps.6.title')}</h3>
                <span className="font-semibold text-gray-700 text-lg">{t('regBulk.steps.6.desc')}</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <ol className='list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3'>
                        <li>{t('regBulk.steps.6.points.0')}</li>
                        <li>{t('regBulk.steps.6.points.1')}</li>
                        <li>{t('regBulk.steps.6.points.2')}</li>
                    </ol>
                </div>
            </div>

            {/* ---------- TROUBLESHOOTING SECTION ---------- */}
            <div id="step8" className="mt-16 mb-20">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
                    <div className="flex items-center mb-6">
                        <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
                    </div>
                    <ul className="space-y-7 text-sm">
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>My Excel file upload fails or is rejected.</div>
                            <div className="text-blue-800 ml-5">Ensure you are using the latest template provided by the system. Double-check that all required columns are present and that there are no empty mandatory fields. Remove any extra formatting or merged cells.</div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>Some merchants in my file are not being registered.</div>
                            <div className="text-blue-800 ml-5">Check the validation table for errors. Merchants with missing or invalid data will not be processed. Correct any highlighted issues and re-upload the file.</div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>I get a "format error" or "invalid data" message.</div>
                            <div className="text-blue-800 ml-5">Make sure all fields follow the required format (e.g., phone numbers, emails, IDs). Refer to the rules and examples shown above for each column.</div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>The page is not loading or is stuck.</div>
                            <div className="text-blue-800 ml-5">Check your internet connection and try reloading the page. If the issue continues, try using a different browser or device.</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MerchantRegistrationWorkflow;
