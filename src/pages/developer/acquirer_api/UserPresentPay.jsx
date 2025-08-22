import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

// Code block component with copy functionality
const CodeBlock = ({ code, bgColor = "bg-gray-50" }) => {
    const { t } = useTranslation();
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        const btn = document.activeElement;
        if (btn) {
            const originalText = btn.innerText;
            btn.innerText = t('commont.copied');
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
                aria-label={t('commont.copy')}
            >
                {t('commont.copy')}
            </button>
        </div>
    );
};

function UserPresentPay() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('userPresentPay.sections.step1') },
            { id: 'step-2', label: t('userPresentPay.sections.endpoint') },
            { id: 'step-3', label: t('userPresentPay.sections.requestHeader') },
            { id: 'step-4', label: t('userPresentPay.sections.requestBody') },
            { id: 'step-5', label: t('userPresentPay.sections.sampleRequest') },
            { id: 'step-6', label: t('userPresentPay.sections.successResponse') },
            { id: 'step-7', label: t('userPresentPay.sections.errorResponses') }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('userPresentPay.title')}
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
                    {t('commont.http.post')}
                </span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
                    &#123;Host&#125;/v2/alipayplus/instore/userpresent-pay
                </span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('userPresentPay.intro')}
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('userPresentPay.endpoint.title')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>
                        <span className='font-semibold'>{t('userPresentPay.endpoint.urlLabel')}</span> –{' '}
                        <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-pay</span>
                    </li>
                    <li>
                        <span className='font-semibold'>{t('userPresentPay.endpoint.methodLabel')}</span> –{' '}
                        <span className='font-bold text-yellow-500'>{t('commont.http.post')}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>{t('userPresentPay.endpoint.descriptionLabel')}</span> –{' '}
                        {t('userPresentPay.endpoint.description')}
                    </li>
                </ul>

            </div>
            {/* ---------- Headers --------------------------------------- */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('userPresentPay.headers.title')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>{t('userPresentPay.headers.items.acquirerId')}</li>
                    <li>{t('userPresentPay.headers.items.authorization')}</li>
                    <li>{t('userPresentPay.headers.items.authKey')}</li>
                    <li>{t('userPresentPay.headers.items.contentType')}</li>
                </ul>
            </div>


            {/* ---------- Request Body --------------------------------------- */}
            <div id='step-4' className='mt-8 mb-6'>
                <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('userPresentPay.requestBody.title')}
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('userPresentPay.requestBody.intro')}
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
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.outletId.description'),
                                validation: t('userPresentPay.requestBody.table.outletId.validation'),
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>amount</span>,
                                type: <>number</>,
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.amount.description'),
                                validation: t('userPresentPay.requestBody.table.amount.validation'),
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>subject</span>,
                                type: 'string',
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.subject.description'),
                                validation: t('userPresentPay.requestBody.table.subject.validation'),
                            },
                            {
                                key: '4',
                                parameter: <span className='font-mono'>currency</span>,
                                type: 'string',
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.currency.description'),
                                validation: t('userPresentPay.requestBody.table.currency.validation'),
                            },
                            {
                                key: '5',
                                parameter: <span className='font-mono'>terminalId</span>,
                                type: 'string',
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.terminalId.description'),
                                validation: t('userPresentPay.requestBody.table.terminalId.validation'),
                            },
                            {
                                key: '6',
                                parameter: <span className='font-mono'>buyer_identity_code</span>,
                                type: 'string',
                                required: t('commont.yes'),
                                description: t('userPresentPay.requestBody.table.buyerIdentityCode.description'),
                                validation: t('userPresentPay.requestBody.table.buyerIdentityCode.validation'),
                            }
                        ]}
                        columns={[
                            {
                                title: <span className='font-semibold'>{t('commont.table.parameter')}</span>,
                                dataIndex: 'parameter',
                                key: 'parameter',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('commont.table.type')}</span>,
                                dataIndex: 'type',
                                key: 'type',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('commont.table.required')}</span>,
                                dataIndex: 'required',
                                key: 'required',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('commont.table.description')}</span>,
                                dataIndex: 'description',
                                key: 'description',
                            },
                            {
                                title: <span className='font-semibold'>{t('commont.table.validationRules')}</span>,
                                dataIndex: 'validation',
                                key: 'validation',
                            },
                        ]}
                    />
                </div>

                <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    {t('userPresentPay.requestBody.validationTitle')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>outletId: </span>{t('userPresentPay.requestBody.rules.outletId')}</li>
                    <li><span className='font-semibold'>amount: </span>{t('userPresentPay.requestBody.rules.amount')}</li>
                    <li><span className='font-semibold'>subject: </span>{t('userPresentPay.requestBody.rules.subject')}</li>
                    <li><span className='font-semibold'>currency: </span>{t('userPresentPay.requestBody.rules.currency')}</li>
                    <li><span className='font-semibold'>terminalId: </span>{t('userPresentPay.requestBody.rules.terminalId')}</li>
                    <li><span className='font-semibold'>buyer_identity_code: </span>{t('userPresentPay.requestBody.rules.buyerIdentityCode')}</li>
                </ul>
            </div>


            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">
                    {t('userPresentPay.sample.title')}
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

                <p className="font-semibold mb-2">{t('userPresentPay.sample.headers')}</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerid: acquirer_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                    <div>AuthKey: key_456def789</div>
                    <div>Content-Type: {t('commont.mime.json')}</div>
                </div>
            </div>

            {/* ---------- Success Response --------------------------------------- */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">
                    {t('userPresentPay.success.title')}
                </p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">{t('commont.statusCode')}</span>: <span className='text-green-600 font-bold'>200 OK</span></li>
                    <li><span className="font-semibold">{t('commont.contentType')}</span>: {t('commont.mime.json')}</li>
                </ul>

                <p><span className="font-semibold">{t('commont.responseBody')}</span>: {t('userPresentPay.success.successLabel')}</p>

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
}
`}
                    bgColor="bg-green-50"
                />

                <p><span className="font-semibold">{t('commont.responseBody')}</span>: {t('userPresentPay.success.pendingLabel')}</p>

                <CodeBlock
                    code={`{
    "code": "AWAITING_USER_AUTH",
    "message": "Waiting for user authentication.",
    "status": "PENDING",
    "data": {
        "tradeStatus": "UNKNOWN",
        "partner_trans_id": "202508051345001234",
        "trade_no": "ALIPAY_TX_123456",
        "outTradeNo": "202508051345001234"
    }
}
`}
                    bgColor="bg-green-50"
                />
            </div>

            {/* ---------- Error Response --------------------------------------- */}
            <div id='step-7' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('userPresentPay.errors.title')}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {t('userPresentPay.errors.intro')}
                </p>

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.missingParams')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "MISSING_PARAMS",
    "message": "acquirerId, outletId, amount, subject, currency, terminalId, buyer_identity_code are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.invalidAmount')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "INVALID_AMOUNT",
    "message": "Amount must be a positive number.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Currency */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.invalidCurrency')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "INVALID_CURRENCY",
    "message": "Currency must be USD / LKR.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Subject */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.invalidSubject')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "INVALID_SUBJECT",
    "message": "Subject max length is 100 characters.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.outletNotFound')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">404 {t('userPresentPay.errors.labels.notFound')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "OUTLET_NOT_FOUND",
    "message": "Outlet outlet_12345 not found.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer-Outlet Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.acquirerOutletMismatch')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">403 {t('userPresentPay.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "ACQUIRER_OUTLET_MISMATCH",
    "message": "Outlet does not belong to provided acquirerId.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.outletNotApproved')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet status not approved.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Approved for Alipay+ Offline */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.outletNotApprovedOffline')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">403 {t('userPresentPay.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet is not approved for Alipay+ offline.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Terminal Not Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.terminalNotApproved')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">403 {t('userPresentPay.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "TERMINAL_NOT_APPROVED",
    "message": "Terminal not active for this outlet.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Missing Merchant */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.outletMissingMerchant')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">500 {t('userPresentPay.errors.labels.internalServerError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "OUTLET_MISSING_MERCHANT",
    "message": "Outlet document missing merchant reference.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.merchantNotFound')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">404 {t('userPresentPay.errors.labels.notFound')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "MERCHANT_NOT_FOUND",
    "message": "Merchant <merchantId> not found.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer-Merchant Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.acquirerMerchantMismatch')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">403 {t('userPresentPay.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "ACQUIRER_MERCHANT_MISMATCH",
    "message": "Merchant does not belong to provided acquirerId.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay+ Unreachable */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.alipayUnreachable')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">502 {t('userPresentPay.errors.labels.badGateway')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "ALIPAY_UNREACHABLE",
    "message": "Unable to reach Alipay.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* XML Parse Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.xmlParseError')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">500 {t('userPresentPay.errors.labels.internalServerError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "XML_PARSE_ERROR",
    "message": "Error parsing Alipay+response.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay+ Invalid Response */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.alipayInvalidResponse')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">502 {t('userPresentPay.errors.labels.badGateway')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "ALIPAY_INVALID_RESPONSE",
    "message": "Invalid response from Alipay.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay+ Transaction Failed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.alipayTransactionFailed')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">400 {t('userPresentPay.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "ALIPAY_TRANSACTION_FAILED",
    "message": "Alipay+ did not accept the transaction.",
    "status": "FAIL",
    "error": "result_code_value"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Server Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('userPresentPay.errors.items.serverError')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('commont.statusCode')}</span>: <span className="text-red-600 font-bold">500 {t('userPresentPay.errors.labels.internalServerError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('commont.responseBody')}:</p>
                    <CodeBlock 
                        code={`{
    "code": "SERVER_ERROR",
    "message": "Internal server error.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
                        bgColor="bg-red-50"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserPresentPay;
