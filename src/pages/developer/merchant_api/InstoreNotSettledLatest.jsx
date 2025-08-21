import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import { Table } from 'antd';

const CodeBlock = ({ code, bgColor = "bg-gray-50" }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    const btn = document.activeElement;
    const originalText = btn.innerText;
    btn.innerText = "Copied!";
    setTimeout(() => { btn.innerText = originalText; }, 1500);
  };
  return (
    <div className="relative">
      <pre className={`${bgColor} rounded-2xl p-4 text-sm md:text-base overflow-x-auto mb-4`}>
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200"
      >
        Copy
      </button>
    </div>
  );
};

function MerchantInstoreNotSettledLatest() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('instoreLatest.sections.s1') },
      { id: 'step-2', label: t('instoreLatest.sections.s2') },
      { id: 'step-3', label: t('instoreLatest.sections.s3') },
      { id: 'step-4', label: t('instoreLatest.sections.s4') },
      { id: 'step-5', label: t('instoreLatest.sections.s5') },
      { id: 'step-6', label: t('instoreLatest.sections.s6') },
      { id: 'step-7', label: t('instoreLatest.sections.s7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('instoreLatest.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('instoreLatest.methodGet')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('instoreLatest.path')}
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('instoreLatest.intro')}
      </p>

      {/* Endpoint */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('instoreLatest.endpoint.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>{t('instoreLatest.endpoint.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('instoreLatest.path')}</span></li>
          <li><span className='font-semibold'>{t('instoreLatest.endpoint.method')}</span> – <span className='font-bold text-green-500'>{t('instoreLatest.methodGet')}</span></li>
          <li><span className='font-semibold'>Description</span> – <span>{t('instoreLatest.endpoint.desc')}</span></li>
        </ul>
      </div>

      {/* Headers */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('instoreLatest.headers.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('instoreLatest.headers.merchantId')}</li>
          <li>{t('instoreLatest.headers.auth')}</li>
        </ul>
      </div>

      {/* Request Parameters */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('instoreLatest.req.validationTitle')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>merchantId: </span>{t('instoreLatest.req.ruleMerchantId')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreLatest.sample.title')}</p>
        <p><span className='font-semibold'>{t('instoreLatest.sample.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('instoreLatest.sample.exampleUrl')}</span></p>

        <p className="font-semibold mb-2">{t('instoreLatest.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreLatest.success.title')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('instoreLatest.success.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('instoreLatest.success.ok')}</span></li>
          <li><span className="font-semibold">{t('instoreLatest.success.contentType')}</span>: {t('instoreLatest.success.ctJson')}</li>
        </ul>

        <p><span className="font-semibold">{t('instoreLatest.success.body')}</span></p>
        <CodeBlock
          code={`{
  "code": "TRANSACTION_FOUND",
  "message": "Transaction record(s) retrieved successfully.",
  "status": "SUCCESS",
  "data": {
    "transactions": [
      {
        "transactionId": "tx123456",
        "timestamp": "2025-08-05 11:51:00",
        "currency": "USD",
        "amount": "100.00",
        "outletName": "Outlet XYZ",
        "outletId": "outlet_12345",
        "subject": "Latest Purchase",
        "transactionStatus": "PENDING",
        "settlementStatus": false,
        "paymentMethod": "Alipay+"
      },
      {
        "transactionId": "tx123455",
        "timestamp": "2025-08-05 11:40:00",
        "currency": "LKR",
        "amount": "2500.00",
        "outletName": "Outlet ABC",
        "outletId": "outlet_67890",
        "subject": "Previous Purchase",
        "transactionStatus": "PENDING",
        "settlementStatus": false,
        "paymentMethod": "Alipay+"
      },
      {
        "transactionId": "tx123454",
        "timestamp": "2025-08-05 10:30:00",
        "currency": "USD",
        "amount": "75.50",
        "outletName": "Outlet XYZ",
        "outletId": "outlet_12345",
        "subject": "Morning Transaction",
        "transactionStatus": "PENDING",
        "settlementStatus": false,
        "paymentMethod": "Alipay+"
      }
    ]
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreLatest.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">{t('instoreLatest.errors.intro')}</p>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('instoreLatest.errors.notFound')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
          <p className="text-gray-700 mb-2">{t('instoreLatest.errors.respBody')}</p>
          <CodeBlock
            code={`{
  "code": "TRANSACTION_NOT_FOUND",
  "message": "No transaction or refund record found for the given trade number.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('instoreLatest.errors.server')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
          <p className="text-gray-700 mb-2">{t('instoreLatest.errors.respBody')}</p>
          <CodeBlock
            code={`{
  "code": "SERVER_ERROR",
  "message": "An error occurred while retrieving transaction details.",
  "status": "ERROR",
  "error": "Specific error message"
}`}
            bgColor="bg-red-50"
          />
        </div>
      </div>
    </div>
  )
}

export default MerchantInstoreNotSettledLatest;
