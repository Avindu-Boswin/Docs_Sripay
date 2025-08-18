import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Agreement from './Agreement';
import AcquirerAgreement from './AcquirerAgreement';

const AgreementType = () => {
    const { t } = useTranslation();
    const [selectedType, setSelectedType] = useState('acquirer');

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0 md:pt-20 mb-20 md:mb-15">
            {/* Agreement Type Selector */}
            <div className="mb-8">
                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => handleTypeChange('acquirer')}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedType === 'acquirer'
                                ? 'bg-[#000D7A] text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {t('Acquirer Agreement') || 'Acquirer Agreement'}
                    </button>
                    <button
                        onClick={() => handleTypeChange('merchant')}
                        className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedType === 'merchant'
                                ? 'bg-[#000D7A] text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {t('Merchant Agreement') || 'Merchant Agreement'}
                    </button>

                </div>
            </div>

            {/* Content Rendering Area */}
            <div className="agreement-content">
                {selectedType === 'merchant' && <Agreement />}
                {selectedType === 'acquirer' && <AcquirerAgreement/>}
            </div>
        </div>
    );
};

export default AgreementType;