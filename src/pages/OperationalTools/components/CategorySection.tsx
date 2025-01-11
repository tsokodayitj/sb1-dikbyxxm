import React from 'react';
import { ToolCard } from './ToolCard';
import { CategoryType } from '../data/categories';

interface CategorySectionProps {
  category: CategoryType;
  tools: any[];
}

export function CategorySection({ category, tools }: CategorySectionProps) {
  const categoryTools = tools.filter(tool => tool.category === category);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categoryTools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </section>
  );
}