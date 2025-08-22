import React, { useEffect } from 'react';
import Img1 from '../../assets/images/merchant/Img16.png';
import Img2 from '../../assets/images/merchant/Img17.png';
import Img3 from '../../assets/images/merchant/Img18.png';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function StoreUsersAssign() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- invoke with namespace

  useEffect(() => {
    setSections([
      { id: 'step-1', label: t('storeusersassign.menu.add') },
      { id: 'step-2', label: t('storeusersassign.menu.deactivate') }
    ]);
    return () => setSections([]);
  }, [setSections, t]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-10 mb-16">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-6">
        {t('storeusersassign.title')}
      </h1>

      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
        {t('storeusersassign.intro')}
      </p>

      <h3 id="step-1" className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 mb-4">
        {t('storeusersassign.stepsTitle')}
      </h3>

      <div className="py-5">
        <p className="text-sm sm:text-base text-gray-700 mb-10">
          <strong>{t('storeusersassign.menu.add')}:</strong> {t('storeusersassign.step1')}
        </p>
        <img
          src={Img1}
          alt={t('storeusersassign.alts.nav')}
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>

      <div className="py-5">
        <p className="text-sm sm:text-base text-gray-700 mb-10">
          {t('storeusersassign.step2')}
        </p>
        <img
          src={Img2}
          alt={t('storeusersassign.alts.form')}
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>

      <div id="step-2" className="py-3">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-10">
          {t('storeusersassign.manage')}
        </p>
        <img
          src={Img3}
          alt={t('storeusersassign.alts.edit')}
          className="w-full md:w-4/5 mx-auto rounded-md shadow mb-6"
        />
      </div>
    </div>
  );
}

export default StoreUsersAssign;
