import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
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

function OrderCodePayQr() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('orderCodePayQr.menu.section1') },
            { id: 'step-2', label: t('orderCodePayQr.menu.section2') },
            { id: 'step-3', label: t('orderCodePayQr.menu.section3') },
            { id: 'step-4', label: t('orderCodePayQr.menu.section4') },
            { id: 'step-5', label: t('orderCodePayQr.menu.section5') },
            { id: 'step-6', label: t('orderCodePayQr.menu.section6') },
            { id: 'step-7', label: t('orderCodePayQr.menu.section7') }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('orderCodePayQr.title')}
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">{t('orderCodePayQr.methodBadge')}</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/instore/ordercode-pay</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('orderCodePayQr.lede1')}
            </p>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('orderCodePayQr.lede2')}
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('orderCodePayQr.endpoint.title')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>{t('orderCodePayQr.endpoint.urlLabel')}</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-pay</span></li>
                    <li><span className='font-semibold'>{t('orderCodePayQr.endpoint.methodLabel')}</span> – <span className='font-bold text-yellow-500'>{t('orderCodePayQr.methodBadge')}</span></li>
                    <li><span className='font-semibold'>{t('orderCodePayQr.endpoint.descLabel')}</span> – {t('orderCodePayQr.endpoint.desc')}</li>
                </ul>

            </div>
            {/* ---------- Headers --------------------------------------- */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('orderCodePayQr.headers.title')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>{t('orderCodePayQr.headers.acqId')}</li>
                    <li>{t('orderCodePayQr.headers.authorization')}</li>
                    <li>{t('orderCodePayQr.headers.authKey')}</li>
                    <li>{t('orderCodePayQr.headers.contentType')}</li>
                </ul>
            </div>


            {/* ---------- Request Body --------------------------------------- */}
            <div id='step-4' className='mt-8 mb-6'>
                <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('orderCodePayQr.requestBody.title')}
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('orderCodePayQr.requestBody.intro')}
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
                                required: t('orderCodePayQr.requestBody.table.yes'),
                                description: t('orderCodePayQr.requestBody.rows.outletId.description'),
                                validation: t('orderCodePayQr.requestBody.rows.outletId.validation'),
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>amount</span>,
                                type: (<>number</>),
                                required: t('orderCodePayQr.requestBody.table.yes'),
                                description: t('orderCodePayQr.requestBody.rows.amount.description'),
                                validation: t('orderCodePayQr.requestBody.rows.amount.validation'),
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>subject</span>,
                                type: 'string',
                                required: t('orderCodePayQr.requestBody.table.yes'),
                                description: t('orderCodePayQr.requestBody.rows.subject.description'),
                                validation: t('orderCodePayQr.requestBody.rows.subject.validation'),
                            },
                            {
                                key: '4',
                                parameter: <span className='font-mono'>currency</span>,
                                type: 'string',
                                required: t('orderCodePayQr.requestBody.table.yes'),
                                description: t('orderCodePayQr.requestBody.rows.currency.description'),
                                validation: t('orderCodePayQr.requestBody.rows.currency.validation'),
                            },
                            {
                                key: '5',
                                parameter: <span className='font-mono'>terminalId</span>,
                                type: 'string',
                                required: t('orderCodePayQr.requestBody.table.yes'),
                                description: t('orderCodePayQr.requestBody.rows.terminalId.description'),
                                validation: t('orderCodePayQr.requestBody.rows.terminalId.validation'),
                            },
                        ]}
                        columns={[
                            {
                                title: <span className='font-semibold'>{t('orderCodePayQr.requestBody.table.parameter')}</span>,
                                dataIndex: 'parameter',
                                key: 'parameter',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('orderCodePayQr.requestBody.table.type')}</span>,
                                dataIndex: 'type',
                                key: 'type',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('orderCodePayQr.requestBody.table.required')}</span>,
                                dataIndex: 'required',
                                key: 'required',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>{t('orderCodePayQr.requestBody.table.description')}</span>,
                                dataIndex: 'description',
                                key: 'description',
                            },
                            {
                                title: <span className='font-semibold'>{t('orderCodePayQr.requestBody.table.validation')}</span>,
                                dataIndex: 'validation',
                                key: 'validation',
                            },
                        ]}
                    />
                </div>

                <p id='' className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    {t('orderCodePayQr.requestBody.validationTitle')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>{t('orderCodePayQr.requestBody.validationBullets.outletId')}</li>
                    <li>{t('orderCodePayQr.requestBody.validationBullets.amount')}</li>
                    <li>{t('orderCodePayQr.requestBody.validationBullets.subject')}</li>
                    <li>{t('orderCodePayQr.requestBody.validationBullets.currency')}</li>
                    <li>{t('orderCodePayQr.requestBody.validationBullets.terminalId')}</li>
                </ul>
            </div>


            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('orderCodePayQr.sampleRequest.title')}</p>

                <CodeBlock
                    code={`{
    "outletId": "outlet_12345",
    "amount": 50.00,
    "subject": "Purchase at Outlet XYZ",
    "currency": "USD",
    "terminalId": "T001"
}`}
                />

                <p className="font-semibold mb-2">{t('orderCodePayQr.sampleRequest.headersLabel')}</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerid: acquirer_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                    <div>AuthKey: key_456def789</div>
                    <div>Content-Type: application/json</div>
                </div>
            </div>

            {/* ---------- Success Response --------------------------------------- */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('orderCodePayQr.successResponse.title')}</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">{t('orderCodePayQr.successResponse.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('orderCodePayQr.successResponse.okLabel')}</span></li>
                    <li><span className="font-semibold">{t('orderCodePayQr.successResponse.contentType')}</span>: application/json</li>
                    <li><span className="font-semibold">{t('orderCodePayQr.successResponse.responseBody')}</span>:</li>
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
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('orderCodePayQr.errors.title')}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {t('orderCodePayQr.errors.intro')}
                </p>

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.missingParams')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_PARAMS",
    "message": "acquirerId, outletId, terminalId, amount, subject and currency are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.invalidAmount')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.invalidCurrency')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_CURRENCY",
    "message": "Currency must be one of: USD, LKR",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Subject */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.invalidSubject')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.outletNotFound')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.notFound')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.acqOutletMismatch')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.outletNotApproved')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet status not approved.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Approved for Alipay+ */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.outletNotApprovedOffline')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet is not approved for Alipay+ offline transactions.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Terminal Not Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.terminalNotApproved')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "TERMINAL_NOT_APPROVED",
    "message": "Terminal is not active for this outlet.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Missing Merchant */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.outletMissingMerchant')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.internalError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_MISSING_MERCHANT",
    "message": "Outlet document does not contain a merchant reference.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.merchantNotFound')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.notFound')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.acqMerchantMismatch')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.forbidden')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.alipayUnreachable')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badGateway')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
                    <CodeBlock
                        code={`{
    "code": "ALIPAY_UNREACHABLE",
    "message": "Unable to reach Alipay+ endpoint.",
    "status": "ERROR",
    "error": "Specific error message"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* XML Parse Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.xmlParseError')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.internalError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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

                {/* Alipay+ Failed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.alipayFailed')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.badRequest')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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

                {/* SriPay QR Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">
                        {t('orderCodePayQr.errors.items.sripayQrError')}
                    </p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">
                            {t('orderCodePayQr.errors.statusCode')}
                        </span>
                        :{' '}
                        <span className="text-red-600 font-bold">
                            {t('orderCodePayQr.errors.labels.badGateway')}
                        </span>
                    </p>
                    <p className="text-gray-700 mb-2">
                        {t('orderCodePayQr.errors.responseBody')}:
                    </p>
                    <CodeBlock
                        code={`{
  "code": "SRIPAY_QR_ERROR",
  "message": "Failed to generate SriPay QR image.",
  "status": "ERROR",
  "error": "Specific error message"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Server Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('orderCodePayQr.errors.items.serverError')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('orderCodePayQr.errors.statusCode')}</span>: <span className="text-red-600 font-bold">{t('orderCodePayQr.errors.labels.internalError')}</span></p>
                    <p className="text-gray-700 mb-2">{t('orderCodePayQr.errors.responseBody')}:</p>
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




        </div>
    )
}

export default OrderCodePayQr;
