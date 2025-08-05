import React from 'react';

function Troubleshooting() {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-10 mb-20'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6 sm:mb-8'>
        Troubleshooting
      </h1>

      <p className='text-gray-700 text-sm sm:text-base leading-relaxed mb-8'>
        This guide provides solutions to common issues faced by Merchants and Store Users in SriPay.
      </p>

      {/* Merchant Issues */}
      <section className='mb-12'>
        <h2 className='text-lg sm:text-xl md:text-2xl  mb-4'>
          Merchant Issues
        </h2>
        <ul className='list-disc pl-5 sm:pl-6 space-y-6 sm:space-y-8 text-gray-700 text-sm sm:text-base'>
          <li>
            <strong>Issue:</strong> OTP not received during store user assignment<br />
            <strong>Solution:</strong> Ask the user to check their spam folder. Ensure a valid email address was entered.
          </li>
          <li>
            <strong>Issue:</strong> Cannot assign store user<br />
            <strong>Solution:</strong> Ensure all fields (Full Name, Email, Password) are filled and email is unique.
          </li>
          <li>
            <strong>Issue:</strong> Merchant registration stuck on "Waiting for Approval"<br />
            <strong>Solution:</strong> This is normal. Wait until the Acquirer approves the request. No user action is required.
          </li>
          <li>
            <strong>Issue:</strong> Media Uploading Error in Gallery<br />
            <strong>Solution:</strong> Ensure the uploaded media file is at least 10MB in size. Files smaller than 10MB may not be accepted.
          </li>
        </ul>
      </section>

      {/* Store User Issues */}
      <section className='mb-12'>
        <h2 className='text-lg sm:text-xl md:text-2xl  mb-4'>
          Store User Issues
        </h2>
        <ul className='list-disc pl-5 sm:pl-6 space-y-6 text-gray-700 text-sm sm:text-base'>
          <li>
            <strong>Issue:</strong> Email verification failed<br />
            <strong>Solution:</strong> Resend the OTP from the merchant dashboard. Ensure the user is using the correct OTP within the time limit.
          </li>
          <li>
            <strong>Issue:</strong> Login not working<br />
            <strong>Solution:</strong> Make sure the account is verified and active. Try resetting the password if necessary.
          </li>
        </ul>
      </section>

      
    </div>
  );
}

export default Troubleshooting;
