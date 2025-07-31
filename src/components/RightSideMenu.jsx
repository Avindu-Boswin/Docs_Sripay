

import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const RightSideMenu = ({ sections }) => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(sections?.[0]?.id || null);
  const isManualScroll = useRef(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // mt-20 = 5rem = 80px
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      isManualScroll.current = true;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setTimeout(() => {
        isManualScroll.current = false;
      }, 800); // allow scroll to finish
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      if (isManualScroll.current) return;
      let currentId = null;
      let minDistance = Number.POSITIVE_INFINITY;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100);
          if (rect.top - 100 <= 0 && distance < minDistance) {
            minDistance = distance;
            currentId = section.id;
          }
        }
      }
      // If no section is above the threshold, pick the first section below
      if (!currentId) {
        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const el = document.getElementById(section.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top - 100 > 0) {
              currentId = section.id;
              break;
            }
          }
        }
      }
      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
    // eslint-disable-next-line
  }, [sections, activeId]);

    return (
    <div className="h-full">
      <div className="text-gray-800 text-xs font-medium mb-4">{t('rightsidemenu.onthispage')}</div>

      {/* Border and indent wrapper */}
      <div className="relative border-l-2 border-gray-200 pl-4">
        <ul className="space-y-4 text-sm text-gray-600">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`relative ${section.sub ? 'ml-4' : ''}`}
            >

              {/* Active indicator triangle (pointing right) */}
              {activeId === section.id && (
                <span
                  className="absolute -left-[17px] top-1/2 transform -translate-y-1/2 z-[-1]"
                  style={{
                    width: '0',
                    height: '0',
                    borderTop: '5px solid transparent',
                    borderBottom: '5px solid transparent',
                    borderLeft: '7px solid #2563eb', // Tailwind blue-600
                    display: 'inline-block',
                  }}
                />
              )}

              <button
                onClick={() => handleScroll(section.id)}
                className={`w-full text-left break-words leading-snug
                  hover:text-blue-600 transition-colors
                  ${activeId === section.id ? 'text-blue-600 font-medium' : ''}`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer at bottom so last item can scroll fully into view */}
      <div style={{ height: '3rem' }} />
    </div>
  );
};

export default RightSideMenu;