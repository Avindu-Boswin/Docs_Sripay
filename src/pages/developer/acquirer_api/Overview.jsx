import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';


import Img1 from '../../../assets/images/developer/acq_api_req_structure.png';

function AcqApiOverview() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: 'Overview' },
            { id: 'step-2', label: 'API Request Structure' },
            { id: 'step-3', label: 'Request URL Format' },
            { id: 'step-4', label: 'Request Method' },
            { id: 'step-5', label: 'Request Headers' },
            { id: 'step-6', label: 'Response Body' },
            { id: 'step-7', label: 'Response Codes' }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Acquirer API Overview
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                The Acquirer API, powered by SriPay and integrated with Alipay+, provides a secure and robust solution for merchants to process payments, manage accounts, and handle transactions programmatically. This API supports various payment methods, including online payments, merchant-presented mode payments ( dynamic QR codes), user-presented mode payments, payment voids, and refunds. Designed for simplicity and security, the API ensures consistent request handling through common headers and strict validation.

            </p>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                This documentation outlines the API's endpoints, request structures, workflows, and error scenarios, with examples to facilitate integration.
            </p>

            {/* ---------- System Diagram ------------------------------------------------ */}
            <div id='step-2' className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    API Request Structure
                </h4>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='API Request Structure' />
                </Zoom>

                {/* API Request Structure List */}
                <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-8">
                    <li>Request URL Format</li>
                    <li>Request Method</li>
                    <li>Request Headers
                        <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Authorization Key</li>
                            <li>Acquirer Id</li>
                            <li>Auth Key</li>
                            <li>Content-Type</li>
                        </ul>
                    </li>
                    <li>Response Body</li>
                    <li>Response Code</li>
                </ol>
            </div>

            {/* ---------- Component Descriptions ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    1. Request URL Format
                </p>

                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    The SriPay Connect ACQ API follows a structured request URL format, which is composed of two distinct parts
                </p>

                <p className='font-semibold mb-2'>
                    https://&#123;Host&#125;/&#123;Endpoint&#125;
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800'>
                    <li><span className='font-semibold'>Host</span> – The base URL of the SriPay Connect ACQ API environment you are connecting to.</li>
                    <li><span className='font-semibold'>Endpoint</span> – The specific API path that defines the service or operation being requested.</li>
                </ul>

                <p className='font-semibold mb-2'>Example</p>
                <ul className='list-disc pl-6 mb-4 text-gray-800'>
                    <li><span className='font-semibold'>Host:</span> <span className='text-[#0073ff]'>https://open-sea.sripayplus.com/secure/acquirer</span></li>
                    <li><span className='font-semibold'>Endpoint:</span> <span className='text-[#0073ff]'>/v2/alipayplus/instore/pay</span></li>
                </ul>

                <p className='font-semibold mb-1'>Complete Request URL</p>
                <p className='text-[#0073ff] break-all mb-4'>
                    https://open-sea.sripayplus.com/secure/acquirer/v2/alipayplus/instore/pay
                </p>

                {/* 2. Request Method Section */}
                <p id='step-4' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>2. Request Method</p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    SriPay Connect ACQ APIs support only two HTTPS request methods
                </p>
                <div className='mb-4'>
                    <p className='font-bold mb-1'>POST <span className='font-normal'>– Used for creating or submitting new data to the server.</span></p>
                    <ul className='list-disc pl-6 mb-3 text-gray-800'>
                        <li>Example: Initiating a payment, creating a transaction, sending a request for processing.</li>
                    </ul>
                    <p className='font-bold mb-1'>GET <span className='font-normal'>– Used for retrieving data from the server.</span></p>
                    <ul className='list-disc pl-6 text-gray-800'>
                        <li>Example: Fetching transaction details, retrieving status updates, or querying records.</li>
                    </ul>
                </div>

                {/* 3. Request Headers Section */}
                <p id='step-5' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>3. Request Headers</p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    All SriPay Connect ACQ API requests must include the following headers to ensure proper authentication and routing:
                </p>
                <div className='mb-6 overflow-x-clip' style={{ maxWidth: '100%' }}>
                  <Table 
                    scroll={{ x: 'true' }}
                    dataSource={[
                      {
                        key: '1',
                        headerName: <><span className='font-semibold'>Authorization</span> or<br /><span className='font-semibold'>x-api-key</span></>,
                        description: 'API key used for authenticating requests.',
                        example: <span className='text-[#0073ff]'>Bearer<br />eyJhbGciOiJIUzI1NiIs..</span>,
                      },
                      {
                        key: '2',
                        headerName: <><span className='font-semibold'>AuthKey</span> or<br /><span className='font-semibold'>x-auth-key</span></>,
                        description: 'Additional authentication key for enhanced security validation.',
                        example: <span className='text-[#0073ff]'>Bearer<br />abc123securetoken</span>,
                      },
                      {
                        key: '3',
                        headerName: <><span className='font-semibold'>AcquirerId</span> or<br /><span className='font-semibold'>x-acq-id</span></>,
                        description: 'Unique identifier assigned to each acquirer for request routing and access control.',
                        example: <span className='text-[#0073ff]'>ndklkldmkedewswmmx</span>,
                      },
                      {
                        key: '4',
                        headerName: <><span className='font-semibold'>Content-Type</span></>,
                        description: <>Defines the format of the request body. Always use <span className='text-[#0073ff]'>application/json</span>.</>,
                        example: <span className='text-[#0073ff]'>application/json</span>,
                      },
                    ]} 
                    columns={[
                      {
                        title: 'Header Name',
                        dataIndex: 'headerName',
                        key: 'headerName',
                        className: 'font-semibold',
                      },
                      {
                        title: 'Description',
                        dataIndex: 'description',
                        key: 'description',
                      },
                      {
                        title: 'Example',
                        dataIndex: 'example',
                        key: 'example',
                      },
                    ]} 
                    pagination={false} 
                    bordered 
                    size="middle"
                  />
                </div>
                
                <p className='font-semibold mb-2'>Steps to retrieve your keys:</p>
                <ol className='list-decimal pl-6 mb-6 text-gray-800'>
                  <li>Go to your profile.</li>
                  <li>Scroll to the bottom.</li>
                  <li>Verify using your password.</li>
                  <li>Retrieve your keys.</li>
                </ol>

                {/* 4. Response Body */}
                <p id='step-6' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>4. Response Body</p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    All API responses include a Result object containing three key fields
                </p>
                <div className='mb-4'>
                    <p className='font-bold mb-4'>Code  <span className='font-normal'>– A short, machine readable identifier that indicates the outcome of the request. This is used primarily for programmatic handling.</span></p>
                    <p className='font-bold mb-4'>Message  <span className='font-normal'>– A human readable description providing additional details about the result. This is suitable for user-facing error messages and logging.</span></p>
                    <p className='font-bold mb-4'>Status  <span className='font-normal'>– The business level outcome category of the request or transaction. This helps track workflow states such as approval, rejection, or pending processing.</span></p>
                </div>

                {/* 5. Response Code */}
                <p id='step-7' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>5. Response Code</p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    SriPay Connect ACQ APIs return standard <span className='font-semibold'>HTTP status codes</span> along with the response body to indicate the result of the request at the protocol level.
                </p>
                <div className='mb-6 overflow-x-auto' style={{ maxWidth: '100%' }}>
                  <Table
                    scroll={{ x: true }}
                    dataSource={[
                      { key: '200', code: <span className='font-bold'>200</span>, name: 'OK', description: 'The request was successful and the server returned the expected data.', typical: 'Successful API request.' },
                      { key: '201', code: <span className='font-bold'>201</span>, name: 'Created', description: 'The request was successful and a new resource was created.', typical: 'Payment created, transaction initiated.' },
                      { key: '202', code: <span className='font-bold'>202</span>, name: 'Accepted', description: 'The request has been accepted for processing, but the operation is not yet complete.', typical: 'Asynchronous operations, queued requests.' },
                      { key: '204', code: <span className='font-bold'>204</span>, name: 'No Content', description: 'The request was successful but there is no content to return.', typical: 'Delete operations, empty successful responses.' },
                      { key: '400', code: <span className='font-bold'>400</span>, name: 'Bad Request', description: 'The request was malformed or missing required parameters.', typical: 'Validation errors, missing fields.' },
                      { key: '401', code: <span className='font-bold'>401</span>, name: 'Unauthorized', description: 'Authentication failed or API key is missing/invalid.', typical: <>Missing/invalid <span className='font-mono text-[#0073ff]'>Authorization</span> header.</> },
                      { key: '403', code: <span className='font-bold'>403</span>, name: 'Forbidden', description: 'The authenticated user does not have permission to perform this action.', typical: 'Role-based access restrictions.' },
                      { key: '404', code: <span className='font-bold'>404</span>, name: 'Not Found', description: 'The requested resource could not be found.', typical: 'Invalid endpoint or resource ID.' },
                      { key: '409', code: <span className='font-bold'>409</span>, name: 'Conflict', description: 'The request could not be completed due to a conflict with the current state of the resource.', typical: 'Duplicate transactions, conflicting updates.' },
                      { key: '500', code: <span className='font-bold'>500</span>, name: 'Internal Server Error', description: 'An unexpected server error occurred.', typical: 'Any unhandled backend error.' },
                    ]}
                    columns={[
                      { title: 'Code', dataIndex: 'code', key: 'code', align: 'center', width: 80 },
                      { title: 'Name', dataIndex: 'name', key: 'name', align: 'center', width: 120 },
                      { title: 'Description', dataIndex: 'description', key: 'description', width: 320 },
                      { title: 'Typical Use', dataIndex: 'typical', key: 'typical', width: 220 },
                    ]}
                    pagination={false}
                    bordered
                    size="middle"
                  />
                </div>

                
            </div>
        </div>
    )
}

export default AcqApiOverview;