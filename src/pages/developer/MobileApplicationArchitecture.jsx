import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

function MobileApplicationArchitecture() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Mobile Application Architecture
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                The mobile application for SriPay Connect is developed using Flutter to
                deliver a cross‑platform, high‑performance experience on both iOS and
                Android. It leverages Firebase Cloud Messaging (FCM) for real‑time push
                notifications, and integrates with SriPay’s backend APIs for seamless data
                synchronization. The architecture focuses on modularity, responsiveness,
                and security to ensure a consistent user experience across devices.

            </p>

            {/* ---------- Architecture Feature List ------------------------------------------------ */}
            <div className="mt-8 mb-6">
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Framework:</span> Flutter for cross‑platform development, enabling a single codebase for iOS and Android while maintaining native‑like performance.
                    </li>
                    <li>
                        <span className="font-semibold">Styling:</span> Flutter’s widget‑based UI system for customizable, responsive layouts; supports theming for branding consistency.
                    </li>
                    <li>
                        <span className="font-semibold">State Management:</span> Provider and Riverpod/Bloc for structured state handling, ensuring smooth data flow and real‑time UI updates.
                    </li>
                    <li>
                        <span className="font-semibold">Routing:</span> Flutter’s Navigator 2.0 for structured, declarative navigation across features.
                    </li>
                    <li>
                        <span className="font-semibold">Notifications:</span> Firebase Cloud Messaging (FCM) for real‑time push notifications on transactions, settlements, and account updates.
                    </li>
                    <li>
                        <span className="font-semibold">Performance:</span> Optimized rendering, minimal widget rebuilds, and asset preloading for a smooth user experience.
                    </li>
                    <li>
                        <span className="font-semibold">Security:</span> Secure storage for sensitive data, HTTPS for API communication, and token‑based authentication (JWT/OAuth).

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileApplicationArchitecture;