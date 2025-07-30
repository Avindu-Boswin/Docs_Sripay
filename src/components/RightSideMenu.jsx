

import React, { useEffect, useState, useRef } from 'react';

const RightSideMenu = ({ sections }) => {
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
      <div className="text-gray-800 text-xs font-medium mb-4">On this page</div>
      <ul className="space-y-4 text-sm text-gray-600">
        {sections.map((section, i) => (
          <li key={i} className={section.sub ? 'ml-4' : ''}>
            <button
              onClick={() => handleScroll(section.id)}
              className={
                `hover:text-blue-600 transition-colors w-full text-center break-words whitespace-normal leading-snug ` +
                (activeId === section.id ? 'text-blue-600 font-semibold' : '')
              }
              style={{ wordBreak: 'break-word', whiteSpace: 'normal', textAlign: 'left', display: 'block', width: '100%' }}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
      <div style={{ height: "3rem" }} /> {/* Add space after the last section */}
    </div>
  );
};

export default RightSideMenu;
