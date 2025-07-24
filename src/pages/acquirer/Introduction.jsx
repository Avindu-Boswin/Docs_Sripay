import React from 'react'
import Businessman_pana from '../../assets/Businessman_pana.svg';

function WhoCanbeAcquirer() {
  return (
    <div className="w-full   l ml-8 sm:py-10">
      <div className="mx-auto w-full max-w-4xl flex flex-col md:flex-row justify-center gap-7 items-center">
        <div className="w-full md:w-full text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-blue-700 font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-tight">
            Who Can Be an <span className='block md:inline pl-0 md:pl-[40%]'>Acquirer?</span>
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Businessman_pana} alt="acquirer" className="w-48 h-32 sm:w-72 sm:h-44 md:w-[500px] md:h-[300px] object-contain" />
        </div>
      </div>
      <div className='pl-[150px]'>
   
      <div className='w-full sm:w-[80%] mx-auto mt-8 sm:mt-10 font-semibold text-base sm:text-lg text-gray-700'>
        <p>
          Becoming an Acquirer is a significant step for merchants who wish to expand their payment processing capabilities and offer seamless transactions to their customers. An Acquirer is typically a merchant or organization that is responsible for processing card payments and managing merchant accounts.
        </p>
      </div>
      <div className='mx-auto w-full sm:w-[80%] py-4'>
        <h2 className="text-base sm:text-[2rem] text-gray-700 font-semibold mb-2">Requirements to Become an Acquirer</h2>
        <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px] py-2">
          <li className='py-1'>Merchant must have been operating for a minimum of <span className="font-semibold">6 months</span>.</li>
          <li className='py-1'>Merchant should have processed at least <span className="font-semibold">100 transactions</span> during this period.</li>
          <li className='py-1'>Maintain a good transaction record with minimal chargebacks or disputes.</li>
          <li className='py-1'>Provide valid business registration and compliance documents.</li>
          <li className='py-1'>Demonstrate the ability to manage payment settlements and reconciliation.</li>
        </ul>
      </div>
      <div className="mx-auto w-full sm:w-[80%] py-4">
        <h2 className="text-base sm:text-[2rem] text-gray-700 font-semibold mb-5">Why Become an Acquirer?</h2>
        <p className="text-sm sm:text-[14px] text-gray-700 mb-6 sm:mb-10">
          Becoming an Acquirer allows merchants to take control of their payment processing, improve transaction efficiency, and offer a better experience to their customers. It opens up new business opportunities and helps build trust with partners and clients.
        </p>
        <h2 className="text-base sm:text-[2rem] mb-5 sm:mb-7 text-gray-700 font-semibold">Benefits & Features</h2>
        <ul className="list-disc pl-5 sm:pl-6 text-gray-700 text-sm sm:text-[14px]">
          <li className='py-1'>Direct access to payment networks and faster settlements.</li>
          <li className='py-1'>Enhanced security and fraud prevention tools.</li>
          <li className='py-1'>Ability to onboard and manage multiple merchants.</li>
          <li className='py-1'>Customizable payment solutions for different business needs.</li>
          <li className='py-1'>Detailed reporting and analytics for transaction monitoring.</li>
          <li className='py-1'>Priority support and dedicated account management.</li>
        </ul>
      </div>
           
      </div>
    </div>
  )
}

export default WhoCanbeAcquirer