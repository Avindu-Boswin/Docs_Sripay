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

function MerchantInstorePaymentInquiry() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('instoreInquiry.sections.s1') },
      { id: 'step-2', label: t('instoreInquiry.sections.s2') },
      { id: 'step-3', label: t('instoreInquiry.sections.s3') },
      { id: 'step-4', label: t('instoreInquiry.sections.s4') },
      { id: 'step-5', label: t('instoreInquiry.sections.s5') },
      { id: 'step-6', label: t('instoreInquiry.sections.s6') },
      { id: 'step-7', label: t('instoreInquiry.sections.s7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('instoreInquiry.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('instoreInquiry.methodGet')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('instoreInquiry.path')}/:transactionId
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('instoreInquiry.intro')}
      </p>

      {/* Endpoint */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('instoreInquiry.endpoint.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>{t('instoreInquiry.endpoint.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('instoreInquiry.path')}/:transactionId</span></li>
          <li><span className='font-semibold'>{t('instoreInquiry.endpoint.method')}</span> – <span className='font-bold text-green-500'>{t('instoreInquiry.methodGet')}</span></li>
          <li><span className='font-semibold'>Description</span> – <span>{t('instoreInquiry.endpoint.desc')}</span></li>
        </ul>
      </div>

      {/* Headers */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('instoreInquiry.headers.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('instoreInquiry.headers.merchantId')}</li>
          <li>{t('instoreInquiry.headers.auth')}</li>
        </ul>
      </div>

      {/* Request Parameters */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('instoreInquiry.req.title')}
        </p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('instoreInquiry.req.intro')}
        </p>

        <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
          <Table
            bordered
            pagination={false}
            size="middle"
            scroll={{ x: true }}
            dataSource={[{
              key: '1',
              parameter: <span className='font-mono'>transactionId</span>,
              type: 'string',
              required: t('instoreInquiry.req.table.yes'),
              description: t('instoreInquiry.req.table.rowIdDesc')
            }]}
            columns={[
              { title: <span className='font-semibold'>{t('instoreInquiry.req.table.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className='font-semibold'>{t('instoreInquiry.req.table.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className='font-semibold'>{t('instoreInquiry.req.table.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className='font-semibold'>{t('instoreInquiry.req.table.description')}</span>, dataIndex: 'description', key: 'description' }
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('instoreInquiry.req.validationTitle')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>transactionId: </span>{t('instoreInquiry.req.ruleId')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreInquiry.sample.title')}</p>
        <p><span className='font-semibold'>{t('instoreInquiry.sample.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('instoreInquiry.sample.exampleUrl')}</span></p>

        <p className="font-semibold mb-2">{t('instoreInquiry.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreInquiry.success.title')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('instoreInquiry.success.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('instoreInquiry.success.ok')}</span></li>
          <li><span className="font-semibold">{t('instoreInquiry.success.contentType')}</span>: {t('instoreInquiry.success.ctJson')}</li>
        </ul>

        <p><span className="font-semibold">{t('instoreInquiry.success.body')}</span></p>
        <CodeBlock
          code={`{
  "code": "TRANSACTION_FOUND",
  "message": "Transaction record(s) retrieved successfully.",
  "status": "SUCCESS",
  "data": {
    "transactions": [
      {
        "transactionId": "tx123456",
        "timestamp": "2025-08-05 14:20:00",
        "currency": "USD",
        "amount": "50.00",
        "outletName": "Outlet XYZ",
        "outletId": "outlet_12345",
        "subject": "Purchase at Outlet XYZ",
        "transactionStatus": "SUCCESS",
        "settlementStatus": true,
        "paymentMethod": "Alipay+"
      }
    ]
  }
}
`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('instoreInquiry.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">{t('instoreInquiry.errors.intro')}</p>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('instoreInquiry.errors.missingId')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
          <p className="text-gray-700 mb-2">{t('instoreInquiry.errors.respBody')}</p>
          <CodeBlock
            code={`{
  "code": "MISSING_TRANSACTION_ID",
  "message": "transactionId (trade_no) is required.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('instoreInquiry.errors.notFound')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
          <p className="text-gray-700 mb-2">{t('instoreInquiry.errors.respBody')}</p>
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
          <p className="text-lg font-semibold text-gray-700">{t('instoreInquiry.errors.server')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
          <p className="text-gray-700 mb-2">{t('instoreInquiry.errors.respBody')}</p>
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

export default MerchantInstorePaymentInquiry;
