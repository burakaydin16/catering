import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Kurumsal', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Menüler', href: '#menus' },
    { name: 'Akıllı Teklif', href: '#ai-planner', highlight: true },
    { name: 'İletişim', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-primary-100 text-primary-700' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
            <ChefHat size={32} />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-wide ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              YENİ PAMUK
            </span>
            <span className={`text-xs tracking-widest uppercase ${isScrolled ? 'text-primary-700' : 'text-white/80'}`}>
              Catering & Events
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                link.highlight 
                  ? 'bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full shadow-lg shadow-accent-500/20' 
                  : isScrolled 
                    ? 'text-gray-600 hover:text-primary-700' 
                    : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-gray-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl md:hidden py-6 px-4 flex flex-col gap-4 border-t">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium py-2 border-b border-gray-100 ${
                link.highlight ? 'text-accent-600 font-bold' : 'text-gray-700'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="tel:+905551234567" className="flex items-center gap-2 text-primary-700 font-bold mt-4">
            <Phone size={20} />
            +90 555 123 45 67
          </a>
        </div>
      )}
    </header>
  );
};