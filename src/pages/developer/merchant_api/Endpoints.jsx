import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import 'react-medium-image-zoom/dist/styles.css';

function MerchantEndpoints() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP-LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantEndpoints.title')}
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                {t('merchantEndpoints.desc')}
            </p>

            <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                <li>
                    <span className="font-semibold">{t('merchantEndpoints.sections.instore')}</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>{t('merchantEndpoints.sections.instore_items.orderCodePay')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.orderCodeListener')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.userPresentPay')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.userPresentPayWaiting')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.voidTransactions')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.inquiry')}</li>
                        <li>{t('merchantEndpoints.sections.instore_items.notSettled')}</li>
                    </ol>
                </li>

                <li>
                    <span className="font-semibold">{t('merchantEndpoints.sections.merchantWeb')}</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>{t('merchantEndpoints.sections.merchantWeb_items.paymentRequest')}</li>
                    </ol>
                </li>

                <li>
                    <span className="font-semibold">{t('merchantEndpoints.sections.online')}</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>{t('merchantEndpoints.sections.online_items.paymentLinkCreate')}</li>
                        <li>{t('merchantEndpoints.sections.online_items.paymentInquiry')}</li>
                    </ol>
                </li>

                <li>
                    <span className="font-semibold">{t('merchantEndpoints.sections.card')}</span>
                    <ol className="list-[lower-alpha] pl-6 space-y-1 mt-2">
                        <li>{t('merchantEndpoints.sections.card_items.paymentLinkCreate')}</li>
                        <li>{t('merchantEndpoints.sections.card_items.paymentInquiry')}</li>
                    </ol>
                </li>
            </ol>
        </div>
    )
}

export default MerchantEndpoints;
