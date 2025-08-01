import React from 'react';

function Troubleshooting() {
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-10 mb-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        Troubleshooting Guide
      </h1>

      <p className='text-gray-700 text-base leading-relaxed mb-6'>
        This guide provides solutions to common issues faced by  Merchants, and Store Users in SriPay.
      </p>

    
      {/* Merchant Issues */}
      <section className='mb-10'>
        <h2 className='text-xl sm:text-2xl font-semibold text-blue-800 mb-4'>Merchant Issues</h2>
        <ul className='list-disc pl-6 space-y-8 text-gray-700 text-sm sm:text-base'>
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
        </ul>
      </section>

      {/* Store User Issues */}
      <section className='mb-10'>
        <h2 className='text-xl sm:text-2xl font-semibold text-blue-800 mb-4'>Store User Issues</h2>
        <ul className='list-disc pl-6 space-y-4 text-gray-700 text-sm sm:text-base'>
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

      {/* Contact Info */}
      <div className='mt-10 bg-blue-100 p-6 rounded-lg text-center text-sm sm:text-base text-gray-700'>
        <p>If your issue is not listed here, please contact the SriPay Technical Support Team:</p>
        <p className='mt-2'><strong>Email:</strong> support@sripay.lk</p>
        <p><strong>Phone:</strong> +94 76 664 1614</p>
      </div>
    </div>
  );
}

export default Troubleshooting;
