import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROJECT_DETAILS, KEY_STATS, HERO_IMAGE_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE_URL} 
          alt="Aerial view of 2325 ON-20"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-brand-accent/50 bg-brand-accent/10 text-brand-accent text-sm font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-brand-accent mr-2 animate-pulse"></span>
                {PROJECT_DETAILS.status}
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                Prime Investment <br />
                <span className="text-brand-accent">Opportunity</span>
              </h1>
              <p className="mt-4 text-xl text-gray-300 max-w-lg">
                Shovel-ready commercial development in the heart of Niagara Region. High-yield asset with secured national tenants.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#financials"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-brand-dark bg-brand-accent hover:bg-yellow-500 transition-transform hover:scale-105"
              >
                View Financials
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-500 text-base font-bold rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Request Access
              </a>
            </div>

            <div className="pt-4 border-t border-gray-700/50">
              <p className="text-gray-400 text-sm mb-3">Investment Highlights</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-success mr-2" />
                  <span>{PROJECT_DETAILS.siteSize}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-success mr-2" />
                  <span>{PROJECT_DETAILS.zoning}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <CheckCircle2 className="h-5 w-5 text-brand-success mr-2" />
                  <span>Clean Environmental</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stats Floating Card */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {KEY_STATS.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl hover:bg-white/15 transition-colors">
                <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                {stat.subtext && <p className="text-xs text-brand-accent mt-1">{stat.subtext}</p>}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;