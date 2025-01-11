import React, { ReactNode } from 'react';
import { ContactRibbon } from './ContactRibbon';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}