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

function VoidTransaction() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Void Transactions' },
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
                Void Transactions
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">POST</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/instore/void-transaction</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint allows an acquirer to void a successful Alipay transaction on the same day (Colombo time) it was completed, updating the transaction status and notifying relevant parties from an acquirer-centric perspective.</p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/void-transaction</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-yellow-500'>POST</span></li>
                </ul>

            </div>
            {/* ---------- Headers --------------------------------------- */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Headers
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>acquirerid <span className='font-normal'>or</span> x-acq-id</span> (string, required): The unique identifier of the acquirer.</li>
                    <li><span className='font-semibold'>Authorization</span> (string, required): The authorization key for the acquirer.</li>
                    <li><span className='font-semibold'>Auth-Key</span> (string, required): The authentication key for the acquirer.</li>
                    <li><span className='font-semibold'>Content-Type</span> (string, required): Must be application/json.</li>
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
                                parameter: <span className='font-mono'>transactionId</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the transaction to void.'
                            },
                            {
                                key: '2',
                                parameter: <span className='font-mono'>outletId</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the outlet associated with the transaction.'
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
                            }
                        ]}
                    />
                </div>

                <p id='' className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    Request Body Validation
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>transactionId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>outletId: </span> Required, non-empty string.</li>
                    <li><span className='font-semibold'>acquirerId: </span> Required, provided in headers as acquirerid or x-acq-id.</li>
                </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>

                <CodeBlock
                    code={`{
    "transactionId": "TXN_1234567890",
    "outletId": "outlet_12345"
}
`}
                    bgColor="bg-green-50"
                />

                <p className="font-semibold mb-2">Headers</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerId: acquirer_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                    <div>Auth-Key: key_456def789</div>
                    <div>Content-Type: application/json</div>

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
    "code": "VOID_SUCCESS",
    "message": "Transaction voided successfully.",
    "status": "SUCCESS",
    "data": {
        "transactionId": "TXN_1234567890",
        "trade_no": null,
        "out_trade_no": "TXN_1234567890",
        "timestamp": "2025-08-11 14:46:00",
        "provider": {
            "result_code": "SUCCESS",
            "is_success": "T"
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

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Missing Parameters</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_PARAMS",
    "message": "transactionId and outletId are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Missing Authentication */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Missing Authentication</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">401 Unauthorized</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_AUTH",
    "message": "Missing acquirer authentication (x-acq-id).",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">3. Acquirer Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ACQUIRER_NOT_FOUND",
    "message": "Acquirer not found: acquirer_98765",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer Inactive */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">4. Acquirer Inactive</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ACQUIRER_INACTIVE",
    "message": "Acquirer is not active.",
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
    "message": "Outlet not found: outlet_12345",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet No Merchant */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">6. Outlet No Merchant</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NO_MERCHANT",
    "message": "Outlet is missing merchant link.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Outlet No Acquirer */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">7. Outlet No Acquirer</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "OUTLET_NO_ACQUIRER",
    "message": "Outlet is missing acquirer link.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Acquirer-Outlet Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">8. Acquirer-Outlet Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ACQUIRER_OUTLET_MISMATCH",
    "message": "Outlet does not belong to provided acquirerId.",
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
    "message": "Merchant not found: <merchantId>",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">10. Transaction Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "TXN_NOT_FOUND",
    "message": "Transaction not found: TXN_1234567890",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Outlet Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">11. Transaction Outlet Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "TXN_OUTLET_MISMATCH",
    "message": "Transaction does not belong to the given outletId.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Acquirer Mismatch */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">12. Transaction Acquirer Mismatch</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">403 Forbidden</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "TXN_ACQUIRER_MISMATCH",
    "message": "Transaction does not belong to the given acquirerId.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Status */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">13. Invalid Status</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_STATUS",
    "message": "Only SUCCESS transactions can be voided.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Invalid Transaction Timestamp */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">14. Invalid Transaction Timestamp</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "INVALID_TXN_TIMESTAMP",
    "message": "Transaction timestamp is missing/invalid.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Void Window Closed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">15. Void Window Closed</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "VOID_WINDOW_CLOSED",
    "message": "Voids are only allowed until 11:59:59 PM on the Colombo date of the transaction.",
    "status": "FAIL",
    "txnDateColombo": "2025-08-10",
    "nowDateColombo": "2025-08-11"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay Config Missing */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">16. Alipay Config Missing</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ALIPAY_CONFIG_MISSING",
    "message": "Alipay config missing (endpoint/partner).",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay Parse Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">17. Alipay Parse Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">502 Bad Gateway</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ALIPAY_PARSE_ERROR",
    "message": "Failed to parse Alipay response XML.",
    "status": "ERROR"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Alipay Void Failed */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">18. Alipay Void Failed</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "ALIPAY_VOID_FAILED",
    "message": "Alipay void failed.",
    "status": "FAIL",
    "provider": {
        "is_success": "F",
        "result_code": "FAILURE",
        "detail_error_code": "CODE_123",
        "detail_error_des": "Invalid transaction state"
    },
    "timestamp": "2025-08-11 14:46:00"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Void Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">19. Void Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock
                        code={`{
    "code": "VOID_ERROR",
    "message": "Unexpected error processing void.",
    "status": "ERROR",
    "error": "Specific error message.",
    "timestamp": "2025-08-11 14:46:00"
}`}
                        bgColor="bg-red-50"
                    />
                </div>
            </div>
        </div>
    )
}

export default VoidTransaction;