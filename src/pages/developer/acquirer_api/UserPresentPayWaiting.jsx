import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

// Code block component with copy functionality
const CodeBlock = ({ code, bgColor = "bg-gray-50" }) => {
    const { t } = useTranslation();
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        const btn = document.activeElement;
        if (btn) {
            const originalText = btn.innerText;
            btn.innerText = t('global_btn_copied');
            setTimeout(() => { btn.innerText = originalText; }, 1500);
        }
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
                {t('global_btn_copy')}
            </button>
        </div>
    );
};

function UserPresentPayWaiting() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('acqUpwWait_nav_step1') },
            { id: 'step-2', label: t('acqUpwWait_nav_step2') },
            { id: 'step-3', label: t('acqUpwWait_nav_step3') },
            { id: 'step-4', label: t('acqUpwWait_nav_step4') },
            { id: 'step-5', label: t('acqUpwWait_nav_step5') },
            { id: 'step-6', label: t('acqUpwWait_nav_step6') },
            { id: 'step-7', label: t('acqUpwWait_nav_step7') }
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('acqUpwWait_title')}
            </h1>

            <div className="flex flex-row items-start md:items-center gap-2 mb-8">
                <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
                    {t('global_http_get')}
                </span>
                <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
                    &#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/:partnerTransId
                </span>
            </div>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('acqUpwWait_intro')}
            </p>

            {/* ---------- Endpoint ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('acqUpwWait_endpoint_heading')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>
                        <span className='font-semibold'>{t('acqUpwWait_endpoint_urlLabel')}</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/:partnerTransId</span>
                    </li>
                    <li>
                        <span className='font-semibold'>{t('acqUpwWait_endpoint_methodLabel')}</span> – <span className='font-bold text-green-500'>{t('global_http_get')}</span>
                    </li>
                    <li>
                        <span className='font-semibold'>{t('acqUpwWait_endpoint_descLabel')}</span> – {t('acqUpwWait_endpoint_descText')}
                    </li>
                </ul>
            </div>

            {/* ---------- Headers --------------------------------------- */}
            <div className='mt-8 mb-6'>
                <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('acqUpwWait_headers_heading')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li>{t('acqUpwWait_headers_acquirerId')}</li>
                    <li>{t('acqUpwWait_headers_authorization')}</li>
                    <li>{t('acqUpwWait_headers_authKey')}</li>
                    <li>{t('acqUpwWait_headers_contentType')}</li>
                </ul>
            </div>

            {/* ---------- Request Parameters --------------------------------------- */}
            <div id='step-4' className='mt-8 mb-6'>
                <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
                    {t('acqUpwWait_params_heading')}
                </p>
                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('acqUpwWait_params_intro')}
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
                                required: t('global_yes'),
                                description: t('acqUpwWait_params_table_partnerTransId_desc')
                            }
                        ]}
                        columns={[
                            { title: <span className='font-semibold'>{t('global_table_parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
                            { title: <span className='font-semibold'>{t('global_table_type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
                            { title: <span className='font-semibold'>{t('global_table_required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
                            { title: <span className='font-semibold'>{t('global_table_description')}</span>, dataIndex: 'description', key: 'description' }
                        ]}
                    />
                </div>

                <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
                    {t('acqUpwWait_params_validation_heading')}
                </p>

                <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
                    <li><span className='font-semibold'>partnerTransId: </span>{t('acqUpwWait_params_rule_partnerTransId')}</li>
                    <li><span className='font-semibold'>acquirerId: </span>{t('acqUpwWait_params_rule_acquirerId')}</li>
                </ul>
            </div>

            {/* ---------- Sample Request --------------------------------------- */}
            <div id='step-5' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('acqUpwWait_sample_heading')}</p>
                <p><span className='font-semibold'>{t('acqUpwWait_endpoint_urlLabel')}</span> – <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/userpresent-waiting/202508051418001234</span></p>

                <p className="font-semibold mb-2">{t('acqUpwWait_sample_headers_title')}</p>
                <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
                    <div>acquirerid: acquirer_98765</div>
                    <div>Authorization: Bearer abc123xyz789</div>
                    <div>Auth-Key: key_456def789</div>
                    <div>Content-Type: application/json</div>
                </div>
            </div>

            {/* ---------- Success Response --------------------------------------- */}
            <div id='step-6' className="mt-12 mb-8">
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('acqUpwWait_success_heading')}</p>

                <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
                    <li><span className="font-semibold">{t('global_label_statusCode')}</span>: <span className='text-green-600 font-bold'>200 OK</span></li>
                    <li><span className="font-semibold">{t('global_label_contentType')}</span>: application/json</li>
                </ul>

                <p><span className="font-semibold">{t('global_label_responseBody')}</span> {t('acqUpwWait_success_responseBody_timeNote')}</p>

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
                <p className="text-xl mb-4 font-semibold text-gray-700">{t('acqUpwWait_errors_heading')}</p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {t('acqUpwWait_errors_intro')}
                </p>

                {/* Missing Parameters */}
                <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">{t('acqUpwWait_err1_title')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('global_label_statusCode')}</span>: <span className="text-red-600 font-bold">400 Bad Request</span></p>
                    <p className="text-gray-700 mb-2">{t('global_label_responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('acqUpwWait_err2_title')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('global_label_statusCode')}</span>: <span className="text-red-600 font-bold">404 Not Found</span></p>
                    <p className="text-gray-700 mb-2">{t('global_label_responseBody')}:</p>
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
                    <p className="text-lg font-semibold text-gray-700">{t('acqUpwWait_err3_title')}</p>
                    <p className="text-gray-700 mb-2"><span className="font-semibold">{t('global_label_statusCode')}</span>: <span className="text-red-600 font-bold">500 Internal Server Error</span></p>
                    <p className="text-gray-700 mb-2">{t('global_label_responseBody')}:</p>
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
