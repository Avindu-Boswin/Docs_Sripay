import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M43 from '../../../assets/images/merchant-app/m43.jpg';
import M44 from '../../../assets/images/merchant-app/m44.jpg';
import M45 from '../../../assets/images/merchant-app/m45.jpg';

function MerchantStores() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'overview', label: t('merchantStores.sections.overview') },
            { id: 'view-details', label: t('merchantStores.sections.viewDetails') },
            { id: 'qr-actions', label: t('merchantStores.sections.qrActions') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantStores.title')}
            </h1>

            <div id="overview" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantStores.overview.title')}
                </h2>
                <p className='text-gray-700 mb-4'>
                    {t('merchantStores.overview.description')}
                </p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M43} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                <div id="view-details">
                    <p className='text-gray-700 mb-4'>
                        {t('merchantStores.viewDetails.description')}
                    </p>
                    <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M44} alt="store details example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                <div id="qr-actions">
                    <p className='text-gray-700 mb-4'>
                        <strong>{t('merchantStores.qrActions.title')}</strong>
                    </p>

                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('merchantStores.qrActions.viewLabel')} </strong>{t('merchantStores.qrActions.viewText')}</li>
                        <li><strong>{t('merchantStores.qrActions.downloadLabel')} </strong>{t('merchantStores.qrActions.downloadText')}</li>
                        <li><strong>{t('merchantStores.qrActions.shareLabel')} </strong>{t('merchantStores.qrActions.shareText')}</li>
                    </ul>
                    <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M45} alt="store qr example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MerchantStores;