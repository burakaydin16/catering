import React, { useState } from 'react';
import { MenuCategory } from '../types';
import { Button } from './Button';

const menuCategories: MenuCategory[] = [
  {
    id: 'wedding',
    title: 'Düğün Menüleri',
    items: [
      { name: 'Osmanlı Tabağı', description: 'Humus, şakşuka, yaprak sarma, haydari', image: 'https://picsum.photos/400/300?random=10' },
      { name: 'Kuzu Tandır', description: 'İç pilav ve közlenmiş domates biber eşliğinde', image: 'https://picsum.photos/400/300?random=11' },
      { name: 'Trileçe', description: 'Karamel soslu ve frambuazlı', image: 'https://picsum.photos/400/300?random=12' },
    ]
  },
  {
    id: 'corporate',
    title: 'Kurumsal Lunch',
    items: [
      { name: 'Izgara Tavuk', description: 'Mevsim sebzeleri ve püre ile', image: 'https://picsum.photos/400/300?random=13' },
      { name: 'Mevsim Salatası', description: 'Nar ekşili sos ile taze yeşillikler', image: 'https://picsum.photos/400/300?random=14' },
      { name: 'Mercimek Çorbası', description: 'Kıtır ekmek ve limon sosu ile', image: 'https://picsum.photos/400/300?random=15' },
    ]
  },
  {
    id: 'cocktail',
    title: 'Kokteyl Prolonge',
    items: [
      { name: 'Mini Burgerler', description: 'Cheddar peyniri ve karamelize soğanlı', image: 'https://picsum.photos/400/300?random=16' },
      { name: 'Somon Kanepe', description: 'Krem peynir ve dereotu ile', image: 'https://picsum.photos/400/300?random=17' },
      { name: 'Çıtır Karides', description: 'Tatlı ekşi sos eşliğinde', image: 'https://picsum.photos/400/300?random=18' },
    ]
  },
];

export const MenuDisplay: React.FC = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);

  const activeCategory = menuCategories.find(c => c.id === activeTab);

  return (
    <section id="menus" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-2">Lezzetlerimiz</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Menü Seçenekleri
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary-700 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory?.items.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-xl font-bold mb-2 font-serif">{item.name}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Daha fazla seçenek ve özel menüler için yapay zeka asistanımızı deneyin.</p>
          <Button variant="outline" onClick={() => document.getElementById('ai-planner')?.scrollIntoView({ behavior: 'smooth'})}>
            Kendi Menünü Oluştur
          </Button>
        </div>
      </div>
    </section>
  );
};