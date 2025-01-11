import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactRibbon() {
  return (
    <div className="bg-indigo-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Mail className="h-4 w-4 mr-2" />
            <span>contact@YoiGrowthPartners.com</span>
          </div>
          <div className="flex items-center mb-2 sm:mb-0">
            <MapPin className="h-4 w-4 mr-2" />
            <span>1 Maxwell Drive Sunninghill Sandton</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span>+27 (076) 662 1687</span>
          </div>
        </div>
      </div>
    </div>
  );
}