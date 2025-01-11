import React from 'react';

interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.split('\n\n').map((paragraph, index) => (
        <p key={index} className="mb-4 text-gray-700">
          {paragraph}
        </p>
      ))}
    </div>
  );
}