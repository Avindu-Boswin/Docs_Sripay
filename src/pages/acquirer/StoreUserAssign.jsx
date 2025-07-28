import React from 'react';
import { useTranslation } from 'react-i18next';

function StoreUserAssign() {
    const { t } = useTranslation();

    // Convenience accessor for the huge steps array
    const steps = t('acquirerRegWorkflow.steps', { returnObjects: true });

    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* TOP‑LEVEL TITLE */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>Assigning Store Users</h1>

            {/* DESCRIPTION */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                Store User Management allows the Acquirer to assign users specifically to a store. These users will be responsible for handling store-level tasks such as viewing transactions, accessing terminals, or processing orders depending on their roles.
            </p>

            {/* INSTRUCTIONS */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>To Assign users for a specific store:</h3>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>Navigate to the <span className='font-semibold'>Stores</span> tab.</li>
                    <li>From the store list, click <span className='font-semibold'>View</span> (<span className='font-semibold'>: &gt; View</span>) on the relevant store.</li>
                    <li>Navigate to the <span className='font-semibold'>Add user to the outlet</span> section inside the store profile.</li>
                </ol>
                <p className='italic text-gray-600 mt-4'>
                    Note: Store users should be added by the merchant before assigning them to a store.
                </p>
            </div>
        </div>
    );
}

export default StoreUserAssign;
