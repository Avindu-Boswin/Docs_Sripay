import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Building2, Store, Code2, Palette, Megaphone, FileText } from 'lucide-react';

function Card({ to, title, desc, Icon }) {
    const handleLinkClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Link
            to={to}
            onClick={handleLinkClick}
            className="group relative rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
        >
            {/* Hover spotlight */}
            <div
                className="pointer-events-none absolute inset-0 rounded-2xl 
                 "
            />

            {/* Card background with gradient & brightness effect */}
            <div
                className="relative h-full 
                 bg-blue-100
                     backdrop-blur-xl
                     shadow-[0_14px_40px_rgba(2,6,23,0.12)]
                     hover:shadow-[0_22px_60px_rgba(2,6,23,0.16)]
                     rounded-2xl p-7 md:p-9 transition-all duration-300
                     hover:-bg-blue-300     "
                  
            >
                <div className="flex items-start gap-4">
                    <div className="rounded-xl p-3 bg-gradient-to-br from-[#0A65D6] to-[#4F46E5] text-white
                            shadow-md ring-1 ring-inset ring-white/20">
                        <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 ">
                        <h3 className="text-xl md:text-[1.35rem] font-semibold tracking-tight text-slate-900">
                            {title}
                        </h3>
                        <p className="mt-1.5 text-[15px] leading-6 text-slate-600">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-indigo-700">
                    <span className="relative">
                        <span className="absolute -inset-1 rounded-full bg-indigo-100/70 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative">Open</span>
                    </span>
                    <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L12 6.414V16a1 1 0 11-2 0V6.414L6.707 9.707A1 1 0 015.293 8.293l5-5z" />
                    </svg>
                </div>
            </div>s
        </Link>
    );
}

function RoleCards() {
    const { t } = useTranslation();

    const items = [
        { to: '/docs/acquirer/introduction', title: t('roles.acquirer.title'), desc: t('roles.acquirer.desc'), Icon: Building2 },
        { to: '/docs/merchant/gettingstart', title: t('roles.merchant.title'), desc: t('roles.merchant.desc'), Icon: Store },
        { to: '/docs/developer/gettingstart', title: t('roles.developer.title'), desc: t('roles.developer.desc'), Icon: Code2 },
        { to: '/docs/branding-guidelines', title: t('roles.bradingguidline.title'), desc: t('roles.bradingguidline.desc'), Icon: Palette },
        { to: '/docs/marketing-materials', title: t('roles.marketingmaterials.title'), desc: t('roles.marketingmaterials.desc'), Icon: Megaphone },
        { to: '/docs/agreement', title: t('roles.agreement.title'), desc: t('roles.agreement.desc'), Icon: FileText },
    ];

    return (
        <section
            id="roles"
            aria-label={t('roles.sectionLabel') || 'Primary roles'}
            className="
        relative isolate scroll-mt-28
        pt-14 md:pt-20
        [--band-from:#E6F2FF] [--band-to:#FFFFFF]
        before:absolute before:inset-0 before:-z-10
       
        "
        >
            {/* Decorative rings & glow to make this section “featured” */}
            <div className="pointer-events-none absolute inset-0 -z-10">

            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header bar to draw attention */}
                <div className="mx-auto mb-8 md:mb-12 text-center">

                    <h2 className="mt-4 text-3xl  sm:text-4xl md:text-5xl font-bold leading-[1.1] tracking-[.3rem]
                    ">
                       {t('sections')}
                    </h2>


                </div>

                {/* Cards */}
                <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {items.map((it) => (
                        <Card key={it.title} to={it.to} title={it.title} desc={it.desc} Icon={it.Icon} />
                    ))}
                </div>

                {/* Gentle divider to clearly separate from other sections */}
                <div className="mt-12 md:mt-16 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            </div>
        </section>
    );
}

export default RoleCards;
