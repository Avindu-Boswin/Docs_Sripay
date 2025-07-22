import React from 'react';
import { Link } from 'react-router-dom';
import Document_Image from '../assets/documents.svg'

const DocumentationHero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-0 md:pt-20">
      <div className="text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Documentation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
          Explore docs for our products, services, and more. Select your role and a product to get started.
        </p>
        
        {/* Placeholder for the photo */}
        <div className="flex justify-center mb-10 md:mb-20">
          <img src={Document_Image} alt="Documentation" className="h-36 md:h-64 w-auto" />
        </div>

        {/* Role selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              role: 'Acquirer',
              color: 'from-blue-300 to-blue-200',
              desc: 'Access guides and resources for acquirers.'
            },
            {
              role: 'Merchant',
              color: 'from-blue-100 to-blue-300',
              desc: 'Find merchant onboarding and integration help.'
            },
            {
              role: 'Developer',
              color: 'from-blue-200 to-blue-300',
              desc: 'View Developer Guide'
            }
          ].map(({ role, color, icon, desc }) => (
            <Link
              key={role}
              to={`/docs/${role.toLowerCase()}`}
              className={`bg-gradient-to-br ${color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group`}
            >
              <div className="flex flex-col items-center mb-2">
                {icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors duration-200">{role}</h3>
              </div>
              <p className="text-gray-700 text-sm font-normal">{desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationHero;