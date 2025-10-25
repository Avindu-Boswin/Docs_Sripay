import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M42 from '../../../assets/images/merchant-app/m42.jpg';



function MerchantWallets() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: t('merchantWallets.sections.overview') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantWallets.title')}
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantWallets.overview.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantWallets.overview.description')}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M42} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantWallets;