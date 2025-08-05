import React, { useState } from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import UserCode from '../../../assets/images/merchant/AlipayLogo.png';
import Img1 from '../../../assets/images/merchant/Img19.png';
import Img2 from '../../../assets/images/merchant/Img20.png';
import Img3 from '../../../assets/images/merchant/Img21.png';
import Img4 from '../../../assets/images/merchant/Img23.png';
import Img5 from '../../../assets/images/merchant/Img24.png';
import Img6 from '../../../assets/images/merchant/Img25.png';
import OrderCode from '../../../assets/images/merchant/Qr.jpg';
import EntryCode from '../../../assets/images/Sripay_logo_traingle.png';
import VisaIcon from '../../../assets/images/merchant/VisaMaster.jpg';
import UsdtIcon from '../../../assets/images/merchant/USDT.png';

function Instore() {
  const [selectedMethodIdx, setSelectedMethodIdx] = useState(0); // Auto-select Alipay Plus

  const methods = [
    {
      title: 'Alipay Plus',
      description: 'Customers scan the merchant-generated QR code with the order information to pay.',
      icon: UserCode,
      disabled: false,
      details: (
        <>
          <h4 className="text-2xl font-bold mb-2">Alipay Plus Details</h4>
          <div className="mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Enter Transaction Value</h4>
            <span className="text-sm text-gray-600">
              The merchant can choose the preferred currency type — either <strong>LKR</strong> or <strong>USD</strong> — before entering the amount.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img3} alt="Enter Amount Screenshot" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Scan QR Code</h4>
            <span className="text-gray-700 text-base">
              Scan the QR code below using your device with the{' '}
              <a href="https://sripay.lk/wallets" target="_blank" rel="noopener noreferrer">
                <strong>Alipay plus & support wallets</strong>
              </a>{' '}
              app to complete the payment.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img4} alt="Scan QR" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Payment Complete</h4>
            <span className="text-gray-700 text-base">
              After completing the payment, the merchant will see a <strong>Payment Received</strong> success message.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img5} alt="Payment Success" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Scan Pay QR Via Alipay Plus',
      description: 'Merchants scan the user presented QR code to collect payment.',
      icon: OrderCode,
      disabled: false,
      details: (
        <>
          <h4 className="text-2xl font-bold mb-2">Scan Pay QR Via Alipay Plus</h4>
          <div className="mt-8 p-6 bg-white rounded-lg shadow border border-gray-200">
            <h4 className="text-xl font-semibold text-gray-700 mb-4">Enter Transaction Value</h4>
            <span className="text-sm text-gray-600">
              The merchant can choose the preferred currency type — either <strong>LKR</strong> or <strong>USD</strong> — before entering the amount.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img3} alt="Scan QR Code" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Scan the QR Code</h4>
            <span className="text-sm text-gray-600">
              After creating the transaction, <strong>Alipay Plus generates a QR code</strong>. Use your device’s camera (as shown below) to scan and confirm the code securely.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img6} alt="Camera Scanner Popup" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>

            <h4 className="text-xl font-semibold text-gray-700 mb-4 mt-10">Payment Complete</h4>
            <span className="text-gray-700 text-base">
              Once the payment is complete, the merchant will see a success message indicating <strong>Payment Received</strong>.
            </span>
            <div className="mt-6">
              <Zoom>
                <img src={Img5} alt="Payment Success" className="rounded-md shadow mx-auto md:w-4/5" />
              </Zoom>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Sri Pay',
      description: 'Enable seamless in-store payments from global customers with one simple integration.',
      icon: EntryCode,
      disabled: false,
      details: (
        <div className="p-8 bg-white rounded-lg border border-yellow-300 shadow-md text-center">
          <h4 className="text-2xl font-bold text-yellow-700 mb-4">Sri Pay</h4>
          <p className="text-base text-gray-700">This payment method is <strong>coming soon</strong>!</p>
          <p className="text-sm text-gray-500 mt-2">Stay tuned for future updates.</p>
        </div>
      ),
    },
    {
      title: 'Visa/Master',
      description: 'Accept payments from global customers via credit or debit cards.',
      icon: VisaIcon,
      disabled: true,
      details: (
        <>
          <h4 className="text-lg font-bold mb-2 text-blue-700">Visa/Master Details</h4>
          <p className="text-gray-700 mb-2">Feature coming soon! Accept worldwide Visa/MasterCard payments securely at your counter.</p>
          <p className="text-sm text-gray-500">You’ll be able to accept both chip and contactless card payments.</p>
        </>
      ),
    },
    {
      title: 'USDT',
      description: 'Let your customers pay securely using Tether (USDT) cryptocurrency.',
      icon: UsdtIcon,
      disabled: true,
      details: (
        <>
          <h4 className="text-lg font-bold mb-2 text-blue-700">USDT Details</h4>
          <p className="text-gray-700 mb-2">Coming soon: Accept payments in USDT, one of the world’s leading cryptocurrencies.</p>
          <p className="text-sm text-gray-500">Seamless conversion to LKR with low transaction fees.</p>
        </>
      ),
    },
  ];

  const selectedMethod = selectedMethodIdx !== null ? methods[selectedMethodIdx] : null;

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">In-store payments</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 gap-6">
        <p className="text-gray-600 sm:text-sm md:w-[55%] max-w-3xl text-base">
          Enable seamless in-store payments from global customers with one simple integration. Discover how advanced digital payment solutions and QR code technology can streamline transactions, reduce costs, and enhance the customer experience at your physical store.
        </p>
        <div className="w-full max-w-xs sm:max-w-sm md:w-[430px] aspect-video shadow rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/7cIP0NDv-0s?autoplay=1&mute=1&loop=1&playlist=7cIP0NDv-0s"
            title="QR Payment Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      <h3 className="text-2xl text-gray-700 py-7">How to create a Transaction?</h3>
      <p>Click <strong>Transactions</strong> &gt; <strong>Alipay+ InStore</strong> &gt; <strong>Create Transaction</strong>.</p>
      <ul className="list-disc list-inside ml-4 mt-4 mb-10">
        <li>Select or type the <strong>Store</strong></li>
        <li>Select or type the <strong>Terminal</strong></li>
        <li>Select or type the <strong>Purpose of Payment</strong></li>
      </ul>
      <Zoom>
        <img src={Img1} alt="Create Transaction" className="mx-auto my-6 block md:w-4/5 rounded-lg shadow" />
      </Zoom>

      <h3 className="text-2xl text-gray-700 py-7">Step 2: Select Payment Method</h3>
      <Zoom>
        <img src={Img2} alt="Select Payment Method" className="mx-auto my-6 block md:w-4/5 rounded-lg shadow" />
      </Zoom>

      <div className="bg-blue-100 my-10 border px-4 py-4 rounded-md text-blue-700 text-center">
        Want to know more about each payment method? Click on any payment option below to learn how it works.
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {methods.map((method, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-lg p-6 text-center transition duration-300
              ${method.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg cursor-pointer'}
              ${selectedMethodIdx === index && !method.disabled ? 'ring-2 ring-blue-400' : ''}
            `}
            onClick={() => {
              if (!method.disabled) setSelectedMethodIdx(index);
            }}
          >
            <img src={method.icon} alt={method.title} className="mx-auto h-20 md:h-24 mb-4 object-contain" />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{method.title}</h3>
            <p className="text-sm text-gray-600">{method.description}</p>
          </div>
        ))}
      </div>

      {selectedMethod && !selectedMethod.disabled && (
        <div className="mt-10 p-6 bg-blue-100 rounded-xl shadow-lg border border-blue-100 max-w-full mx-auto animate-fade-in">
          {selectedMethod.details}
        </div>
      )}

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease;
          }
        `}
      </style>
    </div>
  );
}

export default Instore;
