import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Tool {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface ToolCategoryProps {
  category: string;
  items: Tool[];
}

export function ToolCategory({ category, items }: ToolCategoryProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{category}</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {items.map((tool) => (
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
  );
}