import React from 'react'
import EmailLogo from '../../assets/images/acquirer/message.png'

function Support() {
    return (
        <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Support Information
            </h1>


            <div>

            </div>
            <div className='w-full h-[70px]  bg-blue-200 rounded-[5px] flex items-center justify-center'>
                <span className='text-sm sm:text-base font-semibold text-gray-700 text-center'>
                    If you need assistance, please contact the SriPay Sub-Acquirer Support Team:
                </span>
            </div>
            <div className='py-10 space-y-3 text-sm sm:text-base text-gray-700  leading-relaxed'>
                <div className='flex justify-start items-center gap-3  '>
                    <img src={EmailLogo} alt='emailImage' className='w-[6%] h-10  '/>
                    <h3 className='font-semibold  text-3xl mt-4'>Email</h3>
                </div>
                <span className='text-sm'>Contact the specific business or technical support team relevant to your needs, and we will get back to you within 1 business day:</span>



                {/* <div>
                    <span className='font-semibold mr-2'>Email:</span>
                    <span>admin@sripay.lk</span>
                </div>

                <div>
                    <span className='font-semibold mr-2'>Phone (Merchant Handling):</span>
                    <span>+94 76 703 5500 (Ms. Nishadi)</span>
                </div>

                <div>
                    <span className='font-semibold mr-2'>Phone (Technical):</span>
                    <span>+94 76 664 1614 (Mr. Rusith)</span>
                </div>

                <div>
                    <span className='font-semibold mr-2'>Website:</span>
                    <a href="https://www.sripay.lk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        www.sripay.lk
                    </a>
                </div> */}
            </div>
        </div>

    )
}

export default Support