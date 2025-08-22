import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';



import Img4 from '../../assets/images/merchant/Img4.png';
import Img5 from '../../assets/images/merchant/Img5.png';
import Img6 from '../../assets/images/merchant/Img6.png';
import Img7 from '../../assets/images/merchant/Img7.png';
import Img8 from '../../assets/images/merchant/Img8.png';
import Img9 from '../../assets/images/merchant/Img9.png';
import Img10 from '../../assets/images/merchant/Img10.png';
import Img11 from '../../assets/images/merchant/Img11.png';


function SelfRegistration() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    useEffect(() => {
        setSections([
            { id: 'step-1', label: t('selfregistration.sections.section1') },
            { id: 'step-2', label: t('selfregistration.sections.section2')},
            { id: 'step-3', label:t('selfregistration.sections.section3') },
            { id: 'step-4', label: t('selfregistration.sections.section4')},
            { id: 'step-5', label: t('selfregistration.sections.section5') },
            { id: 'step-6', label: t('selfregistration.sections.section6') },
            { id: 'step-7', label: t('selfregistration.sections.section7') },
            { id: 'step-8', label: t('selfregistration.sections.section8') },
        ]);
        return () => setSections([]);
        // eslint-disable-next-line
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 id="selfreg-title" className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('acquirerRegWorkflow.title')}
            </h1>


            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('selfregistration.desc')}
            </p>



            {/* ---------- STEP 1 ------------------------------------------------ */}
            <div id="step-1" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step1')}
                </h4>
                <img src={Img4} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Registration Details' />
                <span className='font-semibold text-gray-600'>{steps[3].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {steps[3].fields.map((f, i) => (
                        <li key={i} className='mb-2'>{f}</li>
                    ))}
                </ul>

                <span className='font-semibold text-gray-600'>{steps[3].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[3].purpose}
                </p>
            </div>

            {/* ---------- STEP 2 ------------------------------------------------ */}
            <div id="step-2" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step2')}
                </h4>
                <img src={Img5} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Address Details' />

                <span className='font-semibold text-gray-600'>{steps[4].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {steps[4].fields.map((f, i) => (
                        <li key={i} className='mb-2'>{f}</li>
                    ))}
                </ul>

                <span className='font-semibold text-gray-600'>{steps[4].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[4].purpose}
                </p>
            </div>

            {/* ---------- STEP 3 ------------------------------------------------ */}
            <div id="step-3" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step3')}
                </h4>
                <img src={Img6} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Business Contact Person' />

                <span className='font-semibold text-gray-600'>{steps[5].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {steps[5].fields.map((f, i) => (
                        <li key={i} className='mb-2'>{f}</li>
                    ))}
                </ul>

                <span className='font-semibold text-gray-600'>{steps[5].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[5].purpose}
                </p>
            </div>

            {/* ---------- STEP 4 ------------------------------------------------ */}
            <div id="step-4" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                     {t('selfregistration.step4')}
                </h4>
                <img src={Img7} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Business Activities' />

                <span className='font-semibold text-gray-600'>{steps[6].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {steps[6].fields.map((f, i) => (
                        <li key={i} className='mb-2'>{f}</li>
                    ))}
                </ul>

                <span className='font-semibold text-gray-600'>{steps[6].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[6].purpose}
                </p>
            </div>

            {/* ---------- STEP 5 ------------------------------------------------ */}
            <div id="step-5" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step5')}
                </h4>
                <img src={Img8} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Company Settlement Bank Details' />

                <span className='font-semibold text-gray-600'>{steps[7].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {/* Primary bank */}
                    <li className='mb-2 font-semibold text-gray-600'>
                        {t('acquirerRegWorkflow.steps.7.primaryBankTitle', 'Primary Bank:')}
                    </li>
                    <ul className='list-disc ml-6 sm:ml-8'>
                        {steps[7].primaryBank.map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>

                    {/* Secondary bank */}
                    <li className='mb-2 mt-3 font-semibold text-gray-600'>
                        {t('acquirerRegWorkflow.steps.7.secondaryBankTitle', 'Secondary Bank (Optional):')}
                    </li>
                    <ul className='list-disc ml-6 sm:ml-8'>
                        {steps[7].secondaryBank.map((s, i) => (
                            <li key={i}>{s}</li>
                        ))}
                    </ul>
                </ul>

                <span className='font-semibold text-gray-600'>{steps[7].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[7].purpose}
                </p>
            </div>

            {/* ---------- STEP 6 ------------------------------------------------ */}
            <div id="step-6" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step6')}
                </h4>
                <img src={Img9} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Owner Details' />

                <span className='font-semibold text-gray-600'>{steps[8].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    {steps[8].fields.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>

                <span className='font-semibold text-gray-600'>{steps[8].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[8].purpose}
                </p>
            </div>



            {/* ---------- STEP 7 ------------------------------------------------ */}
            <div id="step-7" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step7')}
                </h4>
                <img src={Img10} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Review & Submit KYC Summary' />

                <span className='font-semibold text-gray-600'>{steps[10].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    <li>      {t('selfregistration.des.sub1')}</li>
                    <li> {t('selfregistration.des.sub2')}</li>
                </ul>

                <span className='font-semibold text-gray-600'>{steps[10].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[10].purpose}
                </p>
            </div>
            {/* ---------- STEP 8 ------------------------------------------------ */}
            <div id="step-8" className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                {t('selfregistration.step8')}
                </h4>
                <p className='text-base text-gray-700' > {t('selfregistration.des.sub3')}</p>
                <span className='text-base text-gray-700'>
                {t('selfregistration.des.sub4')}
                </span>

                <img src={Img11} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Review & Submit KYC Summary' />

            </div>


        </div>
    )
}

export default SelfRegistration