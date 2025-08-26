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
      btn.innerText = t('merchant_paylink_copied');
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
        {t('merchant_paylink_copy')}
      </button>
    </div>
  );
};

function MerchantPaymentLinkCreate() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('merchant_paylink_section_title') },
      { id: 'step-2', label: t('merchant_paylink_section_endpoint') },
      { id: 'step-3', label: t('merchant_paylink_section_headers') },
      { id: 'step-4', label: t('merchant_paylink_section_body') },
      { id: 'step-5', label: t('merchant_paylink_section_sample') },
      { id: 'step-6', label: t('merchant_paylink_section_success') },
      { id: 'step-7', label: t('merchant_paylink_section_errors') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('merchant_paylink_section_title')}
      </h1>

      {/* Method + Path */}
      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('merchant_paylink_method')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {'{Host}'}/v2/alipayplus/online/pay
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('merchant_paylink_intro')}
      </p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_paylink_section_endpoint')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('merchant_paylink_label_url')}</span> –{' '}
            <span className="font-medium text-[#0073ff]">{'{Host}'}/v2/alipayplus/online/pay</span>
          </li>
          <li>
            <span className="font-semibold">{t('merchant_paylink_label_method')}</span> –{' '}
            <span className="font-bold text-yellow-500">{t('merchant_paylink_method')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('merchant_paylink_label_desc')}</span> –{' '}
            <span>{t('merchant_paylink_desc_text')}</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_paylink_section_headers')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('merchant_paylink_header_merchant')}</li>
          <li>{t('merchant_paylink_header_auth')}</li>
        </ul>
      </div>

      {/* Request Body */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_paylink_section_body')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('merchant_paylink_body_intro')}
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
                parameter: <span className="font-mono">outletId</span>,
                type: 'string',
                required: t('merchant_paylink_required_yes'),
                description: t('merchant_paylink_param_outletId_desc'),
                validation: t('merchant_paylink_param_outletId_val')
              },
              {
                key: '2',
                parameter: <span className="font-mono">amount</span>,
                type: 'number',
                required: t('merchant_paylink_required_yes'),
                description: t('merchant_paylink_param_amount_desc'),
                validation: t('merchant_paylink_param_amount_val')
              },
              {
                key: '3',
                parameter: <span className="font-mono">orderDescription</span>,
                type: 'string',
                required: t('merchant_paylink_required_yes'),
                description: t('merchant_paylink_param_order_desc'),
                validation: t('merchant_paylink_param_order_val')
              }
            ]}
            columns={[
              { title: <span className="font-semibold">{t('merchant_paylink_tbl_param')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className="font-semibold">{t('merchant_paylink_tbl_type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className="font-semibold">{t('merchant_paylink_tbl_required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className="font-semibold">{t('merchant_paylink_tbl_desc')}</span>, dataIndex: 'description', key: 'description' },
              { title: <span className="font-semibold">{t('merchant_paylink_tbl_validation')}</span>, dataIndex: 'validation', key: 'validation' }
            ]}
          />
        </div>

        <p className="text-md mb-4 mt-10 font-bold text-gray-700">
          {t('merchant_paylink_validation_title')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">outletId: </span>{t('merchant_paylink_val_outletId')}</li>
          <li><span className="font-semibold">amount: </span>{t('merchant_paylink_val_amount')}</li>
          <li><span className="font-semibold">orderDescription: </span>{t('merchant_paylink_val_order')}</li>
          <li><span className="font-semibold">currency: </span>{t('merchant_paylink_val_currency')}</li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_paylink_section_sample')}</p>

        <CodeBlock
          code={`{
  "outletId": "outlet_12345",
  "amount": 50.00,
  "orderDescription": "Online purchase at Outlet XYZ"
}`}
        />

        <p className="font-semibold mb-2">{t('merchant_paylink_label_headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_paylink_section_success')}</p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('merchant_paylink_label_status')}</span>: <span className="text-green-600 font-bold">200 OK</span></li>
          <li><span className="font-semibold">{t('merchant_paylink_label_content_type')}</span>: application/json</li>
        </ul>

        <p><span className="font-semibold">{t('merchant_paylink_label_response_body')}</span></p>

        <CodeBlock
          code={`{
  "code": "PAYMENT_INITIATED",
  "message": "Payment initiated successfully.",
  "status": "SUCCESS",
  "data": {
      "paymentId": "PAY_1234567890abcdef",
      "paymentUrl": "https://alipay.com/payment/1234567890abcdef",
      "currency": "USD",
      "paymentAmount": "50.00",
      "paymentResult": {
          "resultCode": "SUCCESS",
          "resultStatus": "S"
      }
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id="step-7" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_paylink_section_errors')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('merchant_paylink_errors_intro')}
        </p>

        {[
          { title: t('merchant_paylink_err_invalid_input'), status: '400 Bad Request', code: `{
  "code": "INVALID_INPUT",
  "message": "outletId, amount, orderDescription are required.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_order_too_long'), status: '400 Bad Request', code: `{
  "code": "ORDER_DESC_TOO_LONG",
  "message": "orderDescription must not exceed 100 characters.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_invalid_amount'), status: '400 Bad Request', code: `{
  "code": "INVALID_AMOUNT",
  "message": "Amount must be a positive number.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_outlet_not_found'), status: '404 Not Found', code: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found with ID: outlet_12345",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_outlet_not_approved'), status: '400 Bad Request', code: `{
  "code": "OUTLET_NOT_APPROVED",
  "message": "Outlet Status Not Approved.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_outlet_not_alipay'), status: '400 Bad Request', code: `{
  "code": "OUTLET_NOT_ALIPAY_ONLINE_APPROVED",
  "message": "Outlet Alipay Online Status Not Approved.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_outlet_missing_merchant'), status: '400 Bad Request', code: `{
  "code": "OUTLET_MISSING_MERCHANT",
  "message": "Merchant ID is missing in outlet document.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_merchant_mismatch'), status: '403 Forbidden', code: `{
  "code": "MERCHANT_ID_MISMATCH",
  "message": "Provided merchant ID does not match outlet's merchant ID.",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_merchant_not_found'), status: '404 Not Found', code: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found with ID: <merchantId>",
  "status": "FAIL"
}`},
          { title: t('merchant_paylink_err_config_missing'), status: '500 Internal Server Error', code: `{
  "code": "CONFIG_MISSING",
  "message": "Alipay Plus Client ID or endpoint not configured.",
  "status": "ERROR"
}`},
          { title: t('merchant_paylink_err_signature_failed'), status: '500 Internal Server Error', code: `{
  "code": "SIGNATURE_FAILED",
  "message": "Failed to generate Alipay+ signature.",
  "status": "ERROR"
}`},
          { title: t('merchant_paylink_err_payment_failed'), status: '500 Internal Server Error', code: `{
  "code": "PAYMENT_FAILED",
  "message": "Error processing payment.",
  "status": "ERROR",
  "error": "Specific error message"
}`}
        ].map((err, i) => (
          <div className="mb-6" key={i}>
            <p className="text-lg font-semibold text-gray-700">{i + 1}. {err.title}</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">{t('merchant_paylink_label_status')}</span>: <span className="text-red-600 font-bold">{err.status}</span>
            </p>
            <p className="text-gray-700 mb-2">{t('merchant_paylink_label_response_body')}</p>
            <CodeBlock code={err.code} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MerchantPaymentLinkCreate;
