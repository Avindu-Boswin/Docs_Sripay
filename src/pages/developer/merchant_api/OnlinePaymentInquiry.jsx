import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

// Code block component with copy functionality
const CodeBlock = ({ code, bgColor = "bg-gray-50" }) => {
    const { t } = useTranslation();
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        const btn = document.activeElement;
        const originalText = btn.innerText;
        btn.innerText = t('merchant_onlinepay_copied');
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
                {t('merchant_onlinepay_copy')}
            </button>
        </div>
    );
};

function MerchantOnlinePaymentInquiry() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('merchant_onlinepay_section_title') },
            { id: 'step-2', label: t('merchant_onlinepay_section_endpoint') },
            { id: 'step-3', label: t('merchant_onlinepay_section_headers') },
            { id: 'step-4', label: t('merchant_onlinepay_section_params') },
            { id: 'step-5', label: t('merchant_onlinepay_section_sample') },
            { id: 'step-6', label: t('merchant_onlinepay_section_success') },
            { id: 'step-7', label: t('merchant_onlinepay_section_errors') }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* Title */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchant_onlinepay_section_title')}
            </h1>

            {/* Method + Path */}
            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
                    {t('merchant_onlinepay_method')}
                </span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
                    {'{Host}'}/v2/alipayplus/online/pay-info/:id
                </span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('merchant_onlinepay_intro')}
            </p>

            {/* Endpoint */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('merchant_onlinepay_section_endpoint')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>
                        <span className='font-semibold'>{t('merchant_onlinepay_label_url')}</span> – 
                        <span className='font-medium text-[#0073ff]'> {'{Host}'}/v2/alipayplus/online/pay-info/:id</span>
                    </li>
                    <li>
                        <span className='font-semibold'>{t('merchant_onlinepay_label_method')}</span> – 
                        <span className='font-bold text-green-500'>{t('merchant_onlinepay_method')}</span>
                    </li>
                </ul>
            </div>

            {/* Headers */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('merchant_onlinepay_section_headers')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>{t('merchant_onlinepay_header_merchant')}</li>
                    <li>{t('merchant_onlinepay_header_auth')}</li>
                </ul>
            </div>

            {/* Request Parameters */}
            <div id='step-4' className='mt-8 mb-6'>
                <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('merchant_onlinepay_section_params')}
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('merchant_onlinepay_params_intro')}
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
                                parameter: <span className='font-mono'>id</span>,
                                type: 'string',
                                required: t('merchant_onlinepay_required_yes'),
                                description: t('merchant_onlinepay_param_id_desc')
                            }
                        ]}
                        columns={[
                            { title: t('merchant_onlinepay_tbl_param'), dataIndex: 'parameter', key: 'parameter', align: 'center' },
                            { title: t('merchant_onlinepay_tbl_type'), dataIndex: 'type', key: 'type', align: 'center' },
                            { title: t('merchant_onlinepay_tbl_required'), dataIndex: 'required', key: 'required', align: 'center' },
                            { title: t('merchant_onlinepay_tbl_desc'), dataIndex: 'description', key: 'description' }
                        ]}
                    />
                </div>

                <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    {t('merchant_onlinepay_validation_title')}
                </p>
                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>id: </span>{t('merchant_onlinepay_validation_id')}</li>
                </ul>
            </div>

            {/* Sample Request */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_onlinepay_section_sample')}</p>
                <p>
                    <span className='font-semibold'>{t('merchant_onlinepay_label_url')}</span> – 
                    <span className='font-medium text-[#0073ff]'> {'{Host}'}/v2/alipayplus/online/pay-info/PAY_1234567890abcdef</span>
                </p>

                <p className="font-semibold mb-2">{t('merchant_onlinepay_label_headers')}</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>merchantId: merchant_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                </div>
            </div>

            {/* Success Response */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_onlinepay_section_success')}</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">{t('merchant_onlinepay_label_status')}</span>: <span className='text-green-600 font-bold'>200 OK</span></li>
                    <li><span className="font-semibold">{t('merchant_onlinepay_label_content_type')}</span>: application/json</li>
                </ul>

                <p><span className="font-semibold">{t('merchant_onlinepay_label_response_body')}</span></p>

                <CodeBlock
                    code={`{
    "code": "TRANSACTION_FOUND",
    "message": "Transaction record(s) retrieved successfully.",
    "status": "SUCCESS",
    "data": [
        {
        "paymentId": "PAY_1234567890abcdef",
        "timestamp": "2025-08-07 11:10:00",
        "outletId": "outlet_12345",
        "outletName": "Outlet XYZ",
        "orderDescription": "Online purchase at Outlet XYZ",
        "paymentResult": "SUCCESS",
        "currency": "USD",
        "paymentAmount": "50.00",
        "paymentMethod": "CONNECT_WALLET",
        "walletBrandName": "Alipay",
        "env": { "terminalType": "WEB" },
        "is_settled": false
        },
        {
        "paymentId": "PAY_1234567890abcdef",
        "timestamp": "2025-08-07 11:05:00",
        "outletId": "outlet_12345",
        "outletName": "Outlet XYZ",
        "orderDescription": "Partial Refund",
        "paymentResult": "SUCCESS",
        "currency": "USD",
        "paymentAmount": "25.00",
        "paymentMethod": "CONNECT_WALLET",
        "walletBrandName": "Alipay",
        "env": { "terminalType": "WEB" },
        "is_settled": false
        }
    ]
}`}
                    bgColor="bg-green-50"
                />
            </div>

            {/* Error Responses */}
            <div id='step-7' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('merchant_onlinepay_section_errors')}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {t('merchant_onlinepay_errors_intro')}
                </p>

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('merchant_onlinepay_err_missing_title')}</p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{t('merchant_onlinepay_label_status')}</span>: 
                        <span className="text-red-600 font-bold"> 400 Bad Request</span>
                    </p>
                    <p className="text-gray-700 mb-2">{t('merchant_onlinepay_label_response_body')}</p>
                    <CodeBlock
                        code={`{
    "code": "MISSING_PARAMS",
    "message": "paymentRequestId and merchantId are required.",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Not Found */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('merchant_onlinepay_err_notfound_title')}</p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{t('merchant_onlinepay_label_status')}</span>: 
                        <span className="text-red-600 font-bold"> 404 Not Found</span>
                    </p>
                    <p className="text-gray-700 mb-2">{t('merchant_onlinepay_label_response_body')}</p>
                    <CodeBlock
                        code={`{
    "code": "TRANSACTION_NOT_FOUND",
    "message": "No transaction found for paymentId: PAY_1234567890abcdef, merchantId: merchant_98765",
    "status": "FAIL"
}`}
                        bgColor="bg-red-50"
                    />
                </div>

                {/* Transaction Error */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('merchant_onlinepay_err_server_title')}</p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">{t('merchant_onlinepay_label_status')}</span>: 
                        <span className="text-red-600 font-bold"> 500 Internal Server Error</span>
                    </p>
                    <p className="text-gray-700 mb-2">{t('merchant_onlinepay_label_response_body')}</p>
                    <CodeBlock
                        code={`{
    "code": "TRANSACTION_ERROR",
    "message": "Error fetching transaction data.",
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

export default MerchantOnlinePaymentInquiry;
