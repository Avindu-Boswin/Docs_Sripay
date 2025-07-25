import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/acquirer/img281.jpg'
import Img2 from '../../assets/images/acquirer/img283.jpg'
import Img3 from '../../assets/images/acquirer/img286.jpg'
import Img4 from '../../assets/images/acquirer/img288.jpg'
import Img5 from '../../assets/images/acquirer/img290.jpg'

function MerchantRegistrationWorkflow() {
    const { t } = useTranslation();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Merchant Bulk Registration</h1>
            <h3 className='text-xl sm:text-2xl font-semibold text-gray-700'>Registration Workflow</h3>
            <span className='text-base sm:text-lg md:text-xl text-gray-600'>This feature allows Sub-Acquirers to onboard multiple merchants simultaneously using a
                predefined Excel template.</span>

            {/* ---------- STEP 1 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 1: Navigate to Bulk Registration area</h3>
                <img src={Img1} alt="Merchant Basic Details" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                            <li className='p-1.5'>Click the “Multiple Merchants” button located next to “Create Merchant”.</li>
                            <li className='p-1.5'>A model titled “Create new merchants” will open.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 2 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 2: Understand the Upload Model</h3>
                <img src={Img2} alt="Merchant Basic Details" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <span className='font-semibold text-gray-600'>The model includes</span>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                            <li className='p-1.5'>Excel File Upload Area – drag/drop or browse to upload.</li>
                            <li className='p-1.5'>Download Sample Excel – click this to get the correct format.</li>
                            <li className='p-1.5'>Important Note – file must be <b>.xlsx</b>, and all images/documents must be preuploaded.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 3 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 3: Download & Fill the Sample Excel</h3>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <ol className='list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3'>
                        <li>
                            Click <span className='font-semibold'>“Download Sample Excel”</span> to get the correct format.
                        </li>
                        <li>
                            <span className='font-semibold'>Important Rules</span> to follow when filling the excel file:
                            <ul className='list-disc ml-6 mt-2 space-y-1'>
                                <li><span className='font-semibold'>Do not</span> rename headers.</li>
                                <li><span className='font-semibold'>Do not</span> remove any column.</li>
                                <li>Every row must contain valid entries for all columns.</li>
                                <li>Email must be unique and properly formatted.</li>
                                <li>Mobile number must follow a valid format (+94).</li>
                                <li>
                                    Ensure that all uploaded <span className='font-semibold'>document URLs</span> are publicly <span className='font-semibold'>accessible to anyone with the link</span>.<br />
                                    <span className='text-xs text-gray-600'>
                                        Since the merchant evaluation process involves multiple layers (Sub-Acquirer, SriPay, and Alipay), granting access restricted to a specific party would not be practical. Therefore, all uploaded document URLs should be publicly accessible to ensure seamless review across all approval stages.
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            {/* ---------- STEP 4 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 4: Upload and Validate the Excel File</h3>
                <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                    <li>Click the upload box or drag your completed <b>.xlsx</b> file into it.</li>
                </ul>
                <div className="hidden sm:block w-full mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm border border-gray-300">
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">Validation Type</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">What It Checks</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 border-gray-300 px-3 py-2">Error Example on UI</div>

                        <div className="border-t border-gray-300 px-3 py-2">File Format</div>
                        <div className="border-t border-gray-300 px-3 py-2">Only .xlsx accepted</div>
                        <div className="border-t border-gray-300 px-3 py-2">“Invalid file type”</div>

                        <div className="border-t border-gray-300 px-3 py-2">Column Headers</div>
                        <div className="border-t border-gray-300 px-3 py-2">Exact match with template</div>
                        <div className="border-t border-gray-300 px-3 py-2">“Column headers in sheet ‘Merchant’ were modified...”</div>

                        <div className="border-t border-gray-300 px-3 py-2">Required Fields</div>
                        <div className="border-t border-gray-300 px-3 py-2">No blank First Name, Email, etc.</div>
                        <div className="border-t border-gray-300 px-3 py-2">“Row 2: missing value for First Name”</div>

                        <div className="border-t border-gray-300 px-3 py-2">Structure</div>
                        <div className="border-t border-gray-300 px-3 py-2">Sheet name must be "Merchant"</div>
                        <div className="border-t border-gray-300 px-3 py-2">“Excel file does not match the Sripay template”</div>
                    </div>
                </div>
                <div className="mt-6">
                    <span className="font-semibold text-gray-700">If validation fails</span>
                    <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                        <li>A red error model will appear showing the exact issue.</li>
                        <li>Click “OK”, fix the Excel file, and re-upload.</li>
                    </ul>
                </div>
                <img src={Img3} alt="Validation UI" className="mx-auto mb-8 my-6 block md:w-4/5" />
            </div>

            {/* ---------- STEP 5 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 5: Upload Progress</h3>
                <img src={Img4} alt="Merchant Basic Details" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <span className="font-semibold text-gray-700">If the file passes validation</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm'>
                            <li className='p-1.5'>You will see the message: “Uploading merchants…”</li>
                            <li className='p-1.5'>Wait until the process completes and the model closes.</li>

                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 6 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 6: View New Merchants in Table</h3>
                <img src={Img5} alt="Step 6: View New Merchants in Table" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <span className="font-semibold text-gray-700 text-lg">Newly uploaded merchants appear in the main table with</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <div className='mt-5'>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm'>
                            <li className='p-1.5'>Status: acquirer-in-progress</li>
                            <li className='p-1.5'>Unique Merchant IDs</li>
                            <li className='p-1.5'>Email addresses and other details as per Excel</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ---------- STEP 7 ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>Step 7: Proceed with Standard Evaluation Process</h3>
                <span className="font-semibold text-gray-700 text-lg">Each newly added merchant will</span>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <ol className='list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3'>
                        <li>Appear in the merchant list.</li>
                        <li>
                            Require:
                            <ul className='list-disc ml-6 mt-2'>
                                <li>KYC Information</li>
                                <li>Document Uploads</li>
                                <li>Review &amp; Submit</li>
                            </ul>
                        </li>
                        <li>
                            Flow through the stages <span className="font-semibold">Acquirer In Progress</span> &rarr; <span className="font-semibold">Sripay In Progress</span> &rarr; <span className="font-semibold">Alipay-In Progress</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default MerchantRegistrationWorkflow;
