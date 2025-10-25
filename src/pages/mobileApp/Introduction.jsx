import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import AppleMerchant from '../../assets/images/merchant-app/ios_merchant.png'
import AppleUser from '../../assets/images/merchant-app/ios_user.png'

function MobileAppIntroduction() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'what', label: t('mobileAppIntro.sections.what') },
      { id: 'apps', label: t('mobileAppIntro.sections.apps') },
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full sm:py-10">
      <div id="what" className="mx-auto w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-full text-center ">
          <h1 className="text-blue-700 mt-10 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[4rem]">
            {t('mobileAppIntro.title')}
          </h1>
        </div>

      </div>
      <div className='mx-10 sm:mx-0'>
        <div className='w-full sm:w-[80%] mx-auto mt-8 sm:mt-10  text-base sm:text-lg text-gray-700'>
          <p className="mb-6 leading-relaxed">
            {t('mobileAppIntro.description')}
          </p>
        </div>

        {/* Two Apps Section */}
        <div id='apps' className="w-full sm:w-[80%] mx-auto mt-12 sm:mt-16 space-y-16">
          {/* Merchant App Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-4">
                  {t('mobileAppIntro.merchantApp.title')}
                </h3>
                
                {/* Introduction */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.merchantApp.introduction.heading')}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t('mobileAppIntro.merchantApp.introduction.text')}
                  </p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.merchantApp.purpose.heading')}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {t('mobileAppIntro.merchantApp.purpose.text')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.purpose.point1')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.purpose.point2')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.purpose.point3')}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.merchantApp.keyFeatures.heading')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.keyFeatures.feature1')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.keyFeatures.feature2')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.keyFeatures.feature3')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.keyFeatures.feature4')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.merchantApp.keyFeatures.feature5')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
              <div className="relative flex gap-4">
                <div className="relative">
                  <img 
                    src={AppleMerchant} 
                    alt="SriPay Merchant App for iOS" 
                    className="w-80 h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* User App Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative flex gap-4">
                <div className="relative">
                  <img 
                    src={AppleUser} 
                    alt="SriPay User App for iOS" 
                    className="w-80 h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              {/* Blur overlay for under development - only on content section */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl z-10 flex items-center justify-center">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                  {t('mobileAppIntro.userApp.underDevelopment')}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-4">
                  {t('mobileAppIntro.userApp.title')}
                </h3>
                
                {/* Introduction */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.userApp.introduction.heading')}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {t('mobileAppIntro.userApp.introduction.text')}
                  </p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.userApp.purpose.heading')}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {t('mobileAppIntro.userApp.purpose.text')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.purpose.point1')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.purpose.point2')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.purpose.point3')}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{t('mobileAppIntro.userApp.keyFeatures.heading')}</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.keyFeatures.feature1')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.keyFeatures.feature2')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.keyFeatures.feature3')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.keyFeatures.feature4')}</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">{t('mobileAppIntro.userApp.keyFeatures.feature5')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default MobileAppIntroduction;