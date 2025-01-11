import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceProps {
  id: string;
  title: string;
  subheading: string;
  description: string;
  icon: LucideIcon;
  services: {
    title: string;
    points: string[];
  }[];
  outcomes: string[];
}

export function ServiceSection({
  id,
  title,
  subheading,
  description,
  icon: Icon,
  services,
  outcomes
}: ServiceProps) {
  return (
    <div className="py-16 border-b border-gray-200 last:border-0">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-indigo-100 rounded-lg">
          <Icon className="h-8 w-8 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <h3 className="text-xl text-indigo-600 font-semibold mt-1">{subheading}</h3>
        </div>
      </div>

      <p className="text-lg text-gray-600 mb-8 max-w-4xl">{description}</p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {services.map((service) => (
          <div key={service.title} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
            <ul className="space-y-3">
              {service.points.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="h-2 w-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Measurable Outcomes</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          {outcomes.map((outcome) => (
            <div key={outcome} className="bg-white rounded-lg p-4 shadow">
              <p className="text-gray-700">{outcome}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to={`/consulting/${id}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
        >
          Learn More About {title}
        </Link>
      </div>
    </div>
  );
}