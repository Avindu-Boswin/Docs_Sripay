import React , { useEffect } from 'react'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';


import Img1 from '../../../assets/images/merchant/Img45.png';
import Img3 from '../../../assets/images/merchant/Img41.png';
import Img2 from '../../../assets/images/merchant/Img40.png';
import Img4 from '../../../assets/images/merchant/Img46.png';
function CardPayment() {

  const { setSections } = useSections();
  const {t} = useTranslation;

    useEffect(() => {
            setSections([
                { id: 'step-1', label: 'Settled Transactions' },
                { id: 'step-2', label: 'Settled Transactions Table' },
                { id: 'step-3', label: 'Transaction Table Columns' },
            ]);
            return () => setSections([]);
            
        }, [setSections, t]);
  return (
    <main className="w-full px-4 sm:px-6 md:px-12 lg:px-[12%] mt-6 sm:mt-8 mb-12 sm:mb-16">
      <header>
        <h1  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-3 sm:mb-4">
          Card Payments Report
        </h1>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
        SriPay enables merchants to accept secure and reliable card payments through Visa, Mastercard, and UnionPay, supporting both domestic and international transactions. The Card Payment Process page provides a clear overview of all settled transactions, allowing merchants to generate detailed reports, track sales performance, and monitor settlement history. Whether payments are made online or in-store, SriPay ensures a fast, frictionless experience for customers while maintaining the highest security standards.
        </p>

      </header>
      {/* Settled Transactions */}
      <section className="mt-8">
        <h2 id='step-1' className="text-lg sm:text-xl font-semibold text-gray-800 py-2">Settled Transactions</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
          This summary shows the finalized card payments that have been settled to your account for the selected date range and filters. It helps you quickly understand volume and value without opening the full table.
        </p>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img1}
              alt="Settled transactions overview with KPIs for success, refunded, voided and totals"
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li>
            <strong>Total Transactions:</strong>Count of card payments that reached final settlement within the selected period. Pending, declined, or voided payments are not included.
          </li>
          <li>
            <strong>Success Transactions:</strong> Number of settled payments with a final status of Success (authorized, captured, and settled).
          </li>
          <li>
            <strong>Total Value in USD:</strong> Sum of settled card payments shown in USD. For multi-currency settlements, amounts are displayed in USD according to the settlement currency configuration.
          </li>
          <li>
            <strong>Total Value in LKR:</strong> Sum of the same settled card payments shown in LKR for local reporting
          </li>
        </ul>
        <div className="mt-4 rounded-lg bg-blue-50 border p-4">
          <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2">Notes</h4>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-1.5">
            <li>The metrics respect your current filters (date range, store, payment method, etc.).</li>
            <li>Values show the <strong>settled amount</strong> (captured & settled), not the originally authorized amount.</li>
            <li>Pending, declined, or voided payments are excluded from these totals.</li>
            <li>Amounts are displayed in both USD and LKR and rounded to two decimals.</li>
          </ul>
        </div>

      </section>

      {/* Search & Filter Cards */}
      <section className="mt-10 sm:mt-12">
        <h2 id='step-2' className="text-lg sm:text-xl font-semibold text-gray-800 py-2">Settled Transactions Table</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
          {/* Search */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Search Option</h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img3}
                  alt="Search controls for filtering transactions"
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>

          {/* Filter */}
          <article className="bg-blue-50 p-4 sm:p-6 border rounded-lg">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">Filter Option</h3>
            <div className="mt-4 sm:mt-6">
              <Zoom>
                <img
                  src={Img2}
                  alt="Filter dropdowns and date pickers"
                  className="w-full max-w-2xl rounded-md shadow mx-auto"
                />
              </Zoom>
            </div>
          </article>
        </div>
      </section>
      <section className="mt-10 sm:mt-12">
        <h2 id='step-3' className="text-lg sm:text-xl font-semibold text-gray-800 py-2">Transaction Table Columns</h2>

        <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
          <Zoom>
            <img
              src={Img4}
              alt="Transaction table columns overview"
              className="w-full max-w-4xl rounded-md shadow mx-auto"
            />
          </Zoom>
        </div>

        <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-2.5 text-sm sm:text-base">
          <li><strong>Date:</strong> Date and time when the transaction occurred.</li>
          <li><strong>Transaction ID:</strong> Unique identifier assigned to each transaction.</li>
          <li><strong>Store Name:</strong> Name of the merchant store where the transaction was made.</li>
          <li><strong>Currency:</strong> The currency in which the transaction was processed.</li>
          <li><strong>Value:</strong> Transaction amount.</li>
          <li>
            <strong>Status:</strong> Current transaction status —
            <span className="text-green-600 font-medium"> Success</span> (payment completed),
            <span className="text-blue-600 font-medium"> Refunded</span> (amount returned to customer),
            <span className="text-gray-600 font-medium"> Voided</span> (canceled before settlement).
          </li>
          <li><strong>Actions:</strong> Options for further actions, such as viewing more details.</li>
        </ul>
      </section>

    </main>
  )
}

export default CardPayment