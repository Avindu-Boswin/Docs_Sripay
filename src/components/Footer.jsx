import Logo from '../assets/images/sripay_w_1x.png';

export default function Footer() {
    return (
        <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-[#03045e] text-white">
            <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                <h2 className="font-bold text-xl md:text-3xl xl:text-4xl leading-snug flex items-center justify-center gap-2">
                    Learn more about
                    <span>
                        <img src={Logo} alt="Sripay Logo" className="inline h-6 md:h-10 align-middle" />
                    </span>
                </h2>
                <a
                    className="mt-4 px-6 py-2 text-sm md:text-base font-medium leading-tight inline-block bg-[#2664eb] rounded-full shadow-xl border border-transparent hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500 md:mb-4"
                    href="https://sripay.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit SriPay
                </a>
                <div className="mt-6">
                    <nav className="flex flex-wrap justify-center text-base font-medium">
                        <div className="px-5">
                            <span>Need More Help? </span>
                            <a href="https://sripay.lk/contact" className="underline text-blue-200 hover:text-white transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">Contact Us</a>
                        </div>
                    </nav>
                    <p className="mt-7 text-sm">© 2025 Sripay. All rights reserved. Unauthorized use, reproduction, or distribution of any content without prior written consent is strictly prohibited.</p>
                </div>
            </div>
        </footer>
    );
}