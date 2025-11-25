import React from 'react';
import { PROJECT_DETAILS, DEVELOPMENT_COSTS, TENANTS } from '../constants';
import { DollarSign, TrendingUp, AlertCircle } from 'lucide-react';

const Financials: React.FC = () => {
  return (
    <section id="financials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-brand-primary mb-4">Financial Proforma</h2>
          <p className="text-xl text-gray-600">
            A transparent breakdown of capital requirements and projected stabilized revenue streams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Development Costs */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-brand-primary p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-brand-accent" />
                  Development Costs
                </h3>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Capital Allocation</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {DEVELOPMENT_COSTS.map((item, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 group">
                    <div>
                      <p className="font-semibold text-gray-800 group-hover:text-brand-primary transition-colors">{item.category}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.details}</p>
                    </div>
                    <p className="font-mono text-gray-700 font-medium">
                      ${item.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 bg-gray-50 -mx-6 -mb-6 px-6 pb-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-brand-primary">Total Approximate Costs</p>
                    <p className="text-xs text-gray-500">Includes Land, Construction & Soft Costs</p>
                  </div>
                  <p className="font-mono font-bold text-2xl text-brand-primary">
                    ${PROJECT_DETAILS.totalCost.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Revenue Schedule */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
             <div className="bg-brand-primary p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-brand-success" />
                  Revenue Schedule
                </h3>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Projected Income</span>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {TENANTS.map((tenant, index) => (
                  <div key={index} className="flex justify-between items-start py-3 border-b border-gray-100 last:border-0 group">
                    <div>
                      <p className="font-semibold text-gray-800 group-hover:text-brand-primary transition-colors">{tenant.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{tenant.leaseTerm} {tenant.type !== 'Storage' && `• ${tenant.type}`}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-mono text-gray-700 font-medium">
                        ${tenant.annualIncome.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-gray-400 uppercase">Per Annum</p>
                    </div>
                  </div>
                ))}
                
                {/* Filler to align heights if needed, or just visual spacing */}
                <div className="py-2"></div>
              </div>

              <div className="mt-6 pt-6 bg-brand-light -mx-6 -mb-6 px-6 pb-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg text-brand-primary">Total Net Income (NOI)</p>
                    <p className="text-xs text-gray-500">Stabilized Annual Projection</p>
                  </div>
                  <p className="font-mono font-bold text-2xl text-brand-success">
                    ${PROJECT_DETAILS.totalNetIncome.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Opportunity Note */}
        <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 shadow-sm flex items-start sm:items-center gap-4">
                <div className="flex-shrink-0">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">Value-Add Opportunity: Mobil Gas</h4>
                    <p className="text-gray-700 mt-1">
                        Potential for a separate corporate lease generating an additional <span className="font-bold text-gray-900">$195,000 per year</span>. 
                        <span className="text-sm text-gray-500 block sm:inline sm:ml-2">(Note: This income is separate from the $794,150 Total Net Income listed above).</span>
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Financials;