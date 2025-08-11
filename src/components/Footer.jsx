
import Logo from '../assets/images/sripayLogo.jpg';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="mx-auto w-full relative text-center bg-[#fafafa] text-black rounded-tl-[30px] rounded-tr-[30px]">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-xl md:text-3xl xl:text-4xl leading-snug flex items-center justify-center gap-2">
                    {t('footer.learnMore')}
                    <span>
                        <img src={Logo} alt="Sripay Logo" className="inline h-6 md:h-10 align-middle" />
                    </span>
                </h2>
                <a
                    className="mt-4 px-6 py-2 text-sm md:text-base font-medium text-white leading-tight inline-block bg-[#000c7a] rounded-full shadow-xl border border-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500 md:mb-4"
                    href="https://sripay.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t('footer.visitSripay')}
                </a>
                <div className="mt-6">
                    <nav className="flex flex-wrap justify-center text-base font-medium">
                        <div className="px-5">
                            <span>{t('footer.needHelp')} </span>
                            <a href="https://sripay.lk/contact" className="underline text-blue-500 hover:text-black transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">{t('footer.contactUs')}</a>
                        </div>
                    </nav>
                    <p className="mt-7 text-sm">{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}