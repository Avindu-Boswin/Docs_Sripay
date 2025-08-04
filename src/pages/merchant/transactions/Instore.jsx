import React from 'react'
import Img2 from '../../../assets/images/merchant/Img19.png';
import Img3 from '../../../assets/images/merchant/Img20.png';
import Img4 from '../../../assets/images/merchant/Img21.png';
import Img5 from '../../../assets/images/merchant/Img22.png';

function Instore() {
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10 mb-16'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6'>
                Alipay + Instore
            </h1>
            <span className='mt-8 text- text-gray-700  text-2xl '>Initiate Secure Transaction</span>

            <img src={Img2} alt='Step 5: Acquirer Store Evaluation' className="mx-auto my-6 block md:w-4/5" />
            <span> Select Payment Method</span>
            <img src={Img3} alt='Step 5: Acquirer Store Evaluation' className="mx-auto my-6 block md:w-4/5" />
            <span> Enter the order value</span>
            <img src={Img4} alt='Step 5: Acquirer Store Evaluation' className="mx-auto my-6 block md:w-4/5" />

        </div>
    )
}

export default Instore