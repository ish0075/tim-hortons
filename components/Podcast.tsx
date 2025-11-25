import React from 'react';
import { Headphones, Radio } from 'lucide-react';

const Podcast: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center justify-center p-4 bg-brand-primary rounded-full mb-6 shadow-lg group hover:scale-105 transition-transform duration-300">
          <Headphones className="h-8 w-8 text-brand-accent group-hover:text-white transition-colors" />
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-brand-primary mb-4">Investment Audio Overview</h2>
        <p className="text-lg text-gray-600 mb-8">
          Listen to the comprehensive breakdown of the 2325 HWY 20 opportunity, including financial highlights and development scope.
        </p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-4 text-sm font-medium text-gray-500">
             <span className="flex items-center">
                <Radio className="h-4 w-4 mr-2 text-red-500 animate-pulse" />
                Audio Briefing
             </span>
             <span>MP3</span>
          </div>
          
          <audio 
            controls 
            className="w-full focus:outline-none"
            src="https://unknown-violet-o2iutikuwr-kb3vhlc25n.edgeone.dev/tim_hortons_podcast.mp3"
          >
            Your browser does not support the audio element.
          </audio>
        </div>

      </div>
    </section>
  );
};

export default Podcast;