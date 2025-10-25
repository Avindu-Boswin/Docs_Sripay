import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useSections } from '../../../components/SectionContext';
import Apple from '../../../assets/Apple.png'
import Android from '../../../assets/Google.png'


function MerchantMobileGettingStart() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Device detection and app redirection function
    const handleAppDownload = (store) => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (store === 'android') {
            // Check if user is on Android device
            if (/android/i.test(userAgent)) {
                // Open Play Store app if on Android device
                window.open('https://play.google.com/store/apps/details?id=com.boswin.sripaymerchantmobile&hl=en', '_blank');
            } else {
                // Open Play Store web version if on desktop/other devices
                window.open('https://play.google.com/store/apps/details?id=com.boswin.sripaymerchantmobile&hl=en', '_blank');
            }
        } else if (store === 'ios') {
            // Check if user is on iOS device
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                // Open App Store app if on iOS device
                window.open('https://apps.apple.com/lk/app/sripay-merchant/id6670152500?platform=iphone', '_blank');
            } else {
                // Open App Store web version if on desktop/other devices
                window.open('https://apps.apple.com/lk/app/sripay-merchant/id6670152500?platform=iphone', '_blank');
            }
        }
    };

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('merchantMobileGettingStart.sections.step1') },

        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="selfreg-title" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantMobileGettingStart.title')}
            </h1>


            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('merchantMobileGettingStart.description')}
            </p>



            {/* ---------- STEP 1 ------------------------------------------------ */}
            <div id="step-1" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    {t('merchantMobileGettingStart.step1.title')}
                </h4>

                <p className='text-gray-700 mt-3 text-sm'>
                    {t('merchantMobileGettingStart.step1.text1')} <a href="https://sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://sripay.lk/</a> {t('merchantMobileGettingStart.step1.text2')}
                </p>
                <p className='text-gray-700 mt-3 text-sm'>
                    {t('merchantMobileGettingStart.step1.text3')} <a href="/docs/merchant/gettingstart" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">{t('merchantMobileGettingStart.step1.registrationSteps')}</a>
                </p>

            </div>
            <div id="step-2" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    {t('merchantMobileGettingStart.step2.title')}
                </h4>

                <div className='space-y-4'>
                    <div className='flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start'>
                        {/* Android Download Image */}
                        <div className='text-center'>
                            <img
                                src={Android}
                                alt="Download for Android"
                                onClick={() => handleAppDownload('android')}
                                className='cursor-pointer hover:scale-105 transition-transform duration-200 w-60 h-auto'
                            />
                            <p className='text-gray-600 text-sm mt-2'>{t('merchantMobileGettingStart.step2.downloadAndroid')}</p>
                        </div>

                        {/* iOS Download Image */}
                        <div className='text-center'>
                            <img
                                src={Apple}
                                alt="Download for iOS"
                                onClick={() => handleAppDownload('ios')}
                                className='cursor-pointer hover:scale-105 transition-transform duration-200 w-60 h-auto'
                            />
                            <p className='text-gray-600 text-sm mt-2'>{t('merchantMobileGettingStart.step2.downloadIOS')}</p>
                        </div>
                    </div>
                </div>

            </div>

            <div id="step-3" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    {t('merchantMobileGettingStart.step3.title')}
                </h4>

                <p className='text-gray-700 mt-3 text-sm'>
                    {t('merchantMobileGettingStart.step3.text')}
                </p>

            </div>
        </div>
    );
}

export default MerchantMobileGettingStart;