import React from 'react';
import { ContactRibbon } from '../../components/ContactRibbon';
import { ArticleList } from './components/ArticleList';

export function Insights() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Business Insights
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Expert analysis and thought leadership for South African businesses
            </p>
          </div>
          <ArticleList />
        </div>
      </div>
      <ContactRibbon />
    </div>
  );
}