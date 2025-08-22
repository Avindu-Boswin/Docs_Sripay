import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';
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

function MerchantUserPresentPayWaiting() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('uppw.sections.s1') },
      { id: 'step-2', label: t('uppw.sections.s2') },
      { id: 'step-3', label: t('uppw.sections.s3') },
      { id: 'step-4', label: t('uppw.sections.s4') },
      { id: 'step-5', label: t('uppw.sections.s5') },
      { id: 'step-6', label: t('uppw.sections.s6') },
      { id: 'step-7', label: t('uppw.sections.s7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('uppw.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('uppw.methodGet')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('uppw.path')}
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>{t('uppw.intro')}</p>

      {/* Endpoint */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('uppw.endpoint.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>{t('uppw.endpoint.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('uppw.path')}/:partnerTransId</span></li>
          <li><span className='font-semibold'>{t('uppw.endpoint.method')}</span> – <span className='font-bold text-green-500'>{t('uppw.methodGet')}</span></li>
          <li><span className='font-semibold'>Description</span> – <span>{t('uppw.endpoint.desc')}</span></li>
        </ul>
      </div>

      {/* Headers */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('uppw.headers.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('uppw.headers.merchantId')}</li>
          <li>{t('uppw.headers.auth')}</li>
        </ul>
      </div>

      {/* Request Parameters */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>{t('uppw.reqParams.title')}</p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>{t('uppw.reqParams.intro')}</p>
        <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
          <Table
            bordered
            pagination={false}
            size="middle"
            scroll={{ x: true }}
            dataSource={[{
              key: '1',
              parameter: <span className='font-mono'>partnerTransId</span>,
              type: 'string',
              required: t('uppw.reqParams.table.yes'),
              description: t('uppw.reqParams.table.rowPartnerDesc')
            }]}
            columns={[
              { title: <span className='font-semibold'>{t('uppw.reqParams.table.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className='font-semibold'>{t('uppw.reqParams.table.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className='font-semibold'>{t('uppw.reqParams.table.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className='font-semibold'>{t('uppw.reqParams.table.description')}</span>, dataIndex: 'description', key: 'description' }
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>{t('uppw.reqParams.validationTitle')}</p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>partnerTransId: </span>{t('uppw.reqParams.rulePartner')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('uppw.sample.title')}</p>
        <p><span className='font-semibold'>{t('uppw.sample.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('uppw.sample.exampleUrl')}</span></p>

        <p className="font-semibold mb-2">{t('uppw.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('uppw.success.title')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('uppw.success.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('uppw.success.ok')}</span></li>
          <li><span className="font-semibold">{t('uppw.success.contentType')}</span>: {t('uppw.success.ctJson')}</li>
        </ul>
        <p><span className="font-semibold">{t('uppw.success.body')}</span></p>

        <CodeBlock
          code={`{
  "code": "TRANSACTION_FOUND",
  "message": "Transaction retrieved successfully.",
  "status": "SUCCESS",
  "transactions": [
    {
      "transactionId": "tx123456",
      "timestamp": "2025-08-05 14:10:00",
      "currency": "USD",
      "amount": "50.00",
      "outletName": "Outlet XYZ",
      "outletId": "outlet_12345",
      "transactionStatus": "SUCCESS",
      "paymentMethod": "Alipay+"
    }
  ]
}
`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('uppw.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">{t('uppw.errors.intro')}</p>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('uppw.errors.missing')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
          <p className="text-gray-700 mb-2">{t('uppw.errors.respBody')}</p>
          <CodeBlock
            code={`{
  "code": "MISSING_PARAMS",
  "message": "partnerTransId and merchantId are required.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('uppw.errors.notFound')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
          <p className="text-gray-700 mb-2">{t('uppw.errors.respBody')}</p>
          <CodeBlock
            code={`{
  "code": "TRANSACTION_NOT_FOUND",
  "message": "No transaction found for the given partnerTransId and merchantId.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('uppw.errors.server')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
          <p className="text-gray-700 mb-2">{t('uppw.errors.respBody')}</p>
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

      {/* Notes */}
      <div>
        <p className="text-lg font-semibold text-gray-700">{t('uppw.sections.notes')}</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>{t('uppw.notes.n1')}</li>
          <li>{t('uppw.notes.n2')}</li>
          <li>{t('uppw.notes.n3')}</li>
          <li>{t('uppw.notes.n4')}</li>
          <li>{t('uppw.notes.n5')}</li>
        </ul>
      </div>
    </div>
  )
}

export default MerchantUserPresentPayWaiting;
