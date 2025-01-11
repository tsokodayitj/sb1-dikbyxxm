import React from 'react';
import { 
  BarChart3, Clock, Users, FileSpreadsheet, 
  CreditCard, MessageSquare, Calendar, Shield 
} from 'lucide-react';

const tools = [
  {
    category: 'Financial Management',
    items: [
      {
        name: 'Xero',
        description: 'Cloud-based accounting software perfect for SMEs',
        icon: BarChart3,
      },
      {
        name: 'Sage Business Cloud',
        description: 'Comprehensive accounting and payroll solution',
        icon: CreditCard,
      },
    ],
  },
  {
    category: 'Team Collaboration',
    items: [
      {
        name: 'Microsoft Teams',
        description: 'Unified communication and collaboration platform',
        icon: MessageSquare,
      },
      {
        name: 'Monday.com',
        description: 'Visual project management tool',
        icon: Calendar,
      },
    ],
  },
  {
    category: 'HR & Payroll',
    items: [
      {
        name: 'SimplePay',
        description: 'South African payroll software',
        icon: Users,
      },
      {
        name: 'BambooHR',
        description: 'HR management software for growing businesses',
        icon: FileSpreadsheet,
      },
    ],
  },
  {
    category: 'Time Management',
    items: [
      {
        name: 'Clockify',
        description: 'Time tracking and productivity tool',
        icon: Clock,
      },
      {
        name: 'LastPass',
        description: 'Password management for teams',
        icon: Shield,
      },
    ],
  },
];

export function OperationalTools() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Digital Tools for SMEs
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Enhance your business processes with our carefully curated selection of digital tools
          </p>
        </div>

        <div className="mt-16">
          {tools.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {category.items.map((tool) => (
                  <div
                    key={tool.name}
                    className="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <tool.icon className="h-8 w-8 text-indigo-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          {tool.name}
                        </h3>
                        <p className="mt-2 text-gray-500">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Tools?
            </h2>
            <p className="text-gray-600 mb-6">
              Our team can help you select and implement the perfect tools for your business needs
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
  );
}