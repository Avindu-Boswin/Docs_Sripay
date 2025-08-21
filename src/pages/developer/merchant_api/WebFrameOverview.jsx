import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Table } from 'antd';

import Img1 from '../../../assets/images/developer/mer_webframe.png';

function WebFrameOverview() {
  const { t } = useTranslation();
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('wfo_sections_step1') },
      { id: 'step-2', label: t('wfo_sections_overview') },
      { id: 'step-3', label: t('wfo_sections_features') },
      { id: 'step-4', label: t('wfo_sections_benefits') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line
  }, [setSections, t]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 id="step-1" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('wfo_title')}
      </h1>

      <p className='text-gray-700 text-base leading-relaxed mb-8'>
        {t('wfo_intro')}
      </p>

      {/* ---------- Overview ------------------------------------------------ */}
      <div id='step-2' className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {t('wfo_overview_title')}
        </h4>
        <p className='text-gray-700 text-base leading-relaxed mb-8'>
          {t('wfo_overview_desc')}
        </p>
        <Zoom>
          <img src={Img1} alt={t('wfo_img_alt')} />
        </Zoom>
      </div>

      {/* ---------- Key Features ------------------------------------------------ */}
      <div id='step-3' className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {t('wfo_features_title')}
        </h4>

        <ul className='list-disc pl-6 mb-8 text-gray-800 space-y-4'>
          <li>
            <span className='font-semibold'>{t('wfo_feat1_title')}</span>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
              {t('wfo_feat1_desc_part1')}{' '}
              <span className='text-blue-600 font-medium'>Visa, Mastercard, UnionPay, and Alipay+ Online</span>.{' '}
              <span className='text-blue-600 font-medium'>USDT (crypto)</span> {t('wfo_feat1_desc_part2')}{' '}
              <span className='font-semibold'>{t('wfo_feat1_desc_part3')}</span>.
            </p>
          </li>

          <li>
            <span className='font-semibold'>{t('wfo_feat2_title')}</span>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
              {t('wfo_feat2_desc_main')} <span className='font-semibold'>LKR {t('wfo_feat2_desc_main_sep') || 'and'} USD</span>.
            </p>
            <p className='text-gray-700 text-base leading-relaxed mt-1'>
              <span className='font-semibold'>{t('wfo_feat2_note_label')}</span>{' '}
              <span className='italic'>{t('wfo_feat2_note_msg')}</span>.
            </p>
          </li>

          <li>
            <span className='font-semibold'>{t('wfo_feat3_title')}</span>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
              {t('wfo_feat3_desc_part1')}{' '}
              <span className='font-semibold'>{t('wfo_feat3_desc_bold')}</span>, {t('wfo_feat3_desc_part2')}
            </p>
          </li>

          <li>
            <span className='font-semibold'>{t('wfo_feat4_title')}</span>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
              {t('wfo_feat4_desc_part1')}{' '}
              <span className='font-semibold text-blue-600'>PCI DSS Level 1</span>{' '}
              {t('wfo_feat4_desc_part2')}
            </p>
          </li>

          <li>
            <span className='font-semibold'>{t('wfo_feat5_title')}</span>
            <p className='text-gray-700 text-base leading-relaxed mt-2'>
              {t('wfo_feat5_desc')}
            </p>
          </li>
        </ul>
      </div>

      {/* ---------- Merchant Benefits ------------------------------------------------ */}
      <div id='step-4' className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {t('wfo_benefits_title')}
        </h4>

        <ul className='list-disc pl-6 mb-8 text-gray-800 space-y-3'>
          <li>{t('wfo_benefit_1')}</li>
          <li>{t('wfo_benefit_2')}</li>
          <li>{t('wfo_benefit_3')}</li>
          <li>{t('wfo_benefit_4')}</li>
          <li>{t('wfo_benefit_5')}</li>
        </ul>
      </div>
    </div>
  )
}

export default WebFrameOverview;
