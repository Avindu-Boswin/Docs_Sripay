import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import { useSections } from '../../../components/SectionContext';

// Copyable code block (JSX, no TS types)
const CodeBlock = ({ code, bgColor = 'bg-gray-50' }) => {
  const { t } = useTranslation('payment_link_create');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    const btn = document.activeElement;
    const originalText = btn && btn.innerText;
    if (btn) {
      btn.innerText = t('payment_link_create_ui_copied');
      setTimeout(() => {
        if (btn) btn.innerText = originalText || '';
      }, 1500);
    }
  };

  return (
    <div className="relative">
      <pre className={`${bgColor} rounded-2xl p-4 text-sm md:text-base overflow-x-auto mb-4`}>{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200"
      >
        {t('payment_link_create_ui_copy')}
      </button>
    </div>
  );
};

function PaymentLinkCreate() {
  const { t } = useTranslation('payment_link_create');
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('payment_link_create_title') },
      { id: 'step-2', label: t('payment_link_create_section_endpoint') },
      { id: 'step-3', label: t('payment_link_create_section_headers') },
      { id: 'step-4', label: t('payment_link_create_section_request_body') },
      { id: 'step-5', label: t('payment_link_create_section_sample_request') },
      { id: 'step-6', label: t('payment_link_create_section_success_response') },
      { id: 'step-7', label: t('payment_link_create_section_error_responses') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSections, t]);

  const requestBodyColumns = [
    {
      title: <span className="font-semibold">{t('payment_link_create_table_parameter')}</span>,
      dataIndex: 'parameter',
      key: 'parameter',
      align: 'center'
    },
    {
      title: <span className="font-semibold">{t('payment_link_create_table_type')}</span>,
      dataIndex: 'type',
      key: 'type',
      align: 'center'
    },
    {
      title: <span className="font-semibold">{t('payment_link_create_table_required')}</span>,
      dataIndex: 'required',
      key: 'required',
      align: 'center'
    },
    {
      title: <span className="font-semibold">{t('payment_link_create_table_description')}</span>,
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: <span className="font-semibold">{t('payment_link_create_table_validation_rules')}</span>,
      dataIndex: 'validation',
      key: 'validation'
    }
  ];

  const requestBodyRows = [
    {
      key: '1',
      parameter: <span className="font-mono">outletId</span>,
      type: 'string',
      required: 'Yes',
      description: t('payment_link_create_field_outletId_desc'),
      validation: t('payment_link_create_field_outletId_validation')
    },
    {
      key: '2',
      parameter: <span className="font-mono">amount</span>,
      type: 'number',
      required: 'Yes',
      description: t('payment_link_create_field_amount_desc'),
      validation: t('payment_link_create_field_amount_validation')
    },
    {
      key: '3',
      parameter: <span className="font-mono">orderDescription</span>,
      type: 'string',
      required: 'Yes',
      description: t('payment_link_create_field_orderDescription_desc'),
      validation: t('payment_link_create_field_orderDescription_validation')
    }
  ];

  const errorBlocks = [
    { idx: 1, titleKey: 'payment_link_create_error_invalid_input', status: '400 Bad Request', body: `{
  "code": "INVALID_INPUT",
  "message": "outletId, amount, orderDescription are required.",
  "status": "FAIL"
}` },
    { idx: 2, titleKey: 'payment_link_create_error_order_desc_too_long', status: '400 Bad Request', body: `{
  "code": "ORDER_DESC_TOO_LONG",
  "message": "orderDescription must not exceed 100 characters.",
  "status": "FAIL"
}` },
    { idx: 3, titleKey: 'payment_link_create_error_invalid_amount', status: '400 Bad Request', body: `{
  "code": "INVALID_AMOUNT",
  "message": "Amount must be a positive number.",
  "status": "FAIL"
}` },
    { idx: 4, titleKey: 'payment_link_create_error_outlet_not_found', status: '404 Not Found', body: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found with ID: outlet_12345",
  "status": "FAIL"
}` },
    { idx: 5, titleKey: 'payment_link_create_error_outlet_not_approved', status: '400 Bad Request', body: `{
  "code": "OUTLET_NOT_APPROVED",
  "message": "Outlet Status Not Approved.",
  "status": "FAIL"
}` },
    { idx: 6, titleKey: 'payment_link_create_error_outlet_not_alipay_online_approved', status: '400 Bad Request', body: `{
  "code": "OUTLET_NOT_ALIPAY_ONLINE_APPROVED",
  "message": "Outlet Alipay Online Status Not Approved.",
  "status": "FAIL"
}` },
    { idx: 7, titleKey: 'payment_link_create_error_outlet_missing_merchant', status: '400 Bad Request', body: `{
  "code": "OUTLET_MISSING_MERCHANT",
  "message": "Merchant ID is missing in outlet document.",
  "status": "FAIL"
}` },
    { idx: 8, titleKey: 'payment_link_create_error_acquirer_outlet_mismatch', status: '403 Forbidden', body: `{
  "code": "ACQUIRER_OUTLET_MISMATCH",
  "message": "Outlet does not belong to provided acquirerId.",
  "status": "FAIL"
}` },
    { idx: 9, titleKey: 'payment_link_create_error_merchant_not_found', status: '404 Not Found', body: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found with ID: <merchantId>",
  "status": "FAIL"
}` },
    { idx: 10, titleKey: 'payment_link_create_error_config_missing', status: '500 Internal Server Error', body: `{
  "code": "CONFIG_MISSING",
  "message": "Alipay Plus Client ID or endpoint not configured.",
  "status": "ERROR"
}` },
    { idx: 11, titleKey: 'payment_link_create_error_signature_failed', status: '500 Internal Server Error', body: `{
  "code": "SIGNATURE_FAILED",
  "message": "Failed to generate Alipay+ signature.",
  "status": "ERROR"
}` },
    { idx: 12, titleKey: 'payment_link_create_error_payment_failed', status: '500 Internal Server Error', body: `{
  "code": "PAYMENT_FAILED",
  "message": "Error processing payment.",
  "status": "ERROR",
  "error": "Specific error message"
}` }
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title & endpoint */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('payment_link_create_title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('payment_link_create_http_post')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('payment_link_create_endpoint_path')}
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">{t('payment_link_create_intro')}</p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('payment_link_create_section_endpoint')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">URL</span> –{' '}
            <span className="font-medium text-[#0073ff]">{t('payment_link_create_endpoint_path')}</span>
          </li>
          <li>
            <span className="font-semibold">Method</span> –{' '}
            <span className="font-bold text-yellow-500">{t('payment_link_create_http_post')}</span>
          </li>
          <li>
            <span className="font-semibold">Description</span> – <span>{t('payment_link_create_intro')}</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('payment_link_create_section_headers')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('payment_link_create_header_acquirerid')}</li>
          <li>{t('payment_link_create_header_authorization')}</li>
          <li>{t('payment_link_create_header_authkey')}</li>
          <li>{t('payment_link_create_header_content_type')}</li>
        </ul>
      </div>

      {/* Request Body */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('payment_link_create_section_request_body')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('payment_link_create_request_body_intro')}
        </p>

        <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
          <Table
            bordered
            pagination={false}
            size="middle"
            scroll={{ x: 'max-content' }}
            dataSource={requestBodyRows}
            columns={requestBodyColumns}
          />
        </div>

        <p className="text-md mb-4 mt-10 font-bold text-gray-700">
          {t('payment_link_create_validation_title', 'Request Body Validation')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">outletId: </span>
            {t('payment_link_create_validation_outletId')}
          </li>
          <li>
            <span className="font-semibold">amount: </span>
            {t('payment_link_create_validation_amount')}
          </li>
          <li>
            <span className="font-semibold">orderDescription: </span>
            {t('payment_link_create_validation_orderDescription')}
          </li>
          <li>
            <span className="font-semibold">currency: </span>
            {t('payment_link_create_validation_currency')}
          </li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('payment_link_create_section_sample_request')}
        </p>
        <CodeBlock
          code={`{
  "outletId": "outlet_12345",
  "amount": 50.00,
  "orderDescription": "Online purchase at Outlet XYZ"
}`}
        />
        <p className="font-semibold mb-2">{t('payment_link_create_sample_headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>acquirerid: acquirer_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
          <div>AuthKey: key_456def789</div>
          <div>Content-Type: application/json</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('payment_link_create_section_success_response')}
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('payment_link_create_label_status_code')}</span>:{' '}
            <span className="text-green-600 font-bold">200 OK</span>
          </li>
          <li>
            <span className="font-semibold">{t('payment_link_create_label_content_type')}</span>: application/json
          </li>
        </ul>

        <p>
          <span className="font-semibold">{t('payment_link_create_label_response_body')}</span>
        </p>
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
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('payment_link_create_section_error_responses')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('payment_link_create_error_intro')}
        </p>

        {errorBlocks.map(({ idx, titleKey, status, body }) => (
          <div key={idx} className="mb-6">
            <p className="text-lg font-semibold text-gray-700">
              {idx}. {t(titleKey)}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">{t('payment_link_create_label_status_code')}</span>:{' '}
              <span className="text-red-600 font-bold">{status}</span>
            </p>
            <p className="text-gray-700 mb-2">{t('payment_link_create_label_response_body')}:</p>
            <CodeBlock code={body} bgColor="bg-red-50" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentLinkCreate;
