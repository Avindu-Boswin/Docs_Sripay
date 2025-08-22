import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
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

function MerchantOrderCodeResultListner() { // keep name to match your imports
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('ocrll.sections.s1') },
      { id: 'step-2', label: t('ocrll.sections.s2') },
      { id: 'step-3', label: t('ocrll.sections.s3') },
      { id: 'step-4', label: t('ocrll.sections.s4') },
      { id: 'step-5', label: t('ocrll.sections.s5') },
      { id: 'step-6', label: t('ocrll.sections.s6') },
      { id: 'step-7', label: t('ocrll.sections.s7') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id='step-1' className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('ocrll.title')}
      </h1>

      <div className="flex flex-row items-start md:items-center gap-2 mb-8">
        <span className="bg-blue-500 text-white font-semibold px-3 py-1 rounded-md text-sm md:text-xl lg:text-2xl mb-2 md:mb-0">
          {t('ocrll.methodGet')}
        </span>
        <span className="text-gray-400 font-semibold text-md md:text-xl lg:text-2xl break-all">
          {t('ocrll.path')}
        </span>
      </div>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('ocrll.intro')}
      </p>

      {/* ---------- Endpoint ------------------------------------------------ */}
      <div className='mt-8 mb-6'>
        <p id='step-2' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('ocrll.endpoint.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>
            <span className='font-semibold'>{t('ocrll.endpoint.url')}</span> –{' '}
            <span className='font-medium text-[#0073ff]'>{t('ocrll.path')}</span>
          </li>
          <li>
            <span className='font-semibold'>{t('ocrll.endpoint.method')}</span> –{' '}
            <span className='font-bold text-green-500'>{t('ocrll.methodGet')}</span>
          </li>
          <li>
            <span className='font-semibold'>Description</span> – {t('ocrll.endpoint.desc')}
          </li>
        </ul>
      </div>

      {/* ---------- Headers --------------------------------------- */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('ocrll.headers.title')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li>{t('ocrll.headers.merchantId')}</li>
          <li>{t('ocrll.headers.auth')}</li>
        </ul>
      </div>

      {/* ---------- Request Parameters --------------------------------------- */}
      <div id='step-4' className='mt-8 mb-6'>
        <p className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('ocrll.reqParams.title')}
        </p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('ocrll.reqParams.intro')}
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
                required: t('ocrll.reqParams.table.yes'),
                description: t('ocrll.reqParams.table.rowOutTradeNoDesc')
              }
            ]}
            columns={[
              { title: <span className='font-semibold'>{t('ocrll.reqParams.table.parameter')}</span>, dataIndex: 'parameter', key: 'parameter', align: 'center' },
              { title: <span className='font-semibold'>{t('ocrll.reqParams.table.type')}</span>, dataIndex: 'type', key: 'type', align: 'center' },
              { title: <span className='font-semibold'>{t('ocrll.reqParams.table.required')}</span>, dataIndex: 'required', key: 'required', align: 'center' },
              { title: <span className='font-semibold'>{t('ocrll.reqParams.table.description')}</span>, dataIndex: 'description', key: 'description' }
            ]}
          />
        </div>

        <p className='text-md mb-4 mt-10 font-bold text-gray-700'>
          {t('ocrll.reqParams.validationTitle')}
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800 space-y-2'>
          <li><span className='font-semibold'>outTradeNo: </span>{t('ocrll.reqParams.ruleOutTradeNo')}</li>
        </ul>
      </div>

      {/* ---------- Sample Request --------------------------------------- */}
      <div id='step-5' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('ocrll.sample.title')}</p>
        <ul>
          <li>
            <span className='font-semibold'>{t('ocrll.sample.url')}</span> –{' '}
            <span className='font-medium text-[#0073ff]'>{t('ocrll.sample.exampleUrl')}</span>
          </li>
        </ul>

        <p className="font-semibold mb-2">{t('ocrll.sample.headers')}</p>
        <div className="bg-gray-50 rounded-2xl p-4 text-sm md:text-base font-mono text-gray-800">
          <div>merchantId: merchant_98765</div>
          <div>Authorization: Bearer abc123xyz789</div>
        </div>
      </div>

      {/* ---------- Success Response --------------------------------------- */}
      <div id='step-6' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('ocrll.success.title')}</p>

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">{t('ocrll.success.statusCode')}</span>: <span className='text-green-600 font-bold'>{t('ocrll.success.ok')}</span></li>
          <li><span className="font-semibold">{t('ocrll.success.contentType')}</span>: {t('ocrll.success.ctEventStream')}</li>
          <li><span className="font-semibold">{t('ocrll.success.body')}</span>: {t('ocrll.success.streams')}</li>
        </ul>

        <p>{t('ocrll.success.exampleLead')}<br />{t('ocrll.success.eventUpdate')}</p>

        <CodeBlock
          code={`data: [{"id":"tx123","trade_status":"SUCCESS","timestamp":"2025-08-05 10:41:00"}]
`}
          bgColor="bg-green-50"
        />

        <ul className="list-disc pl-6 mb-4 text-gray-800 space-y-2">
          <li><span className="font-semibold">event</span>: {t('ocrll.success.bul1')}</li>
          <li><span className="font-semibold">data</span>: {t('ocrll.success.bul2')}</li>
        </ul>
      </div>

      {/* ---------- Error Response --------------------------------------- */}
      <div id='step-7' className="mt-12 mb-8">
        <p className="text-xl mb-4 font-semibold text-gray-700">{t('ocrll.errors.title')}</p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('ocrll.errors.intro')}
        </p>

        {/* Firestore Listener Error */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('ocrll.errors.firestore')}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">{t('ocrll.success.statusCode')}</span>: <span className="text-green-600 font-bold">{t('ocrll.errors.status200WithEvent')}</span>
          </p>
          <p className="text-gray-700 mb-2 font-semibold">{t('ocrll.errors.responseBody')}</p>
          <p>event: error</p>
          <CodeBlock
            code={`data: {"code":"FIRESTORE_ERROR","message":"Error listening to transaction changes.","status":"ERROR"}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* Unexpected Server Error */}
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-700">{t('ocrll.errors.server')}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">{t('ocrll.success.statusCode')}</span>: <span className="text-green-600 font-bold">{t('ocrll.errors.status200WithEvent')}</span>
          </p>
          <p className="text-gray-700 mb-2 font-semibold">{t('ocrll.errors.responseBody')}</p>
          <p>event: error</p>
          <CodeBlock
            code={`data: {"code":"UNEXPECTED_ERROR","message":"Unexpected server error.","status":"ERROR"}`}
            bgColor="bg-red-50"
          />
        </div>

        {/* Notes */}
        <div>
          <p className="text-lg font-semibold text-gray-700">{t('ocrll.notes.title')}</p>
          <ul className='list-disc pl-6 mb-4 space-y-2'>
            <li>{t('ocrll.notes.n1')}</li>
            <li>{t('ocrll.notes.n2')}</li>
            <li>{t('ocrll.notes.n3')}</li>
            <li>{t('ocrll.notes.n4')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MerchantOrderCodeResultListner;
