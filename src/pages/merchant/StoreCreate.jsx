import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/store-creation/img1.png';
import Img2 from '../../assets/images/merchant/store-creation/img2.png';
import Img3 from '../../assets/images/merchant/store-creation/img3.png';
import Img4 from '../../assets/images/merchant/store-creation/img4.png';
import Img5 from '../../assets/images/merchant/store-creation/img5.png';

function MerchantStoreCreate() {
    const { setSections } = useSections();

    // Section titles for right side menu (hardcoded English text)
    const rawTitles = [
        'Navigating Stores Tab',
        'Selecting Single Store Option',
        'Filling Store Information',
        'Entering Bank Account Details',
        'Submitting Store Details',
        'Evaluation Procedure',
        'Troubleshooting',
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
                Single Store Creation
            </h1>

            {/* ---------- STEP 1:  Store Tab ---------- */}
            <div id="section1" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 1: Navigate to Stores Tab
                </h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Go to the Stores section from the Top Navigation Bar.</li>
                    <li>Click the Create Store button.</li>
                </ol>
                <img src={Img1} alt='Step 1: Navigate to Stores Tab' className="mx-auto my-6 block md:w-4/5" />
            </div>

            {/* ---------- STEP 2: Select Single Store Option ---------- */}
            <div id="section2" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 2: Select Single Store Option
                </h3>
                <img src={Img2} alt='Step 2: Select Single Store Option' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>You'll see 2 options for store creation.</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>Single Store – This option is to create a single store.</li>
                        <li>Multiple Stores – This option is to create multiple stores at once.</li>
                    </ul>
                    <p className='text-gray-700 text-md'>From there pick the Single Store option and click Next button</p>
                </div>
            </div>

            {/* ---------- STEP 3: Fill Store Information ---------- */}
            <div id="section3" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 3: Fill Store Information
                </h3>
                <img src={Img3} alt='Step 3: Fill Store Information' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>You'll see fields for</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>Store Name – The official name of the store/outlet.</li>
                        <li>MCC – Category of the merchant.</li>
                        <li>Store Email – Store’s email address for communication.</li>
                        <li>Country / Province / District / City / Street / Longitude / Latitude – Physical location fields to map the store accurately.</li>
                        <li>Store QR currency – Select the preferred currency for your store’s QR code transactions.</li>
                        <li>Store Website – Include the store’s official website URL. If a dedicated outlet site is unavailable, you may use the main business website.</li>
                    </ul>
                    <p className='text-gray-700 text-md'>These fields help ensure each store is uniquely identifiable by address and contact details.</p>
                </div>
            </div>

            {/* ---------- STEP 4: Bank Account Details ---------- */}
            <div id="section4" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 4: Enter Bank Account Details
                </h3>
                <img src={Img4} alt='Step 4: Enter Bank Account Details' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-4 text-base text-gray-700'>
                    <p className='mb-4'>To enable seamless settlement of funds, please provide your store's bank account details. You may configure both Primary and Secondary settlement accounts. Only one account can be set as the default settlement account.</p>
                    <div className='mb-2'>
                        <span className='font-semibold'>Primary Bank Account</span>
                        <p className='mb-2'>This account will be used as the default for receiving settlement payments unless changed manually.</p>
                        <span className='font-semibold'>Required Fields</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                            <li>Bank Name: Select from the dropdown of supported financial institutions.</li>
                            <li>Branch Name: Include the specific branch where the account was opened.</li>
                            <li>Branch Code: Include the specific branch code the account was opened.</li>
                            <li>Branch Street / City / Postal Code: Include the specific branch street, city, and postal code where the account was opened.</li>
                            <li>Bank Country: Select the country where the bank is located.</li>
                            <li>Account Name: Input the name under which the account is registered.</li>
                            <li>Account Number: Enter the full bank account number without spaces.</li>
                            <li>Currency: Select the currency for this settlement account (e.g., USD, LKR).</li>
                            <li>Swift/BIC Code: Required for international transfers, especially USD accounts.</li>
                            <li>Settlement Status: Active by default, indicates this account is ready to receive funds.</li>
                        </ul>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Secondary Bank Account (Optional)</span>
                        <p className='mb-2'>This optional account acts as a backup for settlement purposes and can be activated when needed.</p>
                        <span className='font-semibold'>Required Fields (same as Primary Bank Account)</span>
                        <p className='mb-2'>You can also toggle the option to Set as default settlement account if you prefer this to be the primary method of receiving payments.</p>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Note:</span> Ensure all information is accurate. Incorrect details may delay or reject settlements.
                    </div>
                    <div className='mb-2'>
                        Click Next to proceed once all mandatory details are entered correctly.
                    </div>
                </div>
            </div>

            {/* ---------- STEP 5: Submit Store Details ---------- */}
            <div id="section5" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 5: Submit Store Details
                </h3>
                <img src={Img5} alt='Step 5: Submit Store Details' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>To finalize your store registration, please complete the following required details. This information helps verify and activate your store for customer-facing services and settlements.</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>Store Front Photos</span>
                        <p>Upload clear exterior photos of your store front. This helps in authenticating the physical existence and visibility of the outlet.<br /><span className='italic'>Ensure the store name board is clearly visible in the image.</span></p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>Interior Photos</span>
                        <p>Upload clear interior photos of your store. This helps in verifying the operational nature and layout of your outlet.<br /><span className='italic'>Make sure the images represent the actual setup of the store (e.g., counters, displays, signage).</span></p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>Mobile Number</span>
                        <p>Provide a valid mobile number for store-level communication and verification.<br />
                            <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                <li>Must be active and reachable.</li>
                                <li>Click "Verify Phone Number" to receive and confirm a verification code.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>Email Address</span>
                        <p>Enter a valid email address for official communications related to settlements, support, and notifications.<br />
                            <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                <li>Click "Verify Email" to authenticate the email before submission.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold'>Both phone and email must be verified before submitting the setup.</p>
                        Click Submit once all fields are filled and verified to complete your store onboarding.
                    </div>
                </div>
            </div>

            {/* ---------- Store Evaluation Procedure ---------- */}
            <div id="section6" className='mt-10 mb-10'>
                <h3 className='text-2xl sm:text-3xl font-bold text-gray-700 mb-5'>
                    Store Evaluation Procedure
                </h3>
            </div>

            {/* ---------- Acquirer Store Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Acquirer Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>Once a store is submitted, it enters the Pending Requests stage for review and evaluation by the acquirer. The approval process ensures store legitimacy and compliance before activation.</p>
                </div>
            </div>

            {/* ---------- SriPay Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    SriPay Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>If the Sub-Acquirer sends the application forward, it moves to the SriPay Admin Panel for a second-level review.</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>SriPay Admin can:</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>Approve and forward to Alipay</li>
                            <li>Reject with comments and notify Sub-Acquirer</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>System Notifications:</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>Sub-Acquirer is notified of SriPay's decision</li>
                            <li>Merchant store remains in "SriPay In Progress" until final decision</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- Alipay Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Alipay Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>If SriPay approves the application, it is submitted to Alipay+ Team. This includes an automatic or manual compliance check by Alipay.</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>Alipay+ Admin can:</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>Approve: Merchant store is now live for payment acceptance</li>
                            <li>Reject: Sent back with reason; Sub-Acquirer and SriPay are notified</li>
                        </ul>
                    </div>
                </div>
            </div>

             {/* ---------- TROUBLESHOOTING SECTION ---------- */}
            <div id="section7" className="mt-16">
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
                                <span className="mr-2">•</span>What does the "Save as Draft" button do?
                            </div>
                            <div className="text-blue-800 ml-5">
                                The "Save as Draft" button allows you to save your progress without submitting the form. You can return to it later to complete the submission.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Store details are not saving or submitting
                            </div>
                            <div className="text-blue-800 ml-5">
                                Check that all required fields are filled and formatted correctly. Look for any validation errors highlighted on the form. Try refreshing the page or clearing your browser cache if the problem persists.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Bank account information is being rejected
                            </div>
                            <div className="text-blue-800 ml-5">
                                Double-check that all bank details match the required format and are correct. Only one account can be set as default. If unsure, contact your bank or support.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Photo uploads are failing or not accepted
                            </div>
                            <div className="text-blue-800 ml-5">
                                Make sure your images are clear, in JPG or PNG format, and do not exceed the maximum file size. The store name board and interior should be clearly visible.
                            </div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center">
                                <span className="mr-2">•</span>Page is not loading or is stuck
                            </div>
                            <div className="text-blue-800 ml-5">
                                Check your internet connection and try reloading the page. If the issue continues, try a different browser or device.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MerchantStoreCreate;
