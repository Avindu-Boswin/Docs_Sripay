import React from 'react'

function Troubleshooting() {
    return (
        <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
                Troubleshooting
            </h1>

            <span className='text-gray-700 tex-base'>If you encounter issues during the merchant onboarding or bulk registration process,
            consider the following resolutions:</span>

 {/* Excel Upload Errors */}
 <div className="mb-6 px-5 mt-5 text-gray-700">
        <h3 className="text-lg font-semibold mb-3">• Excel Upload Errors</h3>
        <ul className="space-y-4  list-disc pl-9  ">
          <li className='py-2'>
            <span className="italic ">Issue:</span> “Invalid file type”<br />
            <span className="font-medium ">Solution:</span> Ensure the file is in <code>.xlsx</code> format. <code>.xls</code>, <code>.csv</code>, or <code>.ods</code> are not accepted.
          </li>
          <li className='py-2'>
            <span className="italic">Issue:</span> “Column headers in sheet ‘Merchant’ were modified”<br />
            <span className="font-medium">Solution:</span> Do not rename, remove, or reorder any column headers in the sample Excel.
          </li>
          <li className='py-2'>
            <span className="italic">Issue:</span> “Missing value for [Field]”<br />
            <span className="font-medium">Solution:</span> Every row must contain data for all required fields—especially email, mobile, and registration details.
          </li>
          <li className='py-2'>
            <span className="italic">Issue:</span> “Excel file does not match the SriPay template”<br />
            <span className="font-medium">Solution:</span> Download the latest sample Excel from the platform and follow the format exactly.
          </li>
        </ul>
      </div>

            <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">• Uploaded Document Issues</h3>
        <p className="pl-9 text-gray-700">
          <span className="italic">Issue:</span> Reviewer cannot access uploaded files<br />
          <span className="font-medium">Solution:</span> Ensure all document URLs are set to
          <span className=" font-semibold"> “Anyone with the link can view” </span>
          before submitting. This allows all reviewers (Sub-Acquirer → SriPay → Alipay) to access them.
        </p>
      </div>

      {/* KYC Rejections */}
      <div>
        <h3 className="text-lg font-semibold mb-3">• KYC Rejections</h3>
        <p className="pl-9 mb-2 text-gray-700">Common Reasons:</p>
        <ul className="pl-[5%] list-[square] text-sm sm:text-base text-gray-700 space-y-2">
          <li className='py-1.5'>Mismatched registration details and document names</li>
          <li className='py-1.5'>Invalid or incomplete contact information</li>
          <li className='py-1.5'>Poor-quality or incorrect document uploads</li>
        </ul>
        <p className="pl-5 mt-3 text-gray-700">
          <span className="font-medium">Solution:</span> Double-check all entries and uploaded documents before submission.
        </p>
      </div> 

        </div>
    )
}

export default Troubleshooting