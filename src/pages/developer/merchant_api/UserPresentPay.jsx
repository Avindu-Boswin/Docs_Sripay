import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import { useSections } from '../../../components/SectionContext';

// Copyable code block
const CodeBlock = ({ code, bgColor = 'bg-gray-50' }) => {
  const { t } = useTranslation('merchant_user_present_pay');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    const btn = document.activeElement;
    const originalText = btn && btn.innerText;
    if (btn) {
      btn.innerText = t('merchant_user_present_pay_ui_copied');
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
        {t('merchant_user_present_pay_ui_copy')}
      </button>
    </div>
  );
};

function MerchantUserPresentPay() {
  const { t } = useTranslation('merchant_user_present_pay');
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('merchant_user_present_pay_section_title') },
      { id: 'step-2', label: t('merchant_user_present_pay_section_endpoint') },
      { id: 'step-3', label: t('merchant_user_present_pay_section_headers') },
      { id: 'step-4', label: t('merchant_user_present_pay_section_request_body') },
      { id: 'step-5', label: t('merchant_user_present_pay_section_sample_request') },
      { id: 'step-6', label: t('merchant_user_present_pay_section_success_response') },
      { id: 'step-7', label: t('merchant_user_present_pay_section_error_responses') },
      { id: 'step-8', label: t('merchant_user_present_pay_section_notes') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSections, t]);

  const requestBodyColumns = [
    { title: <span className="font-semibold">{t('merchant_user_present_pay_table_parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
    { title: <span className="font-semibold">{t('merchant_user_present_pay_table_type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
    { title: <span className="font-semibold">{t('merchant_user_present_pay_table_required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
    { title: <span className="font-semibold">{t('merchant_user_present_pay_table_description')}</span>, dataIndex: 'description', key: 'description' },
    { title: <span className="font-semibold">{t('merchant_user_present_pay_table_validation')}</span>, dataIndex: 'validation', key: 'validation' }
  ];

  const requestBodyRows = [
    {
      key: '1',
      parameter: <span className="font-mono">outletId</span>,
      type: t('merchant_user_present_pay_type_string'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_outletId_desc'),
      validation: t('merchant_user_present_pay_field_outletId_validation')
    },
    {
      key: '2',
      parameter: <span className="font-mono">amount</span>,
      type: t('merchant_user_present_pay_type_number'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_amount_desc'),
      validation: t('merchant_user_present_pay_field_amount_validation')
    },
    {
      key: '3',
      parameter: <span className="font-mono">subject</span>,
      type: t('merchant_user_present_pay_type_string'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_subject_desc'),
      validation: t('merchant_user_present_pay_field_subject_validation')
    },
    {
      key: '4',
      parameter: <span className="font-mono">currency</span>,
      type: t('merchant_user_present_pay_type_string'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_currency_desc'),
      validation: t('merchant_user_present_pay_field_currency_validation')
    },
    {
      key: '5',
      parameter: <span className="font-mono">terminalId</span>,
      type: t('merchant_user_present_pay_type_string'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_terminalId_desc'),
      validation: t('merchant_user_present_pay_field_terminalId_validation')
    },
    {
      key: '6',
      parameter: <span className="font-mono">buyer_identity_code</span>,
      type: t('merchant_user_present_pay_type_string'),
      required: t('merchant_user_present_pay_common_yes'),
      description: t('merchant_user_present_pay_field_buyer_identity_code_desc'),
      validation: t('merchant_user_present_pay_field_buyer_identity_code_validation')
    }
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('merchant_user_present_pay_title')}
      </h1>

      {/* Method + Path */}
      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('merchant_user_present_pay_http_post')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('merchant_user_present_pay_endpoint_path')}
        </span>
      </div>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('merchant_user_present_pay_intro')}
      </p>

      {/* Endpoint */}
      <div className="mt-8 mb-6">
        <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_endpoint')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('merchant_user_present_pay_label_url')}</span> –{' '}
            <span className="font-medium text-[#0073ff]">{t('merchant_user_present_pay_endpoint_path')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('merchant_user_present_pay_label_method')}</span> –{' '}
            <span className="font-bold text-yellow-500">{t('merchant_user_present_pay_http_post')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('merchant_user_present_pay_label_description')}</span> –{' '}
            <span>{t('merchant_user_present_pay_endpoint_desc')}</span>
          </li>
        </ul>
      </div>

      {/* Headers */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_headers')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('merchant_user_present_pay_header_merchantId')}</li>
          <li>{t('merchant_user_present_pay_header_authorization')}</li>
        </ul>
      </div>

      {/* Request Body */}
      <div id="step-4" className="mt-8 mb-6">
        <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_request_body')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('merchant_user_present_pay_request_body_intro')}
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
          {t('merchant_user_present_pay_validation_title')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">outletId: </span>
            {t('merchant_user_present_pay_validation_outletId')}
          </li>
          <li>
            <span className="font-semibold">amount: </span>
            {t('merchant_user_present_pay_validation_amount')}
          </li>
          <li>
            <span className="font-semibold">subject: </span>
            {t('merchant_user_present_pay_validation_subject')}
          </li>
          <li>
            <span className="font-semibold">currency: </span>
            {t('merchant_user_present_pay_validation_currency')}
          </li>
          <li>
            <span className="font-semibold">terminalId: </span>
            {t('merchant_user_present_pay_validation_terminalId')}
          </li>
          <li>
            <span className="font-semibold">buyer_identity_code: </span>
            {t('merchant_user_present_pay_validation_buyer_identity_code')}
          </li>
        </ul>
      </div>

      {/* Sample Request */}
      <div id="step-5" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_sample_request')}
        </p>

        <CodeBlock
          code={`{
  "outletId": "outlet_12345",
  "amount": 50.00,
  "subject": "Purchase at Outlet XYZ",
  "currency": "USD",
  "terminalId": "T001",
  "buyer_identity_code": "123456789012"
}`}
        />

        <p className="font-semibold mb-2">{t('merchant_user_present_pay_sample_headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* Success Response */}
      <div id="step-6" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_success_response')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('merchant_user_present_pay_label_status_code')}</span>:{' '}
            <span className="text-green-600 font-bold">200 OK</span>
          </li>
          <li>
            <span className="font-semibold">{t('merchant_user_present_pay_label_content_type')}</span>: application/json
          </li>
        </ul>

        <p>
          <span className="font-semibold">{t('merchant_user_present_pay_label_response_body')}</span> ({t('merchant_user_present_pay_status_success')}):
        </p>

        <CodeBlock
          code={`{
  "code": "PAYMENT_INITIATED",
  "message": "Transaction successfully initiated.",
  "status": "SUCCESS",
  "data": {
    "tradeStatus": "SUCCESS",
    "partner_trans_id": "202508051345001234",
    "trade_no": "ALIPAY_TX_123456",
    "outTradeNo": "202508051345001234"
  }
}`}
          bgColor="bg-green-50"
        />

        <p>
          <span className="font-semibold">{t('merchant_user_present_pay_label_response_body')}</span> ({t('merchant_user_present_pay_status_pending')}):
        </p>

        <CodeBlock
          code={`{
  "code": "AWAITING_USER_AUTH",
  "message": "Waiting for user authentication. Please confirm payment on check info.",
  "status": "PENDING",
  "data": {
    "tradeStatus": "UNKNOWN",
    "partner_trans_id": "202508051345001234",
    "trade_no": "ALIPAY_TX_123456",
    "outTradeNo": "202508051345001234"
  }
}`}
          bgColor="bg-green-50"
        />
      </div>

      {/* Error Responses */}
      <div id="step-7" className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('merchant_user_present_pay_section_error_responses')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('merchant_user_present_pay_errors_intro')}
        </p>

        {[
          {
            idx: 1,
            title: t('merchant_user_present_pay_error_missing_params'),
            status: '400 Bad Request',
            body: `{
  "code": "MISSING_PARAMS",
  "message": "Required fields missing: merchantId, outletId, amount, subject, currency, terminalId, buyer_identity_code",
  "status": "FAIL"
}`
          },
          {
            idx: 2,
            title: t('merchant_user_present_pay_error_invalid_subject'),
            status: '400 Bad Request',
            body: `{
  "code": "INVALID_SUBJECT",
  "message": "Subject must be a string with max length is 100 characters.",
  "status": "FAIL"
}`
          },
          {
            idx: 3,
            title: t('merchant_user_present_pay_error_invalid_currency'),
            status: '400 Bad Request',
            body: `{
  "code": "INVALID_CURRENCY",
  "message": "Currency must be either 'USD' or 'LKR'.",
  "status": "FAIL"
}`
          },
          {
            idx: 4,
            title: t('merchant_user_present_pay_error_invalid_amount'),
            status: '400 Bad Request',
            body: `{
  "code": "INVALID_AMOUNT",
  "message": "Total amount must be a positive number.",
  "status": "FAIL"
}`
          },
          {
            idx: 5,
            title: t('merchant_user_present_pay_error_outlet_not_found'),
            status: '404 Not Found',
            body: `{
  "code": "OUTLET_NOT_FOUND",
  "message": "Outlet not found with ID: outlet_12345",
  "status": "FAIL"
}`
          },
          {
            idx: 6,
            title: t('merchant_user_present_pay_error_merchant_outlet_mismatch'),
            status: '403 Forbidden',
            body: `{
  "code": "MERCHANT_OUTLET_MISMATCH",
  "message": "Provided merchantId does not match outlet's merchant.",
  "status": "FAIL"
}`
          },
          {
            idx: 7,
            title: t('merchant_user_present_pay_error_terminal_not_approved'),
            status: '403 Forbidden',
            body: `{
  "code": "TERMINAL_NOT_APPROVED",
  "message": "Terminal not approved or not found for this outlet.",
  "status": "FAIL"
}`
          },
          {
            idx: 8,
            title: t('merchant_user_present_pay_error_merchant_not_found'),
            status: '404 Not Found',
            body: `{
  "code": "MERCHANT_NOT_FOUND",
  "message": "Merchant not found with ID: merchant_98765",
  "status": "FAIL"
}`
          },
          {
            idx: 9,
            title: t('merchant_user_present_pay_error_alipay_invalid_response'),
            status: '502 Bad Gateway',
            body: `{
  "code": "ALIPAY_INVALID_RESPONSE",
  "message": "Invalid response from Alipay.",
  "status": "ERROR"
}`
          },
          {
            idx: 10,
            title: t('merchant_user_present_pay_error_alipay_tx_failed'),
            status: '400 Bad Request',
            body: `{
  "code": "ALIPAY_TRANSACTION_FAILED",
  "message": "Alipay+ did not accept the transaction.",
  "status": "FAIL",
  "error": "result_code_value"
}`
          },
          {
            idx: 11,
            title: t('merchant_user_present_pay_error_server_error'),
            status: '500 Internal Server Error',
            body: `{
  "code": "SERVER_ERROR",
  "message": "Internal server error.",
  "status": "ERROR",
  "error": "Specific error message"
}`
          }
        ].map(({ idx, title, status, body }) => (
          <div key={idx} className="mb-6">
            <p className="text-lg font-semibold text-gray-700">
              {idx}. {title}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">{t('merchant_user_present_pay_label_status_code')}</span>:{' '}
              <span className="text-red-600 font-bold">{status}</span>
            </p>
            <p className="text-gray-700 mb-2">{t('merchant_user_present_pay_label_response_body')}:</p>
            <CodeBlock code={body} bgColor="bg-red-50" />
          </div>
        ))}
      </div>

      {/* Notes */}
      <div id="step-8">
        <p className="text-lg font-semibold text-gray-700">{t('merchant_user_present_pay_section_notes')}</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>{t('merchant_user_present_pay_note_spot_pay')}</li>
          <li>{t('merchant_user_present_pay_note_tz')}</li>
          <li>{t('merchant_user_present_pay_note_orderId')}</li>
          <li>{t('merchant_user_present_pay_note_buyer_code')}</li>
          <li>{t('merchant_user_present_pay_note_statuses')}</li>
        </ul>
      </div>
    </div>
  );
}

export default MerchantUserPresentPay;
