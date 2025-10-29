import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600 text-white font-bold">HS</span>
            <span className="font-semibold">HomeServe</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="text-gray-700 hover:text-emerald-700">Services</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-700">How it works</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-700">Pricing</a>
            <a href="#cta" className="rounded-md bg-emerald-600 px-3 py-2 text-white hover:bg-emerald-700">Book on WhatsApp</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <div id="cta"><HeroSection /></div>
        <ServicesSection />
        <HowItWorks />
        <PricingSection />
      </main>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} HomeServe Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-emerald-700">Services</a>
            <a href="#how-it-works" className="hover:text-emerald-700">How it works</a>
            <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
