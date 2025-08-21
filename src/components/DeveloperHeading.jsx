import React from 'react';
import MobilePhone from '../assets/iPhone-14-Plus-docs.sripay.lk.png';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function DeveloperHeading() {
  const { t } = useTranslation();
    const navigate = useNavigate();

    const handleLinkClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    const handleClick =()=>{
        navigate('/docs/developer/gettingstart');
        handleLinkClick();
    }
    return (
        <div className=" sm:px-8 lg:px-[20%] w-full py-10 ">
            <div className="flex  flex-col md:flex-row items-center justify-between gap-8">

                {/* Left side - Details */}
                <div className="w-full md:w-[80%] text-center px-10 items-center md:text-left">
                    <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.7rem] font-bold mb-4  ">
                       {t('developerheading')}
                    </h1>

                    <p className="text-gray-600  mb-6 text-lg   ">
                       { t('developersectiondiscription')}
                    </p>
                    <button  onClick={handleClick}  className="px-6 py-2 border text-blue-700 mx-auto border-blue-700 rounded-full hover:bg-blue-300 transition">
                        See More          </button>
                </div>

                {/* Right side - Mobile Image */}
      
                    <img
                        src={MobilePhone}
                        alt="mobile"
                        className="  h-[550px]"
                    />
               

            </div>
        </div>
    );
}

export default DeveloperHeading;
