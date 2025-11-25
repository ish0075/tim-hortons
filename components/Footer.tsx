import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
            <span className="text-2xl font-serif font-bold text-white">2325 HWY 20</span>
            <p className="text-sm mt-2">Commercial Development Opportunity</p>
        </div>
        <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Sale</a>
            <a href="#" className="hover:text-white">Broker Cooperation</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 text-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Investment Portal. All financial projections are estimates based on current market data.</p>
      </div>
    </footer>
  );
};

export default Footer;