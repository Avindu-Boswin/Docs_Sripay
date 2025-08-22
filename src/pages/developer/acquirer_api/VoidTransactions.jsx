import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import { Table } from 'antd';

// Code block with i18n'd copy button and fallback
const CodeBlock = ({ code, bgColor = 'bg-gray-50' }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const btnRef = useRef(null);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const ta = document.createElement('textarea');
        ta.value = code;
        ta.style.position = 'fixed';
        ta.style.top = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      btnRef.current?.focus();
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <div className="relative">
      <pre className={`${bgColor} rounded-2xl p-4 text-sm md:text-base overflow-x-auto mb-4`}>
        {code}
      </pre>
      <button
        type="button"
        ref={btnRef}
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200"
        aria-live="polite"
      >
        {copied ? t('voidTxnAcquirer.ui.copied') : t('voidTxnAcquirer.ui.copy')}
      </button>
    </div>
  );
};

function VoidTransaction() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('voidTxnAcquirer.sections.s1') },
      { id: 'step-2', label: t('voidTxnAcquirer.sections.s2') },
      { id: 'step-3', label: t('voidTxnAcquirer.sections.s3') },
      { id: 'step-4', label: t('voidTxnAcquirer.sections.s4') },
      { id: 'step-5', label: t('voidTxnAcquirer.sections.s5') },
      { id: 'step-6', label: t('voidTxnAcquirer.sections.s6') },
      { id: 'step-7', label: t('voidTxnAcquirer.sections.s7') },
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('voidTxnAcquirer.title')}
      </h1>

      {/* Method + Path */}
      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('voidTxnAcquirer.methodPost')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('voidTxnAcquirer.path')}
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('voidTxnAcquirer.intro')}
      </p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('voidTxnAcquirer.endpoint.title')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('voidTxnAcquirer.endpoint.url')}</span> –{' '}
            <span className="font-medium text-[#0073ff]">{t('voidTxnAcquirer.path')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('voidTxnAcquirer.endpoint.method')}</span> –{' '}
            <span className="font-bold text-yellow-500">{t('voidTxnAcquirer.methodPost')}</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('voidTxnAcquirer.headers.title')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('voidTxnAcquirer.headers.acquirerId')}</li>
          <li>{t('voidTxnAcquirer.headers.authorization')}</li>
          <li>{t('voidTxnAcquirer.headers.authKey')}</li>
          <li>{t('voidTxnAcquirer.headers.contentType')}</li>
        </ul>
      </div>

      {/* Request Body */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('voidTxnAcquirer.req.title')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('voidTxnAcquirer.req.intro')}
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
                parameter: <span className="font-mono">transactionId</span>,
                type: 'string',
                required: t('voidTxnAcquirer.req.table.yes'),
                description: t('voidTxnAcquirer.req.table.txnIdDesc'),
              },
              {
                key: '2',
                parameter: <span className="font-mono">outletId</span>,
                type: 'string',
                required: t('voidTxnAcquirer.req.table.yes'),
                description: t('voidTxnAcquirer.req.table.outletIdDesc'),
              },
            ]}
            columns={[
              { title: <span className="font-semibold">{t('voidTxnAcquirer.req.table.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className="font-semibold">{t('voidTxnAcquirer.req.table.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className="font-semibold">{t('voidTxnAcquirer.req.table.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className="font-semibold">{t('voidTxnAcquirer.req.table.description')}</span>, dataIndex: 'description', key: 'description' },
            ]}
          />
        </div>

        <p className="text-md mb-4 mt-10 font-bold text-gray-700">
          {t('voidTxnAcquirer.req.validationTitle')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">transactionId: </span>{t('voidTxnAcquirer.req.rules.txnId')}</li>
          <li><span className="font-semibold">outletId: </span>{t('voidTxnAcquirer.req.rules.outletId')}</li>
          <li><span className="font-semibold">acquirerId: </span>{t('voidTxnAcquirer.req.rules.acquirerId')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxnAcquirer.sample.title')}</p>

        <CodeBlock
          code={`{
  "transactionId": "TXN_1234567890",
  "outletId": "outlet_12345"
}`}
          bgColor="bg-green-50"
        />

        <p className="font-semibold mb-2">{t('voidTxnAcquirer.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>acquirerId: acquirer_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
          <div>Auth-Key: key_456def789</div>
          <div>Content-Type: application/json</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxnAcquirer.success.title')}</p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('voidTxnAcquirer.success.statusCode')}</span>:{' '}
            <span className="text-green-600 font-bold">{t('voidTxnAcquirer.success.ok')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('voidTxnAcquirer.success.contentType')}</span>: application/json
          </li>
        </ul>

        <p><span className="font-semibold">{t('voidTxnAcquirer.success.body')}</span></p>

        <CodeBlock
          code={`{
  "code": "VOID_SUCCESS",
  "message": "Transaction voided successfully.",
  "status": "SUCCESS",
  "data": {
    "transactionId": "TXN_1234567890",
    "trade_no": null,
    "out_trade_no": "TXN_1234567890",
    "timestamp": "2025-08-11 14:46:00",
    "provider": {
      "result_code": "SUCCESS",
      "is_success": "T"
    }
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id="step-7" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('voidTxnAcquirer.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('voidTxnAcquirer.errors.intro')}
        </p>

        {[
          { k: 'missingParams', sc: '400 Bad Request', body: `{
  "code": "MISSING_PARAMS",
  "message": "transactionId and outletId are required.",
  "status": "FAIL"
}` },
          { k: 'missingAuth', sc: '401 Unauthorized', body: `{
  "code": "MISSING_AUTH",
  "message": "Missing acquirer authentication (x-acq-id).",
  "status": "FAIL"
}` },
          { k: 'acquirerNotFound', sc: '404 Not Found', body: `{
  "code": "ACQUIRER_NOT_FOUND",
  "message": "Acquirer not found: acquirer_98765",
  "status": "FAIL"
}` },
          { k: 'acquirerInactive', sc: '403 Forbidden', body: `{
  "code": "ACQUIRER_INACTIVE",
  "message": "Acquirer is not active.",
  "status": "FAIL"
}` },
          { k: 'outletNotFound', sc: '404 Not Found', body: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found: outlet_12345",
  "status": "FAIL"
}` },
          { k: 'outletNoMerchant', sc: '400 Bad Request', body: `{
  "code": "OUTLET_NO_MERCHANT",
  "message": "Outlet is missing merchant link.",
  "status": "FAIL"
}` },
          { k: 'outletNoAcquirer', sc: '400 Bad Request', body: `{
  "code": "OUTLET_NO_ACQUIRER",
  "message": "Outlet is missing acquirer link.",
  "status": "FAIL"
}` },
          { k: 'acquirerOutletMismatch', sc: '403 Forbidden', body: `{
  "code": "ACQUIRER_OUTLET_MISMATCH",
  "message": "Outlet does not belong to provided acquirerId.",
  "status": "FAIL"
}` },
          { k: 'merchantNotFound', sc: '404 Not Found', body: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found: <merchantId>",
  "status": "FAIL"
}` },
          { k: 'txnNotFound', sc: '404 Not Found', body: `{
  "code": "TXN_NOT_FOUND",
  "message": "Transaction not found: TXN_1234567890",
  "status": "FAIL"
}` },
          { k: 'txnOutletMismatch', sc: '403 Forbidden', body: `{
  "code": "TXN_OUTLET_MISMATCH",
  "message": "Transaction does not belong to the given outletId.",
  "status": "FAIL"
}` },
          { k: 'txnAcquirerMismatch', sc: '403 Forbidden', body: `{
  "code": "TXN_ACQUIRER_MISMATCH",
  "message": "Transaction does not belong to the given acquirerId.",
  "status": "FAIL"
}` },
          { k: 'invalidStatus', sc: '400 Bad Request', body: `{
  "code": "INVALID_STATUS",
  "message": "Only SUCCESS transactions can be voided.",
  "status": "FAIL"
}` },
          { k: 'invalidTimestamp', sc: '400 Bad Request', body: `{
  "code": "INVALID_TXN_TIMESTAMP",
  "message": "Transaction timestamp is missing/invalid.",
  "status": "FAIL"
}` },
          { k: 'voidWindow', sc: '400 Bad Request', body: `{
  "code": "VOID_WINDOW_CLOSED",
  "message": "Voids are only allowed until 11:59:59 PM on the Colombo date of the transaction.",
  "status": "FAIL",
  "txnDateColombo": "2025-08-10",
  "nowDateColombo": "2025-08-11"
}` },
          { k: 'alipayConfig', sc: '500 Internal Server Error', body: `{
  "code": "ALIPAY_CONFIG_MISSING",
  "message": "Alipay config missing (endpoint/partner).",
  "status": "ERROR"
}` },
          { k: 'alipayParse', sc: '502 Bad Gateway', body: `{
  "code": "ALIPAY_PARSE_ERROR",
  "message": "Failed to parse Alipay response XML.",
  "status": "ERROR"
}` },
          { k: 'alipayVoidFail', sc: '400 Bad Request', body: `{
  "code": "ALIPAY_VOID_FAILED",
  "message": "Alipay void failed.",
  "status": "FAIL",
  "provider": {
    "is_success": "F",
    "result_code": "FAILURE",
    "detail_error_code": "CODE_123",
    "detail_error_des": "Invalid transaction state"
  },
  "timestamp": "2025-08-11 14:46:00"
}` },
          { k: 'voidError', sc: '500 Internal Server Error', body: `{
  "code": "VOID_ERROR",
  "message": "Unexpected error processing void.",
  "status": "ERROR",
  "error": "Specific error message.",
  "timestamp": "2025-08-11 14:46:00"
}` },
        ].map(({ k, sc, body }, idx) => (
          <div className="mb-6" key={k}>
            <p className="text-lg font-semibold text-gray-700">
              {idx + 1}. {t(`voidTxnAcquirer.errors.${k}.title`)}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">{t('voidTxnAcquirer.labels.statusCode')}</span>:{' '}
              <span className="text-red-600 font-bold">{sc}</span>
            </p>
            <p className="text-gray-700 mb-2">{t('voidTxnAcquirer.errors.respBody')}</p>
            <CodeBlock code={body} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VoidTransaction;
