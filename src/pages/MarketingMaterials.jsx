import React from "react";
import Header from "../components/Merchant/MerchantNavBar";

// ✅ Use a dedicated video import or serve from /public
// Option A (Vite): append ?url so bundler gives a file URL
import PayNowVideo from "../assets/images/PaymentInformation(1).mp4?url";

// Option B (public folder): put the file in /public and do:
// const PayNowVideo = "/Payment Information.mp4";

import PosterImage from "../assets/images/TopRated.png"; // used in cards section poster
import ScanForOffers from "../assets/images/QRScan.png";
import { Coins, Award, Megaphone } from "lucide-react";

export default function MarketingMaterials() {
  const cards = [
    {
      title: "Multi‑currency settlement",
      desc: "Process globally and show discounts in each customer’s local currency—automatically.",
      icon: <Coins className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Top‑rated merchant",
      desc: "As your transaction volume grows, your commission rate goes down.",
      icon: <Award className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Social media promotions",
      desc: "We promote our merchants across social channels and on SriPay‑integrated business sites for extra reach.",
      icon: <Megaphone className="h-8 w-8 text-indigo-600" />,
    },
  ];

  return (
    <div className="w-full">
      <Header />

      {/* Hero */}
      <section className="relative lg:h-[100vh] overflow-hidden md:mt- lg:mt-16 ">
        {/* Background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/40 blur-3xl " />
        <div className="  hidden md:block lg:block pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/40 blur-3xl" />

        <div className="mx-auto flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-210 md:grid-cols-2">
            {/* Copy */}
            <div className="text-black px-2 sm:px-8 ">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium ring-1 ring-black/10">
                <svg aria-hidden viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M4 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4Zm3 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM5 13.5c.6-.9 1.7-1.5 3-1.5s2.4.6 3 1.5c.6-.9 1.7-1.5 3-1.5 1.3 0 2.4.6 3 1.5V15H5v-1.5Z" />
                </svg>
                Payment Marketing
              </span>

              <h1 className="mt-5 lg:text-6xl font-extrabold leading-tight tracking-tight md:text-4xl sm:text-5xl">
                Transform every <span className="block py-1">transaction into a</span>
                <span className="block pb-1">rewarding experience.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base text-black/85">
                Enhance the checkout experience online and in-store. SriPay connects customised incentives and exclusive offers
                with your payment methods, giving customers more reasons to choose you every time they pay.
              </p>

              <div className="mt-9">
                <a
                  href="https://sripay.lk/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-800 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/60"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Illustration (video) */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-[620px]">
                <div className="absolute -inset-4 -z-10 " />
                <video
                  src={PayNowVideo}
                  // Important for mobile autoplay:
                  muted
                  playsInline
                  autoPlay
                  loop
                  // Optional: show a poster until the first frame is ready
                  // poster={PosterImage}
                  className="h-full  w-full rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-500 mb-4">Marketing Materials</p>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <li
              key={idx}
              className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_14px_36px_rgba(0,0,0,0.08)] focus-within:ring-2 focus-within:ring-blue-500"
            >
              <div className="mb-3 text-4xl ">{card.icon}</div>
              <h3 className="text-lg font-semibold  text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{card.desc}</p>
            </li>
          ))}
        </ul>

        {/* Checkout offers */}
        <div className="flex flex-row justify-between items-center py-10 px-10 w-full mx-auto">
          <div className="lg:pl-10 md:pl-5 pl-2 ">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Top Rated Merchant</h2>
            <p className="mt-3 text-gray-600">Show Top Rated Batch in Outlet Dashboard.</p>
          </div>

          {/* Poster / QR image */}
          <div>
            <div className="rounded-2xl lg:pr-10  sm:pr-3 inline-block">
              <img
                src={PosterImage}
                alt="Scan for offers poster"
                className="w-64 sm:w-72 h-auto"
              />
            </div>
          </div>
        </div>

        {/* In‑store promotion code */}
        <div className="flex flex-row justify-between items-center py-5 px-10 w-full mx-auto">
          {/* Phone mockup */}
          <div className="rounded-2xl w-[40%] inline-block">
            <img
              src={ScanForOffers}
              alt="Checkout screen with payment method"
              className="w-52 sm:w-60 md:w-64 h-auto rounded-2xl drop-shadow-2xl"
            />
          </div>

          {/* Copy */}
          <div className="mt-8 w-[60%]">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">In‑store promotion code</h3>
            <p className="mt-4 text-gray-700 leading-7">
              Our marketing technology analyses user payment behaviour to deliver personalised instant incentives—such as
              discounts, points and gifts—to help boost conversions for merchants in their stores, and generate new revenue
              streams for mobile payment providers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
