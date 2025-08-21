import React, { useEffect } from 'react';
import mccData from '../../data/mcc.json';
import privateMccData from '../../data/private_mcc.json';
import { useSections } from '../../components/SectionContext';

import { useTranslation } from 'react-i18next';

function MerchantCategories() {
    const { t } = useTranslation();
    const { setSections } = useSections();
    

    useEffect(() => {
        setSections([
            { id: 'mcc-list', label: t('merchantcategories.sections.section1') },
            { id: 'iso-mcc', label: t('merchantcategories.sections.section2') },
            { id: 'private-mcc', label: t('merchantcategories.sections.section3') },
        ]);
        return () => {
            setSections([]);
        };
    }, [setSections,t]);

    return (
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
            <h1 id="mcc-list" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
               {t('merchantcategories.title')}
            </h1>
            <p className="text-md text-gray-600 max-w-3xl mx-auto mb-4">
            {t('merchantcategories.desc')}
            </p>
            <p id="iso-mcc" className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto mb-5 mt-5">
            {t('merchantcategories.desc2')}
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-blue-200 bg-white rounded-md text-sm">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-r border-blue-200 text-left text-xs font-semibold text-gray-700 uppercase">MCC</th>
                            <th className="px-6 py-3 border-b border-blue-200 text-left text-xs font-semibold text-gray-700 uppercase">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mccData
                            .filter(item => item.MCC && item.Description)
                            .sort((a, b) => a.MCC.localeCompare(b.MCC, undefined, { numeric: true }))
                            .map(item => (
                                <tr key={item.MCC}>
                                    <td className="px-6 py-4 border-b border-r border-blue-100 text-sm text-gray-900">{item.MCC}</td>
                                    <td className="px-6 py-4 border-b border-blue-100 text-sm text-gray-900">{item.Description}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <p id="private-mcc" className="text-xl text-gray-800 font-semibold max-w-3xl mx-auto mt-10 mb-5">
                A2: Codes defined by SriPay for private use
            </p>
            <div className="max-w-3xl mx-auto mb-6 flex items-center gap-4 bg-yellow-200 border-l-8 border-yellow-500 p-5 rounded-lg shadow-lg animate-pulse-once">
                <svg className="w-8 h-8 text-yellow-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" /></svg>
                <span className="text-sm text-yellow-900 font-semibold leading-snug"><strong>Attention Required:</strong> If a merchant provides services or products related to <span className="underline">special industries</span> such as <b>cryptocurrencies</b>, <b>online gambling</b>, <b>pornography etc..</b> or any of the categories listed in the table below, they <span className="underline">must enter into a special agreement with Sripay before onboarding</span>.</span>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-blue-200 bg-white rounded-md text-sm">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-r border-blue-200 text-left text-xs font-semibold text-gray-700 uppercase">MCC</th>
                            <th className="px-6 py-3 border-b border-blue-200 text-left text-xs font-semibold text-gray-700 uppercase">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {privateMccData
                            .filter(item => item.MCC && item.Description)
                            .sort((a, b) => a.MCC.localeCompare(b.MCC, undefined, { numeric: true }))
                            .map(item => (
                                <tr key={item.MCC}>
                                    <td className="px-6 py-4 border-b border-r border-blue-100 text-sm text-gray-900">{item.MCC}</td>
                                    <td className="px-6 py-4 border-b border-blue-100 text-sm text-gray-900">{item.Description}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MerchantCategories;
