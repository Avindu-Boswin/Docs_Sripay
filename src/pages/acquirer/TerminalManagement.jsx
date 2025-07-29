import React from 'react';
import { useTranslation } from 'react-i18next';
import Img1 from '../../assets/images/acquirer/img340.jpg';
import Img2 from '../../assets/images/acquirer/img342.jpg';
import Img3 from '../../assets/images/acquirer/img344.jpg';
import Img4 from '../../assets/images/acquirer/img351.jpg';



function TerminalManagement() {
    const { t } = useTranslation();
    return (
        <div className='w-full px-4 sm:px-8 md:px-16 lg:px-[12%] mt-10'>
            {/* Section Title */}
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mb-8'>{t('terminalManagement.title')}</h1>

            {/* Description */}
            <p className='text-base sm:text-lg text-gray-700 mb-8'>
                {t('terminalManagement.desc')}
            </p>

            {/* Accessing Terminal Management */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.accessTitle')}</h3>
                <p className='mb-4'>{t('terminalManagement.accessDesc')}</p>
                <ol className='list-decimal ml-6 text-gray-700 text-base mb-6'>
                    <li>{t('terminalManagement.accessSteps.0')}</li>
                    <li>{t('terminalManagement.accessSteps.1')}</li>
                    <li>{t('terminalManagement.accessSteps.2')}</li>
                </ol>
            </div>

            {/* Adding a Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.addTitle')}</h3>
                <p className='mb-4'>{t('terminalManagement.addDesc1')}</p>
                <p className='mb-4'>{t('terminalManagement.addDesc2')}</p>
            </div>

            {/* Option Selection Section */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.optionTitle')}</h3>
                <img src={Img1} alt='Option Selection – Single vs. Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <p className='mb-4'>{t('terminalManagement.optionDesc')}</p>
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.optionList.0')}</li>
                    <li>{t('terminalManagement.optionList.1')}</li>
                </ul>
                <p>{t('terminalManagement.optionNext')}</p>
            </div>

            {/* Creating a Single Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.singleTitle')}</h3>
                <img src={Img2} alt='Creating a Single Terminal' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.singleList.0')}</li>
                    <li>{t('terminalManagement.singleList.1')}</li>
                    <li>{t('terminalManagement.singleList.2')}</li>
                </ul>
                <p>{t('terminalManagement.singleNext')}</p>
            </div>

            {/* Creating Multiple Terminals */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.multiTitle')}</h3>
                <img src={Img3} alt='Creating Multiple Terminals' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.multiList.0')}</li>
                </ul>
                <p>{t('terminalManagement.multiNext')}</p>
            </div>

            {/* Activate or Deactivate Terminal */}
            <div className='mb-8'>
                <h3 className='text-xl sm:text-2xl font-semibold text-gray-700 mb-5'>{t('terminalManagement.statusTitle')}</h3>
                <img src={Img4} alt='Terminal Status View' className="mx-auto my-6 block md:w-4/5" />
                <ul className='list-disc ml-6 text-gray-700 text-base mb-4'>
                    <li>{t('terminalManagement.statusList.0')}</li>
                    <li>{t('terminalManagement.statusList.1')}</li>
                    <li>{t('terminalManagement.statusList.2')}</li>
                </ul>
                <p className='italic text-gray-600 mt-4'>
                    <span className='font-semibold'>{t('terminalManagement.statusNoteTitle')}</span> {t('terminalManagement.statusNote')}
                </p>
            </div>
        </div>
    );
}

export default TerminalManagement;
