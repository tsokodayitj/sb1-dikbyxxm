import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Calculator, Briefcase, PieChart, Scale } from 'lucide-react';
import { Contact } from '../components/Contact';

const valuationServices = [
  {
    title: 'Business Value Assessment',
    description: 'Comprehensive evaluation of your business worth using industry-standard methodologies',
    icon: Calculator,
  },
  {
    title: 'Exit Planning',
    description: 'Strategic planning for business owners looking to retire or transition their business',
    icon: Briefcase,
  },
  {
    title: 'Insurance Sector Expertise',
    description: 'Specialised valuation services for insurance sector businesses',
    icon: Scale,
  },
  {
    title: 'Financial Analysis',
    description: 'Detailed financial analysis and reporting for informed decision-making',
    icon: PieChart,
  },
];

export function BusinessValuations() {
  return (
    <PageLayout>
      <div className="relative py-16 bg-gradient-to-b from-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Business Valuations</span>
              <span className="block text-indigo-600">For South African SMEs</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Expert valuation services for business owners planning retirement or immigration, 
              with specialised focus on the insurance sector.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {valuationServices.map((service) => (
                <div 
                  key={service.title}
                  className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full p-3">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="pt-8">
                    <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </PageLayout>
  );
}