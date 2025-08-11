import React, { useState } from 'react';
import Img6 from '../../../assets/images/merchant/Img26.png';
import Img7 from '../../../assets/images/merchant/Img27.png';
import Img8 from '../../../assets/images/merchant/Img28.png';
import Img9 from '../../../assets/images/merchant/Img30.png';
import Img10 from '../../../assets/images/merchant/Img31.png';
import Img11 from '../../../assets/images/merchant/Img32.png';
import Img12 from '../../../assets/images/merchant/Img33.png';
import Img13 from '../../../assets/images/merchant/Img34.png';
import Img14 from '../../../assets/images/merchant/Img35.png';
import Img15 from '../../../assets/images/merchant/Img36.png';
import Img16 from '../../../assets/images/merchant/Img29.png';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Online() {
  const [activeTab, setActiveTab] = useState('have a wallet');
  const [haveWalletPayType, setHaveWalletPayType] = useState('web');
  const [noWalletPayType, setNoWalletPayType] = useState('web');

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        Online Payments
      </h1>

      
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 gap-6">
        <p className="text-gray-600 sm:text-sm md:w-[55%] max-w-3xl text-base">
          A single integration into Antom, allows you to accept all onboarded e-wallets, cards, and alternative
          payment methods. When new payment channels are onboarded in the future, you can also start accepting
          them with minimal effort.
          <br />
          <br />
          Learn how the different online payment types can facilitate your payment collection using the resources
          below.
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

      {/* Step to Create Transaction */}
      <h3 className="text-2xl text-gray-700 py-7">How to create an Online Transaction?</h3>
      <p>
        Click <strong>Transactions</strong> &gt; <strong>Alipay + Online</strong> &gt;{' '}
        <strong>Create Transaction</strong>.
      </p>

      <div className="mt-6 mb-10">
        <Zoom>
          <img src={Img6} alt="Enter Amount Screenshot" className="rounded-md shadow mx-auto md:w-4/5" />
        </Zoom>
        <h4 className='bg-blue-100 border rounded-md py-6 text-gray-600 text-sm  px-8 my-10  ' >Note : If you are targeting a specific wallet for the transaction, you can click on the 'Target Wallets' tab to view all related information. If you are targeting all wallets, you can access the relevant details by clicking on the 'Target All Wallets' tab. </h4>
      </div>

      {/* Main Tabs */}
      <div>
        <div className="flex border-b mb-6">
          <button
            onClick={() => setActiveTab('have a wallet')}
            className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${activeTab === 'have a wallet'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
          >
            Target Wallet
          </button>
          <button
            onClick={() => setActiveTab('haven not wallet')}
            className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${activeTab === 'haven not wallet'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
          >
            Target All Wallets
          </button>
        </div>

        {/* I HAVE A WALLET TAB */}
        {activeTab === 'have a wallet' && (
          <>
            <p className="text-gray-600 sm:text-sm max-w-3xl text-base mb-6">
              When merchant darget a wallet, they can proceed by choosing how they will complete the payment:
              either via <strong>Web</strong> or <strong>Mobile</strong>.
            </p>

            <div className="flex border-b mb-6">
              <button
                onClick={() => setHaveWalletPayType('web')}
                className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${haveWalletPayType === 'web'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
                  }`}
              >
                Web
              </button>
              <button
                onClick={() => setHaveWalletPayType('mobile')}
                className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${haveWalletPayType === 'mobile'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
                  }`}
              >
                Mobile
              </button>
            </div>

            {haveWalletPayType === 'web' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">Web Payment Flow</h4>
                <p className=' text-base text-gray-700 text-sm py-1 '>In this process, the merchant initiates an Alipay+ transaction by selecting the Web payment method. A payment link is generated, which can be directly shared with the customer. The customer completes the payment by opening the link in their browser</p>
                <Zoom>
                  <img src={Img9} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Select Payment Method</h4>
                <p className="text-gray-700 text-base  text-sm py-1">
                  At this step, the merchant can choose the preferred <strong>payment method</strong> for the transaction.
                  Available options include <strong>Alipay+</strong> and
                  <strong> <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">Sri Pay</a></strong>.
                  This selection determines the processing flow and payment experience for the customer.
                </p>

                <Zoom>
                  <img src={Img13} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Payment Receipt Details</h4>
                <p className=' text-base text-gray-700 text-sm py-1 '>Merchants can initiate a transaction by generating a QR code, which customers can scan to complete the payment. Additionally, the payment link can be copied or shared directly with another customer, providing flexibility in how the transaction is completed.</p>

                <Zoom>

                  <img src={Img10} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
              </div>
            )}

            {haveWalletPayType === 'mobile' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">Mobile Payment Flow</h4>
                <p className='text-base text-gray-700 text-sm py-1 '>Merchants can select the User Pay Type as Mobile, allowing them to define the customer's device environment for the transaction. Once selected, they can further specify the user’s operating system (iOS or Android) and the payment mode (In-App or In-Browser) to ensure a seamless payment experience.

                </p>

                <Zoom>
                  <img src={Img15} alt="Mobile Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Select Payment Method</h4>
                <p className="text-gray-700 text-base  text-sm py-1">
                  At this step, the merchant can choose the preferred <strong>payment method</strong> for the transaction.
                  Available options include <strong>Alipay+</strong> and
                  <strong> <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">Sri Pay</a></strong>.
                  This selection determines the processing flow and payment experience for the customer.
                </p>

                <Zoom>
                  <img src={Img13} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Payment Receipt Details</h4>
                <p className="text-gray-700 text-base  text-sm py-1">At this step, the merchant can complete the transaction using the payment link and share it with the customer.</p>

                <Zoom>
                  <img src={Img12} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
              </div>
            )}
          </>
        )}

        {/* I HAVEN'T A WALLET TAB */}
        {activeTab === 'haven not wallet' && (
          <>
            <p className="text-gray-600 sm:text-sm max-w-3xl text-base mb-6">
              When merchant darget all wallet, they can still proceed using either <strong>Web</strong> or{' '}
              <strong>Mobile</strong> payment method based on the option they choose below.
            </p>

            <div className="flex border-b mb-6">
              <button
                onClick={() => setNoWalletPayType('web')}
                className={`px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${noWalletPayType === 'web'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
                  }`}
              >
                Web
              </button>
              <button
                onClick={() => setNoWalletPayType('mobile')}
                className={`ml-4 px-4 py-2 text-sm sm:text-base font-medium border-b-2 ${noWalletPayType === 'mobile'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-600 hover:text-green-600'
                  }`}
              >
                Mobile
              </button>
            </div>

            {noWalletPayType === 'web' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">Web Payment Flow</h4>
                <p className="text-gray-700 text-base  text-sm py-1" >When 'Web' is selected as the User Pay Type, the customer completes the transaction directly through their web browser without using a mobile app. This option is ideal for desktop or browser-based payments, providing a straightforward and app-free checkout experience.</p>
                <Zoom>
                  <img src={Img7} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Select Payment Method</h4>
                <p className="text-gray-700 text-base  text-sm py-1">
                  At this step, the merchant can choose the preferred <strong>payment method</strong> for the transaction.
                  Available options include <strong>Alipay+ </strong> and
                  <strong> <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">Sri Pay</a></strong>.
                  This selection determines the processing flow and payment experience for the customer.
                </p>

                <Zoom>
                  <img src={Img8} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Payment Receipt Details</h4>
                <p className="text-gray-700 text-base  text-sm py-1">At this step, the merchant can complete the transaction using the payment link and share it with the customer.</p>

                <Zoom>
                  <img src={Img14} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>

              </div>
            )}

            {noWalletPayType === 'mobile' && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-700 mb-3">Mobile Payment Flow</h4>
                <p className='text-base text-gray-700 text-sm py-1 '>Merchants can select the User Pay Type as Mobile, allowing them to define the customer's device environment for the transaction. Once selected, they can further specify the user’s operating system (iOS or Android) and the payment mode (In-App or In-Browser) to ensure a seamless payment experience.

</p>
                <Zoom>

                  <img src={Img11} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Select Payment Method</h4>
                <p className="text-gray-700 text-base  text-sm py-1">
                  At this step, the merchant can choose the preferred <strong>payment method</strong> for the transaction.
                  Available options include <strong>Alipay+ </strong> and
                  <strong> <a href="https://connect.sripay.lk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ">Sri Pay</a></strong>.
                  This selection determines the processing flow and payment experience for the customer.
                </p>
                <Zoom>
                  <img src={Img8} alt="Mobile Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />
                </Zoom>
                <h4 className='text-xl text-gray-700 mb-3 mt-8'>Payment Receipt Details</h4>
                <p className=' text-base text-gray-700 text-sm py-1 '>Merchants can initiate a transaction by generating a QR code, which customers can scan to complete the payment. Additionally, the payment link can be copied or shared directly with another customer, providing flexibility in how the transaction is completed.</p>

                <Zoom>

                  <img src={Img16} alt="Web Pay Flow" className="rounded-md shadow mx-auto md:w-4/5" />

                </Zoom>

              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Online;
