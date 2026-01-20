import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop" 
          alt="Elegant Catering Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative mt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-accent-500/20 backdrop-blur-sm border border-accent-500/30 rounded-full mb-6">
            <span className="text-accent-400 font-medium tracking-wider text-sm uppercase">Yılların Tecrübesiyle Yeniden</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Lezzetin En Saf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-white">
              Hali ile Tanışın
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Yeni Pamuk Catering olarak; geçmişten gelen ustalığımızı, modern sunumlar ve hijyenik üretim anlayışıyla birleştiriyoruz. En özel günlerinizde yanınızdayız.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" className="gap-2 group">
              <a href="#ai-planner">Akıllı Menü Oluştur</a>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 focus:ring-white">
              <a href="#contact">Bize Ulaşın</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};