import React from 'react';
import { ArticleCard } from './ArticleCard';
import { articlesData } from '../data/articles';

export function ArticleList() {
  return (
    <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      {articlesData.map((article) => (
        <ArticleCard key={article.title} {...article} />
      ))}
    </div>
  );
}