import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

function SystemIntroduction() {
  const { t } = useTranslation('merchant'); // use the 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([{ id: 'intro', label: t('systemintro.title') }]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* TOP-LEVEL TITLE */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('systemintro.title')}
      </h1>

      <div id="intro" className="text-gray-700 text-base leading-relaxed space-y-8">
        <p>{t('systemintro.p1')}</p>
        <p>{t('systemintro.p2')}</p>
        <p>{t('systemintro.p3')}</p>
      </div>
    </div>
  );
}

export default SystemIntroduction;
