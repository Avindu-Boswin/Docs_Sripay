import React from 'react'
import Img1 from '../../assets/images/merchant/Img14.png';
import { useTranslation } from 'react-i18next';

function MerchantStoresView() {
       const { t } = useTranslation();
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
                    {/* ORIGINAL TITLE & INTRO */}
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-4'>{t('storeViewAll.title')}</h1>
                    <div className='text-base sm:text-lg md:text-xl text-gray-600 mb-6'>
                        {t('storeViewAll.intro')}
                    </div>
        
                    {/* View All Stores Section */}
                    <h2 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('storeViewAll.viewAllTitle')}</h2>
                    <div className='text-base sm:text-lg md:text-xl text-gray-600 mb-6'>
                        {t('storeViewAll.viewAllIntro')}
                    </div>
                    <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                        <li>{t('storeViewAll.viewAllSteps.0')}</li>
                        <li>
                            {t('storeViewAll.viewAllSteps.1')}
                            <ul className='list-disc ml-6 text-gray-700 text-sm mt-2'>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.0')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.1')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.2')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.3')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.4')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.5')}</span></li>
                                <li><span className='font-semibold'>{t('storeViewAll.tableColumns.6')}</span></li>
                            </ul>
                        </li>
                    </ol>
                    <div className='mb-6 text-gray-700 text-base'>
                        {t('storeViewAll.filterText')}
                    </div>
                    <img src={Img1} alt={t('storeViewAll.viewAllTitle')} className="mx-auto mb-8 my-6 block md:w-4/5" />
        
                    {/* Action menu info */}
                    <div className='mb-4 text-gray-700 text-base'>
                        <span className='font-semibold'>{t('storeViewAll.actionMenu')}</span>
                    </div>
                    <ul className='list-disc ml-6 text-gray-700 text-sm mb-8'>
                        <li>{t('storeViewAll.actions.0')}</li>
                        <li>{t('storeViewAll.actions.1')}</li>
                    </ul>
                </div>
    )
}

export default MerchantStoresView