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

function OrderCodeResultListner() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Order Code Pay QR' },
            
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Order Code Result Listener
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">GET</span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">&#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/:outTradeNo</span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
This endpoint establishes a real-time connection using Server-Sent Events (SSE) to listen for updates on Alipay+ transactions identified by outTradeNo. It streams transaction status changes, converting timestamps from GMT+8 to Asia/Colombo (GMT+5:30).            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    Endpoint
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/:outTradeNo</span></li>
                    <li><span className='font-semibold'>Method</span> – <span className='font-bold text-green-500'>GET</span></li>
                    <li><span className='font-semibold'>Description</span> – Provides real-time updates on the transaction status for a specific outTradeNo using SSE.</li>
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
                                parameter: <span className='font-mono'>outTradeNo</span>,
                                type: 'string',
                                required: 'Yes',
                                description: 'Unique identifier of the Alipay+ transaction..'                            }
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
                    <li><span className='font-semibold'>outTradeNo: </span> Required, must be a non-empty string.</li>
                </ul>
            </div>


            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Sample Request</p>
                <ul>
                    <li><span className='font-semibold'>URL</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/abc1234567890</span></li>
                </ul>

                <p className="font-semibold mb-2">Headers</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerid: acquirer_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                    <div>AuthKey: key_456def789</div>
                    <div>Content-Type: application/json</div>
                </div>
            </div>

            {/* ---------- Success Response --------------------------------------- */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Success Response</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">Status Code</span>: <span className='text-green-600 font-bold'>200 OK</span></li>
                    <li><span className="font-semibold">Content Type</span>: text/event-stream</li>
                    <li><span className="font-semibold">Response Body</span>:  Streams events in SSE format.</li>
                </ul>

                <p> Example (as of 01:37 PM +0530, Tuesday, August 05, 2025):<br />event: update</p>

                <CodeBlock 
                    code={`data: [{"id":"tx123456","trade_status":"SUCCESS","timestamp":"2025-08-05 13:07:00"}]
`}
                    bgColor="bg-green-50"
                />

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">event</span>: update - Indicates a transaction update.</li>
                    <li><span className="font-semibold">data</span>:  JSON array containing transaction details (id, trade_status, timestamp).</li>
                </ul>
            </div>






            {/* ---------- Error Response --------------------------------------- */}
            <div id='step-7' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">Error Responses</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Below are the possible error responses, including their status codes, error codes, and messages:
                </p>

                {/* Firestore Listener Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">1. Firestore Listener Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-green-600 font-bold">200 OK (with error event)</span></p>
                    <p className="text-gray-700 mb-2 font-semibold">Response Body:</p>
                    <p>event: error</p>

                    <CodeBlock 
                        code={`data: {"code":"FIRESTORE_ERROR","message":"Error listening to transaction changes.","status":"ERROR"}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Unexpected Server Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">Unexpected Server Error</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">Status Code</span>: <span className="text-green-600 font-bold">200 OK (with error event)</span></p>
                    <p className="text-gray-700 mb-2 font-semibold">Response Body:</p>
                    <p>event: error</p>

                    <CodeBlock 
                        code={`data: {"code":"UNEXPECTED_ERROR","message":"Unexpected server error.","status":"ERROR"}`}
                        bgColor="bg-red-50"
                    />
                </div>
           </div>
        </div>
    )
}

export default OrderCodeResultListner;