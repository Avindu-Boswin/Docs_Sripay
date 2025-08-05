import React from 'react';
import { useTranslation } from 'react-i18next';

import Img1 from '../../assets/images/merchant/Img1.png';
import Img2 from '../../assets/images/merchant/Img2.png';
import Img3 from '../../assets/images/merchant/Img3.png';

function DevGettingStart() {
  const { t } = useTranslation();

  return (
    <div className='w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
        Getting Started Developer
      </h1>
    </div>
  );
}

export default DevGettingStart;
