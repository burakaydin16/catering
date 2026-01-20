import React from 'react';
import { Utensils, Building2, PartyPopper, Truck } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'corporate',
    title: 'Kurumsal Yemek',
    description: 'Şirketler, fabrikalar ve ofisler için günlük, kalori hesaplı ve dengeli tabldot yemek hizmetleri.',
    icon: Building2,
  },
  {
    id: 'events',
    title: 'Davet & Organizasyon',
    description: 'Düğün, nişan, kokteyl ve açılışlar için konseptinize uygun özel sunumlar ve profesyonel servis.',
    icon: PartyPopper,
  },
  {
    id: 'boutique',
    title: 'Butik Catering',
    description: 'Ev davetleri ve özel VIP toplantılar için kişiye özel menü planlaması ve şef hizmeti.',
    icon: Utensils,
  },
  {
    id: 'transport',
    title: 'Taşıma Yemek',
    description: 'Hijyenik thermobox sistemi ile yemeği sıcaklığını ve tazeliğini koruyarak yerinize ulaştırıyoruz.',
    icon: Truck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 pattern-bg">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-2">Hizmetlerimiz</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Size Özel Çözümler
          </h3>
          <p className="text-gray-600">
            İster bin kişilik bir fabrika, ister yüz kişilik şık bir düğün olsun; her detayı profesyonellikle yönetiyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};