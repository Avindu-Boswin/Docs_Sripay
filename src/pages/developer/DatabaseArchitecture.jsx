import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import Img1 from '../../assets/images/developer/database_architecture.png';

function DatabaseArchitecture() {
    const { t } = useTranslation();

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE, SUBTITLE, DESCRIPTION */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>
                Database Architecture
            </h1>

            <p className='text-gray-700 text-base leading-relaxed mb-8'>
                SriPay Connect uses Google Cloud Firestore for structured data storage,
                Realtime Database for live transaction updates, and daily Json backups
                for data redundancy
            </p>

            {/* ---------- Image ------------------------------------------------ */}
            <div className='mt-8 mb-6'>
                <Zoom>
                    <img src={Img1} className='mb-8 mx-auto my-6 block md:w-full' alt='Database Architecture' />
                </Zoom>
            </div>

            {/* ---------- Architecture Feature List ------------------------------------------------ */}
            <div className="mt-8 mb-6">
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <span className="font-semibold">Collections:</span> Merchants, Stores, Transactions, Settlements, etc.
                    </li>
                    <li>
                        <span className="font-semibold">Schema:</span> Hierarchical structure with documents for merchant profiles, store details, transaction records, and settlement logs.
                    </li>
                    <li>
                        <span className="font-semibold">Indexing:</span> Composite indexes for frequent queries (e.g., transaction status, date ranges). Stores transient data for real‑time transaction updates, synchronized with Firestore. Supports live dashboards and instant notifications.

                    </li>
                    <li>
                        <span className="font-semibold">JSON Backup:</span> Daily exports from Firestore to another Firestore database for archival and disaster recovery. Backup schema mirrors primary Firestore collections with normalized structures.
                    </li>
                    <li>
                        <span className="font-semibold">Data Integrity:</span> Firestore triggers and validation rules enforce consistency and prevent invalid data entry.
                    </li>
                    <li>
                        <span className="font-semibold">Performance:</span> Optimized queries, composite indexing, and caching strategies ensure fast reads in high‑traffic scenarios.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DatabaseArchitecture;