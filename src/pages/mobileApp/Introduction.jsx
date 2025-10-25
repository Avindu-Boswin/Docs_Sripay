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
      { id: 'what', label: 'What is it?' },
      { id: 'apps', label: 'Apps' },
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full sm:py-10">
      <div id="what" className="mx-auto w-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-full text-center ">
          <h1 className="text-blue-700 mt-10 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[4rem]">
            SriPay Mobile App
          </h1>
        </div>

      </div>
      <div className='mx-10 sm:mx-0'>
        <div className='w-full sm:w-[80%] mx-auto mt-8 sm:mt-10  text-base sm:text-lg text-gray-700'>
          <p className="mb-6 leading-relaxed">
            SriPay provides comprehensive mobile payment solutions through two dedicated applications designed to serve different user needs. Our mobile ecosystem consists of the <strong>Merchant App</strong> for business owners and service providers, and the <strong>User App</strong> for consumers making payments. Both applications work seamlessly together to create a complete digital payment experience, enabling secure transactions, real-time payment processing, and enhanced financial management capabilities.
          </p>
        </div>

        {/* Two Apps Section */}
        <div id='apps' className="w-full sm:w-[80%] mx-auto mt-12 sm:mt-16 space-y-16">
          {/* Merchant App Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-4">
                  Merchant App
                </h3>
                
                {/* Introduction */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Introduction</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The SriPay Merchant App is a mobile platform designed for merchants in Sri Lanka to manage digital payments and business operations seamlessly. It integrates with Alipay+ for global reach, supporting QR code payments, online transactions, and card processing with a user-friendly interface.
                  </p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Purpose</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    SriPay bridges the gap between Sri Lankan businesses and international digital payment systems:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Enable local businesses to accept cross-border digital payments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Support tourists using Alipay, GCash, and other preferred wallets</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Boost financial inclusion and e-commerce adoption in Sri Lanka</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Key Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Alipay+ & Global eWallet Support (40+ wallets across 50+ countries)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Dynamic QR Code Generation for contactless payments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Real-Time Payment Processing with instant confirmations</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Online Payment Integration for e-commerce transactions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Enhanced Security with industry-leading encryption</span>
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
                  Under Development
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 lg:p-8 shadow-lg">
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-700 mb-4">
                  User App
                </h3>
                
                {/* Introduction */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Introduction</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The SriPay User App is a consumer-focused mobile payment platform that enables Sri Lankan users to make seamless digital payments. It connects with the global Alipay+ network, allowing secure transactions through QR codes, mobile wallets, and various payment methods.
                  </p>
                </div>

                {/* Purpose */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Purpose</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    The User App empowers consumers with convenient digital payment solutions:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Enable cashless payments for everyday transactions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Provide secure peer-to-peer money transfers</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Simplify bill payments and mobile top-ups</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">Key Features</h4>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">QR Code Scanner for instant merchant payments</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Digital Wallet Management with balance tracking</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Transaction History with detailed payment records</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Bill Payment Services for utilities and services</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                      <span className="text-xs text-gray-600">Multi-layer Security with biometric authentication</span>
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