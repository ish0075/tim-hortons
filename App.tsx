
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SitePlan from './components/SitePlan';
import Financials from './components/Financials';
import Leases from './components/Leases';
import Valuation from './components/Valuation';
import Podcast from './components/Podcast';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans antialiased selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      
      <main>
        {/* Hero Section: High Impact Visual */}
        <Hero />

        {/* Executive Summary & Site Plan */}
        <SitePlan />

        {/* Core Financial Data */}
        <Financials />

        {/* Tenant Details */}
        <Leases />

        {/* Exit Strategy */}
        <Valuation />

        {/* Audio Overview */}
        <Podcast />

        {/* Lead Generation */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
};

export default App;
