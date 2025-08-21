import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/store-creation/img1.png';
import Img2 from '../../assets/images/merchant/store-creation/img6.png';
import Img3 from '../../assets/images/merchant/store-creation/img7.png';
import Img4 from '../../assets/images/merchant/store-creation/img8.png';
import Img5 from '../../assets/images/merchant/store-creation/img9.png';
import { useTranslation } from 'react-i18next';

function MerchantMultipleStore() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // make sure you load the 'merchant' namespace

  // Right-side menu (translated)
  const menu = [
    { id: 'step1', label: t('multiplestorecreation.sectionsMenu.section1') },
    { id: 'step2', label: t('multiplestorecreation.sectionsMenu.section2') },
    { id: 'step3', label: t('multiplestorecreation.sectionsMenu.section3') },
    { id: 'step4', label: t('multiplestorecreation.sectionsMenu.section4') },
    { id: 'step5', label: t('multiplestorecreation.sectionsMenu.section5') },
    { id: 'step6', label: t('multiplestorecreation.sectionsMenu.section6') },
    { id: 'step7', label: t('multiplestorecreation.sectionsMenu.section7') },
    { id: 'step8', label: t('multiplestorecreation.sectionsMenu.section8') }
  ];

  useEffect(() => {
    setSections(menu);
    return () => setSections([]);
    // rerun when language changes (t reference updates)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-2">
        {t('multiplestorecreation.title')}
      </h1>
      <h3 className="text-xl md:py-2 sm:py-1 lg:py-3 sm:text-2xl font-semibold text-gray-700">
        {t('multiplestorecreation.workflow')}
      </h3>
      <span className="text-base text-gray-600">
        {t('multiplestorecreation.intro')}
      </span>

      {/* Step 1 */}
      <div id="step1" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps1.title')}
        </h3>
        <ol className="list-decimal ml-6 text-gray-700 text-base mb-6">
          <li>{t('multiplestorecreation.steps1.li1')}</li>
          <li>{t('multiplestorecreation.steps1.li2')}</li>
        </ol>
        <img
          src={Img1}
          alt={t('multiplestorecreation.alts.step1')}
          className="mx-auto my-6 block md:w-4/5"
        />
      </div>

      {/* Step 2 */}
      <div id="step2" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps2.title')}
        </h3>
        <img
          src={Img2}
          alt={t('multiplestorecreation.alts.step2')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">{t('multiplestorecreation.steps2.p1')}</p>
          <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4">
            <li>{t('multiplestorecreation.steps2.single')}</li>
            <li>{t('multiplestorecreation.steps2.multiple')}</li>
          </ul>
          <p className="text-gray-700 text-md">{t('multiplestorecreation.steps2.p2')}</p>
        </div>
      </div>

      {/* Step 3 */}
      <div id="step3" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps3.title')}
        </h3>
        <img
          src={Img3}
          alt={t('multiplestorecreation.alts.step3')}
          className="mx-auto mb-8 my-6 block md:w-4/5"
        />
        <div className="ml-1 sm:ml-3 mt-7">
          <div className="mt-5">
            <span className="font-semibold text-gray-600">{t('multiplestorecreation.steps3.includes')}</span>
            <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm">
              <li className="p-1.5">{t('multiplestorecreation.steps3.li1')}</li>
              <li className="p-1.5">{t('multiplestorecreation.steps3.li2')}</li>
              <li className="p-1.5">{t('multiplestorecreation.steps3.li3')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div id="step4" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps4.title')}
        </h3>
        <div className="ml-1 sm:ml-3 mt-7">
          <ol className="list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3">
            <li>{t('multiplestorecreation.steps4.ol1')}</li>
            <li>
              <span className="font-semibold">{t('multiplestorecreation.steps4.rulesTitle')}</span>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>{t('multiplestorecreation.steps4.r1')}</li>
                <li>{t('multiplestorecreation.steps4.r2')}</li>
                <li>{t('multiplestorecreation.steps4.r3')}</li>
                <li>{t('multiplestorecreation.steps4.r4')}</li>
                <li>{t('multiplestorecreation.steps4.r5')}</li>
                <li>{t('multiplestorecreation.steps4.r6')}</li>
                <li>{t('multiplestorecreation.steps4.r7')}</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      {/* Step 5 */}
      <div id="step5" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps5.title')}
        </h3>
        <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm">
          <li>{t('multiplestorecreation.steps5.li1')}</li>
        </ul>

        {/* Validation table */}
        <div className="hidden sm:block w-full mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm border border-gray-300">
            <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.h1')}
            </div>
            <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.h2')}
            </div>
            <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.h3')}
            </div>

            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row1c1')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row1c2')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row1c3')}
            </div>

            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row2c1')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row2c2')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row2c3')}
            </div>

            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row3c1')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row3c2')}
            </div>
            <div className="border-t border-gray-300 px-3 py-2">
              {t('multiplestorecreation.steps5.table.row3c3')}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <span className="font-semibold text-gray-700">{t('multiplestorecreation.steps5.onFailTitle')}</span>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
            <li>{t('multiplestorecreation.steps5.onFail1')}</li>
            <li>{t('multiplestorecreation.steps5.onFail2')}</li>
          </ul>
        </div>
        <img
          src={Img4}
          alt={t('multiplestorecreation.steps5.imgAlt')}
          className="mx-auto mb-8 my-6 block md:w-4/5"
        />
      </div>

      {/* Step 6 */}
      <div id="step6" className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.steps6.title')}
        </h3>
        <img
          src={Img5}
          alt={t('multiplestorecreation.steps6.imgAlt')}
          className="mx-auto mb-8 my-6 block md:w-4/5"
        />
        <span className="font-semibold text-gray-700">
          {t('multiplestorecreation.steps6.passTitle')}
        </span>
        <div className="ml-1 sm:ml-3 mt-7">
          <div className="mt-5">
            <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm">
              <li className="p-1.5">{t('multiplestorecreation.steps6.li1')}</li>
              <li className="p-1.5">{t('multiplestorecreation.steps6.li2')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Evaluation Procedure */}
      <div id="step7" className="mt-10 mb-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-5">
          {t('multiplestorecreation.evaluation.title')}
        </h3>
      </div>

      {/* Acquirer */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.evaluation.acquirerTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p className="mb-4">{t('multiplestorecreation.evaluation.acquirerPara')}</p>
        </div>
      </div>

      {/* SriPay */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.evaluation.sripayTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p>{t('multiplestorecreation.evaluation.sripayPara')}</p>
          <div className="mb-4">
            <span className="font-semibold">{t('multiplestorecreation.evaluation.sripayCan')}</span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('multiplestorecreation.evaluation.sripayApprove')}</li>
              <li>{t('multiplestorecreation.evaluation.sripayReject')}</li>
            </ul>
          </div>
          <div className="mb-4">
            <span className="font-semibold">{t('multiplestorecreation.evaluation.sysNote')}</span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('multiplestorecreation.evaluation.sysNotify')}</li>
              <li>{t('multiplestorecreation.evaluation.sysProgress')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Alipay */}
      <div className="mt-8 mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('multiplestorecreation.evaluation.alipayTitle')}
        </h3>
        <div className="mt-8 text-base text-gray-700">
          <p>{t('multiplestorecreation.evaluation.alipayPara')}</p>
          <div className="mb-4">
            <span className="font-semibold">{t('multiplestorecreation.evaluation.alipayCan')}</span>
            <ul className="list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2">
              <li>{t('multiplestorecreation.evaluation.alipayApprove')}</li>
              <li>{t('multiplestorecreation.evaluation.alipayReject')}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div id="step8" className="mt-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
          <div className="flex items-center mb-6">
            <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">
              {t('multiplestorecreation.troubleshooting.title')}
            </h2>
          </div>
          <ul className="space-y-7 text-sm">
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('multiplestorecreation.troubleshooting.q1')}
              </div>
              <div className="text-blue-800 ml-5">{t('multiplestorecreation.troubleshooting.a1')}</div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('multiplestorecreation.troubleshooting.q2')}
              </div>
              <div className="text-blue-800 ml-5">{t('multiplestorecreation.troubleshooting.a2')}</div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('multiplestorecreation.troubleshooting.q3')}
              </div>
              <div className="text-blue-800 ml-5">{t('multiplestorecreation.troubleshooting.a3')}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MerchantMultipleStore;
