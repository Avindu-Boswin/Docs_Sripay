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
            btn.innerText = t('commona.copied');
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
                {t('commona.copy')}
            </button>
        </div>
    );
};

function PaymentRequest() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('paymentRequest.title') },
            { id: 'step-2', label: t('commona.endpoint') },
            { id: 'step-3', label: t('commona.headers') },
            { id: 'step-4', label: t('commona.requestBody') },
            { id: 'step-5', label: t('commona.sampleRequest') },
            { id: 'step-6', label: t('commona.successResponse') },
            { id: 'step-7', label: t('commona.errorResponses') }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSections, t]);

    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
            {/* Title */}
            <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
                {t('paymentRequest.title')}
            </h1>

            {/* Method + Path */}
            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
                    POST
                </span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
                    {'{Host}'}/v2/webframe/request
                </span>
            </div>

            <p className="text-gray-700 text-base leading-relaxed mb-8">
                {t('paymentRequest.intro')}
            </p>

            {/* Endpoint */}
            <div className="mt-8 mb-6">
                <p id="step-2" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
                    {t('commona.endpoint')}
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li>
                        <span className="font-semibold">{t('commona.url')}</span> –{' '}
                        <span className="font-medium text-[#0073ff]">{'{Host}'}/v2/webframe/request</span>
                    </li>
                    <li>
                        <span className="font-semibold">{t('commona.method')}</span> –{' '}
                        <span className="font-bold text-yellow-500">POST</span>
                    </li>
                    <li>
                        <span className="font-semibold">{t('commona.description')}</span> – {t('paymentRequest.endpointDesc')}
                    </li>
                </ul>
            </div>

            {/* Headers */}
            <div className="mt-8 mb-6">
                <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
                    {t('commona.headers')}
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li>{t('commona.headerMerchant')}</li>
                    <li>{t('commona.headerAuth')}</li>
                </ul>
            </div>

            {/* Request Body */}
            <div id="step-4" className="mt-8 mb-6">
                <p className="text-xl mb-4 mt-10 font-semibold text-gray-700">
                    {t('commona.requestBody')}
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {t('paymentRequest.bodyIntro')}
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
                                required: t('commona.yes'),
                                description: t('paymentRequest.params.outletId.desc'),
                                validation: t('paymentRequest.params.outletId.val')
                            },
                            {
                                key: '2',
                                parameter: <span className="font-mono">amount</span>,
                                type: 'number',
                                required: t('commona.yes'),
                                description: t('paymentRequest.params.amount.desc'),
                                validation: t('paymentRequest.params.amount.val')
                            },
                            {
                                key: '3',
                                parameter: <span className="font-mono">currency</span>,
                                type: 'string',
                                required: t('commona.yes'),
                                description: t('paymentRequest.params.currency.desc'),
                                validation: t('paymentRequest.params.currency.val')
                            },
                            {
                                key: '4',
                                parameter: <span className="font-mono">subject</span>,
                                type: 'string',
                                required: t('commona.yes'),
                                description: t('paymentRequest.params.subject.desc'),
                                validation: t('paymentRequest.params.subject.val')
                            }
                        ]}
                        columns={[
                            { title: <span className="font-semibold">{t('commona.tbl.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
                            { title: <span className="font-semibold">{t('commona.tbl.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
                            { title: <span className="font-semibold">{t('commona.tbl.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
                            { title: <span className="font-semibold">{t('commona.tbl.description')}</span>, dataIndex: 'description', key: 'description' },
                            { title: <span className="font-semibold">{t('commona.tbl.validation')}</span>, dataIndex: 'validation', key: 'validation' }
                        ]}
                    />
                </div>

                <p className="text-md mb-4 mt-10 font-bold text-gray-700">
                    {t('paymentRequest.validationTitle')}
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">outletId: </span>{t('paymentRequest.validation.outletId')}</li>
                    <li><span className="font-semibold">amount: </span>{t('paymentRequest.validation.amount')}</li>
                    <li><span className="font-semibold">currency: </span>{t('paymentRequest.validation.currency')}</li>
                    <li><span className="font-semibold">subject: </span>{t('paymentRequest.validation.subject')}</li>
                </ul>
            </div>

            {/* Sample Request */}
            <div id="step-5" className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('commona.sampleRequest')}</p>

                <CodeBlock
                    code={`{
  "outletId": "outlet_12345",
  "amount": 50.00,
  "currency": "USD",
  "subject": "Purchase at Outlet XYZ"
}`}
                    bgColor="bg-green-50"
                />

                <p className="font-semibold mb-2">{t('commona.headers')}</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>merchantId: merchant_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                </div>
            </div>

            {/* Success Response */}
            <div id="step-6" className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('commona.successResponse')}</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">{t('commona.statusCode')}</span>: <span className="text-green-600 font-bold">201 Created</span></li>
                    <li><span className="font-semibold">{t('commona.contentType')}</span>: application/json</li>
                </ul>

                <p><span className="font-semibold">{t('commona.responseBody')}</span></p>

                <CodeBlock
                    code={`{
  "code": "WEBFRAME_CREATED",
  "message": "WebFrame record created.",
  "status": "SUCCESS",
  "data": {
      "paymentLink": "https://example.com/paymentmethodredirect?ref=abc123def456ghi789jkl012mno345pq",
      "expiresAt": "2025-08-08 10:32:00",
      "currency": "USD",
      "amount": 50.00
  }
}`}
                    bgColor="bg-green-50"
                />
            </div>

            {/* Error Responses */}
            <div id="step-7" className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('commona.errorResponses')}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">{t('paymentRequest.errorsIntro')}</p>

                {[
                    {
                        n: 1, title: t('paymentRequest.errors.missingField.title'), status: '400 Bad Request', code: `{
  "code": "WEBFRAME_MISSING_FIELD",
  "message": "merchantId header plus outletId, amount, currency & subject are required.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 2, title: t('paymentRequest.errors.outletNotFound.title'), status: '404 Not Found', code: `{
  "code": "WEBFRAME_OUTLET_NOT_FOUND",
  "message": "Outlet not found: outlet_12345",
  "status": "ERROR"
}`
                    },
                    {
                        n: 3, title: t('paymentRequest.errors.outletInactive.title'), status: '400 Bad Request', code: `{
  "code": "WEBFRAME_OUTLET_INACTIVE",
  "message": "Outlet outlet_12345 is not approved.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 4, title: t('paymentRequest.errors.merchantMismatch.title'), status: '403 Forbidden', code: `{
  "code": "WEBFRAME_MERCHANT_MISMATCH",
  "message": "Outlet outlet_12345 does not belong to merchant merchant_98765.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 5, title: t('paymentRequest.errors.noPaymentMethod.title'), status: '400 Bad Request', code: `{
  "code": "WEBFRAME_NO_PAYMENT_METHOD",
  "message": "Outlet outlet_12345 has no approved payment methods.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 6, title: t('paymentRequest.errors.badCurrency.title'), status: '400 Bad Request', code: `{
  "code": "WEBFRAME_BAD_CURRENCY",
  "message": "Unsupported currency 'EUR'. Use USD or LKR.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 7, title: t('paymentRequest.errors.badAmount.title'), status: '400 Bad Request', code: `{
  "code": "WEBFRAME_BAD_AMOUNT",
  "message": "Amount must be a positive number.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 8, title: t('paymentRequest.errors.serverOutlet.title'), status: '500 Internal Server Error', code: `{
  "code": "WEBFRAME_SERVER_ERROR",
  "message": "Outlet validation failed.",
  "status": "ERROR"
}`
                    },
                    {
                        n: 9, title: t('paymentRequest.errors.serverCreate.title'), status: '500 Internal Server Error', code: `{
  "code": "WEBFRAME_SERVER_ERROR",
  "message": "Failed to create WebFrame record.",
  "status": "ERROR"
}`
                    }
                ].map(err => (
                    <div className="mb-6" key={err.n}>
                        <p className="text-lg font-semibold text-gray-700">{err.n}. {err.title}</p>
                        <p className="text-gray-700 mb-2">
                            <span className="font-semibold">{t('commona.statusCode')}</span>: <span className="text-red-600 font-bold">{err.status}</span>
                        </p>
                        <p className="text-gray-700 mb-2">{t('commona.responseBody')}</p>
                        <CodeBlock code={err.code} bgColor="bg-red-50" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaymentRequest;
