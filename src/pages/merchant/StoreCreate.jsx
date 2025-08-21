import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/store-creation/img1.png';
import Img2 from '../../assets/images/merchant/store-creation/img2.png';
import Img3 from '../../assets/images/merchant/store-creation/img3.png';
import Img4 from '../../assets/images/merchant/store-creation/img4.png';
import Img5 from '../../assets/images/merchant/store-creation/img5.png';
import { useTranslation } from 'react-i18next';

function MerchantStoreCreate() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- load namespace where the JSON lives (e.g., merchant.json)

  // Use translated menu labels
  const menu = [
    { id: 'section1', label: t('singlestorecreation.sectionsMenu.section1') },
    { id: 'section2', label: t('singlestorecreation.sectionsMenu.section2') },
    { id: 'section3', label: t('singlestorecreation.sectionsMenu.section3') },
    { id: 'section4', label: t('singlestorecreation.sectionsMenu.section4') },
    { id: 'section5', label: t('singlestorecreation.sectionsMenu.section5') },
    { id: 'section6', label: t('singlestorecreation.sectionsMenu.section6') },
    { id: 'section7', label: t('singlestorecreation.sectionsMenu.section7') }
  ];

  useEffect(() => {
    setSections(menu);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]); // re-run when language changes so side menu updates

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('singlestorecreation.title')}
      </h1>

      {/* ---------- STEP 1 ---------- */}
      <div id="section1" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.steps1.title')}
        </h3>
        <ol className="list-decimal ml-6 text-gray-700 text-base mb-6">
          <li>{t('singlestorecreation.steps1.subtitle1')}</li>
          <li>{t('singlestorecreation.steps1.subtitle2')}</li>
        </ol>
        <img
          src={Img1}
          alt={t('singlestorecreation.alts.step1')}
          className="mx-auto my-6 block md:w-4/5"
        />
      </div>

      {/* ---------- STEP 2 ---------- */}
      <div id="section2" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.steps2.title')}
        </h3>
        <img
          src={Img2}
          alt={t('singlestorecreation.alts.step2')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">{t('singlestorecreation.steps2.subtitle1')}</p>
          <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4">
            <li>
              {t('singlestorecreation.steps2.option1.title')} –{' '}
              {t('singlestorecreation.steps2.option1.desc')}
            </li>
            <li>
              {t('singlestorecreation.steps2.option2.title')} –{' '}
              {t('singlestorecreation.steps2.option2.desc')}
            </li>
          </ul>
          <p className="text-gray-700 text-md">
            {t('singlestorecreation.steps2.subtitle2')}
          </p>
        </div>
      </div>

      {/* ---------- STEP 3 ---------- */}
      <div id="section3" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.steps3.title')}
        </h3>
        <img
          src={Img3}
          alt={t('singlestorecreation.alts.step3')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">{t('singlestorecreation.steps3.subtitle1')}</p>
          <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4">
            <li>
              {t('singlestorecreation.steps3.filed1.title')} –{' '}
              {t('singlestorecreation.steps3.filed1.desc')}
            </li>
            <li>
              {t('singlestorecreation.steps3.filed2.title')} –{' '}
              {t('singlestorecreation.steps3.filed2.desc')}
            </li>
            <li>
              {t('singlestorecreation.steps3.filed3.title')} –{' '}
              {t('singlestorecreation.steps3.filed3.desc')}
            </li>
            <li>{t('singlestorecreation.steps3.bullets.address')}</li>
            <li>{t('singlestorecreation.steps3.bullets.qrCurrency')}</li>
            <li>{t('singlestorecreation.steps3.bullets.website')}</li>
          </ul>
          <p className="text-gray-700 text-md">
            {t('singlestorecreation.steps3.bullets.note')}
          </p>
        </div>
      </div>

      {/* ---------- STEP 4 ---------- */}
      <div id="section4" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.steps4.title')}
        </h3>
        <img
          src={Img4}
          alt={t('singlestorecreation.alts.step4')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <div className="mt-4 text-base text-gray-700">
          <p className="mb-4">{t('singlestorecreation.steps4.para')}</p>

          <div className="mb-2">
            <span className="font-semibold">
              {t('singlestorecreation.steps4.primaryTitle')}
            </span>
            <p className="mb-2">{t('singlestorecreation.steps4.primaryDesc')}</p>

            <span className="font-semibold">
              {t('singlestorecreation.steps4.requiredFields')}
            </span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4">
              <li>{t('singlestorecreation.steps4.primaryList.bankName')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.branchName')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.branchCode')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.branchAddr')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.country')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.accName')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.accNumber')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.currency')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.swift')}</li>
              <li>{t('singlestorecreation.steps4.primaryList.status')}</li>
            </ul>
          </div>

          <div className="mb-2">
            <span className="font-semibold">
              {t('singlestorecreation.steps4.secondaryTitle')}
            </span>
            <p className="mb-2">{t('singlestorecreation.steps4.secondaryDesc')}</p>
            <span className="font-semibold">
              {t('singlestorecreation.steps4.secondaryReq')}
            </span>
            <p className="mb-2">{t('singlestorecreation.steps4.secondaryNote')}</p>
          </div>

          <div className="mb-2">
            <span className="font-semibold">
              {t('singlestorecreation.steps4.noteLabel')}
            </span>{' '}
            {t('singlestorecreation.steps4.noteDesc')}
          </div>

          <div className="mb-2">{t('singlestorecreation.steps4.next')}</div>
        </div>
      </div>

      {/* ---------- STEP 5 ---------- */}
      <div id="section5" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.steps5.title')}
        </h3>
        <img
          src={Img5}
          alt={t('singlestorecreation.alts.step5')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">{t('singlestorecreation.steps5.para')}</p>

          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.steps5.frontPhotosTitle')}
            </span>
            <p>
              {t('singlestorecreation.steps5.frontPhotosDesc')}
              <br />
              <span className="italic">
                {t('singlestorecreation.steps5.frontPhotosNote')}
              </span>
            </p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.steps5.interiorPhotosTitle')}
            </span>
            <p>
              {t('singlestorecreation.steps5.interiorPhotosDesc')}
              <br />
              <span className="italic">
                {t('singlestorecreation.steps5.interiorPhotosNote')}
              </span>
            </p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.steps5.mobileTitle')}
            </span>
            <p>
              {t('singlestorecreation.steps5.mobileDesc')}
              <br />
              <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md">
                <li>{t('singlestorecreation.steps5.mobileList.active')}</li>
                <li>{t('singlestorecreation.steps5.mobileList.verify')}</li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.steps5.emailTitle')}
            </span>
            <p>
              {t('singlestorecreation.steps5.emailDesc')}
              <br />
              <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md">
                <li>{t('singlestorecreation.steps5.emailList.verify')}</li>
              </ul>
            </p>
          </div>

          <div className="mb-4">
            <p className="font-semibold">
              {t('singlestorecreation.steps5.submitNote')}
            </p>
            {t('singlestorecreation.steps5.submitCta')}
          </div>
        </div>
      </div>

      {/* ---------- Evaluation Procedure ---------- */}
      <div id="section6" className="mt-10 mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-5">
          {t('singlestorecreation.evaluation.title')}
        </h3>
      </div>

      {/* Acquirer Evaluation */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.evaluation.acquirerTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">
            {t('singlestorecreation.evaluation.acquirerPara')}
          </p>
        </div>
      </div>

      {/* SriPay Evaluation */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.evaluation.sripayTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p>{t('singlestorecreation.evaluation.sripayPara')}</p>
          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.evaluation.sripayCan')}
            </span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('singlestorecreation.evaluation.sripayList.approve')}</li>
              <li>{t('singlestorecreation.evaluation.sripayList.reject')}</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.evaluation.sysNote')}
            </span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('singlestorecreation.evaluation.sysList.notify')}</li>
              <li>{t('singlestorecreation.evaluation.sysList.progress')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alipay Evaluation */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('singlestorecreation.evaluation.alipayTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p>{t('singlestorecreation.evaluation.alipayPara')}</p>
          <div className="mb-4">
            <span className="font-semibold">
              {t('singlestorecreation.evaluation.alipayCan')}
            </span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('singlestorecreation.evaluation.alipayList.approve')}</li>
              <li>{t('singlestorecreation.evaluation.alipayList.reject')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- Troubleshooting ---------- */}
      <div id="section7" className="mt-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
          <div className="flex items-center mb-6">
            <svg
              className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">
              {t('singlestorecreation.troubleshooting.title')}
            </h2>
          </div>

          <ul className="space-y-7 text-sm">
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('singlestorecreation.troubleshooting.draftQ')}
              </div>
              <div className="text-blue-800 ml-5">{t('singlestorecreation.troubleshooting.draftA')}</div>
            </li>

            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('singlestorecreation.troubleshooting.saveQ')}
              </div>
              <div className="text-blue-800 ml-5">{t('singlestorecreation.troubleshooting.saveA')}</div>
            </li>

            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('singlestorecreation.troubleshooting.bankQ')}
              </div>
              <div className="text-blue-800 ml-5">{t('singlestorecreation.troubleshooting.bankA')}</div>
            </li>

            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('singlestorecreation.troubleshooting.photoQ')}
              </div>
              <div className="text-blue-800 ml-5">{t('singlestorecreation.troubleshooting.photoA')}</div>
            </li>

            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('singlestorecreation.troubleshooting.pageQ')}
              </div>
              <div className="text-blue-800 ml-5">{t('singlestorecreation.troubleshooting.pageA')}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MerchantStoreCreate;
