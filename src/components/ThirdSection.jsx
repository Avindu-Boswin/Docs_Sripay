import React from 'react'
import Laptop from '../assets/Macbook-Air-docs.sripay.lk.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function ThirdSection() {


  const navigate = useNavigate();

    const { t } = useTranslation();
    return (
        <div className="px-4 sm:px-8 lg:px-[17%] w-full py-20">
  <div className="mx-auto flex flex-col items-center text-center">
    {/* Badge */}
    

    {/* Heading */}
    <h2 className="mt-2 text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.7rem] font-bold leading-[1.1] tracking-tight">
   {t('thirdsectiontitle')}
    </h2>
    <p className=" text-gray-600 text-base sm:text-lg leading-relaxed">
        {t('documentationIntro')}
            </p>

    {/* Image below */}
    <img
      src={Laptop}
      alt="SriPay Developer Docs Preview"
      className="mt-8 w-full max-w-[800px] h-auto drop-shadow-2xl rounded-xl "
      loading="lazy"
    />
  </div>
</div>

    )
}

export default ThirdSection