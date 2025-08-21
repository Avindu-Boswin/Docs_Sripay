import React from 'react';
import Img1 from '../../assets/images/merchant/Img14.png';
import { useTranslation } from 'react-i18next';

function MerchantStoresView() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16'>
            {/* Title */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6'>
                {t('storeViewAll.title')}
            </h1>

            {/* Description Block */}
            <div className='py-3'>
                <p className='text-xl font-medium text-gray-800 mb-2'>
                   { t('viewallstore.title2')}
                </p>
                <ul className='ml-8 list-disc text-base text-gray-700 mb-6'>
                    <li className='py-1'> { t('viewallstore.category1')} </li>
                    <li className='py-1'> { t('viewallstore.category2')}</li>
                    <li className='py-1'> { t('viewallstore.category3')} </li>
                </ul>

                <p className='text-gray-700 text-base leading-relaxed'>
                { t('viewallstore.title3')}
                </p>
                <ul className='ml-8 list-disc text-base text-gray-700 mt-2 space-y-2'>
                    <li>
                        <strong> { t('viewallstore.status.status1')}</strong> { t('viewallstore.desc1')}
                    </li>
                    <li>
                        <strong>{ t('viewallstore.status.status2')}</strong> { t('viewallstore.desc2')}
                    </li>
                    <li>
                        <strong>{ t('viewallstore.status.status3')}</strong> { t('viewallstore.desc3')}
                    </li>
                </ul>
            </div>

            {/* Image */}
            <img
                src={Img1}
                alt='Store Registration Overview'
                className='mx-auto my-8 block md:w-4/5 rounded-md shadow-md'
            />
        </div>
    );
}

export default MerchantStoresView;
