import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div id="contact" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-500">
            Ready to accelerate your growth? Let's talk about your business goals.
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
              <p className="mt-2 text-gray-500">contact@YoiGowthPartners.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-500">076 662 1687</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Office</h3>
              <p className="mt-2 text-gray-500">1 Maxwell Drive, Sunninghill, Sandton</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}