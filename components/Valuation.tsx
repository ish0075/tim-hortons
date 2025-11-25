import React from 'react';
import { PROJECT_DETAILS } from '../constants';
import { TrendingUp, DollarSign } from 'lucide-react';

const Valuation: React.FC = () => {
  return (
    <section id="valuation" className="py-24 bg-brand-primary text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <TrendingUp className="h-12 w-12 text-brand-accent mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Valuation Summary</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Based on a conservative 5% Capitalization Rate upon stabilization of the asset.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Total Project Cost</p>
                <p className="text-3xl font-mono font-bold">${PROJECT_DETAILS.totalCost.toLocaleString()}</p>
            </div>
             <div className="bg-brand-accent/20 backdrop-blur-sm rounded-2xl p-8 border border-brand-accent/50 scale-110 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                <p className="text-brand-accent text-sm uppercase tracking-wider mb-2 font-bold">Potential Selling Price</p>
                <p className="text-4xl font-mono font-bold text-white">${PROJECT_DETAILS.potentialSellPrice.toLocaleString()}</p>
                <div className="mt-2 text-xs text-brand-accent/80">@ 5% CAP RATE</div>
            </div>
             <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-brand-success text-sm uppercase tracking-wider mb-2 font-bold">Projected Net Profit</p>
                <p className="text-3xl font-mono font-bold text-brand-success">+${PROJECT_DETAILS.netProfit.toLocaleString()}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Valuation;