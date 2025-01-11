import React, { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Search, Filter, Share2 } from 'lucide-react';

const newsItems = [
  {
    title: 'African Insurance Market Shows Strong Growth in Q1 2024',
    summary: 'Latest industry reports indicate significant growth in insurance penetration across major African markets, driven by digital adoption and innovative distribution channels.',
    source: 'Insurance Business Africa',
    date: '2024-03-20',
    category: 'Market Analysis',
    country: 'Pan-African',
    url: '#'
  },
  {
    title: 'New InsurTech Solutions Transform Nigerian Market',
    summary: 'Nigerian insurance sector sees rapid digital transformation as local InsurTech startups introduce mobile-first insurance solutions targeting underserved segments.',
    source: 'TechInsurance Daily',
    date: '2024-03-19',
    category: 'InsurTech',
    country: 'Nigeria',
    url: '#'
  },
  {
    title: 'Regulatory Changes Boost Kenya\'s Insurance Sector',
    summary: 'Recent regulatory reforms in Kenya\'s insurance sector aim to increase market stability and consumer protection while promoting innovation.',
    source: 'East African Business Weekly',
    date: '2024-03-18',
    category: 'Regulation',
    country: 'Kenya',
    url: '#'
  }
];

const categories = ['Market Analysis', 'InsurTech', 'Regulation', 'Life Insurance', 'General Insurance'];
const countries = ['Pan-African', 'Nigeria', 'Kenya', 'South Africa', 'Ghana'];

export function NewsRoom() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    const matchesCountry = !selectedCountry || item.country === selectedCountry;
    return matchesSearch && matchesCategory && matchesCountry;
  });

  return (
    <PageLayout>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Insurance News Room
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Latest updates from the African insurance industry
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search news..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">All Countries</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {filteredNews.map((item) => (
              <div key={item.title} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <a href={item.url} className="hover:text-indigo-600">{item.title}</a>
                    </h2>
                    <p className="text-gray-600 mb-4">{item.summary}</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-500">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{item.source}</span>
                  <span className="mx-2">•</span>
                  <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
                  <span className="mx-2">•</span>
                  <span className="text-indigo-600">{item.category}</span>
                  <span className="mx-2">•</span>
                  <span>{item.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}