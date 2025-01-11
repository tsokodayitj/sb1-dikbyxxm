import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  name: string;
  description: string;
  features: string[];
  savings: {
    cost: string;
    efficiency: string;
  };
  icon: LucideIcon;
  replaces: string;
}

export function ToolCard({
  name,
  description,
  features,
  savings,
  icon: Icon,
  replaces
}: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-900">{name}</h3>
        </div>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Replaces</h4>
          <p className="text-gray-700">{replaces}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Key Features</h4>
          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-600">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 bg-gray-50 p-4 rounded-lg">
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Cost Savings</h4>
            <p className="text-indigo-600 font-medium">{savings.cost}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 mb-1">Efficiency Gain</h4>
            <p className="text-indigo-600 font-medium">{savings.efficiency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}