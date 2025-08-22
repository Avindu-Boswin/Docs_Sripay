import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import { Table } from 'antd';

// Code block component with copy functionality
const CodeBlock = ({ code, bgColor = 'bg-gray-50' }) => {
  const { t } = useTranslation();
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    const btn = document.activeElement;
    if (btn) {
      const originalText = btn.innerText;
      btn.innerText = t('commonq.copied');
      setTimeout(() => { btn.innerText = originalText; }, 1500);
    }
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
        {t('commonq.copy')}
      </button>
    </div>
  );
};

function CardPaymentInquiry() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('cardInquiry.title') },
      { id: 'step-2', label: t('commonq.endpoint') },
      { id: 'step-3', label: t('commonq.headers') },
      { id: 'step-4', label: t('commonq.requestParams') },
      { id: 'step-5', label: t('commonq.sampleRequest') },
      { id: 'step-6', label: t('commonq.successResponse') },
      { id: 'step-7', label: t('commonq.errorResponses') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('cardInquiry.title')}
      </h1>

      {/* Method + Path */}
      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          GET
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {'{Host}'}/v2/card-payment/pay-info/:clientRef
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('cardInquiry.intro')}
      </p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('commonq.endpoint')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('commonq.url')}</span> –{' '}
            <span className="font-medium text-[#0073ff]">{'{Host}'}/v2/card-payment/pay-info/:clientRef</span>
          </li>
          <li>
            <span className="font-semibold">{t('commonq.method')}</span> –{' '}
            <span className="font-bold text-green-500">GET</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('commonq.headers')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('commonq.headerMerchant')}</li>
          <li>{t('commonq.headerAuth')}</li>
        </ul>
      </div>

      {/* Request Params */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('commonq.requestParams')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('cardInquiry.paramsIntro')}
        </p>

        <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
          <Table
            bordered
            pagination={false}
            size="middle"
            scroll={{ x: true }}
            dataSource={[
              {
                key: '1',
                parameter: <span className="font-mono">clientRef</span>,
                type: 'string',
                required: t('commonq.yes'),
                description: t('cardInquiry.params.clientRef.desc')
              }
            ]}
            columns={[
              { title: <span className="font-semibold">{t('commonq.tbl.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className="font-semibold">{t('commonq.tbl.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className="font-semibold">{t('commonq.tbl.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className="font-semibold">{t('commonq.tbl.description')}</span>, dataIndex: 'description', key: 'description' }
            ]}
          />
        </div>

        <p className="text-md mb-4 mt-10 font-bold text-gray-700">
          {t('cardInquiry.validationTitle')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">clientRef: </span>{t('cardInquiry.validation.clientRef')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('commonq.sampleRequest')}</p>
        <p>
          <span className="font-semibold">{t('commonq.url')}</span> –{' '}
          <span className="font-medium text-[#0073ff]">{'{Host}'}/v2/card-payment/pay-info/CLIENTREF_123456</span>
        </p>

        <p className="font-semibold mb-2">{t('commonq.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('commonq.successResponse')}</p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('commonq.statusCode')}</span>: <span className="text-green-600 font-bold">200 OK</span></li>
          <li><span className="font-semibold">{t('commonq.contentType')}</span>: application/json</li>
        </ul>

        <p><span className="font-semibold">{t('commonq.responseBody')}</span></p>

        <p>{t('cardInquiry.finalStatuses')}</p>
        <CodeBlock
          code={`{
  "code": "TRANSACTION_FOUND",
  "message": "Transaction retrieved.",
  "status": "SUCCESS",
  "data": {
    "timestamp": "2025-08-07 11:50:00",
    "transactionId": "CLIENTREF_123456",
    "transactionType": "PURCHASE",
    "currency": "USD",
    "amount": "50.00",
    "cardType": "VISA",
    "cardNumber": "****",
    "comment": "Online purchase at Outlet XYZ",
    "status": "SUCCESS",
    "outletId": "outlet_12345",
    "outletName": "Outlet XYZ"
  }
}`}
          bgColor="bg-green-50"
        />

        <p>{t('cardInquiry.updatedStatus')}</p>
        <CodeBlock
          code={`{
  "code": "TRANSACTION_UPDATED",
  "message": "Transaction status synced.",
  "status": "SUCCESS",
  "data": {
    "timestamp": "2025-08-07 11:50:00",
    "transactionId": "CLIENTREF_123456",
    "transactionType": "PURCHASE",
    "currency": "USD",
    "amount": "50.00",
    "cardType": "VISA",
    "cardNumber": "****",
    "comment": "Online purchase at Outlet XYZ",
    "status": "SUCCESS",
    "outletId": "outlet_12345",
    "outletName": "Outlet XYZ"
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id="step-7" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('commonq.errorResponses')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('cardInquiry.errorsIntro')}
        </p>

        {/* 1 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">1. {t('cardInquiry.errors.missingParams.title')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commonq.statusCode')}</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
          <p className="text-gray-700 mb-2">{t('commonq.responseBody')}:</p>
          <CodeBlock
            code={`{
  "code": "MISSING_PARAMS",
  "message": "\\\`clientRef\\\` path param and \\\`merchantid\\\` header are required.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 2 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">2. {t('cardInquiry.errors.notFound.title')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commonq.statusCode')}</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
          <p className="text-gray-700 mb-2">{t('commonq.responseBody')}:</p>
          <CodeBlock
            code={`{
  "code": "TRANSACTION_NOT_FOUND",
  "message": "No transaction found.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 3 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">3. {t('cardInquiry.errors.merchantMismatch.title')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commonq.statusCode')}</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
          <p className="text-gray-700 mb-2">{t('commonq.responseBody')}:</p>
          <CodeBlock
            code={`{
  "code": "MERCHANT_ID_MISMATCH",
  "message": "Provided merchantId does not match transaction owner.",
  "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 4 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">4. {t('cardInquiry.errors.txnError.title')}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">{t('commonq.statusCode')}</span>: <span className="text-red-600 font-bold">500 Internal Server Error {t('cardInquiry.orSpecificPaycorp')}</span>
          </p>
          <p className="text-gray-700 mb-2">{t('commonq.responseBody')}:</p>
          <CodeBlock
            code={`{
  "code": "TRANSACTION_FETCH_ERROR",
  "message": "Error retrieving transaction.",
  "status": "ERROR",
  "error": "Specific error message or response data"
}`}
            bgColor="bg-red-50"
          />
        </div>
      </div>
    </div>
  );
}

export default CardPaymentInquiry;
