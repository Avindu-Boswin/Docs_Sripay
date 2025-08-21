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
      btn.innerText = t('common.copied');
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
        aria-label={t('common.copy')}
      >
        {t('common.copy')}
      </button>
    </div>
  );
};

function OrderCodeResultListner() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('orderCodeResultListener.sections.step1') },
      { id: 'step-2', label: t('orderCodeResultListener.sections.endpoint') },
      { id: 'step-3', label: t('orderCodeResultListener.sections.headers') },
      { id: 'step-4', label: t('orderCodeResultListener.sections.requestParams') },
      { id: 'step-5', label: t('orderCodeResultListener.sections.sampleRequest') },
      { id: 'step-6', label: t('orderCodeResultListener.sections.successResponse') },
      { id: 'step-7', label: t('orderCodeResultListener.sections.errorResponses') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('orderCodeResultListener.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('commons.http.get')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          &#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/:outTradeNo
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('orderCodeResultListener.intro')}
      </p>

      {/* ---------- Endpoint ------------------------------------------------ */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('orderCodeResultListener.endpoint.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>
            <span className='font-semibold'>{t('orderCodeResultListener.endpoint.urlLabel')}</span> –{' '}
            <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/:outTradeNo</span>
          </li>
          <li>
            <span className='font-semibold'>{t('orderCodeResultListener.endpoint.methodLabel')}</span> –{' '}
            <span className='font-bold text-green-500'>{t('commons.http.get')}</span>
          </li>
          <li>
            <span className='font-semibold'>{t('orderCodeResultListener.endpoint.descriptionLabel')}</span> –{' '}
            {t('orderCodeResultListener.endpoint.description')}
          </li>
        </ul>
      </div>

      {/* ---------- Headers --------------------------------------- */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('orderCodeResultListener.headers.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('orderCodeResultListener.headers.items.acquirerId')}</li>
          <li>{t('orderCodeResultListener.headers.items.authorization')}</li>
          <li>{t('orderCodeResultListener.headers.items.authKey')}</li>
          <li>{t('orderCodeResultListener.headers.items.contentType')}</li>
        </ul>
      </div>

      {/* ---------- Request Parameters --------------------------------------- */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('orderCodeResultListener.requestParams.title')}
        </p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('orderCodeResultListener.requestParams.intro')}
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
                required: t('commons.yes'),
                description: t('orderCodeResultListener.requestParams.table.outTradeNo')
              }
            ]}
            columns={[
              {
                title: <span className='font-semibold'>{t('common.table.parameter')}</span>,
                dataIndex: 'parameter',
                key: 'parameter',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('common.table.type')}</span>,
                dataIndex: 'type',
                key: 'type',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('common.table.required')}</span>,
                dataIndex: 'required',
                key: 'required',
                align: 'center',
              },
              {
                title: <span className='font-semibold'>{t('common.table.description')}</span>,
                dataIndex: 'description',
                key: 'description',
              }
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('orderCodeResultListener.requestParams.validationTitle')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>
            <span className='font-semibold'>outTradeNo: </span>
            {t('orderCodeResultListener.requestParams.rules.outTradeNo')}
          </li>
        </ul>
      </div>

      {/* ---------- Sample Request --------------------------------------- */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('orderCodeResultListener.sample.title')}
        </p>
        <ul>
          <li>
            <span className='font-semibold'>{t('orderCodeResultListener.sample.urlExampleLabel')}</span> –{' '}
            <span className='font-medium text-[#0073ff]'>&#123;Host&#125;/v2/alipayplus/instore/ordercode-listener/abc1234567890</span>
          </li>
        </ul>

        <p className="font-semibold mb-2">{t('orderCodeResultListener.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>acquirerid: acquirer_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
          <div>AuthKey: key_456def789</div>
          <div>Content-Type: application/json</div>
        </div>
      </div>

      {/* ---------- Success Response --------------------------------------- */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('orderCodeResultListener.success.title')}
        </p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-semibold">{t('orderCodeResultListener.success.bullets.statusCode')}</span>:{" "}
            <span className='text-green-600 font-bold'>{t('orderCodeResultListener.success.bullets.status200')}</span>
          </li>
          <li>
            <span className="font-semibold">{t('orderCodeResultListener.success.bullets.contentType')}</span>:{" "}
            {t('orderCodeResultListener.success.bullets.eventStream')}
          </li>
          <li>
            <span className="font-semibold">{t('orderCodeResultListener.success.bullets.responseBody')}</span>:{" "}
            {t('orderCodeResultListener.success.bullets.streams')}
          </li>
        </ul>

        <p>
          {t('orderCodeResultListener.success.exampleWithTime')}
          <br />
          {t('orderCodeResultListener.success.eventUpdate')}
        </p>

        <CodeBlock 
          code={`data: [{"id":"tx123456","trade_status":"SUCCESS","timestamp":"2025-08-05 13:07:00"}]
`}
          bgColor="bg-green-50"
        />

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li>{t('orderCodeResultListener.success.items.event')}</li>
          <li>{t('orderCodeResultListener.success.items.data')}</li>
        </ul>
      </div>

      {/* ---------- Error Response --------------------------------------- */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">
          {t('orderCodeResultListener.errors.title')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('orderCodeResultListener.errors.intro')}
        </p>

        {/* Firestore Listener Error */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">
            {t('orderCodeResultListener.errors.items.firestoreError')}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">{t('commons.statusCode')}</span>:{" "}
            <span className="text-green-600 font-bold">{t('orderCodeResultListener.errors.okWithError')}</span>
          </p>
          <p className="text-gray-700 mb-2 font-semibold">
            {t('orderCodeResultListener.errors.responseBody')}:
          </p>
          <p>{t('orderCodeResultListener.errors.eventError')}</p>

          <CodeBlock 
            code={`data: {"code":"FIRESTORE_ERROR","message":"Error listening to transaction changes.","status":"ERROR"}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* Unexpected Server Error */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">
            {t('orderCodeResultListener.errors.items.unexpectedError')}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">{t('commons.statusCode')}</span>:{" "}
            <span className="text-green-600 font-bold">{t('orderCodeResultListener.errors.okWithError')}</span>
          </p>
          <p className="text-gray-700 mb-2 font-semibold">
            {t('orderCodeResultListener.errors.responseBody')}:
          </p>
          <p>{t('orderCodeResultListener.errors.eventError')}</p>

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
