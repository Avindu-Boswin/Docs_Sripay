import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/acquirer/img295.jpg';
import Img2 from '../../assets/images/acquirer/img315.jpg';
import Img3 from '../../assets/images/acquirer/img318.jpg';
import Img4 from '../../assets/images/acquirer/img328.jpg';
import Img5 from '../../assets/images/acquirer/img331.jpg';
import Img6 from '../../assets/images/acquirer/img334.jpg';
import Img7 from '../../assets/images/acquirer/img335.jpg';


function StoreCreate() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    // Section titles for right side menu (remove 'Step X:' or similar prefixes)
    const rawTitles = [
        t('storeCreate.step1Title'),
        t('storeCreate.step2Title'),
        t('storeCreate.step3Title'),
        t('storeCreate.step4Title'),
        t('storeCreate.step5Title'),
        t('storeCreate.step6Title'),
        t('storeCreate.step7Title'),
        t('storeCreate.step8Title'),
        t('storeCreate.step9Title'),
    ];
    const sectionTitles = rawTitles.map(title =>
        title.replace(/^Step\s*\d+[:：]?\s*/i, '').trim()
    );

    useEffect(() => {
        setSections(
            sectionTitles.map((title, idx) => ({
                id: `section${idx + 1}`,
                label: title
            }))
        );
        return () => setSections([]);
    }, [setSections, ...sectionTitles]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('storeCreate.title')}
            </h1>

            {/* ---------- STEP 1:  Merchant List ---------- */}
            <div id="section1" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step1Title')}
                </h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>{t('storeCreate.step1.0')}</li>
                    <li>{t('storeCreate.step1.1')}</li>
                    <li>{t('storeCreate.step1.2')}</li>
                </ol>
                <img src={Img1} alt='Step 1: Navigate to Merchant List' className="mx-auto my-6 block md:w-4/5" />
            </div>

            {/* ---------- STEP 2: Fill Store Information ---------- */}
            <div id="section2" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step2Title')}
                </h3>
                <img src={Img2} alt='Step 2: Fill Store Information' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>{t('storeCreate.step2FieldsIntro')}</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>{t('storeCreate.step2Fields.0')}</li>
                        <li>{t('storeCreate.step2Fields.1')}</li>
                        <li>{t('storeCreate.step2Fields.2')}</li>
                        <li>{t('storeCreate.step2Fields.3')}</li>
                        <li>{t('storeCreate.step2Fields.4')}</li>
                        <li>{t('storeCreate.step2Fields.5')}</li>
                    </ul>
                    <p className='text-gray-700 text-md'>{t('storeCreate.step2FieldsNote')}</p>
                </div>
            </div>

            {/* ---------- STEP 3: Bank Account Details ---------- */}
            <div id="section3" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step3Title')}
                </h3>
                <img src={Img3} alt='Step 3: Enter Bank Account Details' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-4 text-base text-gray-700'>
                    <p className='mb-4'>{t('storeCreate.step3Intro')}</p>
                    <div className='mb-2'>
                        <span className='font-semibold'>{t('storeCreate.step3PrimaryTitle')}</span>
                        <p className='mb-2'>{t('storeCreate.step3PrimaryDesc')}</p>
                        <span className='font-semibold'>{t('storeCreate.step3PrimaryFieldsTitle')}</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                            <li>{t('storeCreate.step3PrimaryFields.0')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.1')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.2')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.3')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.4')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.5')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.6')}</li>
                            <li>{t('storeCreate.step3PrimaryFields.7')}</li>
                        </ul>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>{t('storeCreate.step3SecondaryTitle')}</span>
                        <p className='mb-2'>{t('storeCreate.step3SecondaryDesc')}</p>
                        <span className='font-semibold'>{t('storeCreate.step3SecondaryFieldsTitle')}</span>
                        <p className='mb-2'>{t('storeCreate.step3SecondaryNote')}</p>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>{t('storeCreate.step3Note').split(':')[0]}:</span> {t('storeCreate.step3Note').split(':')[1]}
                    </div>
                    <div className='mb-2'>
                        {t('storeCreate.step3Next')}
                    </div>
                </div>
            </div>

            {/* ---------- STEP 4: Submit Store Details ---------- */}
            <div id="section4" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step4Title')}
                </h3>
                <img src={Img4} alt='Step 4: Submit Store Details' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>{t('storeCreate.step4Intro')}</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step4FrontTitle')}</span>
                        <p>{t('storeCreate.step4FrontDesc')}<br /><span className='italic'>{t('storeCreate.step4FrontNote')}</span></p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step4InteriorTitle')}</span>
                        <p>{t('storeCreate.step4InteriorDesc')}<br /><span className='italic'>{t('storeCreate.step4InteriorNote')}</span></p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step4MobileTitle')}</span>
                        <p>{t('storeCreate.step4MobileDesc')}<br />
                            <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                <li>{t('storeCreate.step4MobileList.0')}</li>
                                <li>{t('storeCreate.step4MobileList.1')}</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step4EmailTitle')}</span>
                        <p>{t('storeCreate.step4EmailDesc')}<br />
                            <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                <li>{t('storeCreate.step4EmailList.0')}</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold'>{t('storeCreate.step4VerifyNote')}</p>
                        {t('storeCreate.step4Submit')}
                    </div>
                </div>
            </div>

            {/* ---------- STEP 5: Acquirer Store Evaluation ---------- */}
            <div id="section5" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step5Title')}
                </h3>
                <p className='mb-4'>{t('storeCreate.step5Intro')}</p>

                <img src={Img5} alt='Step 5: Acquirer Store Evaluation' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step5PendingTitle')}</span>
                        <p className='font-medium mt-5'>{t('storeCreate.step5PendingDesc')}</p>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>{t('storeCreate.step5PendingList.0')}
                                <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                    <li>{t('storeCreate.step5PendingStatus.0')}</li>
                                    <li>{t('storeCreate.step5PendingStatus.1')}</li>
                                    <li>{t('storeCreate.step5PendingStatus.2')}</li>
                                    <li>{t('storeCreate.step5PendingStatus.3')}</li>
                                </ul>
                            </li>
                            <li>{t('storeCreate.step5PendingList.1')}</li>
                            <li>{t('storeCreate.step5PendingList.2')}</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step5EvalTitle')}</span>
                        <p>{t('storeCreate.step5EvalDesc')}</p>
                        <ol className='list-decimal ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>
                                <span className='font-semibold'>{t('storeCreate.step5EvalList.0')}</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>{t('storeCreate.step5EvalStoreInfo.0')}</li>
                                    <li>{t('storeCreate.step5EvalStoreInfo.1')}</li>
                                    <li>{t('storeCreate.step5EvalStoreInfo.2')}</li>
                                    <li>{t('storeCreate.step5EvalStoreInfo.3')}</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>{t('storeCreate.step5EvalList.1')}</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>{t('storeCreate.step5EvalStorePhotos.0')}</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>{t('storeCreate.step5EvalList.2')}</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>{t('storeCreate.step5EvalMerchantInfo.0')}</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>{t('storeCreate.step5EvalList.3')}</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>{t('storeCreate.step5EvalContactInfo.0')}</li>
                                    <li>{t('storeCreate.step5EvalContactInfo.1')}</li>
                                    <li>{t('storeCreate.step5EvalContactInfo.2')}</li>
                                    <li>{t('storeCreate.step5EvalContactInfo.3')}</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 6: Approval Actions ---------- */}
            <div id="section6" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step6Title')}
                </h3>
                <img src={Img6} alt='Sub-Acquirer Review and Decision: Approve' className="mx-auto my-6 block md:w-4/5" />
                <img src={Img7} alt='Sub-Acquirer Review and Decision: Reject' className="mx-auto my-6 block md:w-4/5" />

                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>{t('storeCreate.step6Intro')}</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>{t('storeCreate.step6Actions.0')}</li>
                        <li>{t('storeCreate.step6Actions.1')}</li>
                    </ul>
                    <p className='mb-2'>{t('storeCreate.step6Dialog')}</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>{t('storeCreate.step6DialogList.0')}</li>
                        <li>{t('storeCreate.step6DialogList.1')}</li>
                        <li>{t('storeCreate.step6DialogList.2')}</li>
                    </ul>
                    <p className='mb-2 italic'>{t('storeCreate.step6Note')}</p>
                    <p>{t('storeCreate.step6Confirm')}</p>
                </div>
            </div>

            {/* ---------- STEP 7: SriPay Evaluation ---------- */}
            <div id="section7" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step7Title')}
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>{t('storeCreate.step7Intro')}</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step7AdminTitle')}</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>{t('storeCreate.step7AdminList.0')}</li>
                            <li>{t('storeCreate.step7AdminList.1')}</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step7NotifTitle')}</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>{t('storeCreate.step7NotifList.0')}</li>
                            <li>{t('storeCreate.step7NotifList.1')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 8: Alipay Evaluation ---------- */}
            <div id="section8" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    {t('storeCreate.step8Title')}
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>{t('storeCreate.step8Intro')}</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>{t('storeCreate.step8AdminTitle')}</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>{t('storeCreate.step8AdminList.0')}</li>
                            <li>{t('storeCreate.step8AdminList.1')}</li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* ---------- TROUBLESHOOTING SECTION ---------- */}
            <div id="section9" className="mt-16">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
                    <div className="flex items-center mb-6">
                        <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
                    </div>
                    <ul className="space-y-7 text-sm">
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>I can't create a store or the "Create Store" button is disabled.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Make sure you have selected a merchant and have the necessary permissions. If the merchant is not approved or your account lacks access, the button may be unavailable.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>My store information is not saving or submitting.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Double-check that all required fields are filled out and formatted correctly. Ensure your internet connection is stable and try again. If the issue persists, refresh the page or clear your browser cache.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Bank account details are being rejected.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Verify that all bank information matches the required format and is accurate. Only one account can be set as default. If you are unsure, contact your bank or support for clarification.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Photo uploads fail or are not accepted.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Ensure your images are clear, in the correct format (JPG/PNG), and do not exceed the maximum file size. The store name board and interior should be clearly visible.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>The page is not loading or is stuck.
                            </div>
                            <div className="text-blue-800 ml-5">
                                Check your internet connection and try reloading the page. If the issue continues, try using a different browser or device.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StoreCreate;
