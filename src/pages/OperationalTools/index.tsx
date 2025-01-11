import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { CategorySection } from './components/CategorySection';
import { categories } from './data/categories';
import { tools } from './data/tools';
import { Contact } from '../../components/Contact';

export function OperationalTools() {
  return (
    <PageLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Digital Transformation Tools
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
              Modern solutions to streamline operations, reduce costs, and drive efficiency across your organization.
            </p>
          </div>

          {categories.map((category) => (
            <CategorySection 
              key={category} 
              category={category} 
              tools={tools} 
            />
          ))}

          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help With Digital Transformation?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team can guide you through tool selection, implementation, and change management.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </PageLayout>
  );
}