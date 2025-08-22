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

function MerchantVoidTransaction() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('voidTxn.sections.s1') },
      { id: 'step-2', label: t('voidTxn.sections.s2') },
      { id: 'step-3', label: t('voidTxn.sections.s3') },
      { id: 'step-4', label: t('voidTxn.sections.s4') },
      { id: 'step-5', label: t('voidTxn.sections.s5') },
      { id: 'step-6', label: t('voidTxn.sections.s6') },
      { id: 'step-7', label: t('voidTxn.sections.s7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('voidTxn.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('voidTxn.methodPost')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('voidTxn.path')}
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('voidTxn.intro')}
      </p>

      {/* Endpoint */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('voidTxn.endpoint.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>{t('voidTxn.endpoint.url')}</span> – <span className='font-medium text-[#0073ff]'>{t('voidTxn.path')}</span></li>
          <li><span className='font-semibold'>{t('voidTxn.endpoint.method')}</span> – <span className='font-bold text-yellow-500'>{t('voidTxn.methodPost')}</span></li>
        </ul>
      </div>

      {/* Headers */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('voidTxn.headers.title')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('voidTxn.headers.merchantId')}</li>
          <li>{t('voidTxn.headers.auth')}</li>
        </ul>
      </div>

      {/* Request Parameters */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('voidTxn.req.title')}
        </p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('voidTxn.req.desc')}
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
                parameter: <span className='font-mono'>transactionId</span>,
                type: 'string',
                required: 'Yes',
                description: t('voidTxn.req.rows.txnIdDesc')
              },
              {
                key: '2',
                parameter: <span className='font-mono'>outletId</span>,
                type: 'string',
                required: 'Yes',
                description: t('voidTxn.req.rows.outletIdDesc')
              }
            ]}
            columns={[
              { title: <span className='font-semibold'>{t('voidTxn.req.cols.param')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className='font-semibold'>{t('voidTxn.req.cols.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className='font-semibold'>{t('voidTxn.req.cols.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className='font-semibold'>{t('voidTxn.req.cols.desc')}</span>, dataIndex: 'description', key: 'description' }
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('voidTxn.req.validationTitle')}
        </p>
        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>transactionId: </span>{t('voidTxn.req.ruleTxnId')}</li>
          <li><span className='font-semibold'>outletId: </span>{t('voidTxn.req.ruleOutletId')}</li>
          <li><span className='font-semibold'>merchantId: </span>{t('voidTxn.req.ruleMerchantId')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxn.sample.title')}</p>
        <CodeBlock
          code={`{
"transactionId": "TXN_1234567890",
"outletId": "outlet_12345"
}
`}
          bgColor="bg-green-50"
        />
        <p className="font-semibold mb-2">{t('voidTxn.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxn.success.title')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('voidTxn.success.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('voidTxn.success.ok')}</span></li>
          <li><span className="font-semibold">{t('voidTxn.success.contentType')}</span>: {t('voidTxn.success.ctJson')}</li>
        </ul>
        <p><span className="font-semibold">{t('voidTxn.success.body')}</span></p>
        <CodeBlock
          code={`{
    "code": "VOID_SUCCESS",
    "message": "Transaction voided successfully.",
    "status": "SUCCESS",
    "data": {
        "transactionId": "TXN_1234567890",
        "timestamp": "2025-08-11 13:43:00",
        "provider": {
            "result_code": "SUCCESS",
            "is_success": "T"
        }
    }
}
`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxn.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">{t('voidTxn.errors.intro')}</p>

        {[
          { k: 'e1', status: '400 Bad Request', body: `{
  "code": "MISSING_PARAMS",
  "message": "transactionId and outletId are required.",
  "status": "FAIL"
}` },
          { k: 'e2', status: '401 Unauthorized', body: `{
  "code": "MISSING_AUTH",
  "message": "Missing merchant authentication (x-mch-id).",
  "status": "FAIL"
}` },
          { k: 'e3', status: '404 Not Found', body: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found: outlet_12345",
  "status": "FAIL"
}` },
          { k: 'e4', status: '400 Bad Request', body: `{
  "code": "OUTLET_NO_MERCHANT",
  "message": "Outlet is missing merchant link.",
  "status": "FAIL"
}` },
          { k: 'e5', status: '403 Forbidden', body: `{
  "code": "FORBIDDEN_OUTLET",
  "message": "Forbidden: outlet does not belong to authenticated merchant.",
  "status": "FAIL"
}` },
          { k: 'e6', status: '404 Not Found', body: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found: merchant_98765",
  "status": "FAIL"
}` },
          { k: 'e7', status: '404 Not Found', body: `{
  "code": "TXN_NOT_FOUND",
  "message": "Transaction not found: TXN_1234567890",
  "status": "FAIL"
}` },
          { k: 'e8', status: '403 Forbidden', body: `{
  "code": "TXN_OUTLET_MISMATCH",
  "message": "Transaction does not belong to the given outletId.",
  "status": "FAIL"
}` },
          { k: 'e9', status: '400 Bad Request', body: `{
  "code": "INVALID_STATUS",
  "message": "Only SUCCESS transactions can be voided.",
  "status": "FAIL"
}` },
          { k: 'e10', status: '400 Bad Request', body: `{
  "code": "INVALID_TXN_TIMESTAMP",
  "message": "Transaction timestamp is missing/invalid.",
  "status": "FAIL"
}` },
          { k: 'e11', status: '400 Bad Request', body: `{
  "code": "VOID_WINDOW_CLOSED",
  "message": "Voids are only allowed until 11:59:59 PM on the Colombo date of the transaction.",
  "status": "FAIL",
  "txnDateColombo": "2025-08-10",
  "nowDateColombo": "2025-08-11"
}` },
          { k: 'e12', status: '500 Internal Server Error', body: `{
  "code": "ALIPAY_CONFIG_MISSING",
  "message": "Alipay config missing (endpoint/partner).",
  "status": "ERROR"
}` },
          { k: 'e13', status: '502 Bad Gateway', body: `{
  "code": "ALIPAY_PARSE_ERROR",
  "message": "Failed to parse Alipay response XML.",
  "status": "ERROR"
}` },
          { k: 'e14', status: '400 Bad Request', body: `{
  "code": "ALIPAY_VOID_FAILED",
  "message": "Alipay void failed.",
  "status": "FAIL",
  "provider": {
    "is_success": "F",
    "result_code": "FAILURE",
    "detail_error_code": "CODE_123",
    "detail_error_des": "Invalid transaction state"
  },
  "timestamp": "2025-08-11 13:43:00"
}` },
          { k: 'e15', status: '500 Internal Server Error', body: `{
  "code": "VOID_ERROR",
  "message": "Unexpected error processing void.",
  "status": "ERROR",
  "error": "Specific error message.",
  "timestamp": "2025-08-11 13:43:00"
}` }
        ].map((e, i) => (
          <div className="mb-6" key={e.k}>
            <p className="text-lg font-semibold text-gray-700">{t(`voidTxn.errors.${e.k}`)}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">{e.status}</span></p>
            <p className="text-gray-700 mb-2">{t('voidTxn.errors.respBody')}</p>
            <CodeBlock code={e.body} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MerchantVoidTransaction;
