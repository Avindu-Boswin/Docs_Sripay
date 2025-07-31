import React from 'react'
import { useTranslation } from 'react-i18next';
import EmailLogo from '../../assets/images/acquirer/message.png'
import CallLogo from '../../assets/images/acquirer/telephone-call.png'
import SriPay from '../../assets/images/Sripay_logo_traingle.png'

function Support() {
    const { t } = useTranslation();
    return (
        <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
                {t('support.title')}
            </h1>
            <div className='w-full h-[70px] bg-blue-100 border rounded-[5px] flex items-center justify-center mt-10'>
                <span className='text-sm sm:text-base font-semibold text-gray-700 text-center'>
                    {t('support.intro')}
                </span>
            </div>
            <div className='py-10 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed'>
                {/* Email Section */}
                <div>
                    <div className='flex justify-start items-center gap-3'>
                        <img src={EmailLogo} alt='emailImage' className='w-[10] h-10' />
                        <h3 className='font-semibold text-2xl mt-4'>{t('support.emailSection.title')}</h3>
                    </div>
                    <span className='text-sm'>
                        {t('support.emailSection.desc')}
                    </span>
                    <h3 className='mt-10 text-xl xl:text-base'>{t('support.emailSection.label')}</h3>
                    <ul className='px-7'>
                        <li className='py-2'>
                            {t('support.emailSection.address')}{' '}
                            <a href="mailto:admin@sripay.lk" className='text-blue-500'>
                                {t('support.emailSection.email')}
                            </a>
                        </li>
                        <li>{t('support.emailSection.hours')}</li>
                    </ul>
                </div>
                {/* Website Section */}
                <div>
                    <div className='flex justify-start items-center gap-3'>
                        <img src={SriPay} alt='websiteLogo' className='w-[10] h-10' />
                        <h3 className='font-semibold text-2xl mt-4'>{t('support.websiteSection.title')}</h3>
                    </div>
                    <span className='text-sm'>
                        {t('support.websiteSection.desc')}
                    </span>
                    <h3 className='mt-10 text-xl xl:text-base'>{t('support.websiteSection.label')}</h3>
                    <ul className='px-7'>
                        <li className='py-2'>
                            {t('support.websiteSection.linkLabel')}{' '}
                            <a href="https://www.sripay.lk" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                {t('support.websiteSection.url')}
                            </a>
                        </li>
                    </ul>
                </div>
                {/* Mobile Section */}
                <div>
                    <div className='flex justify-start items-center gap-3'>
                        <img src={CallLogo} alt='callLogo' className='w-[10] h-10' />
                        <h3 className='font-semibold text-2xl mt-4'>{t('support.mobileSection.title')}</h3>
                    </div>
                    <span className='text-sm'>
                        {t('support.mobileSection.desc')}
                    </span>
                    <h3 className='mt-10 text-xl xl:text-base'>{t('support.mobileSection.merchantLabel')}</h3>
                    <ul className='px-7'>
                        <li className='py-2'>
                            {t('support.mobileSection.title')}{': '}

                            {t('support.mobileSection.merchantLabel').includes('Merchant') ? t('support.mobileSection.merchantMobile') : t('support.mobileSection.merchantMobile')}
                        </li>
                        <li>{t('support.mobileSection.hours')}</li>
                    </ul>
                    <h3 className='mt-10 text-xl xl:text-base'>{t('support.mobileSection.techLabel')}</h3>
                    <ul className='px-7'>
                        <li className='py-2'>
                            {t('support.mobileSection.title')}{': '}
                            {t('support.mobileSection.techLabel').includes('Technical') ? t('support.mobileSection.techMobile') : t('support.mobileSection.techMobile')}
                        </li>
                        <li>{t('support.mobileSection.hours')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Support
