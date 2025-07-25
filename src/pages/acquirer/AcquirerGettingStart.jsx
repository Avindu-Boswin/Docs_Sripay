import React from 'react'
import { useTranslation } from 'react-i18next';

function AcquirerGettingStart() {
    const { t } = useTranslation();
    return (
        <div className='w-full px-4 sm:px-8  md:px-16 lg:px-[15%] xl:px-[25%] mt-10'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('acquirerGettingStart.title')}</h1>
            <span className='text-base sm:text-lg md:text-xl text-gray-600'>{t('acquirerGettingStart.intro')}<span className='text-blue-600 font-bold'>SriPay</span>{t('acquirerGettingStart.intro2')}</span>

            <div className='mt-8 mb-6'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700'>{t('acquirerGettingStart.step1Title')}</h3>
                <div className='ml-1 sm:ml-3 mt-7'>
                    <span className='font-semibold text-gray-600'>{t('acquirerGettingStart.step1EmailDesc')}</span> <span className='ml-2 text-sm text-gray-600'>{t('acquirerGettingStart.step1EmailSubject')}</span>
                    <div className='mt-5'>
                        <span className='font-semibold text-gray-600'>{t('acquirerGettingStart.step1Include')}</span>
                        <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mt-4 text-sm'>
                            <li className='p-1.5'>{t('acquirerGettingStart.step1List.0')}</li>
                            <li className='p-1.5'>{t('acquirerGettingStart.step1List.1')}</li>
                            <li className='p-1.5'>{t('acquirerGettingStart.step1List.2')}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-6 '>
                <h3 className='text-xl sm:text-2xl mb-9 font-semibold text-gray-700'>{t('acquirerGettingStart.step2Title')}</h3>
                <span className='text-gray-700'>{t('acquirerGettingStart.step2Desc')}</span>
                <div className='mt-6 ml-1 sm:ml-3'>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>{t('acquirerGettingStart.companyDetailsTitle')}</h4>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 text-sm'>
                        <li>{t('acquirerGettingStart.companyDetailsList.0')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.1')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.2')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.3')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.4')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.5')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.6')}</li>
                        <li>{t('acquirerGettingStart.companyDetailsList.7')}</li>
                        <li>
                            {t('acquirerGettingStart.companyDetailsList.8')}
                            <ul className='list-disc ml-6 sm:ml-8'>
                                <li>{t('acquirerGettingStart.mandatoryDocuments.0')}</li>
                                <li>{t('acquirerGettingStart.mandatoryDocuments.1')}</li>
                                <li>{t('acquirerGettingStart.mandatoryDocuments.2')}</li>
                            </ul>
                        </li>
                    </ul>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>{t('acquirerGettingStart.contactDetailsTitle')}</h4>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 text-sm'>
                        <li>{t('acquirerGettingStart.contactDetailsList.0')}</li>
                        <li>{t('acquirerGettingStart.contactDetailsList.1')}</li>
                        <li>{t('acquirerGettingStart.contactDetailsList.2')}</li>
                        <li>{t('acquirerGettingStart.contactDetailsList.3')}</li>
                        <li>{t('acquirerGettingStart.contactDetailsList.4')}</li>
                    </ul>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>{t('acquirerGettingStart.financialDetailsTitle')}</h4>
                    <span className='text-gray-600'>{t('acquirerGettingStart.financialDetailsDesc')}</span>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-4 mt-2 text-sm'>
                        <li>{t('acquirerGettingStart.financialDetailsList.0')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.1')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.2')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.3')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.4')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.5')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.6')}</li>
                        <li>{t('acquirerGettingStart.financialDetailsList.7')}</li>
                    </ul>
                    <span className='text-xs text-gray-500 block mb-4'>{t('acquirerGettingStart.financialNote')}</span>
                    <h4 className='text-base sm:text-lg font-semibold text-gray-700 mb-2'>{t('acquirerGettingStart.loginCredentialsTitle')}</h4>
                    <span className='text-gray-600'>{t('acquirerGettingStart.loginCredentialsDesc')}</span>
                    <ul className='list-disc text-gray-700 ml-6 sm:ml-8 mb-2 mt-2 text-sm'>
                        <li>{t('acquirerGettingStart.loginCredentialsList.0')}</li>
                        <li>{t('acquirerGettingStart.loginCredentialsList.1')}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AcquirerGettingStart