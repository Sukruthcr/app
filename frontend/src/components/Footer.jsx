import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0f1419] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 Sukruth CR. All rights reserved.
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-current" /> and passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;