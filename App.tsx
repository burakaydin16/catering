import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { MenuDisplay } from './components/MenuDisplay';
import { AIQuoteGenerator } from './components/AIQuoteGenerator';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen selection:bg-primary-200 selection:text-primary-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <MenuDisplay />
        {/* Gemini AI Powered Section */}
        <AIQuoteGenerator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;