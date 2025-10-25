import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../../components/SectionContext';
import M53 from '../../../assets/images/merchant-app/m53.jpg';
import M54 from '../../../assets/images/merchant-app/m54.jpg';
import M55 from '../../../assets/images/merchant-app/m55.jpg';
import M56 from '../../../assets/images/merchant-app/m56.jpg';
import M57 from '../../../assets/images/merchant-app/m57.jpg';
import M58 from '../../../assets/images/merchant-app/m58.jpg';



function MerchantMobileStoreUserOnlineTransactions() {
    const { t } = useTranslation();
    const { setSections } = useSections();

    useEffect(() => {
        setSections([
            { id: 'process', label: 'Payment Process' },
        ]);
        return () => setSections([]);
    }, [setSections, t]);

    return (
        <div id="process" className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Online-Store Transactions
            </h1>


            <div className='mt-8 mb-12'>
                <h2 className='text-xl sm:text-2xl mb-4 font-semibold text-gray-700'>
                    Payment Process
                </h2>
                <p className='text-gray-700 mb-2'><strong>Payment Method - </strong>Select the payment method and click <strong>"Continue"</strong>.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M53} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>Amount Entry - </strong>Add the amount and click <strong>"Next"</strong>.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M54} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>Details Entry - </strong>Enter terminal, select wallet (optional), and choose Web or Mobile, then click <strong>"Next"</strong>.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M55} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M56} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                <p className='text-gray-700 mb-2'><strong>Confirm Payment - </strong>Confirm to create the transaction.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M57} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
                                <p className='text-gray-700 mb-2'><strong>Perform Payment - </strong>Then you'll redirect to the payment page. There you can find the payment link.</p>
                <div className="my-6 flex flex-wrap gap-4 items-center justify-center">
                    <img src={M58} alt="process example" className="w-60 md:w-72 rounded-lg shadow-sm" />
                </div>
            </div>
        </div>
    );
}

export default MerchantMobileStoreUserOnlineTransactions;