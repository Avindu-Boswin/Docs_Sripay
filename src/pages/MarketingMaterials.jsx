import React from "react";
import Header from "../components/Merchant/MerchantNavBar";
import PayNowVideo from "../assets/images/PaymentInformation(1).mp4?url";
import PosterImage from "../assets/images/TopRated.png";
import ScanForOffers from "../assets/images/UpdatedQrScan.png";
import { Coins, Award, Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MarketingMaterials() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t("marketing_card_multi_title"),
      desc: t("marketing_card_multi_desc"),
      icon: <Coins className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: t("marketing_card_top_title"),
      desc: t("marketing_card_top_desc"),
      icon: <Award className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: t("marketing_card_social_title"),
      desc: t("marketing_card_social_desc"),
      icon: <Megaphone className="h-8 w-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="w-full">
      <Header />

      {/* Hero */}
      <section className="relative lg:h-[100vh] overflow-hidden lg:mt-16">
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/40 blur-3xl" />
        <div className="hidden md:block lg:block pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/40 blur-3xl" />

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center md:grid-cols-2">
            {/* Copy */}
            <div className="text-black px-2 sm:px-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-black/10">
                <svg aria-hidden viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm3 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 13.5c.6-.9 1.7-1.5 3-1.5s2.4.6 3 1.5c.6-.9 1.7-1.5 3-1.5 1.3 0 2.4.6 3 1.5V15H5v-1.5Z" />
                </svg>
                {t("marketing_hero_badge")}
              </span>

              <h1 className="mt-5 lg:text-6xl font-extrabold leading-tight tracking-tight md:text-4xl sm:text-5xl">
                {t("marketing_hero_title_1")}
                <span className="block py-1">{t("marketing_hero_title_2")}</span>
                <span className="block pb-1">{t("marketing_hero_title_3")}</span>
              </h1>

              <p className="mt-7 max-w-xl text-base text-black/85">
                {t("marketing_hero_desc")}
              </p>

              <div className="mt-9">
                <a
                  href="https://sripay.lk/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-800 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  {t("marketing_contact_btn")}
                </a>
              </div>
            </div>

            {/* Video */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[620px]">
                <video
                  src={PayNowVideo}
                  muted
                  playsInline
                  autoPlay
                  loop
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-500 mb-4">{t("marketing_cards_header")}</p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow transition-all hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500"
            >
              <div className="mb-3 text-4xl">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{card.desc}</p>
            </li>
          ))}
        </ul>

        {/* Top rated */}
        <div className="flex flex-row justify-between items-center py-10 px-10 w-full mx-auto">
          <div className="lg:pl-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("marketing_top_title")}</h2>
            <p className="mt-3 text-gray-600">{t("marketing_top_desc")}</p>
          </div>
          <div>
            <img src={PosterImage} alt="Top rated merchant badge" className="w-64 sm:w-72 h-auto rounded-2xl" />
          </div>
        </div>

        {/* QR Card */}
        <div className="flex flex-row justify-between items-center py-5 px-10 w-full mx-auto">
          <div className="rounded-2xl w-[40%] inline-block">
            <img
              src={ScanForOffers}
              alt="Checkout QR card"
              className="w-52 sm:w-60 md:w-64 h-auto rounded-2xl drop-shadow-2xl"
            />
          </div>

          <div className="mt-8 md:px-10 w-[60%]">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("marketing_qr_title")}</h3>
            <p className="mt-4 text-gray-700 leading-7">{t("marketing_qr_desc")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
