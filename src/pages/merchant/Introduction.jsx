import React from 'react'
import { useTranslation } from 'react-i18next';

import Businessman_pana from '../../assets/images/merchant/Businessman-rafiki.svg';

function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="w-full sm:py-10">
          <div className="mx-auto w-full max-w-4xl flex flex-col md:flex-row justify-center  items-center">
            <div className="w-full md:w-full text-center ">
              <h1 className="text-blue-700 mt-10 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[4rem]">
               Who can be a <span className='block md:inline pl-0 md:pl-[40%]'>Merchant?</span>
              </h1>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img src={Businessman_pana} alt="acquirer" className="hidden md:block w-48 h-32 sm:w-72 sm:h-44 md:w-[500px] md:h-[300px] object-contain" />
            </div>
          </div>
          <div className='mx-10 sm:mx-0'>
            <div className='w-full sm:w-[80%] mx-auto mt-8 sm:mt-10  text-base sm:text-lg text-gray-700'>
              <p>Becoming an Acquirer is a significant step for merchants who wish to expand their payment processing capabilities and offer seamless transactions to their customers. An Acquirer is typically a merchant or organization that is responsible for processing card payments and managing merchant accounts</p>
            </div>
            <div className='mx-auto w-full sm:w-[80%] py-4'>
              <h2 className="text-base sm:text-[1.5rem] text-gray-700 font-semibold mb-2">Requirements to Become an Merchant</h2>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px] py-2">
                <li className='py-2'>Merchant must have a Company</li>
                <li className='py-2'>Provide valid business registration</li>
              </ul>
            </div>
            <div className="mx-auto w-full sm:w-[80%] py-4">
              <h2 className="text-base sm:text-[1.5rem] text-gray-700 font-semibold mb-5">Why Become an Merchant?</h2>
              <p className="text-sm sm:text-[14px] text-gray-700 mb-6 sm:mb-10"></p>
              <h2 className="text-base sm:text-[1.5rem] mb-5 sm:mb-7 text-gray-700 font-semibold">{t('acquirerIntro.benefitsTitle')}</h2>
              <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px]">
                <li className='py-2'>{t('acquirerIntro.benefit1')}</li>
                <li className='py-2'>{t('acquirerIntro.benefit2')}</li>
          
              </ul>
            </div>
          </div>
        </div>
  )
}

export default Introduction