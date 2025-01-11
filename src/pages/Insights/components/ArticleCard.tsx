import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export function ArticleCard({ title, excerpt, date, readTime, image }: ArticleProps) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={date}>{date}</time>
            <span className="mx-1">&middot;</span>
            <span>{readTime}</span>
          </div>
          <Link to={`/insights/${slug}`} className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 hover:text-indigo-600">{title}</p>
            <p className="mt-3 text-base text-gray-500">{excerpt}</p>
          </Link>
        </div>
        <div className="mt-6">
          <Link
            to={`/insights/${slug}`}
            className="text-base font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Read full article →
          </Link>
        </div>
      </div>
    </div>
  );
}