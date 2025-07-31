import React from 'react';
import { useTranslation } from 'react-i18next';

import Img1 from '../../assets/images/merchant/Img1.png';
import Img2 from '../../assets/images/merchant/Img2.png';
import Img3 from '../../assets/images/merchant/Img3.png';

function GettingStart() {
  const { t } = useTranslation();

  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        Getting Started
      </h1>

      <h3 className='text-xl mt-10 py-1'>If you want to become a Merchant via SriPay ?</h3>
      <span className='text-base text-gray-700'>
        Merchants can register directly with <span className='text-blue-500'>SriPay</span> as an acquirer using{' '}
        <a
          href="https://acquirer.sripay.lk/"
          target="_blank"
          rel="noopener noreferrer"
          className='text-blue-500'
        >
          www.acquirer.sripay.lk
        </a>{' '}
        link. Merchants should provide valid details in this process.
      </span>

      <h3 className='text-xl mt-8 py-1'>Do you have an Acquirer?</h3>
      <span className='text-gray-700'>
        Merchants can also sign up through their respective acquirer, who partners with SriPay.
      </span>

      {/* Step 1 */}
      <div className='w-full mt-10'>
        <h2 className='text-3xl font-semibold py-3'>Sign Up</h2>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>Step 1 :</span>
        <p className='py-4 ml-10'>
          Enter your personal details such as first name, last name, mobile number, and email address accurately to begin the sign-up process.
        </p>
        <img src={Img1} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>

      {/* Step 2 */}
      <div className='w-full mt-10'>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>Step 2 :</span>
        <p className='py-4 ml-10'>
          Verify your mobile number using the OTP sent to your registered phone to proceed securely.
        </p>
        <img src={Img2} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>

      {/* Step 3 */}
      <div className='w-full mt-10'>
        <span className='text-xl sm:text-2xl font-semibold text-gray-700 ml-4'>Step 3 :</span>
        <p className='py-4 ml-10'>
          Set up your account by creating a password and agreeing to the terms to complete registration.
        </p>
        <img src={Img3} className='mx-auto mb-8 my-6 block md:w-4/5' />
      </div>
    </div>
  );
}

export default GettingStart;
