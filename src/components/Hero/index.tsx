import React from 'react';
import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <HeroContent />
      </div>
      <HeroImage />
    </div>
  );
}