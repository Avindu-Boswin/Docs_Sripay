import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import { Table } from 'antd';

// Code block with i18n + a11y + SSR‑safe copy
const CodeBlock = ({ code, bgColor = 'bg-gray-50' }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const btnRef = useRef(null);

  const copyLabel = t('commonr.copy', 'Copy');
  const copiedLabel = t('commonr.copied', 'Copied!');

  const handleCopy = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
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
        {copied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
};

function MerchantPaymentLinkCreateCard() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('cardPayLink.sections.s1') },
      { id: 'step-2', label: t('cardPayLink.sections.s2') },
      { id: 'step-3', label: t('cardPayLink.sections.s3') },
      { id: 'step-4', label: t('cardPayLink.sections.s4') },
      { id: 'step-5', label: t('cardPayLink.sections.s5') },
      { id: 'step-6', label: t('cardPayLink.sections.s6') },
      { id: 'step-7', label: t('cardPayLink.sections.s7') },
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('cardPayLink.title')}
      </h1>

      {/* Method + Path */}
      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('cardPayLink.methodPost')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('cardPayLink.path')}
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('cardPayLink.intro')}
      </p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('cardPayLink.endpoint.title')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('cardPayLink.endpoint.url')}</span> –{' '}
            <span className="font-medium text-[#0073ff]">{t('cardPayLink.path')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('cardPayLink.endpoint.method')}</span> –{' '}
            <span className="font-bold text-yellow-500">{t('cardPayLink.methodPost')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('commonr.description')}</span> –{' '}
            <span>{t('cardPayLink.endpoint.desc')}</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('cardPayLink.headers.title')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('cardPayLink.headers.merchantId')}</li>
          <li>{t('cardPayLink.headers.auth')}</li>
        </ul>
      </div>

      {/* Request Body */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('cardPayLink.req.title')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('cardPayLink.req.intro')}
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
                parameter: <span className="font-mono">amount</span>,
                type: 'number',
                required: t('commonr.yes'),
                description: t('cardPayLink.req.table.amountDesc'),
                validation: t('cardPayLink.req.table.amountVal'),
              },
              {
                key: '2',
                parameter: <span className="font-mono">currency</span>,
                type: 'string',
                required: t('commonr.yes'),
                description: t('cardPayLink.req.table.currencyDesc'),
                validation: t('cardPayLink.req.table.currencyVal'),
              },
              {
                key: '3',
                parameter: <span className="font-mono">outletId</span>,
                type: 'string',
                required: t('commonr.yes'),
                description: t('cardPayLink.req.table.outletDesc'),
                validation: t('cardPayLink.req.table.outletVal'),
              },
              {
                key: '4',
                parameter: <span className="font-mono">description</span>,
                type: 'string',
                required: t('commonr.yes'),
                description: t('cardPayLink.req.table.descDesc'),
                validation: t('cardPayLink.req.table.descVal'),
              },
            ]}
            columns={[
              { title: <span className="font-semibold">{t('cardPayLink.req.table.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className="font-semibold">{t('cardPayLink.req.table.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className="font-semibold">{t('cardPayLink.req.table.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className="font-semibold">{t('cardPayLink.req.table.description')}</span>, dataIndex: 'description', key: 'description' },
              { title: <span className="font-semibold">{t('cardPayLink.req.table.validation')}</span>, dataIndex: 'validation', key: 'validation' },
            ]}
          />
        </div>

        <p className="text-md mb-4 mt-10 font-bold text-gray-700">
          {t('cardPayLink.req.validationTitle')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">outletId: </span>{t('cardPayLink.req.rules.outlet')}</li>
          <li><span className="font-semibold">amount: </span>{t('cardPayLink.req.rules.amount')}</li>
          <li><span className="font-semibold">currency: </span>{t('cardPayLink.req.rules.currency')}</li>
          <li><span className="font-semibold">description: </span>{t('cardPayLink.req.rules.description')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('cardPayLink.sample.title')}</p>

        <CodeBlock
          code={`{
  "amount": 50.00,
  "currency": "USD",
  "outletId": "outlet_12345",
  "description": "Online purchase at Outlet XYZ"
}`}
        />

        <p className="font-semibold mb-2">{t('cardPayLink.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('cardPayLink.success.title')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('cardPayLink.success.statusCode')}</span>: <span className="text-green-600 font-bold">200 OK</span></li>
          <li><span className="font-semibold">{t('cardPayLink.success.contentType')}</span>: application/json</li>
        </ul>

        <p><span className="font-semibold">{t('cardPayLink.success.body')}</span></p>

        <CodeBlock
          code={`{
  "code": "PAYMENT_INITIATED",
  "message": "Paycorp payment initialized successfully.",
  "status": "SUCCESS",
  "data": {
    "paymentPageUrl": "https://sripay.lk/payment/1234567890abcdef",
    "expireAt": "2025-08-07 12:42:00",
    "clientRef": "CLIENTREF_123456",
    "reqid": "REQID_789012"
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id="step-7" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('cardPayLink.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('cardPayLink.errors.intro')}
        </p>

        {[
          {
            k: 'missing',
            code: `{
  "code": "MISSING_FIELDS",
  "message": "amount, currency, outletId, description, and merchantId are required.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'invalidAmount',
            code: `{
  "code": "INVALID_AMOUNT",
  "message": "Amount must be a valid number.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'invalidCurrency',
            code: `{
  "code": "INVALID_CURRENCY",
  "message": "Only LKR and USD are supported.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'invalidUSD',
            code: `{
  "code": "INVALID_AMOUNT_USD",
  "message": "USD Amount must be greater than or equal to 5.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'invalidLKR',
            code: `{
  "code": "INVALID_AMOUNT_LKR",
  "message": "LKR Amount must be greater than or equal to 100.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'invalidDesc',
            code: `{
  "code": "INVALID_DESCRIPTION",
  "message": "Description must be a non-empty string up to 100 characters.",
  "status": "FAIL"
}`,
            status: '400 Bad Request',
          },
          {
            k: 'outletNotFound',
            code: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found: outlet_12345",
  "status": "FAIL"
}`,
            status: '404 Not Found',
          },
          {
            k: 'merchantMismatch',
            code: `{
  "code": "MERCHANT_ID_MISMATCH",
  "message": "Provided merchantId does not match outlet's merchant.",
  "status": "FAIL"
}`,
            status: '403 Forbidden',
          },
          {
            k: 'merchantNotFound',
            code: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found: merchant_98765",
  "status": "FAIL"
}`,
            status: '404 Not Found',
          },
          {
            k: 'initError',
            code: `{
  "code": "PAYMENT_INIT_ERROR",
  "message": "An error occurred while initiating the payment.",
  "status": "ERROR",
  "error": "Specific error message or response data"
}`,
            status: '500 Internal Server Error',
          },
        ].map(({ k, code, status }) => (
          <div className="mb-6" key={k}>
            <p className="text-lg font-semibold text-gray-700">{t(`cardPayLink.errors.${k}.title`)}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">{t('commonr.statusCode')}</span>: <span className="text-red-600 font-bold">{status}</span>
            </p>
            <p className="text-gray-700 mb-2">{t('cardPayLink.errors.respBody')}</p>
            <CodeBlock code={code} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MerchantPaymentLinkCreateCard;
