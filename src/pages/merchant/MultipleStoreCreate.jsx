import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/store-creation/img1.png';
import Img2 from '../../assets/images/merchant/store-creation/img6.png';
import Img3 from '../../assets/images/merchant/store-creation/img7.png';
import Img4 from '../../assets/images/merchant/store-creation/img8.png';
import Img5 from '../../assets/images/merchant/store-creation/img9.png'

function MerchantMultipleStore() {
    const { setSections } = useSections();

    // Section titles for right side menu (remove "Step X:" or similar prefixes)
    const rawTitles = [
        "Navigate to Multiple Store Creation",
        "Multiple Stores Option",
        "Understand the Upload Model",
        "Download & Fill the Sample Excel",
        "Upload and Validate the Excel File",
        "Upload Progress",
        "Store Evaluation Procedure",
        "Troubleshooting"
    ];
    const sectionTitles = rawTitles.map(title =>
        title.replace(/^Step\s*\d+[:：]?\s*/i, "").trim()
    );

    useEffect(() => {
        setSections(
            sectionTitles.map((title, idx) => ({
                id: `step${idx + 1}`,
                label: title
            }))
        );
        return () => setSections([]);
    }, [setSections, ...sectionTitles]);

    return (
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
          
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">Multiple Store Creation</h1>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700">Creation Workflow</h3>
            <span className="text-base sm:text-base md:text-base text-gray-600">This feature allows Merchants to create multiple stores simultaneously using a predefined Excel template.</span>

            <div id="step1" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 1: Navigate to Stores Tab
                </h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Go to the Stores section from the Top Navigation Bar.</li>
                    <li>Click the Create Store button.</li>
                </ol>
                <img src={Img1} alt='Step 1: Navigate to Stores Tab' className="mx-auto my-6 block md:w-4/5" />
            </div>

           
            <div id="step2" className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Step 2: Select Multiple Store Option
                </h3>
                <img src={Img2} alt='Step 2: Select Multiple Store Option' className="mx-auto my-6 block md:w-4/5" />
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>You'll see 2 options for store creation.</p>
                    <ul className='list-disc ml-6 sm:ml-8 text-gray-700 text-md mb-4'>
                        <li>Single Store – This option is to create a single store.</li>
                        <li>Multiple Stores – This option is to create multiple stores at once.</li>
                    </ul>
                    <p className='text-gray-700 text-md'>From there pick the Multiple Store option and click Next button</p>
                </div>
            </div>

           
            <div id="step3" className="mt-8 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">Step 3: Understand the Upload Model</h3>
                <img src={Img3} alt="Understand the Upload Model" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <div className="ml-1 sm:ml-3 mt-7">
                    <div className="mt-5">
                        <span className="font-semibold text-gray-600">The model includes</span>
                        <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm">
                            <li className="p-1.5">Excel File Upload Area – drag/drop or browse to upload.</li>
                            <li className="p-1.5">Download Sample Excel – click this to get the correct format.</li>
                            <li className="p-1.5">Important Note – file must be .xlsx, and all images/documents must be preuploaded.</li>
                        </ul>
                    </div>
                </div>
            </div>

       
            <div id="step4" className="mt-8 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">Step 4: Download & Fill the Sample Excel</h3>
                <div className="ml-1 sm:ml-3 mt-7">
                    <ol className="list-decimal text-gray-700 ml-6 sm:ml-8 mt-4 text-sm space-y-3">
                        <li>Click "Download Sample Excel" to get the correct format.</li>
                        <li>
                            <span className="font-semibold">Important Rules to follow when filling the excel file:</span>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Do not rename headers.</li>
                                <li>Do not remove any column.</li>
                                <li>Every row must contain valid entries for all columns.</li>
                                <li>Email must be unique and properly formatted.</li>
                                <li>Mobile number must follow a valid format (+94).</li>
                                <li>Ensure that all uploaded document URLs are publicly accessible to anyone with the link.</li>
                                <li>Since the store evaluation process involves multiple layers (Sub-Acquirer, SriPay, and Alipay), granting access restricted to a specific party would not be practical. Therefore, all uploaded document URLs should be publicly accessible to ensure seamless review across all approval stages.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            <div id="step5" className="mt-8 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">Step 5: Upload and Validate the Excel File</h3>
                <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm">
                    <li>Click the upload box or drag your completed .xlsx file into it.</li>
                </ul>
                <div className="hidden sm:block w-full mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm border border-gray-300">
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">Validation Type</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 sm:border-r border-gray-300 px-3 py-2">What It Checks</div>
                        <div className="bg-gray-100 font-semibold text-gray-700 border-b sm:border-b-0 border-gray-300 px-3 py-2">Error Example on UI</div>

                        <div className="border-t border-gray-300 px-3 py-2">File Format</div>
                        <div className="border-t border-gray-300 px-3 py-2">Only .xlsx accepted</div>
                        <div className="border-t border-gray-300 px-3 py-2">Invalid file type</div>

                        <div className="border-t border-gray-300 px-3 py-2">Column Headers</div>
                        <div className="border-t border-gray-300 px-3 py-2">Exact match with template</div>
                        <div className="border-t border-gray-300 px-3 py-2">Column headers in sheet "Merchant" were modified...</div>

                        <div className="border-t border-gray-300 px-3 py-2">Required Fields</div>
                        <div className="border-t border-gray-300 px-3 py-2">No blank Store Name, Email, etc.</div>
                        <div className="border-t border-gray-300 px-3 py-2">Row 2: missing value for Store Name</div>
                 </div>
                </div>
                <div className="mt-6">
                    <span className="font-semibold text-gray-700">If validation fails</span>
                    <ul className="list-disc ml-6 mt-2 text-sm text-gray-700">
                        <li>A red error modal will appear showing the exact issue.</li>
                        <li>Click "OK", fix the Excel file, and re-upload.</li>
                    </ul>
                </div>
                <img src={Img4} alt="Validation UI" className="mx-auto mb-8 my-6 block md:w-4/5" />
            </div>

            <div id="step6" className="mt-8 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">Step 6: Upload Progress</h3>
                <img src={Img5} alt="Upload Progress" className="mx-auto mb-8 my-6 block md:w-4/5" />
                <span className="font-semibold text-gray-700">If the file passes validation</span>
                <div className="ml-1 sm:ml-3 mt-7">
                    <div className="mt-5">
                        <ul className="list-disc text-gray-700 ml-6 sm:ml-8 mt-2 text-sm">
                            <li className="p-1.5">You will see the message: "Uploading Stores.... or something similar"</li>
                            <li className="p-1.5">Wait until the process completes and the modal closes.</li>
                        </ul>
                    </div>
                </div>
            </div>

           
            <div id="step7" className='mt-10 mb-10'>
                <h3 className='text-2xl sm:text-3xl font-bold text-gray-700 mb-5'>
                    Store Evaluation Procedure
                </h3>
            </div>

          
            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>
                    Acquirer Evaluation
                </h3>
                <div className='mt-8 text-base text-gray-700'>
                    <p className='mb-4'>Once a store is submitted, it enters the Pending Requests stage for review and evaluation by the acquirer. The approval process ensures store legitimacy and compliance before activation.</p>
                </div>
            </div>

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

            <div id="step8" className="mt-16">
                <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
                    <div className="flex items-center mb-6">
                        <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" /></svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">Troubleshooting</h2>
                    </div>
                    <ul className="space-y-7 text-sm">
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>My Excel file upload fails or is rejected.</div>
                            <div className="text-blue-800 ml-5">Ensure you are using the latest template provided by the system. Double-check that all required columns are present and that there are no empty mandatory fields. Remove any custom extra formatting or merged cells.</div>
                        </li>
                        <li className="pl-2">
                            <div className="font-medium text-blue-900 mb-1 flex items-center"><span className="mr-2">•</span>I get a "format error" or "invalid data" message.</div>
                            <div className="text-blue-800 ml-5">Make sure all fields follow the required format (e.g., phone numbers, emails, IDs). Refer to the rules and examples shown above for each column.</div>
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

export default MerchantMultipleStore;