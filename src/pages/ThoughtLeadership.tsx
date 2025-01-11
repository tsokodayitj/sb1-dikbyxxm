import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { Download, Share2 } from 'lucide-react';

const insights = [
  {
    type: 'Whitepaper',
    title: 'The Future of InsurTech in Africa',
    description: 'An in-depth analysis of technological innovation in the African insurance sector, focusing on mobile-first solutions and microinsurance platforms.',
    downloadUrl: '#',
    date: 'March 2024',
    readTime: '25 min read'
  },
  {
    type: 'Research Report',
    title: 'Insurance Penetration Trends: 2024',
    description: 'Comprehensive study of insurance adoption rates across African markets, with detailed analysis of growth drivers and market opportunities.',
    downloadUrl: '#',
    date: 'February 2024',
    readTime: '40 min read'
  },
  {
    type: 'Industry Analysis',
    title: 'Regulatory Evolution in African Insurance',
    description: 'Expert analysis of changing regulatory landscapes across key African markets and their impact on insurance businesses.',
    downloadUrl: '#',
    date: 'January 2024',
    readTime: '15 min read'
  }
];

export function ThoughtLeadership() {
  return (
    <PageLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Insurance Industry Insights
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Expert perspectives on the African insurance landscape
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight) => (
              <div key={insight.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-indigo-600">{insight.type}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <time dateTime={insight.date}>{insight.date}</time>
                      <span className="mx-2">•</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.description}</p>
                  <div className="flex justify-between items-center">
                    <button className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="inline-flex items-center text-gray-500 hover:text-gray-400">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}