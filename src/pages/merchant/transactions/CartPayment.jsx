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

      <p className="text-gray-600 text-base md:text-base mb-6 ">
        SriPay offers seamless card payment acceptance through Visa, Mastercard, and UnionPay. Merchants can process both domestic and international transactions with ease, enabling fast, secure, and reliable card-based payments. Whether it's online or in-store, SriPay ensures a frictionless experience for your customers while maintaining the highest security standards.
      </p>

      <div className="mt-6 mb-10">
        <Zoom>
          <img src={Img2} alt="Card Payment Interface Screenshot" className="rounded-md shadow mx-auto md:w-4/5" />
        </Zoom>
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
