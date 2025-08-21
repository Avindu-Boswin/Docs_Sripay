import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

import Img1 from '../../../assets/images/developer/mer_api_req_structure.png';

function MerchantApiOverview() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('mao_sections_overview') },
      { id: 'step-2', label: t('mao_sections_reqStructure') },
      { id: 'step-3', label: t('mao_sections_reqUrl') },
      { id: 'step-4', label: t('mao_sections_reqMethod') },
      { id: 'step-5', label: t('mao_sections_reqHeaders') },
      { id: 'step-6', label: t('mao_sections_respBody') },
      { id: 'step-7', label: t('mao_sections_respCodes') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('mao_title')}
      </h1>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('mao_intro_1')}
      </p>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('mao_intro_2')}
      </p>

      {/* ---------- System Diagram ------------------------------------------------ */}
      <div id='step-2' className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {t('mao_reqStructure_title')}
        </h4>
        <Zoom>
          <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='API Request Structure' />
        </Zoom>

        {/* API Request Structure List */}
        <ol className="list-decimal pl-6 space-y-2 text-gray-800 mb-8">
          <li>{t('mao_reqStructure_list_1')}</li>
          <li>{t('mao_reqStructure_list_2')}</li>
          <li>{t('mao_reqStructure_list_3')}
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>{t('mao_reqStructure_list_3_a')}</li>
              <li>{t('mao_reqStructure_list_3_b')}</li>
              <li>{t('mao_reqStructure_list_3_c')}</li>
            </ul>
          </li>
          <li>{t('mao_reqStructure_list_4')}</li>
          <li>{t('mao_reqStructure_list_5')}</li>
        </ol>
      </div>

      {/* ---------- Component Descriptions ------------------------------------------------ */}
      <div className='mt-8 mb-6'>
        <p id='step-3' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>
          {t('mao_reqUrl_title')}
        </p>

        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mao_reqUrl_desc')}
        </p>

        <p className='font-semibold mb-2'>
          https://&#123;Host&#125;/&#123;Endpoint&#125;
        </p>

        <ul className='list-disc pl-6 mb-4 text-gray-800'>
          <li><span className='font-semibold'>{t('mao_reqUrl_host_label')}</span> – {t('mao_reqUrl_host_desc')}</li>
          <li><span className='font-semibold'>{t('mao_reqUrl_endpoint_label')}</span> – {t('mao_reqUrl_endpoint_desc')}</li>
        </ul>

        <p className='font-semibold mb-2'>{t('mao_reqUrl_example_label')}</p>
        <ul className='list-disc pl-6 mb-4 text-gray-800'>
          <li><span className='font-semibold'>{t('mao_reqUrl_host_label')}:</span> <span className='text-[#0073ff]'>https://example.com/secure/merchant</span></li>
          <li><span className='font-semibold'>{t('mao_reqUrl_endpoint_label')}:</span> <span className='text-[#0073ff]'>/v2/alipayplus/instore/pay</span></li>
        </ul>

        <p className='font-semibold mb-1'>{t('mao_reqUrl_complete')}</p>
        <p className='text-[#0073ff] break-all mb-4'>
          https://example.com/secure/merchant/v2/alipayplus/instore/pay
        </p>

        {/* 2. Request Method Section */}
        <p id='step-4' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>{t('mao_reqMethod_title')}</p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mao_reqMethod_desc')}
        </p>
        <div className='mb-4'>
          <p className='font-bold mb-1'>{t('mao_reqMethod_post')} <span className='font-normal'>{t('mao_reqMethod_post_desc')}</span></p>
          <ul className='list-disc pl-6 mb-3 text-gray-800'>
            <li>{t('mao_reqMethod_post_example')}</li>
          </ul>
          <p className='font-bold mb-1'>{t('mao_reqMethod_get')} <span className='font-normal'>{t('mao_reqMethod_get_desc')}</span></p>
          <ul className='list-disc pl-6 text-gray-800'>
            <li>{t('mao_reqMethod_get_example')}</li>
          </ul>
        </div>

        {/* 3. Request Headers Section */}
        <p id='step-5' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>{t('mao_reqHeaders_title')}</p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mao_reqHeaders_desc')}
        </p>
        <div className='mb-6 overflow-x-clip' style={{ maxWidth: '100%' }}>
          <Table
            scroll={{ x: 'true' }}
            dataSource={[
              {
                key: '1',
                headerName: <><span className='font-semibold'>{t('mao_headers_auth_name')}</span></>,
                description: t('mao_headers_auth_desc'),
                example: <span className='text-[#0073ff]'>Bearer<br />eyJhbGciOiJIUzI1NiIs..</span>,
              },
              {
                key: '2',
                headerName: <><span className='font-semibold'>{t('mao_headers_merchant_name')}</span></>,
                description: t('mao_headers_merchant_desc'),
                example: <span className='text-[#0073ff]'>ndklkldmkedewswmmx</span>,
              },
              {
                key: '3',
                headerName: <><span className='font-semibold'>{t('mao_headers_ct_name')}</span></>,
                description: <>{t('mao_headers_ct_desc').replace('application/json', '')}<span className='text-[#0073ff]'>application/json</span>.</>,
                example: <span className='text-[#0073ff]'>application/json</span>,
              },
            ]}
            columns={[
              {
                title: t('mao_tbl_headerName'),
                dataIndex: 'headerName',
                key: 'headerName',
                className: 'font-semibold',
              },
              {
                title: t('mao_tbl_description'),
                dataIndex: 'description',
                key: 'description',
              },
              {
                title: t('mao_tbl_example'),
                dataIndex: 'example',
                key: 'example',
              },
            ]}
            pagination={false}
            bordered
            size="middle"
          />
        </div>

        <p className='font-semibold mb-2'>{t('mao_keys_steps_title')}</p>
        <ol className='list-decimal pl-6 mb-6 text-gray-800'>
          <li>{t('mao_keys_step_1')}</li>
          <li>{t('mao_keys_step_2')}</li>
          <li>{t('mao_keys_step_3')}</li>
          <li>{t('mao_keys_step_4')}</li>
        </ol>

        {/* 4. Response Body */}
        <p id='step-6' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>{t('mao_respBody_title')}</p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mao_respBody_desc')}
        </p>
        <div className='mb-4'>
          <p className='font-bold mb-4'>{t('mao_respBody_code')}  <span className='font-normal'>{t('mao_respBody_code_desc')}</span></p>
          <p className='font-bold mb-4'>{t('mao_respBody_message')}  <span className='font-normal'>{t('mao_respBody_message_desc')}</span></p>
          <p className='font-bold mb-4'>{t('mao_respBody_status')}  <span className='font-normal'>{t('mao_respBody_status_desc')}</span></p>
        </div>

        {/* 5. Response Code */}
        <p id='step-7' className='text-xl mb-4 mt-10 font-semibold text-gray-700'>{t('mao_respCodes_title')}</p>
        <p className='text-gray-700 text-base leading-relaxed mb-4'>
          {t('mao_respCodes_desc')}
        </p>
        <div className='mb-6 overflow-x-auto' style={{ maxWidth: '100%' }}>
          <Table
            scroll={{ x: true }}
            dataSource={[
              { key: '200', code: <span className='font-bold'>200</span>, name: t('mao_code_200_name'), description: t('mao_code_200_desc'), typical: t('mao_code_200_typical') },
              { key: '201', code: <span className='font-bold'>201</span>, name: t('mao_code_201_name'), description: t('mao_code_201_desc'), typical: t('mao_code_201_typical') },
              { key: '202', code: <span className='font-bold'>202</span>, name: t('mao_code_202_name'), description: t('mao_code_202_desc'), typical: t('mao_code_202_typical') },
              { key: '204', code: <span className='font-bold'>204</span>, name: t('mao_code_204_name'), description: t('mao_code_204_desc'), typical: t('mao_code_204_typical') },
              { key: '400', code: <span className='font-bold'>400</span>, name: t('mao_code_400_name'), description: t('mao_code_400_desc'), typical: t('mao_code_400_typical') },
              { key: '401', code: <span className='font-bold'>401</span>, name: t('mao_code_401_name'), description: t('mao_code_401_desc'), typical: <>{t('mao_code_401_typical_prefix')} <span className='font-mono text-[#0073ff]'>Authorization</span> {t('mao_code_401_typical_suffix')}</> },
              { key: '403', code: <span className='font-bold'>403</span>, name: t('mao_code_403_name'), description: t('mao_code_403_desc'), typical: t('mao_code_403_typical') },
              { key: '404', code: <span className='font-bold'>404</span>, name: t('mao_code_404_name'), description: t('mao_code_404_desc'), typical: t('mao_code_404_typical') },
              { key: '409', code: <span className='font-bold'>409</span>, name: t('mao_code_409_name'), description: t('mao_code_409_desc'), typical: t('mao_code_409_typical') },
              { key: '500', code: <span className='font-bold'>500</span>, name: t('mao_code_500_name'), description: t('mao_code_500_desc'), typical: t('mao_code_500_typical') }
            ]}
            columns={[
              { title: t('mao_tbl_code'), dataIndex: 'code', key: 'code', align: 'center', width: 80 },
              { title: t('mao_tbl_name'), dataIndex: 'name', key: 'name', align: 'center', width: 120 },
              { title: t('mao_tbl_description'), dataIndex: 'description', key: 'description', width: 320 },
              { title: t('mao_tbl_typical'), dataIndex: 'typical', key: 'typical', width: 220 },
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

export default MerchantApiOverview;
