import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';

export function Home() {
  return (
    <PageLayout>
      <Hero />
      <Contact />
    </PageLayout>
  );
}