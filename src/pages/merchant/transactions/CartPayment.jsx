import React from 'react'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../../assets/images/merchant/Img37.png';
import Img2 from '../../../assets/images/merchant/Img38.png';

function CartPayment() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        Card Payments
      </h1>

      <p className="text-gray-700 text-base md:text-base mb-6 ">
        SriPay offers seamless card payment acceptance through <strong> Visa, Mastercard,</strong> and <strong> UnionPay </strong>. Merchants can process both domestic and international transactions with ease, enabling fast, secure, and reliable card-based payments. Whether it's online or in-store, SriPay ensures a frictionless experience for your customers while maintaining the highest security standards.
      </p>

      <div className="mt-6 mb-10">
        <Zoom>
          <img src={Img2} alt="Card Payment Interface Screenshot" className="rounded-md shadow mx-auto md:w-4/5" />
        </Zoom>
      </div>

      {/* Styled Description Block */}
      <div className=" p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Payment Link Creation
        </h2>
        <p className="text-gray-700 mb-4">
          This screen confirms that a merchant has successfully created a <strong>card payment link</strong> for a customer. 
          The pop-up message <strong>“Payment Link Created Successfully!”</strong> indicates that the transaction has been initialized. 
          The merchant can see key details such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li className='py-1'><strong>Client Reference</strong> – Unique transaction identifier for internal tracking.</li>
          <li  className='py-1'><strong>Request ID</strong> – Unique request token for the payment API call.</li>
          <li  className='py-1'><strong>Expires At</strong> – The date and time after which the payment link will no longer be valid.</li>
          <li  className='py-1'><strong>Payment Page URL</strong> – A secure link to the customer-facing payment page, which can be opened directly or copied for sharing.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Below, there’s an <strong>“Open Payment Page”</strong> button for instant access, and the 
          “Next Steps” note explains that the customer must complete payment before the expiry time.
        </p>
      </div>

      <div className="mt-6 mb-10">
        <Zoom>
          <img src={Img1} alt="Card Transaction Screenshot" className="rounded-md shadow mx-auto md:w-4/5" />
        </Zoom>
      </div>
    </div>
  )
}

export default CartPayment;
