import React from 'react'

function Faq() {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
         <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
         Frequently Asked Questions 
      </h1>
      <div className='pt-7'>
      <span className='font-semibold  text-gray-800 text-lg '>Q1: Can I edit a merchant’s KYC after submission?</span>
      <p className='pl-5 mt-3 text-gray-700'>A: No. Once submitted, edits cannot be made. You must reject the submission and ask
      the merchant to re-register.</p>
      </div>
      <div className='pt-6'>
      <span className='font-semibold  text-gray-800 text-lg '>Q2: What types of businesses are supported?</span>
      <p className='pl-5 mt-3 text-gray-700'>A: SriPay supports Sole Proprietorships, Partnerships, Private and Public Limited
      Companies across a wide range of industries.</p>
      </div>
     
      <div className='pt-6'>
      <span className='font-semibold  text-gray-800 text-lg '>Q3: Can I use my own Merchant ID?</span>
      <p className='pl-5 mt-3 text-gray-700'>A: Yes. If your custom Merchant ID is available, the system will validate and accept it.</p>
      </div>
      <div className='pt-6'>
      <span className='font-semibold  text-gray-800 text-lg '>Q4: What happens after I approve a merchant?</span>
      <p className='pl-5 mt-3 text-gray-700'>A: The request is forwarded to SriPay for second-level review, then to Alipay for final
      evaluation. You will be notified at each stage.</p>
      </div>
      <div className='pt-6'>
      <span className='font-semibold  text-gray-800 text-lg '>Q5: What if two merchants have the same email?</span>
      <p className='pl-5 mt-3 text-gray-700'>A: Duplicate emails are not allowed. Each merchant must register with a unique email
      address.</p>
      </div>
     
     
    </div>
  )
}

export default Faq