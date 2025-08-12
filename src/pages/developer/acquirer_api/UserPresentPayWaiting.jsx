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

function UserPresentPayWaiting() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'User Present Pay Waiting' },
            { id: 'step-2', label: 'Endpoint' },
            { id: 'step-3', label: 'Request Header' },
            { id: 'step-4', label: 'Request Parameters' },
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
                User Present Pay Waiting
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">GET</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/:partnerTransId</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>This endpoint retrieves the status of a user-presented Alipay transaction awaiting authentication, identified by partnerTransId. It allows rechecking to verify if user authentication has occurred, returning the latest transaction details.</p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/:partnerTransId</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-green-500'>GET</span></li>
                    <li><span className='font-semibold'>Description</span> – Fetches the transaction status for a given partnerTransId, useful for rechecking after user authentication, tailored for acquirer integrations.</li>
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
                    Request Parameters
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    The request includes a path parameter
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
                                parameter: <span className='font-mono'>partnerTransId</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the partner transaction.'
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
                    Request Parameters Validation
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>partnerTransId: </span> Required, must be a non-empty string.</li>
                    <li><span className='font-semibold'>acquirerId:</span> Required, provided in headers as acquirerid or x-acq-id.</li>
                </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>
                <p><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/202508051418001234</span></p>

                <p className="font-semibold mb-2">Headers</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerid: acquirer_98765</div>
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

                <p><span className="font-semibold">Response Body</span> (as of 02:18 PM +0530, Tuesday, August 05, 2025)</p>

                <CodeBlock
                    code={`{
    "code": "TRANSACTION_FOUND",
    "message": "Transaction retrieved successfully.",
    "status": "SUCCESS",
    "transactions": [
        {
            "transactionId": "tx123456",
            "timestamp": "2025-08-05 14:10:00",
            "currency": "USD",
            "amount": "50.00",
            "outletName": "Outlet XYZ",
            "outletId": "outlet_12345",
            "transactionStatus": "SUCCESS",
            "paymentMethod": "Alipay+"
        }
    ]
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
    "message": "partnerTransId and acquirerId are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">2. Transaction Not Found</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock 
                        code={`{
    "code": "TRANSACTION_NOT_FOUND",
    "message": "No transaction found for the given partnerTransId and merchantId.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Server Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">3. Server Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">Response Body:</p>
                    <CodeBlock 
                        code={`{
    "code": "SERVER_ERROR",
    "message": "An error occurred while retrieving transaction details.",
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

export default UserPresentPayWaiting;