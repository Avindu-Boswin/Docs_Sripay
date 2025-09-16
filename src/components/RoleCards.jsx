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
            className="group block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
            <div
                className="relative h-full bg-white
                     border border-gray-200
                     shadow-sm hover:shadow-md
                     rounded-xl p-6 transition-all duration-200
                     hover:border-blue-300 hover:-translate-y-1"
            >
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg p-3 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    <span>Learn more</span>
                    <svg
                        className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
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
            className="py-16 bg-gray-50"
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
