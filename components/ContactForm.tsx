import React from 'react';
import { Phone } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl font-serif font-bold text-brand-primary mb-6">Request Due Diligence Package</h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Gain access to detailed financial reports, environmental assessments, and architectural plans.
        </p>
        
        <div className="bg-brand-light rounded-2xl p-10 shadow-lg border border-gray-100 inline-block w-full max-w-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Phone className="h-8 w-8 text-brand-accent" />
                </div>
                <p className="font-bold text-gray-900 text-2xl mb-2">Call Us</p>
                <p className="text-gray-800 font-bold text-xl">Jamie Isherwood</p>
                <p className="text-gray-600 font-medium mb-1">Real Estate Sales Representative</p>
                <p className="text-gray-500 text-sm mb-6">Exp Realty Brokerage Inc.</p>
                <a href="tel:2806681668" className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-bold rounded-full text-white bg-brand-accent hover:bg-yellow-500 hover:scale-105 transition-all shadow-md">
                    280 668 1668
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;