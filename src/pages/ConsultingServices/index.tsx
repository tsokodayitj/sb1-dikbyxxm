import React from 'react';
import { PageLayout } from '../../components/PageLayout';
import { ServiceSection } from './components/ServiceSection';
import { services } from './data/services';
import { Contact } from '../../components/Contact';

export function ConsultingServices() {
  return (
    <PageLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
              Our Consulting Services
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive solutions to drive your business forward through strategic growth,
              operational excellence, and leadership development.
            </p>
          </div>

          {services.map((service) => (
            <ServiceSection key={service.id} {...service} />
          ))}
        </div>
      </div>
      <Contact />
    </PageLayout>
  );
}