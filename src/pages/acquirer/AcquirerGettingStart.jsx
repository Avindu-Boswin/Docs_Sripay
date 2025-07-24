import React from 'react'

function AcquirerGettingStart() {
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[15%] xl:px-[25%] py-7'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Getting Started</h1>
            <span className='text-base sm:text-lg md:text-xl text-gray-600'>To become a Sub-Acquirer in the <span className='text-blue-600 font-bold'>SriPay</span> system, please follow these two main steps:</span>

            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700'>Step 1 : Send a Request Email</h3>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <span className='font-semibold text-gray-600'>Email us at with the subject :</span> <span className='ml-2 text-sm text-gray-600'>Request to Create Sub-Acquirer Account </span>
                    <div className='mt-5'>
                        <span className='font-semibold text-gray-600'>In the email, please include:</span>
                        <ul className='list-disc text-gray-600 ml-6 sm:ml-12 mt-3 text-sm'>
                            <li className='p-1.5'>Your Company Name</li>
                            <li className='p-1.5'>Contact person name and phone number </li>
                            <li className='p-1.5'>A brief statement requesting access to create a Sub-Acquirer account on SriPay</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-6 '>
                <h3 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>Step 2: Provide Required Information </h3>
                <span className='text-gray-700'>Once we acknowledge your request, you’ll be asked to submit the following details:</span>
                <div className='mt-6 ml-1 sm:ml-3'>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>1. Company Details</h4>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 text-sm'>
                        <li>Company Name</li>
                        <li>Company Type</li>
                        <li>Registration Number <span className='text-gray-500'>(optional)</span></li>
                        <li>VAT Number <span className='text-gray-500'>(optional)</span></li>
                        <li>Country</li>
                        <li>SMS Mask <span className='text-gray-500'>(optional)</span></li>
                        <li>Settlement Type <span className='text-gray-500'>(default: Acquirer Manual)</span></li>
                        <li>Primary and Secondary Colors for theming</li>
                        <li>Mandatory Documents:
                            <ul className='list-disc ml-6 sm:ml-8'>
                                <li>Business License</li>
                                <li>Agreement</li>
                                <li>Company Logo (Light & Dark versions)</li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>2. Contact Details</h4>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 text-sm'>
                        <li>Email Address</li>
                        <li>Primary Phone</li>
                        <li>Secondary Phone <span className='text-gray-500'>(optional)</span></li>
                        <li>Website URL</li>
                        <li>Full Business Address</li>
                    </ul>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>3. Financial Details</h4>
                    <span className='text-gray-600'>You must provide both USD and LKR bank details. For each account, provide:</span>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
                        <li>Bank Name</li>
                        <li>Bank Code</li>
                        <li>SWIFT/BIC Code</li>
                        <li>Account Number</li>
                        <li>Account Holder Name</li>
                        <li>Branch Name</li>
                        <li>Branch Code</li>
                        <li>Street, City, and Postal Code</li>
                    </ul>
                    <span className='text-xs text-gray-500 block mb-4'>Note: All banking data is encrypted and must match company registration documents.</span>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>4. Login Credentials</h4>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-2'>
                        <li>Master email address (for login)</li>
                        <li>A temporary password will be issued at account creation, which you may reset upon first login.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AcquirerGettingStart