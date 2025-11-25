import React from 'react';
import { TENANTS } from '../constants';
import { Store, ShoppingBag, Box, Coffee } from 'lucide-react';

const Leases: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Anchor': return <Coffee className="h-6 w-6 text-brand-dark" />;
      case 'Pad': return <Store className="h-6 w-6 text-brand-dark" />;
      case 'Storage': return <Box className="h-6 w-6 text-brand-dark" />;
      default: return <ShoppingBag className="h-6 w-6 text-brand-dark" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-brand-primary">Tenant Profile</h2>
          <p className="mt-4 text-xl text-gray-600">Secured income from national brands.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TENANTS.map((tenant, index) => (
            <div key={index} className="group relative bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {getIcon(tenant.type)}
              </div>
              <div className="h-12 w-12 bg-brand-light rounded-lg flex items-center justify-center mb-4">
                {getIcon(tenant.type)}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tenant.name}</h3>
              
              <div className="space-y-3 mt-4">
                <div>
                    <p className="text-xs text-gray-500 uppercase">Annual Income</p>
                    <p className="font-mono font-semibold text-brand-primary">${tenant.annualIncome.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500 uppercase">Lease Term</p>
                    <p className="text-sm text-gray-700">{tenant.leaseTerm}</p>
                </div>
                {tenant.allowance && (
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Incentive Allowance</p>
                        <p className="text-sm text-gray-700">${tenant.allowance.toLocaleString()}</p>
                    </div>
                )}
                 {tenant.sqFtRate && (
                    <div>
                        <p className="text-xs text-gray-500 uppercase">Rate</p>
                        <p className="text-sm text-gray-700">{tenant.sqFtRate}</p>
                    </div>
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {tenant.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leases;