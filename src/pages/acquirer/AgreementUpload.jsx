import React from 'react';
import Agreement from '../../assets/images/acquirer/img309.jpg';

function AgreementUpload() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        Uploading Merchant Agreements
      </h1>

      <p className="text-gray-800 text-sm sm:text-base mb-4">
        Sub-Acquirers must upload merchant agreements before a merchant can proceed.
      </p>

      <ul className="list-disc list-inside space-y-3 text-gray-800 px-4 sm:px-5 py-4 text-sm sm:text-base leading-relaxed">
        <li>Click Agreement from the merchant’s action menu</li>
        <li>
          A model appears displaying already uploaded files and a button to Select PDF or Image
        </li>
        <img
          src={Agreement}
          alt="Agreement Upload"
          className="w-full md:w-4/5 mx-auto my-5 rounded-md py-3 shadow "
        />
      </ul>

      <p className="font-semibold text-gray-700 mt-6 mb-2">Key Points:</p>

      <ul className="list-disc list-inside space-y-3 text-gray-800 px-4 sm:px-5 py-3 text-sm sm:text-base leading-relaxed">
        <li>
          You can upload up to <span className="font-semibold">5 agreement files</span>
        </li>
        <li>
          Uploaded files <span className="font-semibold">cannot be deleted</span>
        </li>
        <li>
          Files must be in <span className="font-semibold">PDF or image</span> format
        </li>
        <li>
          Merchants can <span className="font-semibold">view uploaded agreements</span> in their own portal
        </li>
      </ul>

      <p className="text-gray-800 text-sm sm:text-base mt-2">
        This ensures transparency and legal compliance between SriPay, the Acquirer, and the merchant.
      </p>
    </div>
  );
}

export default AgreementUpload;
