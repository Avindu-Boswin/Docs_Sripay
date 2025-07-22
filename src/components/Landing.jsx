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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['Developer', 'Business User', 'Administrator'].map((role) => (
            <Link
              key={role}
              to={`/docs/${role.toLowerCase().replace(' ', '-')}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-2">{role}</h3>
              <p className="text-gray-600">View documentation for {role.toLowerCase()}s</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentationHero;