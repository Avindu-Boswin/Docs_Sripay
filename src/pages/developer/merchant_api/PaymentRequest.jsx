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

function PaymentRequest() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Payment Request' },
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
                Payment Request
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">POST</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/webframe/request</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint creates a WebFrame payment request for a merchant, generating a
                unique payment link with a 24-hour expiry. It automatically includes enabled payment
                methods (e.g., Alipay+ or cards) based on the outlet's approved status, redirecting users
                to a payment method selection page.
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/webframe/request</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-yellow-500'>POST</span></li>
                    <li><span className='font-semibold'>Description</span> – Generates a payment request for a merchant, validating outlet details and persisting the request with available payment methods.</li>
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
                                validation: 'Must be a non-empty string.'
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>amount</span>,
                                type: 'number',
                                required: 'Yes',
                                description: 'Transaction amount.',
                                validation: 'Must be a positive number.'
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>currency</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Transaction currency.',
                                validation: 'Must be either USD or LKR.'
                            },
                            {
                                key: '4',
                                parameter: <span className='font-mono'>subject</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Description of the transaction.',
                                validation: 'Must be a string, truncated to 99 chars if >100.'
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
                            }
                        ]}
                    />
                </div>

                <p id='' className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    Request Parameters Validation
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>outletId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>amount: </span> Required, must be a positive number.</li>
                    <li><span className='font-semibold'>currency: </span> Required, must be USD or LKR (case-insensitive).</li>
                    <li><span className='font-semibold'>subject: </span> Required, string with a maximum effective length of 100 characters (truncated to 99 if longer).</li>
                </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>

                <CodeBlock
                    code={`{
    "outletId": "outlet_12345",
    "amount": 50.00,
    "currency": "USD",
    "subject": "Purchase at Outlet XYZ"
}
`}
                    bgColor="bg-green-50"
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
                    <li><span className="font-semibold">Status Code</span>: <span className='text-green-600 font-bold'>201 Created</span></li>
                    <li><span className="font-semibold">Content Type</span>: application/json</li>
                </ul>

                <p><span className="font-semibold">Response Body</span></p>

                <CodeBlock
                    code={`{
    "code": "WEBFRAME_CREATED",
    "message": "WebFrame record created.",
    "status": "SUCCESS",
    "data": {
        "paymentLink": "https: /example.com/paymentmethodredirect?ref=abc123def456ghi789jkl012mno345pq",
        "expiresAt": "2025-08-08 10:32:00",
        "currency": "USD",
        "amount": 50.00
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

                {/* Missing Field */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Missing Field</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_MISSING_FIELD",
    "message": "merchantId header plus outletId, amount, currency & subject are required.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Outlet Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_OUTLET_NOT_FOUND",
    "message": "Outlet not found: outlet_12345",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Inactive */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">3. Outlet Inactive</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_OUTLET_INACTIVE",
    "message": "Outlet outlet_12345 is not approved.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">4. Merchant Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_MERCHANT_MISMATCH",
    "message": "Outlet outlet_12345 does not belong to merchant merchant_98765.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* No Payment Method */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">5. No Payment Method</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_NO_PAYMENT_METHOD",
    "message": "Outlet outlet_12345 has no approved payment methods.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Bad Currency */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">6. Bad Currency</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_BAD_CURRENCY",
    "message": "Unsupported currency 'EUR'. Use USD or LKR.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Bad Amount */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">7. Bad Amount</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_BAD_AMOUNT",
    "message": "Amount must be a positive number.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Server Error (Outlet Check) */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">8. Server Error (Outlet Check)</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_SERVER_ERROR",
    "message": "Outlet validation failed.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Server Error (Create) */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">9. Server Error (Create)</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "WEBFRAME_SERVER_ERROR",
    "message": "Failed to create WebFrame record.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>
            </div>
        </div>
    )
}

export default PaymentRequest;