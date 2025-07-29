import React from 'react';
import { useTranslation } from 'react-i18next';

function Troubleshooting() {
  const { t } = useTranslation();
  const excel = t('troubleshooting.excel', { returnObjects: true });
  const kycReasons = t('troubleshooting.kycReasons', { returnObjects: true });
  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('troubleshooting.title')}
      </h1>

      <span className='text-gray-700 tex-base'>{t('troubleshooting.desc')}</span>

      {/* Excel Upload Errors */}
      <div className="mb-6 px-5 mt-5 text-gray-700">
        <h3 className="text-lg font-semibold mb-3">• {t('troubleshooting.excelTitle')}</h3>
        <ul className="space-y-4  list-disc pl-9  ">
          <li className='py-2'>
            <span className="italic ">{t('Issue:')}</span> {excel[0].issue}<br />
            <span className="font-medium ">{t('Solution:')}</span> {excel[0].solution}
          </li>
          <li className='py-2'>
            <span className="italic">{t('Issue:')}</span> {excel[1].issue}<br />
            <span className="font-medium">{t('Solution:')}</span> {excel[1].solution}
          </li>
          <li className='py-2'>
            <span className="italic">{t('Issue:')}</span> {excel[2].issue}<br />
            <span className="font-medium">{t('Solution:')}</span> {excel[2].solution}
          </li>
          <li className='py-2'>
            <span className="italic">{t('Issue:')}</span> {excel[3].issue}<br />
            <span className="font-medium">{t('Solution:')}</span> {excel[3].solution}
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">• {t('troubleshooting.docTitle')}</h3>
        <p className="pl-9 text-gray-700">
          <span className="italic">{t('Issue:')}</span> {t('troubleshooting.docIssue')}<br />
          <span className="font-medium">{t('Solution:')}</span> {t('troubleshooting.docSolution')}
        </p>
      </div>

      {/* KYC Rejections */}
      <div>
        <h3 className="text-lg font-semibold mb-3">• {t('troubleshooting.kycTitle')}</h3>
        <p className="pl-9 mb-2 text-gray-700">{t('troubleshooting.kycReasonsTitle')}</p>
        <ul className="pl-[5%] list-[square] text-sm sm:text-base text-gray-700 space-y-2">
          <li className='py-1.5'>{kycReasons[0]}</li>
          <li className='py-1.5'>{kycReasons[1]}</li>
          <li className='py-1.5'>{kycReasons[2]}</li>
        </ul>
        <p className="pl-5 mt-3 text-gray-700">
          <span className="font-medium">{t('Solution:')}</span> {t('troubleshooting.kycSolution')}
        </p>
      </div>
    </div>
  );
}

export default Troubleshooting