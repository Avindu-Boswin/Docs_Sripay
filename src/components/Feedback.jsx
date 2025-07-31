// src/components/PageFeedback.jsx
import React, { useState } from 'react';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';


const PageFeedback = ({ onChange }) => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    const handleClick = (value) => {
        setSelected(value);
        if (typeof onChange === 'function') {
            onChange(value);
        }
    };

    return (
        <div className="flex flex-col space-y-4 mt-10 mb-2">
            <div>
                <span className="text-gray-700 font-medium">{t('rightsidemenu.ishelpful')}</span>
            </div>
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => handleClick('up')}
                    className={`
                        p-2 rounded-full transition
                        ${selected === 'up'
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-400 hover:bg-gray-100'}
                        `}
                >
                    <LikeOutlined style={{ fontSize: '1.25rem' }} />
                </button>
                <button
                    onClick={() => handleClick('down')}
                    className={`
                            p-2 rounded-full transition
                            ${selected === 'down'
                            ? 'bg-red-100 text-red-600'
                            : 'text-gray-400 hover:bg-gray-100'}
                            `}
                >
                    <DislikeOutlined style={{ fontSize: '1.25rem' }} />
                </button>
            </div>
        </div>
    );
};

export default PageFeedback;
