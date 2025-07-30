import React from 'react'
import QuestionImage from '../../assets/images/acquirer/Questions-amico.svg'

import { useTranslation } from 'react-i18next';


function Faq() {
    const { t } = useTranslation();
    const questions = t('faq.questions', { returnObjects: true });
  return (
     <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
            Frequently Asked Questions
          </h1>
    
          <div className='w-full flex flex-col lg:flex-row justify-between items-center gap-10 mt-10'>
            {/* Left Image */}
            <div className='w-full lg:w-1/2 flex justify-center'>
              <img src={QuestionImage} alt='FAQ Illustration' className='w-full max-w-[500px] h-auto' />
            </div>
    
            {/* Right FAQ Content */}
            <div className='w-full lg:w-1/2 p-5 sm:p-8 md:p-10 bg-blue-50 rounded-[3rem]'>
              <div className='space-y-6 text-sm sm:text-base'>
                <div>
                  <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                    Q1: Can I edit a merchant’s KYC after submission?
                  </span>
                  <p className='pl-5 mt-2 text-gray-700'>
                    A: No. Once submitted, edits cannot be made. You must reject the submission and ask
                    the merchant to re-register.
                  </p>
                </div>
    
                <div>
                  <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                    Q2: What types of businesses are supported?
                  </span>
                  <p className='pl-5 mt-2 text-gray-700'>
                    A: SriPay supports Sole Proprietorships, Partnerships, Private and Public Limited
                    Companies across a wide range of industries.
                  </p>
                </div>
    
                <div>
                  <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                    Q3: Can I use my own Merchant ID?
                  </span>
                  <p className='pl-5 mt-2 text-gray-700'>
                    A: Yes. If your custom Merchant ID is available, the system will validate and accept it.
                  </p>
                </div>
    
                <div>
                  <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                    Q4: What happens after I approve a merchant?
                  </span>
                  <p className='pl-5 mt-2 text-gray-700'>
                    A: The request is forwarded to SriPay for second-level review, then to Alipay for final
                    evaluation. You will be notified at each stage.
                  </p>
                </div>
    
                <div>
                  <span className='font-semibold text-gray-800 text-base sm:text-lg'>
                    Q5: What if two merchants have the same email?
                  </span>
                  <p className='pl-5 mt-2 text-gray-700'>
                    A: Duplicate emails are not allowed. Each merchant must register with a unique email
                    address.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Faq