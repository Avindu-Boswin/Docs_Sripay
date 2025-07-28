import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/acquirer/img295.jpg';
import Img2 from '../../assets/images/acquirer/img315.jpg';
import Img3 from '../../assets/images/acquirer/img318.jpg';
import Img4 from '../../assets/images/acquirer/img328.jpg';
import Img5 from '../../assets/images/acquirer/img331.jpg';
import Img6 from '../../assets/images/acquirer/img334.jpg';
import Img7 from '../../assets/images/acquirer/img335.jpg';


function StoreCreate() {
    const { t } = useTranslation();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Creating a New Store
            </h1>

            {/* ---------- STEP 1:  Merchant List ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 1: Navigate to Merchant List
                </h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Go to the <span className='font-semibold'>Merchants</span> tab and locate the merchant for whom you want to create a store.</li>
                    <li>Click on the 3-dot action menu next to the merchant entry.</li>
                    <li>From the action menu, click <span className='font-semibold'>Create Store</span> to begin the process.</li>
                </ol>
                <img src={Img1} alt='Step 1: Navigate to Merchant List' className="mx-auto my-6 block md:w-4/5" />
            </div>

            {/* ---------- STEP 2: Fill Store Information ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 2: Fill Store Information
                </h3>
                <img src={Img2} alt='Step 2: Fill Store Information' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>You'll see fields for</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li><span className='font-semibold'>Store Name</span> – The official name of the store/outlet.</li>
                        <li><span className='font-semibold'>Store Phone</span> – Direct store contact number.</li>
                        <li><span className='font-semibold'>Store Email</span> – Store’s email address for communication.</li>
                        <li><span className='font-semibold'>Province / District / City / Street</span> – Physical location fields to map the store accurately.</li>
                        <li><span className='font-semibold'>Store QR currency</span> – Select the preferred currency for your store’s QR code transactions.</li>
                        <li><span className='font-semibold'>Store Website</span> – Include the store’s official website URL. If a dedicated outlet site is unavailable, you may use the main business website.</li>
                    </ul>
                    <p className='text-gray-700 text-md'>These fields help ensure each store is uniquely identifiable by address and contact details.</p>
                </div>
            </div>

            {/* ---------- STEP 3: Bank Account Details ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 3: Enter Bank Account Details
                </h3>
                <img src={Img3} alt='Step 3: Enter Bank Account Details' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-4 text-base text-gray-700'>
                    <p className='mb-4'>To enable seamless settlement of funds, please provide your store’s bank account details. You may configure both <span className='font-semibold'>Primary</span> and <span className='font-semibold'>Secondary</span> settlement accounts. Only one account can be set as the default settlement account.</p>
                    <div className='mb-2'>
                        <span className='font-semibold'>Primary Bank Account</span>
                        <p className='mb-2'>This account will be used as the default for receiving settlement payments unless changed manually.</p>
                        <span className='font-semibold'>Required Fields</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                            <li><span className='font-semibold'>Bank Type:</span> Choose between <span className='font-semibold'>Local</span> or <span className='font-semibold'>International</span> bank account.</li>
                            <li><span className='font-semibold'>Settlement Currency:</span> Select <span className='font-semibold'>LKR</span> or <span className='font-semibold'>USD</span> depending on your account preference.</li>
                            <li><span className='font-semibold'>Bank Name:</span> Choose your bank from the list provided.</li>
                            <li><span className='font-semibold'>Bank Code:</span> Input the official bank code.</li>
                            <li><span className='font-semibold'>Branch Name:</span> Enter the name of the bank branch.</li>
                            <li><span className='font-semibold'>Branch Code:</span> Provide the correct branch code for reference.</li>
                            <li><span className='font-semibold'>Account Number:</span> Enter the full bank account number used for settlements.</li>
                            <li><span className='font-semibold'>Account Name:</span> Input the name under which the account is registered.</li>
                        </ul>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Secondary Bank Account (Optional)</span>
                        <p className='mb-2'>This optional account acts as a backup for settlement purposes and can be activated when needed.</p>
                        <span className='font-semibold'>Required Fields (same as Primary Bank Account)</span>
                        <p className='mb-2'>You can also toggle the option to <span className='font-semibold'>Set as default settlement account</span> if you prefer this to be the primary method of receiving payments.</p>
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>Note:</span> Ensure all information is accurate. Incorrect details may delay or reject settlements.
                    </div>
                    <div className='mb-2'>
                        Click <span className='font-semibold'>Next</span> to proceed once all mandatory details are entered correctly.
                    </div>
                </div>
            </div>

            {/* ---------- STEP 4: Submit Store Details ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 4: Submit Store Details
                </h3>
                <img src={Img4} alt='Step 4: Submit Store Details' className="mx-auto my-6 block md:w-4/5" />
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
                                <li>Click <span className='font-semibold'>“Verify Phone Number”</span> to receive and confirm a verification code.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>Email Address</span>
                        <p>Enter a valid email address for official communications related to settlements, support, and notifications.<br />
                            <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                <li>Click <span className='font-semibold'>“Verify Email”</span> to authenticate the email before submission.</li>
                            </ul>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold'>Both phone and email must be verified before submitting the setup.</p>
                        Click <span className='font-semibold'>Submit</span> once all fields are filled and verified to complete your store onboarding.
                    </div>
                </div>
            </div>

            {/* ---------- STEP 5: Acquirer Store Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 5: Acquirer Store Evaluation
                </h3>
                <p className='mb-4'>Once a store is submitted, it enters the <span className='font-semibold'>Pending Requests</span> stage for review and evaluation by the acquirer. The approval process ensures store legitimacy and compliance before activation.</p>

                <img src={Img5} alt='Step 5: Acquirer Store Evaluation' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <div className='mb-4'>
                        <span className='font-semibold'>Pending Requests Dashboard</span>
                        <p className='font-medium mt-5'>On the Pending Requests page, acquirers can,</p>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>View all outlet submissions categorized by their current status:
                                <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md'>
                                    <li>Awaiting Acquirer In Progress</li>
                                    <li>Awaiting Sripay In Progress</li>
                                    <li>Awaiting Alipay In Progress</li>
                                    <li>Rejected</li>
                                </ul>
                            </li>
                            <li>Track requests using columns for Store Name, ID, City, Status, and Submitted Date.</li>
                            <li>Use filters or search functionality to locate specific records.</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <span className='font-semibold'>Store Evaluation Panel</span>
                        <p>Clicking on the three dots <span className='font-semibold'>⋮</span> on request opens a detailed <span className='font-semibold'>Store Evaluation</span> view that includes:</p>
                        <ol className='list-decimal ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>
                                <span className='font-semibold'>Store Information</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>Store Name, Store ID, Email (with verification status)</li>
                                    <li>Website, QR Currency, Channel Fee, and Commission Rate</li>
                                    <li>Timestamps (Created At & Updated At)</li>
                                    <li>Current Status</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>Store Photos</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>Review uploaded Interior and Storefront photos to validate store presence.</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>Merchant Information</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>Merchant ID, Name, and Category (e.g., Retail, Restaurant)</li>
                                </ul>
                            </li>
                            <li>
                                <span className='font-semibold'>Contact Information</span>
                                <ul className='list-disc ml-6 sm:ml-8'>
                                    <li>Mobile Number (with verification status)</li>
                                    <li>SMS & Email Notification settings</li>
                                    <li>Website & Email notification settings</li>
                                    <li>Option to Set as Top Outlet (if applicable)</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 6: Approval Actions ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 6: Approval Actions
                </h3>
                <img src={Img6} alt='Sub-Acquirer Review and Decision: Approve' className="mx-auto my-6 block md:w-4/5" />
                <img src={Img7} alt='Sub-Acquirer Review and Decision: Reject' className="mx-auto my-6 block md:w-4/5" />

                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>Evaluators can take the following actions from the dropdown</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li><span className='font-semibold'>Send for Sripay Approval</span><br />Forwards the request to Sripay’s internal review team.</li>
                        <li><span className='font-semibold'>Reject</span><br />Declines the request with a confirmation prompt to prevent accidental action.</li>
                    </ul>
                    <p className='mb-2'>Each action triggers a <span className='font-semibold'>confirmation dialog</span> displaying:</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>Selected action</li>
                        <li>Request ID</li>
                        <li>Options to cancel or proceed</li>
                    </ul>
                    <p className='mb-2 italic'>Note: Once a request is sent to Sripay or rejected, its status updates in real time.</p>
                    <p>Click <span className='font-semibold'>Confirm</span> to finalize your selected action.</p>
                </div>
            </div>

            {/* ---------- STEP 7: SriPay Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 7: SriPay Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>If the Sub-Acquirer sends the application forward, it moves to the <span className='font-semibold'>SriPay Admin Panel</span> for a second-level review.</p>
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
                            <li>Sub-Acquirer is notified of SriPay’s decision</li>
                            <li>Merchant store remains in “SriPay In Progress” until final decision</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 8: Alipay Evaluation ---------- */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 8: Alipay Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p>If SriPay approves the application, it is submitted to <span className='font-semibold'>Alipay+ Team</span>. This includes an automatic or manual compliance check by Alipay.</p>
                    <div className='mb-4'>
                        <span className='font-semibold'>Alipay+ Admin can:</span>
                        <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-2'>
                            <li>Approve: Merchant store is now live for payment acceptance</li>
                            <li>Reject: Sent back with reason; Sub-Acquirer and SriPay are notified</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreCreate;
