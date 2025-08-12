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

function MerchantUserPresentPay() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'User Present Pay' },
            { id: 'step-2', label: 'Endpoint' },
            { id: 'step-3', label: 'Request Header' },
            { id: 'step-4', label: 'Request Body' },
            { id: 'step-5', label: 'Sample Request' },
            { id: 'step-6', label: 'Success Response' },
            { id: 'step-7', label: 'Error Responses' }

        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                User Present Pay
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">POST</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/instore/userpresent-pay</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint initiates an Alipay overseas spot payment transaction for user-presented
                scenarios, validating merchant, outlet, and terminal details, and generating a transaction request.
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-pay</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-yellow-500'>POST</span></li>
                    <li><span className='font-semibold'>Description</span> – Initiates a user-presented Alipay+ transaction by validating inputs and interacting with the Alipay+ API.</li>
                </ul>

            </div>
            {/* ---------- Headers --------------------------------------- */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Headers
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>merchantId <span className='font-normal'>or</span> x-mch-id</span> (string, required): The unique identifier of the merchant.</li>
                    <li><span className='font-semibold'>Authorization <span className='font-normal'>or</span> x-api-key</span> (string, required): The unique identifier Key of the merchant.</li>
                </ul>
            </div>


            {/* ---------- Request Body --------------------------------------- */}
            <div id='step-4' className='mt-8 mb-6'>
                <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Request Body
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    The request body must be in JSON format and include the following parameters
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
                                required: 'Yes',
                                description: 'Unique identifier of the outlet.',
                                validation: 'Must be a non-empty string.',
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>amount</span>,
                                type: (
                                    <>
                                        number
                                    </>
                                ),
                                required: 'Yes',
                                description: 'Transaction amount.',
                                validation: 'Must be a positive number greater than 0.',
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>subject</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Description of the transaction.',
                                validation: 'Must be a string, max length 100 characters.',
                            },
                            {
                                key: '4',
                                parameter: <span className='font-mono'>currency</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Currency of the transaction.',
                                validation: 'Must be either USD or LKR.',
                            },
                            {
                                key: '5',
                                parameter: <span className='font-mono'>terminalId</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the terminal.',
                                validation: 'Must be a non-empty string.',
                            },
                            {
                                key: '6',
                                parameter: <span className='font-mono'>buyer_identity_code</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Buyer\'s identity code (e.g., barcode).',
                                validation: 'Must be a non-empty string.',
                            }
                        ]}
                        columns={[
                            {
                                title: <span className='font-semibold'>Parameter</span>,
                                dataIndex: 'parameter',
                                key: 'parameter',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>Type</span>,
                                dataIndex: 'type',
                                key: 'type',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>Required</span>,
                                dataIndex: 'required',
                                key: 'required',
                                align: 'center',
                            },
                            {
                                title: <span className='font-semibold'>Description</span>,
                                dataIndex: 'description',
                                key: 'description',
                            },
                            {
                                title: <span className='font-semibold'>Validation Rules</span>,
                                dataIndex: 'validation',
                                key: 'validation',
                            },
                        ]}
                    />
                </div>

                <p id='' className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    Request Body Validation
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>outletId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>amount:</span> Required, must be a positive number (greater than 0).</li>
                    <li><span className='font-semibold'>subject: </span> Required, string with a maximum length of 100 characters.</li>
                    <li><span className='font-semibold'>currency: </span>  Required, must be one of USD or LKR.</li>
                    <li><span className='font-semibold'>terminalId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>buyer_identity_code: </span> Required, non-empty string.</li>
                </ul>
            </div>


            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>

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

                <p className="font-semibold mb-2">Headers</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>merchantId: merchant_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                </div>
            </div>

            {/* ---------- Success Response --------------------------------------- */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Success Response</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">Status Code</span>: <span className='text-green-600 font-bold'>200 OK</span></li>
                    <li><span className="font-semibold">Content Type</span>: application/json</li>
                </ul>

                <p><span className="font-semibold">Response Body</span>:   (Success):</p>

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

                <p><span className="font-semibold">Response Body</span>:   (Pending Authentication):</p>

                <CodeBlock
                    code={`{
    "code": "AWAITING_USER_AUTH",
    "message": "Waiting for user authentication. After Please confirm payment on check info.",
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
                <p className="text-xl mb-4 font-semibold text-gray-700">Error Responses</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Below are the possible error responses, including their status codes, error codes, and messages:
                </p>

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Missing Parameters</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_PARAMS",
    "message": "Required fields missing: merchantId, outletId, amount, subject, currency, terminalId, buyer_identity_code",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Subject */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Invalid Subject</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_SUBJECT",
    "message": "Subject must be a string with max length is 100 characters.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Currency */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">3. Invalid Currency</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_CURRENCY",
    "message": "Currency must be either 'USD' or 'LKR'.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Subject */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">4. Invalid Amount</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_AMOUNT",
    "message": "Total amount must be a positive number.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">5. Outlet Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_FOUND",
    "message": "Outlet not found with ID: outlet_12345",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant-Outlet Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">6. Merchant-Outlet Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MERCHANT_OUTLET_MISMATCH",
    "message": "Provided merchantId does not match outlet's merchant.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Terminal Not Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">7. Terminal Not Approved or Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "TERMINAL_NOT_APPROVED",
    "message": "Terminal not approved or not found for this outlet.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">8. Merchant Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MERCHANT_NOT_FOUND",
    "message": "Merchant not found with ID: merchant_98765",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay+ Invalid Response */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">9. Alipay+ Invalid Response</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">502 Bad Gateway</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
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
                    <p className="text-lg font-semibold text-gray-700">10. Alipay+ Transaction Failed</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
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
                    <p className="text-lg font-semibold text-gray-700">11. Server Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
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

            <div>
                <p className="text-lg font-semibold text-gray-700">Notes</p>
                <ul className='list-disc pl-6 mb-4 space-y-2'>
                    <li>The endpoint initiates an Alipay acquire.overseas.spot.pay transaction for
                        user-presented payments. </li>
                    <li>Timestamps in Asia/Colombo (GMT+5:30)  timezone utc.</li>
                    <li>The orderId is a unique identifier generated based on the current date-time and a
                        random number. </li>
                    <li>The buyer_identity_code is expected to be a barcode or similar identifier for the
                        buyer. </li>
                    <li>The transaction status may return PENDING if awaiting user authentication, or
                        SUCCESS upon successful initiation.</li>
                </ul>
            </div>
        </div>
    )
}

export default MerchantUserPresentPay;