import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

// Code block component with copy functionality
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

function MerchantOrderCodePayQr() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('mocpq.sections.step1') },
      { id: 'step-2', label: t('mocpq.sections.step2') },
      { id: 'step-3', label: t('mocpq.sections.step3') },
      { id: 'step-4', label: t('mocpq.sections.step4') },
      { id: 'step-5', label: t('mocpq.sections.step5') },
      { id: 'step-6', label: t('mocpq.sections.step6') },
      { id: 'step-7', label: t('mocpq.sections.step7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('mocpq.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('mocpq.http.post')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          &#123;Host&#125;/v2/alipayplus/instore/ordercode-pay
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('mocpq.intro')}
      </p>

      {/* ---------- Endpoint ------------------------------------------------ */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('mocpq.endpoint.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>{t('mocpq.endpoint.urlLabel')}</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-pay</span></li>
          <li><span className='font-semibold'>{t('mocpq.endpoint.methodLabel')}</span> – <span className='font-bold text-yellow-500'>{t('mocpq.http.post')}</span></li>
        </ul>
      </div>

      {/* ---------- Headers --------------------------------------- */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('mocpq.headers.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('mocpq.headers.items.merchantId')}</li>
          <li>{t('mocpq.headers.items.authorization')}</li>
        </ul>
      </div>

      {/* ---------- Request Body --------------------------------------- */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('mocpq.requestBody.title')}
        </p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mocpq.requestBody.intro')}
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
                parameter: <span className='font-mono'>outletId</span>,
                type: 'string',
                required: t('mocpq.common.yes'),
                description: t('mocpq.requestBody.table.rows.outletId.description'),
                validation: t('mocpq.requestBody.table.rows.outletId.validation')
              },
              {
                key: '2',
                parameter: <span className='font-mono'>amount</span>,
                type: 'number',
                required: t('mocpq.common.yes'),
                description: t('mocpq.requestBody.table.rows.amount.description'),
                validation: t('mocpq.requestBody.table.rows.amount.validation')
              },
              {
                key: '3',
                parameter: <span className='font-mono'>subject</span>,
                type: 'string',
                required: t('mocpq.common.yes'),
                description: t('mocpq.requestBody.table.rows.subject.description'),
                validation: t('mocpq.requestBody.table.rows.subject.validation')
              },
              {
                key: '4',
                parameter: <span className='font-mono'>currency</span>,
                type: 'string',
                required: t('mocpq.common.yes'),
                description: t('mocpq.requestBody.table.rows.currency.description'),
                validation: t('mocpq.requestBody.table.rows.currency.validation')
              },
              {
                key: '5',
                parameter: <span className='font-mono'>terminalId</span>,
                type: 'string',
                required: t('mocpq.common.yes'),
                description: t('mocpq.requestBody.table.rows.terminalId.description'),
                validation: t('mocpq.requestBody.table.rows.terminalId.validation')
              }
            ]}
            columns={[
              {
                title: <span className='font-semibold'>{t('mocpq.requestBody.table.parameter')}</span>,
                dataIndex: 'parameter',
                key: 'parameter',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('mocpq.requestBody.table.type')}</span>,
                dataIndex: 'type',
                key: 'type',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('mocpq.requestBody.table.required')}</span>,
                dataIndex: 'required',
                key: 'required',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('mocpq.requestBody.table.description')}</span>,
                dataIndex: 'description',
                key: 'description',
              },
              {
                title: <span className='font-semibold'>{t('mocpq.requestBody.table.validationRules')}</span>,
                dataIndex: 'validation',
                key: 'validation',
              },
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('mocpq.requestBody.validationTitle')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>outletId: </span>{t('mocpq.requestBody.rules.outletId')}</li>
          <li><span className='font-semibold'>amount: </span>{t('mocpq.requestBody.rules.amount')}</li>
          <li><span className='font-semibold'>subject: </span>{t('mocpq.requestBody.rules.subject')}</li>
          <li><span className='font-semibold'>currency: </span>{t('mocpq.requestBody.rules.currency')}</li>
          <li><span className='font-semibold'>terminalId: </span>{t('mocpq.requestBody.rules.terminalId')}</li>
        </ul>
      </div>

      {/* ---------- Sample Request --------------------------------------- */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('mocpq.sample.title')}</p>
        <CodeBlock
          code={`{
    "outletId": "outlet_12345",
    "amount": 50.00,
    "subject": "Purchase at Outlet XYZ",
    "currency": "USD",
    "terminalId": "T001"
}`}
        />

        <p className="font-semibold mb-2">{t('mocpq.sample.headersLabel')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer hsuhwuhcuhcef……..chbe</div>
        </div>
      </div>

      {/* ---------- Success Response --------------------------------------- */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('mocpq.success.title')}</p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className='text-green-600 font-bold'>{t('mocpq.httpStatus.ok')}</span></li>
          <li><span className="font-semibold">{t('mocpq.success.contentTypeLabel')}</span>: {t('mocpq.common.applicationJson')}</li>
          <li><span className="font-semibold">{t('mocpq.success.responseBodyLabel')}</span>:</li>
        </ul>

        <CodeBlock
          code={`{
    "code": "QR_GENERATED",
    "message": "QR code generated successfully.",
    "status": "SUCCESS",
    "data": {
        "alipicUrls": {
            "paymentQR": "https://sripayplus.com/qr/abc123",
            "bigPicUrl": "https://alipay.com/big/abc123",
            "smallPicUrl": "https://alipay.com/small/abc123",
            "mediumPicUrl": "https://alipay.com/medium/abc123"
        },
        "outTradeNo": "abc1234567890"
    }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* ---------- Error Response --------------------------------------- */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('mocpq.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('mocpq.errors.intro')}
        </p>

        {/* 1 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.missingParams')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "MISSING_PARAMS",
    "message": "acquirerId, outletId, terminalId, amount, subject and currency are required.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 2 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.invalidAmount')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "INVALID_AMOUNT",
    "message": "Amount must be a positive number.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 3 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.invalidCurrency')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "INVALID_CURRENCY",
    "message": "Currency must be one of: USD, LKR",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 4 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.invalidSubject')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "INVALID_SUBJECT",
    "message": "Subject must be a string with a maximum of 100 characters.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 5 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.outletNotFound')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.notFound')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "OUTLET_NOT_FOUND",
    "message": "Outlet not found with ID: outlet_12345",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 6 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.merchantOutletMismatch')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.forbidden')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "MERCHANT_OUTLET_MISMATCH",
    "message": "Outlet does not belong to provided merchantId.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 7 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.outletNotApproved')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet status not approved.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 8 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.outletNotApprovedAplusOffline')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.forbidden')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet is not approved for Alipay+ offline transactions.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 9 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.terminalNotApproved')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.forbidden')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "TERMINAL_NOT_APPROVED",
    "message": "Terminal is not approved or not found for this outlet.",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 10 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.merchantNotFound')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.notFound')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "MERCHANT_NOT_FOUND",
    "message": "Merchant not found with ID: merchant_98765",
    "status": "FAIL"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 11 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.alipayFailed')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.badRequest')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "ALIPAY_FAILED", 
    "message": "Failed to generate static QR code.", 
    "status": "FAIL", 
    "error": "UNKNOWN_ERROR" 
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 12 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.xmlParseError')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.internalServerError')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "XML_PARSE_ERROR",
    "message": "Error parsing Alipay+ response.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* 13 */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('mocpq.errors.items.serverError')}</p>
          <p className="text-gray-700 mb-2"><span className="font-semibold">{t('mocpq.success.statusCodeLabel')}</span>: <span className="text-red-600 font-bold">{t('mocpq.httpStatus.internalServerError')}</span></p>
          <p className="text-gray-700 mb-2">{t('mocpq.success.responseBodyLabel')}:</p>
          <CodeBlock
            code={`{
    "code": "SERVER_ERROR",
    "message": "Error generating QR code.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
            bgColor="bg-red-50"
          />
        </div>
      </div>

      {/* Notes */}
      <div>
        <p className="text-lg font-semibold text-gray-700">{t('mocpq.common.notes')}</p>
        <ul className='list-disc pl-6 mb-4 space-y-2'>
          <li>{t('mocpq.notes.n1')}</li>
          <li>{t('mocpq.notes.n2')}</li>
          <li>{t('mocpq.notes.n3')}</li>
          <li>{t('mocpq.notes.n4')}</li>
        </ul>
      </div>
    </div>
  )
}

export default MerchantOrderCodePayQr;
