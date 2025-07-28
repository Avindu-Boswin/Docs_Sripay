import React from 'react';
import SuspendImage from '../../assets/images/acquirer/img302.jpg'

function MerchantSuspend() {
  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        Suspending Merchant
      </h1>

      <div className='w-full px-4 sm:px-6 md:px-10 py-6 bg-white '>
        <h2 className='text-xl  text-gray-800 mb-4'>How to suspend a merchant:</h2>
        <ol className='list-decimal list-inside space-y-3 text-gray-700 px-5 text-base leading-relaxed'>
          <li>
            Click on the three dots <span className="font-bold">”⋮”</span> next to the merchant name.
          </li>
          <li>
            Select <span className="font-semibold text-red-600">Suspend</span>.
          </li>
          <li>
            A popup will prompt you to enter a reason before confirming the suspension.
          </li>
        </ol>
      </div>

      <img src={SuspendImage} alt='suspentImage' className="mx-auto  mb-10 my-6 block md:w-4/5" />
      <span className="block text-sm sm:text-base leading-relaxed px-4 sm:px-6 md:px-8 text-gray-700">
        Suspended merchants will be moved to the <span className="font-semibold">Suspended</span> tab and can only be reactivated by contacting
        <span className="text-blue-500 font-semibold px-1 sm:px-1 md:px-1">SriPay</span>
      </span>

    </div>
  );
}

export default MerchantSuspend;
