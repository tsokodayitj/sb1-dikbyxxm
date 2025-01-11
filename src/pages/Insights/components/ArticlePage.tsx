import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articlesData } from '../data/articles';
import { ContactRibbon } from '../../../components/ContactRibbon';
import { ArrowLeft } from 'lucide-react';

export function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const article = articlesData.find(
    article => article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
        <button
          onClick={() => navigate('/insights')}
          className="mt-4 text-indigo-600 hover:text-indigo-500"
        >
          Return to Insights
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center text-indigo-600 hover:text-indigo-500 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </button>
          
          <article>
            <div className="mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <header className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <time dateTime={article.date}>{article.date}</time>
                <span className="mx-2">&middot;</span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
            </header>

            <div className="prose prose-lg max-w-none">
              {article.content?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
      <ContactRibbon />
    </div>
  );
}