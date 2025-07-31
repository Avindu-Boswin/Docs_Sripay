import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/acquirer/img340.jpg';
import Img2 from '../../assets/images/acquirer/img342.jpg';
import Img3 from '../../assets/images/acquirer/img344.jpg';
import Img4 from '../../assets/images/acquirer/img351.jpg';



function TerminalManagement() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Section titles for right side menu (remove 'Step X:' or similar prefixes)
    const rawTitles = [
        t('terminalManagement.accessTitle'),
        t('terminalManagement.addTitle'),
        t('terminalManagement.optionTitle'),
        t('terminalManagement.singleTitle'),
        t('terminalManagement.multiTitle'),
        t('terminalManagement.statusTitle'),
        t('terminalManagement.troubleshootTitle'),
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
            {/* Section Title */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('terminalManagement.title')}</h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                {t('terminalManagement.desc')}
            </p>

            {/* Accessing Terminal Management */}
            <div id="section1" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.accessTitle')}</h3>
                <p className='mb-4'>{t('terminalManagement.accessDesc')}</p>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>{t('terminalManagement.accessSteps.0')}</li>
                    <li>{t('terminalManagement.accessSteps.1')}</li>
                    <li>{t('terminalManagement.accessSteps.2')}</li>
                </ol>
            </div>

            {/* Adding a Terminal */}
            <div id="section2" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.addTitle')}</h3>
                <p className='mb-4'>{t('terminalManagement.addDesc1')}</p>
                <p className='mb-4'>{t('terminalManagement.addDesc2')}</p>
            </div>

            {/* Option Selection Section */}
            <div id="section3" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.optionTitle')}</h3>
                <img src={Img1} alt='Option Selection – Single vs. Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <p className='mb-4'>{t('terminalManagement.optionDesc')}</p>
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.optionList.0')}</li>
                    <li>{t('terminalManagement.optionList.1')}</li>
                </ul>
                <p>{t('terminalManagement.optionNext')}</p>
            </div>

            {/* Creating a Single Terminal */}
            <div id="section4" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.singleTitle')}</h3>
                <img src={Img2} alt='Creating a Single Terminal' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.singleList.0')}</li>
                    <li>{t('terminalManagement.singleList.1')}</li>
                    <li>{t('terminalManagement.singleList.2')}</li>
                </ul>
                <p>{t('terminalManagement.singleNext')}</p>
            </div>

            {/* Creating Multiple Terminals */}
            <div id="section5" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.multiTitle')}</h3>
                <img src={Img3} alt='Creating Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.multiList.0')}</li>
                </ul>
                <p>{t('terminalManagement.multiNext')}</p>
            </div>

            {/* Activate or Deactivate Terminal */}
            <div id="section6" className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.statusTitle')}</h3>
                <img src={Img4} alt='Terminal Status View' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.statusList.0')}</li>
                    <li>{t('terminalManagement.statusList.1')}</li>
                    <li>{t('terminalManagement.statusList.2')}</li>
                </ul>
                <p className='italic text-gray-600 mt-4'>
                    <span className='font-semibold'>{t('terminalManagement.statusNoteTitle')}</span> {t('terminalManagement.statusNote')}
                </p>
            </div>

            
            {/* ---------- TROUBLESHOOTING SECTION ---------- */}
            <div id="section7" className="mt-16 mb-20">
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
                                <span className="mr-2">•</span>I can't add a terminal or the "Add Terminal" button is disabled.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Ensure you have the correct permissions and have selected a merchant/store. If the merchant or store is not approved, you may not be able to add terminals.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I can't change the terminal name.
                            </div>
                            <div className="text-blue-800 ml-5">
                                User cannot change the default terminal name. Terminal names are auto-generated based on the terminal count.
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

export default TerminalManagement;
