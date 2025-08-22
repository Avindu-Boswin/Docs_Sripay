import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSections } from '../../components/SectionContext';

import EmailLogo from '../../assets/images/acquirer/message.png';
import CallLogo from '../../assets/images/acquirer/telephone-call.png';
import SriPay from '../../assets/images/Sripay_logo_traingle.png';

function Support() {
  const { t } = useTranslation('merchant'); // <-- use 'merchant' namespace
  const { setSections } = useSections();

  useEffect(() => {
    setSections([
      { id: 'email', label: t('supports.sectionsMenu.email') },
      { id: 'website', label: t('supports.sectionsMenu.website') },
      { id: 'mobile', label: t('supports.sectionsMenu.mobile') }
    ]);
    return () => setSections([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[12%] mt-8 mb-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
        {t('supports.title')}
      </h1>

      <div className="w-full h-[70px] bg-blue-100 border rounded-[5px] flex items-center justify-center mt-10">
        <span className="text-sm sm:text-base font-semibold text-gray-700 text-center">
          {t('supports.banner')}
        </span>
      </div>

      <div className="py-10 space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
        {/* Email Section */}
        <div id="email">
          <div className="flex justify-start items-center gap-3">
            <img src={EmailLogo} alt={t('supports.alts.emailLogo')} className="w-10 h-10" />
            <h3 className="font-semibold text-2xl mt-4">{t('supports.email.title')}</h3>
          </div>
          <span className="text-sm">{t('supports.email.blurb')}</span>
          <h3 className="mt-10 text-xl xl:text-base">{t('supports.email.groupTitle')}</h3>
          <ul className="px-7">
            <li className="py-2">
              {t('supports.email.labels.address')}:{" "}
              <a
                href={`mailto:${t('supports.email.items.addressValue')}`}
                className="text-blue-500"
              >
                {t('supports.email.items.addressValue')}
              </a>
            </li>
            <li>
              {t('supports.email.labels.hours')}: {t('supports.email.items.hoursValue')}
            </li>
          </ul>
        </div>

        {/* Website Section */}
        <div id="website">
          <div className="flex justify-start items-center gap-3">
            <img src={SriPay} alt={t('supports.alts.websiteLogo')} className="w-10 h-10" />
            <h3 className="font-semibold text-2xl mt-4">{t('supports.website.title')}</h3>
          </div>
          <span className="text-sm">{t('support.website.blurb')}</span>
          <h3 className="mt-10 text-xl xl:text-base">{t('supports.website.groupTitle')}</h3>
          <ul className="px-7">
            <li className="py-2">
              {t('supports.website.labels.weblink')}:{" "}
              <a
                href={t('supports.website.items.linkHref')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {t('supports.website.items.linkText')}
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Section */}
        <div id="mobile">
          <div className="flex justify-start items-center gap-3">
            <img src={CallLogo} alt={t('support.alts.callLogo')} className="w-10 h-10" />
            <h3 className="font-semibold text-2xl mt-4">{t('support.mobile.title')}</h3>
          </div>
          <span className="text-sm">{t('support.mobile.blurb')}</span>

          <h3 className="mt-10 text-xl xl:text-base">{t('support.mobile.merchantGroupTitle')}</h3>
          <ul className="px-7">
            <li className="py-2">
              {t('support.mobile.labels.mobile')}:{" "}
              <span className="text-blue-500">{t('support.mobile.merchant.phone')}</span>
            </li>
            <li>
              {t('support.mobile.labels.hours')}: {t('support.mobile.merchant.hoursValue')}
            </li>
          </ul>

          <h3 className="mt-10 text-xl xl:text-base">{t('support.mobile.technicalGroupTitle')}</h3>
          <ul className="px-7">
            <li className="py-2">
              {t('support.mobile.labels.mobile')}:{" "}
              <span className="text-blue-500">{t('support.mobile.technical.phone')}</span>
            </li>
            <li>
              {t('support.mobile.labels.hours')}: {t('support.mobile.technical.hoursValue')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
