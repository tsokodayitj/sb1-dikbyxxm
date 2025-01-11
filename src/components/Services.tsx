import React from 'react';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    title: 'Strategic Planning',
    description: 'Develop comprehensive growth strategies tailored to your business objectives',
    icon: Target,
  },
  {
    title: 'Innovation Consulting',
    description: 'Transform your business model with cutting-edge innovation frameworks',
    icon: Lightbulb,
  },
  {
    title: 'Growth Optimization',
    description: 'Optimize your operations and processes for sustainable growth',
    icon: TrendingUp,
  },
  {
    title: 'Team Development',
    description: 'Build and nurture high-performing teams that drive success',
    icon: Users,
  },
];

export function Services() {
  return (
    <div id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive solutions to drive your business forward
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center">
                  <service.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{service.title}</h3>
                <p className="mt-2 text-gray-500 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}