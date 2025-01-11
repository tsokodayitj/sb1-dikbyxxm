import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activePathname: string;
}

export function MobileMenu({ isOpen, onClose, activePathname }: MobileMenuProps) {
  const isActive = (path: string) => {
    return activePathname === path ? 'text-indigo-600' : 'text-gray-900';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="text-lg font-medium">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <Link
            to="/consulting"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/consulting')}`}
          >
            Consulting Services
          </Link>
          <Link
            to="/valuations"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/valuations')}`}
          >
            Business Valuations
          </Link>
          <Link
            to="/tools"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/tools')}`}
          >
            Operational Tools
          </Link>
          <Link
            to="/thought-leadership"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/thought-leadership')}`}
          >
            Thought Leadership
          </Link>
          <Link
            to="/news"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/news')}`}
          >
            News Room
          </Link>
          <Link
            to="/contact"
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')}`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}