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

function MerchantPaymentLinkCreate() {
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
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/pay</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint initiates an Alipay+ online payment transaction for a given outlet,
                generating a payment request with a redirect URL for user authorization, tailored for
                merchant integrations.
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/pay</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-yellow-500'>POST</span></li>
                    <li><span className='font-semibold'>Description</span> – <span> Initiates an Alipay+ online payment process, validating outlet and merchant details, and returns a payment URL for user authorization.</span></li>

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
                                validation: 'Must be a positive number greater than 0.'
                            },
                            {
                                key: '3',
                                parameter: <span className='font-mono'>orderDescription</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Description of the order.',
                                validation: 'Must be a string, max length 100 characters.'
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
                    <li><span className='font-semibold'>amount: </span>  Required, must be a positive number (greater than 0).</li>
                    <li><span className='font-semibold'>orderDescription: </span>  Required, string with a maximum length of 100 characters.</li>
                    <li><span className='font-semibold'>currency: </span>  Fixed as USD (not user-configurable in this endpoint).</li>
                </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>

                <CodeBlock
                    code={`{
    "outletId": "outlet_12345",
    "amount": 50.00,
    "orderDescription": "Online purchase at Outlet XYZ"
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

                {/* Invalid Input */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Invalid Input</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_INPUT",
    "message": "outletId, amount, orderDescription are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Order Description Too Long */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Order Description Too Long</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ORDER_DESC_TOO_LONG",
    "message": "orderDescription must not exceed 100 characters.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Amount */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">3. Invalid Amount</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_AMOUNT",
    "message": "Amount must be a positive number.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">4. Outlet Not Found</p>
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

                {/* Outlet Not Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">5. Outlet Not Approved</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_APPROVED",
    "message": "Outlet Status Not Approved.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Not Alipay Online Approved */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">6. Outlet Not Alipay Online Approved</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NOT_ALIPAY_ONLINE_APPROVED",
    "message": "Outlet Alipay Online Status Not Approved.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet Missing Merchant */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">7. Outlet Missing Merchant</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_MISSING_MERCHANT",
    "message": "Merchant ID is missing in outlet document.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer-Outlet Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">8. Merchant ID Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MERCHANT_ID_MISMATCH",
    "message": "Provided merchant ID does not match outlet's merchant ID.",
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
    "message": "Merchant not found with ID: <merchantId>",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Config Missing */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">10. Config Missing</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "CONFIG_MISSING",
    "message": "Alipay Plus Client ID or endpoint not configured.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Signature Failed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">11. Signature Failed</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "SIGNATURE_FAILED",
    "message": "Failed to generate Alipay+ signature.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Payment Failed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">12. Payment Failed</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "PAYMENT_FAILED",
    "message": "Error processing payment.",
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

export default MerchantPaymentLinkCreate;