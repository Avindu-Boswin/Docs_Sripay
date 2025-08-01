import React from 'react'
import { useTranslation } from 'react-i18next';



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

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('acquirerRegWorkflow.title')}
            </h1>


<p className='text-gray-700 text-base leading-relaxed mb-8'>
  Once a merchant signs up and logs in to the <span className='font-semibold text-blue-600'>SriPay</span> system, they are automatically redirected to this registration workflow. This form is essential to complete their onboarding process. After submitting all required information, the merchant will be placed on a <span className='font-semibold text-yellow-600'>waiting list</span> until the assigned Acquirer reviews and approves the application.
</p>



            {/* ---------- STEP 1 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 1: Registration Details
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 2: Address Details
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 3: Business Contact Person
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 4: Business Activities
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 5: Company Settlement Bank Details
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 6. Owner Details
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
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 7: Review & Submit KYC Summary
                </h4>
                <img src={Img10} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Review & Submit KYC Summary' />

                <span className='font-semibold text-gray-600'>{steps[10].fieldsTitle}</span>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-5 text-sm'>
                    <li>Auto-generated summary of all completed fields</li>
                    <li>Merchant can reviews and confirms final submission</li>
                </ul>

                <span className='font-semibold text-gray-600'>{steps[10].purposeTitle}</span>
                <p className='text-gray-700 ml-6 sm:ml-8 mt-3 text-sm'>
                    {steps[10].purpose}
                </p>
            </div>
            {/* ---------- STEP 8 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h4 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>
                    Step 8: Constitutional Documents
                </h4>
                <p  className='text-base text-gray-700' >Constitutional Documents can update following below steps after merchant registration: </p>
                <span className='text-base text-gray-700'>
                    Navigate to <strong>Home</strong>, then select <strong>Profile</strong>, go to <strong>My Account</strong>, choose <strong>KYC</strong>, and finally select <strong>Constitutional Documents</strong>.
                </span>

                <img src={Img11} className='mb-8 mx-auto my-6 block md:w-4/5' alt='Review & Submit KYC Summary' />

            </div>


        </div>
    )
}

export default SelfRegistration