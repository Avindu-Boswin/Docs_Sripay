import React from 'react';
import { Link } from 'react-router-dom';
import Document_Image from '../assets/documents.svg'
import { useTranslation } from 'react-i18next';


const DocumentationHero = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0 md:pt-20">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{t('doc')}</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          {t('subtitle')}
        </p>
        
        {/* Placeholder for the photo */}
        <div className="flex justify-center mb-10 md:mb-20">
          <img src={Document_Image} alt="Documentation" className="h-36 md:h-64 w-auto" />
        </div>

        {/* Role selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {['acquirer', 'merchant', 'developer'].map((roleKey) => (
            <Link
              key={roleKey}
              to={`/docs/${roleKey}/introduction`}
              className="bg-[#000D7A] p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center group transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-[#001AAB] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <div className="flex flex-col items-center mb-1 md:mb-2">
                {/* icon placeholder if needed */}
                <h3 className="text-base md:text-xl font-bold text-white mb-1 group-hover:text-white transition-colors duration-200">{t(`roles.${roleKey}.title`)}</h3>
              </div>
              <p className="text-white text-xs md:text-sm font-light">{t(`roles.${roleKey}.desc`)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationHero;