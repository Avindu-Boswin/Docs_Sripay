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

function MerchantPaymentLinkCreateCard() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Payment Link Create' },
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
                Payment Link Create
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">POST</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/card-payment/pay</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint initiates a Paycorp payment transaction for a merchant, generating a
                payment page URL for user authorization, tailored for merchant integrations.
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/card-payment/pay</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-yellow-500'>POST</span></li>
                    <li><span className='font-semibold'>Description</span> – <span> Initializes a Paycorp payment process, validating merchant and outlet details, and returns a payment page URL with an expiration time.</span></li>
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
                                parameter: <span className='font-mono'>amount</span>,
                                type: 'number',
                                required: 'Yes',
                                description: 'Transaction amount',
                                validation: 'Must be a valid positive number.'
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>currency</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Currency of the transaction.',
                                validation: 'Must be either LKR or USD.'
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>outletId</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the outlet.',
                                validation: 'Must be a non-empty string.'
                            },
                            {
                                key: '4',
                                parameter: <span className='font-mono'>description</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Description of the transaction.',
                                validation: 'Must be a non-empty string up to 100 characters.'
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
                    Request Body Validation
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>outletId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>amount: </span> Required, must be a valid positive number.</li>
                    <li><span className='font-semibold'>currency: </span> Required, must be LKR or USD; minimum amount is 100 for LKR and 5 for USD.</li>
                    <li><span className='font-semibold'>description: </span> Required, non-empty string with a maximum length of 100 characters.</li>
                    </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>

                <CodeBlock
                    code={`{
    "amount": 50.00,
    "currency": "USD",
    "outletId": "outlet_12345",
    "description": "Online purchase at Outlet XYZ"
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

                <p><span className="font-semibold">Response Body</span></p>

                <CodeBlock
                    code={`{
    "code": "PAYMENT_INITIATED",
    "message": "Paycorp payment initialized successfully.",
    "status": "SUCCESS",
    "data": {
        "paymentPageUrl": "https: /sripay.lk/payment/1234567890abcdef",
        "expireAt": "2025-08-07 12:42:00",
        "clientRef": "CLIENTREF_123456",
        "reqid": "REQID_789012"
    }
}`}
                    bgColor="bg-green-50"
                />
            </div>

            {/* ---------- Error Response --------------------------------------- */}
            <div id='step-7' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Error Responses</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Below are the possible error responses, including their status codes, error codes, and messages:
                </p>

                {/* Missing Fields */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Missing Fields</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_FIELDS",
    "message": "amount, currency, outletId, description, and merchantId are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Invalid Amount</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_AMOUNT",
    "message": "Amount must be a valid number.",
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
    "message": "Only LKR and USD are supported.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount USD */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">4. Invalid Amount USD</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_AMOUNT_USD",
    "message": "USD Amount must be greater than or equal to 5.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount LKR */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">5. Invalid Amount LKR</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_AMOUNT_LKR",
    "message": "LKR Amount must be greater than or equal to 100.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Description */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">6. Invalid Description</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_DESCRIPTION",
    "message": "Description must be a non-empty string up to 100 characters.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">7. Outlet Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_FOUND",
    "message": "Outlet not found: outlet_12345",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant ID Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">8. Merchant ID Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MERCHANT_ID_MISMATCH",
    "message": "Provided merchantId does not match outlet's merchant.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Merchant Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">9. Merchant Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MERCHANT_NOT_FOUND",
    "message": "Merchant not found: merchant_98765",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Payment Init Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">10. Payment Init Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error or specific Paycorp error status</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "PAYMENT_INIT_ERROR",
    "message": "An error occurred while initiating the payment.",
    "status": "ERROR",
    "error": "Specific error message or response data"
}`}
                        bgColor="bg-red-50"
                    />
                </div>
            </div>
        </div>
    )
}

export default MerchantPaymentLinkCreateCard;