import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M4 from '../../../assets/images/merchant-app/m4.jpg';
import M5 from '../../../assets/images/merchant-app/m5.jpg';
import M6 from '../../../assets/images/merchant-app/m6.jpg';
import M7 from '../../../assets/images/merchant-app/m7.jpg';
import M8 from '../../../assets/images/merchant-app/m8.jpg';
import M9 from '../../../assets/images/merchant-app/m9.jpg';
import M10 from '../../../assets/images/merchant-app/m10.jpg';


function MerchantMobileMerchantInstoreTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'payment-method-selection', label: t('merchantInstoreTransactions.sections.paymentMethodSelection') },
            { id: 'alipay-payment-method', label: t('merchantInstoreTransactions.sections.alipayPaymentMethod') },
            { id: 'qr-scanner', label: t('merchantInstoreTransactions.sections.qrScanPaymentMethod') },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                {t('merchantInstoreTransactions.title')}
            </h1>

            <div id="payment-method-selection" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantInstoreTransactions.paymentMethodSelection.title')}
                </h2>

                <p className='text-gray-700 text-base leading-relaxed mb-4'>
                    {t('merchantInstoreTransactions.paymentMethodSelection.description')}
                </p>

                <h3 className='text-lg font-semibold text-gray-700 mb-3'>{t('merchantInstoreTransactions.paymentMethodSelection.optionsTitle')}</h3>
                <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                    <li>
                        <strong>{t('merchantInstoreTransactions.paymentMethodSelection.alipayLabel')} </strong> {t('merchantInstoreTransactions.paymentMethodSelection.alipayText')}
                    </li>
                    <li>
                        <strong>{t('merchantInstoreTransactions.paymentMethodSelection.qrScannerLabel')} </strong> {t('merchantInstoreTransactions.paymentMethodSelection.qrScannerText')}
                    </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M4} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>

            {/* ALIPAY PAYMENT METHOD */}
            <div id="alipay-payment-method" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantInstoreTransactions.alipayPaymentMethod.title')}
                </h2>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M5} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                {/* Order Value Section */}
                <div id="order-value" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>{t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.title')}</h3>
                    <p className='text-gray-700 mb-3'>
                        {t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.description')}
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.currencyLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.currencyText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.amountLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.amountText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.buttonLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.orderValue.buttonText')}</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M6} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                {/* Payment QR Code Section */}
                <div id="payment-qr" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>{t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.title')}</h3>
                    <p className='text-gray-700 mb-3'>
                        {t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.description')}
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.scanLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.scanText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.cancelLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.cancelText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.shareLabel')} </strong> {t('merchantInstoreTransactions.alipayPaymentMethod.paymentQR.shareText')}</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M7} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

            </div>


            {/* QR SCANNER */}
            <div id="qr-scanner" className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    {t('merchantInstoreTransactions.qrScanner.title')}
                </h2>
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M8} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>

                {/* QR Order Value Page */}
                <div id="qr-order-value" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>{t('merchantInstoreTransactions.qrScanner.orderValue.title')}</h3>
                    <p className='text-gray-700 mb-3'>
                        {t('merchantInstoreTransactions.qrScanner.orderValue.description')}
                    </p>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('merchantInstoreTransactions.qrScanner.orderValue.currencyLabel')} </strong> {t('merchantInstoreTransactions.qrScanner.orderValue.currencyText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.qrScanner.orderValue.amountLabel')} </strong> {t('merchantInstoreTransactions.qrScanner.orderValue.amountText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.qrScanner.orderValue.buttonLabel')} </strong> {t('merchantInstoreTransactions.qrScanner.orderValue.buttonText')}</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M9} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

                {/* Payment Processing */}
                <div id="qr-processing" className='mt-4 mb-6'>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>{t('merchantInstoreTransactions.qrScanner.processing.title')}</h3>
                    <ul className='list-disc pl-6 space-y-2 text-gray-700'>
                        <li><strong>{t('merchantInstoreTransactions.qrScanner.processing.scanningLabel')} </strong> {t('merchantInstoreTransactions.qrScanner.processing.scanningText')}</li>
                        <li><strong>{t('merchantInstoreTransactions.qrScanner.processing.successLabel')} </strong> {t('merchantInstoreTransactions.qrScanner.processing.successText')}</li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <img src={M10} alt="transactions example 1" className="w-60 md:w-72 rounded-lg shadow-sm" />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MerchantMobileMerchantInstoreTransactions;