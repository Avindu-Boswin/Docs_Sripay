import React from 'react'
import EmailLogo from '../../assets/images/acquirer/message.png'
import CallLogo from '../../assets/images/acquirer/telephone-call.png'
import SriPay from '../../assets/images/Sripay_logo_traingle.png'

function Support() {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
   
               <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
                   Support Information
               </h1>
   
               <div className='w-full h-[70px] bg-blue-100 border rounded-[5px] flex items-center justify-center mt-10'>
                   <span className='text-sm sm:text-base font-semibold text-gray-700 text-center'>
                       If you need assistance, please contact the SriPay Merchant Support Team:
                   </span>
               </div>
   
               <div className='py-10 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed'>
   
                   {/* Email Section */}
                   <div>
                       <div className='flex justify-start items-center gap-3'>
                           <img src={EmailLogo} alt='emailImage' className='w-[10] h-10' />
                           <h3 className='font-semibold text-2xl mt-4'>Email</h3>
                       </div>
                       <span className='text-sm'>
                           Contact the specific business or technical support team relevant to your needs, and we will get back to you within 1 business day:
                       </span>
                       <h3 className='mt-10 text-xl xl:text-base'>SriPay Merchant support</h3>
                       <ul className='px-7'>
                           <li className='py-2'>
                               Address:{' '}
                               <a href="mailto:admin@sripay.lk" className='text-blue-500'>
                                   admin@sripay.lk
                               </a>
                           </li>
                           <li>Working hours: 24 hours, Monday–Sunday, UTC+8</li>
                       </ul>
                   </div>
   
                   {/* Website Section */}
                   <div>
                       <div className='flex justify-start items-center gap-3'>
                           <img src={SriPay} alt='websiteLogo' className='w-[10] h-10' />
                           <h3 className='font-semibold text-2xl mt-4'>Website</h3>
                       </div>
                       <span className='text-sm'>
                           Visit our official website for more details, documentation, and the latest updates about our services.
                       </span>
                       <h3 className='mt-10 text-xl xl:text-base'>SriPay Merchant support</h3>
                       <ul className='px-7'>
                           <li className='py-2'>
                               Web Link:{' '}
                               <a href="https://www.sripay.lk" target="_blank" rel="noopener noreferrer" className='text-blue-500'>
                                   www.sripay.lk
                               </a>
                           </li>
                       </ul>
                   </div>
   
                   {/* Mobile Section */}
                   <div>
                       <div className='flex justify-start items-center gap-3'>
                           <img src={CallLogo} alt='callLogo' className='w-[10] h-10' />
                           <h3 className='font-semibold text-2xl mt-4'>Mobile</h3>
                       </div>
                       <span className='text-sm'>
                           Reach out directly via phone for immediate assistance with merchant handling or technical support.
                       </span>
   
                       <h3 className='mt-10 text-xl xl:text-base'>SriPay Merchant  support</h3>
                       <ul className='px-7'>
                           <li className='py-2'>
                               Mobile:{' '}
                               <span className='text-blue-500'>+94 76 703 5500 (Ms. Nishadi)</span>
                           </li>
                           <li>Working hours: 24 hours, Monday–Sunday, UTC+8</li>
                       </ul>
   
                       <h3 className='mt-10 text-xl xl:text-base'>SriPay Merchant Technical support</h3>
                       <ul className='px-7'>
                           <li className='py-2'>
                               Mobile:{' '}
                               <span className='text-blue-500'>+94 76 664 1614 (Mr. Rusith)</span>
                           </li>
                           <li>Working hours: 24 hours, Monday–Sunday, UTC+8</li>
                       </ul>
                   </div>
               </div>
           </div>
  )
}

export default Support