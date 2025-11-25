import React, { useState } from 'react';
import { GALLERY_IMAGES, DUE_DILIGENCE_ITEMS, PROJECT_DETAILS } from '../constants';
import { MapPin, FileCheck, ChevronLeft, ChevronRight, Video } from 'lucide-react';

const SitePlan: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? GALLERY_IMAGES.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === GALLERY_IMAGES.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section id="site-plan" className="bg-brand-light">
      {/* Information Section */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
                <h2 className="text-3xl font-serif font-bold text-brand-primary mb-4">Location & Site Plan</h2>
                <div className="flex items-start text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-brand-accent" />
                    <p>{PROJECT_DETAILS.address}<br/>Proximity to Hwy 20, Merritville Hwy, Hwy 406</p>
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-brand-success" />
                    Due Diligence Status
                </h3>
                <ul className="space-y-3">
                    {DUE_DILIGENCE_ITEMS.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-success mr-2"></span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
          </div>
          
          {/* Main Visual - Interactive Map Placeholder */}
          <div className="lg:col-span-2 relative h-96 bg-gray-200 rounded-2xl overflow-hidden shadow-lg group">
             <img 
                src="https://i.imgur.com/F963xSg.png" 
                alt="Main Site Plan" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-brand-dark px-6 py-3 rounded-lg font-bold">View Interactive Plan</button>
             </div>
             {/* Map Legend Overlay */}
             <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-3 rounded-lg text-xs shadow-lg">
                <div className="font-bold mb-1">Legend</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-sm"></div> Tim Hortons (Existing)</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> Self Storage (Proposed)</div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-orange-500 rounded-sm"></div> Multi-Tenant (Proposed)</div>
             </div>
          </div>
        </div>
      </div>

      {/* Full Width Slideshow Section */}
      <div className="w-full bg-brand-dark pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <h3 className="text-xl font-semibold text-gray-300">Project Visuals</h3>
        </div>

        <div className="relative w-full h-[60vh] md:h-[80vh] group">
            {/* Main Image */}
            <div 
                style={{ backgroundImage: `url(${GALLERY_IMAGES[currentIndex].url})` }} 
                className="w-full h-full bg-center bg-cover duration-500"
            ></div>
            
            {/* Overlay Gradient for Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                 <div className="max-w-7xl mx-auto w-full">
                     <p className="text-white text-2xl font-serif font-bold">{GALLERY_IMAGES[currentIndex].caption}</p>
                     <p className="text-gray-300 text-sm mt-1">{currentIndex + 1} / {GALLERY_IMAGES.length}</p>
                 </div>
            </div>

            {/* Left Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors">
                <ChevronLeft onClick={prevSlide} size={30} />
            </div>
            
            {/* Right Arrow */}
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-colors">
                <ChevronRight onClick={nextSlide} size={30} />
            </div>

            {/* Dots */}
            <div className="flex justify-center py-4 gap-2 absolute bottom-2 w-full">
                {GALLERY_IMAGES.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className={`text-2xl cursor-pointer transition-all duration-300 ${
                        currentIndex === slideIndex ? 'text-brand-accent scale-125' : 'text-gray-500'
                    }`}
                >
                    <div className={`h-2 w-2 rounded-full ${currentIndex === slideIndex ? 'bg-brand-accent' : 'bg-gray-500'}`}></div>
                </div>
                ))}
            </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full bg-brand-dark pb-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex items-center mb-4">
                 <Video className="h-5 w-5 text-brand-accent mr-2" />
                 <h3 className="text-lg font-semibold text-gray-300">Site Buildout Visualization</h3>
             </div>
             <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-black">
                <video 
                  controls 
                  className="w-full h-auto aspect-video"
                  src="https://ik.imagekit.io/yyhbhkd7xq/tim%20hortons%20buildout.mp4"
                >
                  Your browser does not support the video tag.
                </video>
             </div>
         </div>
      </div>

      {/* Full Width Site Plan Images */}
      <div className="w-full flex flex-col">
         <img 
            src="https://i.imgur.com/AXn5Uyj.png" 
            alt="Master Site Plan" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/JBPKHN7.png" 
            alt="Detailed Site Layout" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/1vtrdQ9.png" 
            alt="Additional Site Details" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/aSwr91u.png" 
            alt="Site Rendering Details" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/EnmZ2EO.png" 
            alt="Additional Site Rendering 1" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/Fi8rJdZ.png" 
            alt="Additional Site Rendering 2" 
            className="w-full h-auto block"
         />
         <img 
            src="https://i.imgur.com/LnA3hnP.png" 
            alt="Site Data Table" 
            className="w-full h-auto block"
         />
      </div>
    </section>
  );
};

export default SitePlan;