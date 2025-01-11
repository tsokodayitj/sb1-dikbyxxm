import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-gray-700 hover:text-indigo-600';
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Yoi Growth Partners</span>
            </Link>
            <div className="hidden sm:flex sm:space-x-8">
              <Link to="/consulting" className={`${isActive('/consulting')} px-3 py-2 text-sm font-medium`}>
                Consulting Services
              </Link>
              <Link to="/valuations" className={`${isActive('/valuations')} px-3 py-2 text-sm font-medium`}>
                Business Valuations
              </Link>
              <Link to="/tools" className={`${isActive('/tools')} px-3 py-2 text-sm font-medium`}>
                Operational Tools
              </Link>
              <Link to="/thought-leadership" className={`${isActive('/thought-leadership')} px-3 py-2 text-sm font-medium`}>
                Thought Leadership
              </Link>
              <Link to="/news" className={`${isActive('/news')} px-3 py-2 text-sm font-medium`}>
                News Room
              </Link>
              <Link to="/contact" className={`${isActive('/contact')} px-3 py-2 text-sm font-medium`}>
                Contact
              </Link>
            </div>
            <button
              className="sm:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activePathname={location.pathname}
      />
    </>
  );
}