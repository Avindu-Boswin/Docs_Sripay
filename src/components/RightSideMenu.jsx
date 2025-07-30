import React from 'react';

const RightSideMenu = ({ sections }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="h-full">
        <div className="text-gray-800 text-sm font-medium mb-4">On this page</div>
            <ul className="space-y-2 text-sm text-gray-600">
                {sections.map((section, i) => (
                <li key={i} className={section.sub ? 'ml-4' : ''}>
                    <button
                    onClick={() => handleScroll(section.id)}
                    className="hover:text-blue-600 transition-colors"
                    >
                    {section.label}
                    </button>
                </li>
                ))}
            </ul>
    </div>
  );
};

export default RightSideMenu;
