import React, { useEffect } from 'react';
import { useSections } from '../../components/SectionContext';
import Img1 from '../../assets/images/merchant/terminal-management/img1.png';
import Img2 from '../../assets/images/merchant/terminal-management/img2.png';
import Img3 from '../../assets/images/merchant/terminal-management/img3.png';
import Img4 from '../../assets/images/merchant/terminal-management/img4.png';
import Img5 from '../../assets/images/merchant/terminal-management/img5.png';
import Img6 from '../../assets/images/merchant/terminal-management/img6.png';
import Img7 from '../../assets/images/merchant/terminal-management/img7.png';
import { useTranslation } from 'react-i18next';

function MerchantTerminalManagement() {
  const { setSections } = useSections();
  const { t } = useTranslation('merchant'); // <-- ensure 'merchant' namespace is loaded

  // translated right-side menu
  const menu = [
    { id: 'section1', label: t('terminalmanagement.sectionsMenu.section1') },
    { id: 'section2', label: t('terminalmanagement.sectionsMenu.section2') },
    { id: 'section3', label: t('terminalmanagement.sectionsMenu.section3') },
    { id: 'section4', label: t('terminalmanagement.sectionsMenu.section4') },
    { id: 'section5', label: t('terminalmanagement.sectionsMenu.section5') },
    { id: 'section6', label: t('terminalmanagement.sectionsMenu.section6') },
    { id: 'section7', label: t('terminalmanagement.sectionsMenu.section7') }
  ];

  useEffect(() => {
    setSections(menu);
    return () => setSections([]);
    // re-run when language changes so labels update
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('terminalmanagement.title')}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 mb-8">
        {t('terminalmanagement.intro')}
      </p>

      {/* Section 1 */}
      <div id="section1" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section1.title')}
        </h3>
        <p className="mb-4">{t('terminalmanagement.section1.lead')}</p>
        <ol className="list-decimal ml-6 text-gray-700 text-base mb-6">
          <li>{t('terminalmanagement.section1.ol.li1')}</li>
          <li>{t('terminalmanagement.section1.ol.li2')}</li>
          <img
            src={Img1}
            alt={t('terminalmanagement.alts.img1')}
            className="mx-auto my-6 block md:w-4/5"
          />
          <li>{t('terminalmanagement.section1.ol.li3')}</li>
        </ol>
        <p className="mb-4 text-sm font-bold text-gray-500">
          {t('terminalmanagement.section1.importantLabel')} {t('terminalmanagement.section1.important')}
        </p>
      </div>

      {/* Section 2 */}
      <div id="section2" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section2.title')}
        </h3>
        <p className="mb-4">{t('terminalmanagement.section2.p1')}</p>
        <p className="mb-4 font-bold">{t('terminalmanagement.section2.placesTitle')}</p>
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section2.fromMenu')}</li>
        </ul>
        <img
          src={Img2}
          alt={t('terminalmanagement.alts.img2')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section2.fromSection')}</li>
        </ul>
        <img
          src={Img3}
          alt={t('terminalmanagement.alts.img3')}
          className="mx-auto my-6 block md:w-4/5"
        />
      </div>

      {/* Section 3 */}
      <div id="section3" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section3.title')}
        </h3>
        <img
          src={Img4}
          alt={t('terminalmanagement.alts.img4')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <p className="mb-4">{t('terminalmanagement.section3.p1')}</p>
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section3.bullets.single')}</li>
          <li>{t('terminalmanagement.section3.bullets.multiple')}</li>
        </ul>
        <p>{t('terminalmanagement.section3.p2')}</p>
      </div>

      {/* Section 4 */}
      <div id="section4" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section4.title')}
        </h3>
        <img
          src={Img5}
          alt={t('terminalmanagement.alts.img5')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section4.b1')}</li>
          <li>{t('terminalmanagement.section4.b2')}</li>
          <li>{t('terminalmanagement.section4.b3')}</li>
        </ul>
        <p>{t('terminalmanagement.section4.p')}</p>
      </div>

      {/* Section 5 */}
      <div id="section5" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section5.title')}
        </h3>
        <img
          src={Img6}
          alt={t('terminalmanagement.alts.img6')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section5.b1')}</li>
        </ul>
        <p>{t('terminalmanagement.section5.p')}</p>
      </div>

      {/* Section 6 */}
      <div id="section6" className="mb-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          {t('terminalmanagement.section6.title')}
        </h3>
        <img
          src={Img7}
          alt={t('terminalmanagement.alts.img7')}
          className="mx-auto my-6 block md:w-4/5"
        />
        <ul className="list-disc ml-6 text-gray-700 text-base mb-4">
          <li>{t('terminalmanagement.section6.b1')}</li>
          <li>{t('terminalmanagement.section6.b2')}</li>
          <li>{t('terminalmanagement.section6.b3')}</li>
        </ul>
        <p className="italic text-gray-600 mt-4">
          <span className="font-semibold">{t('terminalmanagement.section6.noteLabel')}</span>{' '}
          {t('terminalmanagement.section6.noteDesc')}
        </p>
      </div>

      {/* Section 7 - Troubleshooting */}
      <div id="section7" className="mt-16 mb-20">
        <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-8 shadow-sm">
          <div className="flex items-center mb-6">
            <svg className="w-7 h-7 text-blue-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" />
            </svg>
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mt-3">
              {t('terminalmanagement.section7.title')}
            </h2>
          </div>
          <ul className="space-y-7 text-sm">
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('terminalmanagement.section7.q1')}
              </div>
              <div className="text-blue-800 ml-5">
                {t('terminalmanagement.section7.a1')}
              </div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('terminalmanagement.section7.q2')}
              </div>
              <div className="text-blue-800 ml-5">
                {t('terminalmanagement.section7.a2')}
              </div>
            </li>
            <li className="pl-2">
              <div className="font-medium text-blue-900 mb-1 flex items-center">
                <span className="mr-2">•</span>{t('terminalmanagement.section7.q3')}
              </div>
              <div className="text-blue-800 ml-5">
                {t('terminalmanagement.section7.a3')}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MerchantTerminalManagement;
