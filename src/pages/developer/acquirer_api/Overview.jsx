import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

import Img1 from '../../../assets/images/developer/acq_api_req_structure.png';

function AcqApiOverview() {
  const { t } = useTranslation('developer');
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('acqApi.sections.overview') },
      { id: 'step-2', label: t('acqApi.sections.requestStructure') },
      { id: 'step-3', label: t('acqApi.sections.urlFormat') },
      { id: 'step-4', label: t('acqApi.sections.method') },
      { id: 'step-5', label: t('acqApi.sections.headers') },
      { id: 'step-6', label: t('acqApi.sections.responseBody') },
      { id: 'step-7', label: t('acqApi.sections.responseCodes') }
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TITLE */}
      <h1 id="step-1" className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('acqApi.title')}
      </h1>

      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('acqApi.p1')}
      </p>
      <p className="text-gray-700 text-base leading-relaxed mb-8">
        {t('acqApi.p2')}
      </p>

      {/* API REQUEST STRUCTURE */}
      <div id="step-2" className="mt-8 mb-6">
        <h4 className="text-xl sm:text-2xl mb-9 font-semibold text-gray-700">
          {t('acqApi.sections.requestStructure')}
        </h4>
        <Zoom>
          <img
            src={Img1}
            className="mb-8 mx-auto my-6 block md:w-full"
            alt={t('acqApi.sections.requestStructure') || 'API Request Structure'}
          />
        </Zoom>

        <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-8">
          <li>{t('acqApi.structureList.urlFormat')}</li>
          <li>{t('acqApi.structureList.method')}</li>
          <li>
            {t('acqApi.structureList.headers')}
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>{t('acqApi.structureList.headersAuthKey')}</li>
              <li>{t('acqApi.structureList.headersAcquirerId')}</li>
              <li>{t('acqApi.structureList.headersAuth')}</li>
              <li>{t('acqApi.structureList.headersContentType')}</li>
            </ul>
          </li>
          <li>{t('acqApi.structureList.responseBody')}</li>
          <li>{t('acqApi.structureList.responseCodes')}</li>
        </ol>
      </div>

      {/* 1. URL FORMAT */}
      <div className="mt-8 mb-6">
        <p id="step-3" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          1. {t('acqApi.sections.urlFormat')}
        </p>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('acqApi.url.intro')}
        </p>

        <p className="font-semibold mb-2"><code>{t('acqApi.url.pattern')}</code></p>

        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li><span className="font-semibold">Host</span> — {t('acqApi.url.bulletHost')}</li>
          <li><span className="font-semibold">Endpoint</span> — {t('acqApi.url.bulletEndpoint')}</li>
        </ul>

        <p className="font-semibold mb-2">{t('acqApi.url.exampleTitle')}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-800">
          <li><span className="font-semibold">{t('acqApi.url.exampleHost')}</span> <span className="text-[#0073ff]">https://example.com/secure/acquirer</span></li>
          <li><span className="font-semibold">{t('acqApi.url.exampleEndpoint')}</span> <span className="text-[#0073ff]">/v2/alipayplus/instore/pay</span></li>
        </ul>

        <p className="font-semibold mb-1">{t('acqApi.url.completeTitle')}</p>
        <p className="text-[#0073ff] break-all mb-4">https://example.com/secure/acquirer/v2/alipayplus/instore/pay</p>
      </div>

      {/* 2. METHOD */}
      <div className="mt-8 mb-6">
        <p id="step-4" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          2. {t('acqApi.sections.method')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('acqApi.method.intro')}
        </p>
        <div className="mb-4">
          <p className="font-bold mb-1">{t('acqApi.method.postTitle')} <span className="font-normal">— {t('acqApi.method.postDesc')}</span></p>
          <ul className="list-disc pl-6 mb-3 text-gray-800">
            <li>{t('acqApi.method.postExample')}</li>
          </ul>
          <p className="font-bold mb-1">{t('acqApi.method.getTitle')} <span className="font-normal">— {t('acqApi.method.getDesc')}</span></p>
          <ul className="list-disc pl-6 text-gray-800">
            <li>{t('acqApi.method.getExample')}</li>
          </ul>
        </div>
      </div>

      {/* 3. HEADERS */}
      <div className="mt-8 mb-6">
        <p id="step-5" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          3. {t('acqApi.sections.headers')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('acqApi.headers.intro')}
        </p>

        <div className="mb-6 overflow-x-clip" style={{ maxWidth: '100%' }}>
          <Table
            scroll={{ x: true }}
            dataSource={[
              {
                key: '1',
                headerName: <>{t('acqApi.headers.table.authorizationName')}</>,
                description: t('acqApi.headers.table.authorizationDesc'),
                example: <span className="text-[#0073ff]">{t('acqApi.headers.table.authorizationEx')}</span>
              },
              {
                key: '2',
                headerName: <>{t('acqApi.headers.table.authKeyName')}</>,
                description: t('acqApi.headers.table.authKeyDesc'),
                example: <span className="text-[#0073ff]">{t('acqApi.headers.table.authKeyEx')}</span>
              },
              {
                key: '3',
                headerName: <>{t('acqApi.headers.table.acquirerIdName')}</>,
                description: t('acqApi.headers.table.acquirerIdDesc'),
                example: <span className="text-[#0073ff]">{t('acqApi.headers.table.acquirerIdEx')}</span>
              },
              {
                key: '4',
                headerName: <>{t('acqApi.headers.table.contentTypeName')}</>,
                description: <>{t('acqApi.headers.table.contentTypeDesc')}</>,
                example: <span className="text-[#0073ff]">{t('acqApi.headers.table.contentTypeEx')}</span>
              }
            ]}
            columns={[
              { title: t('acqApi.headers.table.colName'), dataIndex: 'headerName', key: 'headerName', className: 'font-semibold' },
              { title: t('acqApi.headers.table.colDesc'), dataIndex: 'description', key: 'description' },
              { title: t('acqApi.headers.table.colExample'), dataIndex: 'example', key: 'example' }
            ]}
            pagination={false}
            bordered
            size="middle"
          />
        </div>

        <p className="font-semibold mb-2">{t('acqApi.headers.stepsTitle')}</p>
        <ol className="list-decimal pl-6 mb-6 text-gray-800">
          <li>{t('acqApi.headers.step1')}</li>
          <li>{t('acqApi.headers.step2')}</li>
          <li>{t('acqApi.headers.step3')}</li>
          <li>{t('acqApi.headers.step4')}</li>
        </ol>
      </div>

      {/* 4. RESPONSE BODY */}
      <div className="mt-8 mb-6">
        <p id="step-6" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          4. {t('acqApi.sections.responseBody')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('acqApi.respBody.intro')}
        </p>
        <div className="mb-4">
          <p className="font-bold mb-4">{t('acqApi.respBody.code')}</p>
          <p className="font-bold mb-4">{t('acqApi.respBody.message')}</p>
          <p className="font-bold mb-4">{t('acqApi.respBody.status')}</p>
        </div>
      </div>

      {/* 5. RESPONSE CODES */}
      <div className="mt-8 mb-6">
        <p id="step-7" className="text-xl mb-4 mt-10 font-semibold text-gray-700">
          5. {t('acqApi.sections.responseCodes')}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          {t('acqApi.respCodes.intro')}
        </p>

        <div className="mb-6 overflow-x-auto" style={{ maxWidth: '100%' }}>
          <Table
            scroll={{ x: true }}
            dataSource={[
              { key: '200', code: <span className="font-bold">200</span>, name: t('acqApi.respCodes.table.200_name'), description: t('acqApi.respCodes.table.200_desc'), typical: t('acqApi.respCodes.table.200_typ') },
              { key: '201', code: <span className="font-bold">201</span>, name: t('acqApi.respCodes.table.201_name'), description: t('acqApi.respCodes.table.201_desc'), typical: t('acqApi.respCodes.table.201_typ') },
              { key: '202', code: <span className="font-bold">202</span>, name: t('acqApi.respCodes.table.202_name'), description: t('acqApi.respCodes.table.202_desc'), typical: t('acqApi.respCodes.table.202_typ') },
              { key: '204', code: <span className="font-bold">204</span>, name: t('acqApi.respCodes.table.204_name'), description: t('acqApi.respCodes.table.204_desc'), typical: t('acqApi.respCodes.table.204_typ') },
              { key: '400', code: <span className="font-bold">400</span>, name: t('acqApi.respCodes.table.400_name'), description: t('acqApi.respCodes.table.400_desc'), typical: t('acqApi.respCodes.table.400_typ') },
              { key: '401', code: <span className="font-bold">401</span>, name: t('acqApi.respCodes.table.401_name'), description: t('acqApi.respCodes.table.401_desc'), typical: t('acqApi.respCodes.table.401_typ') },
              { key: '403', code: <span className="font-bold">403</span>, name: t('acqApi.respCodes.table.403_name'), description: t('acqApi.respCodes.table.403_desc'), typical: t('acqApi.respCodes.table.403_typ') },
              { key: '404', code: <span className="font-bold">404</span>, name: t('acqApi.respCodes.table.404_name'), description: t('acqApi.respCodes.table.404_desc'), typical: t('acqApi.respCodes.table.404_typ') },
              { key: '409', code: <span className="font-bold">409</span>, name: t('acqApi.respCodes.table.409_name'), description: t('acqApi.respCodes.table.409_desc'), typical: t('acqApi.respCodes.table.409_typ') },
              { key: '500', code: <span className="font-bold">500</span>, name: t('acqApi.respCodes.table.500_name'), description: t('acqApi.respCodes.table.500_desc'), typical: t('acqApi.respCodes.table.500_typ') }
            ]}
            columns={[
              { title: t('acqApi.respCodes.table.colCode'), dataIndex: 'code', key: 'code', align: 'center', width: 80 },
              { title: t('acqApi.respCodes.table.colName'), dataIndex: 'name', key: 'name', align: 'center', width: 120 },
              { title: t('acqApi.respCodes.table.colDesc'), dataIndex: 'description', key: 'description', width: 320 },
              { title: t('acqApi.respCodes.table.colTypical'), dataIndex: 'typical', key: 'typical', width: 220 }
            ]}
            pagination={false}
            bordered
            size="middle"
          />
        </div>
      </div>
    </div>
  );
}

export default AcqApiOverview;
