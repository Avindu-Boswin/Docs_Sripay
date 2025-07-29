
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Agreement from '../../assets/images/acquirer/img309.jpg';

function AgreementUpload() {
  const { t } = useTranslation();
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('agreementUpload.title')}
      </h1>

      <p className="text-gray-800 text-sm sm:text-base mb-4">
        {t('agreementUpload.desc')}
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-800 px-4 sm:px-5 py-4 text-sm sm:text-base leading-relaxed">
        <li>{t('agreementUpload.steps.0')}</li>
        <li>{t('agreementUpload.steps.1')}</li>
        <img
          src={Agreement}
          alt="Agreement Upload"
          className="w-full md:w-4/5 mx-auto my-5 rounded-md py-3 shadow "
        />
      </ul>

      <p className="font-semibold text-gray-700 mt-6 mb-2">{t('agreementUpload.keyPointsTitle')}</p>

      <ul className="list-disc list-inside space-y-3 text-gray-800 px-4 sm:px-5 py-3 text-sm sm:text-base leading-relaxed">
        <li><Trans i18nKey="agreementUpload.keyPoints.0"><span className="font-semibold" /></Trans></li>
        <li><Trans i18nKey="agreementUpload.keyPoints.1"><span className="font-semibold" /></Trans></li>
        <li><Trans i18nKey="agreementUpload.keyPoints.2"><span className="font-semibold" /></Trans></li>
        <li><Trans i18nKey="agreementUpload.keyPoints.3"><span className="font-semibold" /></Trans></li>
      </ul>

      <p className="text-gray-800 text-sm sm:text-base mt-2">
        {t('agreementUpload.note')}
      </p>
    </div>
  );
}

export default AgreementUpload;
