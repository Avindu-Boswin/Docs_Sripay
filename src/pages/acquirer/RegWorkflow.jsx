import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

import Img1  from '../../assets/images/acquirer/img241.jpg';
import Img2  from '../../assets/images/acquirer/img243.jpg';
import Img3  from '../../assets/images/acquirer/img245.jpg';
import Img4  from '../../assets/images/acquirer/img247.jpg';
import Img5  from '../../assets/images/acquirer/img249.jpg';
import Img6  from '../../assets/images/acquirer/img251.jpg';
import Img7  from '../../assets/images/acquirer/img253.jpg';
import Img8  from '../../assets/images/acquirer/img255.jpg';
import Img9  from '../../assets/images/acquirer/img258.jpg';
import Img10 from '../../assets/images/acquirer/img260.jpg';
import Img11 from '../../assets/images/acquirer/img263.jpg';
import Img12 from '../../assets/images/acquirer/img267.jpg';
import Img13 from '../../assets/images/acquirer/img266.jpg';
import Img14 from '../../assets/images/acquirer/img270.jpg';
import Img15 from '../../assets/images/acquirer/img271.jpg';

function MerchantRegistrationWorkflow() {
  const { t, i18n } = useTranslation();
  const { setSections } = useSections();

  // Stabilize the steps array so it doesn't change every render
  const steps = useMemo(
    () => t('acquirerRegWorkflow.steps', { returnObjects: true }),
    [i18n.language, t]
  );

  useEffect(() => {
    if (!Array.isArray(steps)) return;

    setSections(
      steps.map((step, idx) => {
        // Remove `Step X:` or `Step X：` from the title, if present
        const cleanTitle = (step?.title || '')
          .replace(/^Step\s*\d+[:：]\s*/i, '')
          .trim();
        return { id: `step${idx + 1}`, label: cleanTitle };
      })
    );
    return () => setSections([]);
  }, [setSections, steps]);

  return (
    <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
      {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        {t('acquirerRegWorkflow.title')}
      </h1>

      <h3 className='text-xl sm:text-2xl font-semibold text-gray-700'>
        {t('acquirerRegWorkflow.subtitle')}
      </h3>

      <span className='text-base sm:text-lg md:text-xl text-gray-600'>
        {t('acquirerRegWorkflow.desc')}
      </span>

      {/* ---------- STEP 1 ------------------------------------------------ */}
      <div id="step1" className='mt-8 mb-6'>
        <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
          {steps?.[0]?.title}
        </h3>
        <img src={Img1} alt='Merchant Basic Details' className="mx-auto my-6 block md:w-4/5" />

        <div className='ml-1 sm:ml-3 mt-7'>
          <div className='mt-5'>
            <span className='font-semibold text-gray-600'>{steps?.[0]?.fieldsTitle}</span>
            <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
              {steps?.[0]?.fields?.map((f, i) => (
                <li key={i} className='p-1.5'>{f}</li>
              ))}
            </ul>

            <span className='font-semibold text-gray-600'>{steps?.[0]?.notesTitle}</span>
            <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
              {steps?.[0]?.notes?.map((n, i) => (
                <li key={i} className='p-1.5'>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---------- STEP 2 ------------------------------------------------ */}
      <div id="step2" className='mt-8 mb-6'>
        <h3 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[1]?.title}
        </h3>
        <span className='text-gray-700 mt-5'>{steps?.[1]?.desc}</span>

        <div className='mt-6 ml-1 sm:ml-3'>
          <ul className='list-disc text-gray-700 ml-6 sm:ml-8 text-sm'>
            {steps?.[1]?.fields?.map((f, i) => (
              <li key={i} className='p-1.5'>{f}</li>
            ))}
          </ul>

          <img src={Img2} alt='Merchant Welcome Email Confirmation' className="mx-auto my-6 block md:w-4/5" />
        </div>
      </div>

      {/* ---------- STEP 3 ------------------------------------------------ */}
      <div id="step3" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[2]?.title}
        </h4>
        <img src={Img3} alt='Merchant Overview Dashboard' className="mx-auto mb-8 my-6 block md:w-4/5" />

        <span className='font-semibold text-gray-600'>{steps?.[2]?.featuresTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          <li className='mb-2 font-semibold text-gray-600'>
            {steps?.[2]?.features?.[0]}
            <ul className='list-disc font-medium ml-6 sm:ml-8 mt-2'>
              {steps?.[2]?.columns?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </li>

          <li className='mb-2 mt-3 font-semibold text-gray-600'>
            {steps?.[2]?.features?.[1]}
            <ul className='list-disc font-medium ml-6 sm:ml-8 mt-2'>
              <li>Complete KYC</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* ---------- STEP 4 ------------------------------------------------ */}
      <div id="step4" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[3]?.title}
        </h4>
        <img src={Img4} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Registration Details' />

        <span className='font-semibold text-gray-600'>{steps?.[3]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[3]?.fields?.map((f, i) => (
            <li key={i} className='mb-2'>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[3]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[3]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 5 ------------------------------------------------ */}
      <div id="step5" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[4]?.title}
        </h4>
        <img src={Img5} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Address Details' />

        <span className='font-semibold text-gray-600'>{steps?.[4]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[4]?.fields?.map((f, i) => (
            <li key={i} className='mb-2'>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[4]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[4]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 6 ------------------------------------------------ */}
      <div id="step6" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[5]?.title}
        </h4>
        <img src={Img6} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Business Contact Person' />

        <span className='font-semibold text-gray-600'>{steps?.[5]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[5]?.fields?.map((f, i) => (
            <li key={i} className='mb-2'>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[5]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[5]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 7 ------------------------------------------------ */}
      <div id="step7" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[6]?.title}
        </h4>
        <img src={Img7} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Business Activities' />

        <span className='font-semibold text-gray-600'>{steps?.[6]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[6]?.fields?.map((f, i) => (
            <li key={i} className='mb-2'>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[6]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[6]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 8 ------------------------------------------------ */}
      <div id="step8" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[7]?.title}
        </h4>
        <img src={Img8} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Company Settlement Bank Details' />

        <span className='font-semibold text-gray-600'>{steps?.[7]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          <li className='mb-2 font-semibold text-gray-600'>
            {t('acquirerRegWorkflow.steps.7.primaryBankTitle', 'Primary Bank:')}
            <ul className='list-disc ml-6 sm:ml-8 mt-2 font-normal text-gray-700'>
              {steps?.[7]?.primaryBank?.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </li>

          <li className='mb-2 mt-3 font-semibold text-gray-600'>
            {t('acquirerRegWorkflow.steps.7.secondaryBankTitle', 'Secondary Bank (Optional):')}
            <ul className='list-disc ml-6 sm:ml-8 mt-2 font-normal text-gray-700'>
              {steps?.[7]?.secondaryBank?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </li>
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[7]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[7]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 9 ------------------------------------------------ */}
      <div id="step9" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[8]?.title}
        </h4>
        <img src={Img9} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Owner Details' />

        <span className='font-semibold text-gray-600'>{steps?.[8]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[8]?.fields?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[8]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[8]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 10 ----------------------------------------------- */}
      <div id="step10" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[9]?.title}
        </h4>
        <img src={Img10} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Constitutional Documents Upload' />

        <span className='font-semibold text-gray-600'>{steps?.[9]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[9]?.fields?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[9]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[9]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 11 ----------------------------------------------- */}
      <div id="step11" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[10]?.title}
        </h4>
        <img src={Img11} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Review & Submit KYC Summary' />

        <span className='font-semibold text-gray-600'>{steps?.[10]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[10]?.fields?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[10]?.purposeTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[10]?.purpose}
        </p>
      </div>

      {/* ---------- STEP 12 ----------------------------------------------- */}
      <div id="step12" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[11]?.title}
        </h4>
        {/* two images */}
        <img src={Img12} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Sub-Acquirer Evaluation: Pending Requests' />
        <img src={Img13} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Sub-Acquirer Evaluation: Pending Requests' />

        <span className='font-semibold text-gray-600'>{steps?.[11]?.fieldsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[11]?.fields?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}

          <li className='mb-2 font-semibold text-gray-600'>
            {t('acquirerRegWorkflow.steps.11.statusesTitle', 'Statuses')}
            <ul className='list-disc ml-6 sm:ml-8 mt-2 font-normal text-gray-700'>
              {steps?.[11]?.statuses?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </li>
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[11]?.kycDetailTitle}</span>
        <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
          {steps?.[11]?.kycDetailDesc}
        </p>

        <span className='font-semibold text-gray-600'>{steps?.[11]?.modelIncludesTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
          {steps?.[11]?.modelIncludes?.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>

      {/* ---------- STEP 13 ----------------------------------------------- */}
      <div id="step13" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[12]?.title}
        </h4>
        <img src={Img14} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Sub-Acquirer Review and Decision: Approve' />
        <img src={Img15} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Sub-Acquirer Review and Decision: Reject' />

        <span className='font-semibold text-gray-600'>{steps?.[12]?.actionOptionsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[12]?.actionOptions?.map((ao, i) => (
            <li key={i}>{ao}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[12]?.systemNotificationsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
          {steps?.[12]?.systemNotifications?.map((sn, i) => (
            <li key={i}>{sn}</li>
          ))}
        </ul>
      </div>

      {/* ---------- STEP 14 ----------------------------------------------- */}
      <div id="step14" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[13]?.title}
        </h4>
        <p className='text-gray-700 mt-5'>{steps?.[13]?.desc}</p>

        <span className='font-semibold text-gray-600'>{steps?.[13]?.adminCanTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[13]?.adminCan?.map((ac, i) => (
            <li key={i}>{ac}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[13]?.systemNotificationsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
          {steps?.[13]?.systemNotifications?.map((sn, i) => (
            <li key={i}>{sn}</li>
          ))}
        </ul>
      </div>

      {/* ---------- STEP 15 ----------------------------------------------- */}
      <div id="step15" className='mt-8 mb-6'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[14]?.title}
        </h4>
        <p className='text-gray-700 mt-5'>{steps?.[14]?.desc}</p>

        <span className='font-semibold text-gray-600'>{steps?.[14]?.adminCanTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[14]?.adminCan?.map((ac, i) => (
            <li key={i}>{ac}</li>
          ))}
        </ul>
      </div>

      {/* ---------- STEP 16 ----------------------------------------------- */}
      <div id="step16" className='mt-8 mb-20'>
        <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
          {steps?.[15]?.title}
        </h4>

        <span className='font-semibold text-gray-600'>{steps?.[15]?.desc}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
          {steps?.[15]?.fields?.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <span className='font-semibold text-gray-600'>{steps?.[15]?.nextStepsTitle}</span>
        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
          {steps?.[15]?.nextSteps?.map((ns, i) => (
            <li key={i}>{ns}</li>
          ))}
        </ul>
      </div>

      {/* ---------- TROUBLESHOOTING SECTION ---------- */}
      <div id="step17" className="mt-16">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
          <div className="flex items-center mb-6">
            <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe"/>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
          </div>
          <ul className="space-y-7 text-sm">
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>I can't submit the registration form. What should I do?</div>
              <div className="text-blue-800 ml-5">Double-check that all required fields are filled out and that your uploaded documents meet the specified format and size requirements. If the problem persists, try refreshing the page or clearing your browser cache.</div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>I did not receive the confirmation email.</div>
              <div className="text-blue-800 ml-5">Please check your spam or junk folder. If you still do not see the email, ensure that you entered the correct email address and request a new confirmation email from the login page.</div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>My document upload keeps failing.</div>
              <div className="text-blue-800 ml-5">Ensure your files are in the accepted format (PDF, JPG, or PNG) and do not exceed the maximum file size. Try renaming the file and uploading again.</div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>The page is not loading or is stuck.</div>
              <div className="text-blue-800 ml-5">Check your internet connection and try reloading the page. If the issue continues, try using a different browser or device.</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MerchantRegistrationWorkflow;
