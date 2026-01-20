import React from 'react';
import { Award, ShieldCheck, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop" 
                alt="Professional Chef" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop" 
                alt="Buffet Presentation" 
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-primary-50 text-center w-40 h-40 flex flex-col justify-center items-center z-10">
              <span className="text-4xl font-bold text-primary-700 block">20+</span>
              <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Yıllık Tecrübe</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-2">Hakkımızda</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Yeni Pamuk Catering: <br /> Saflık ve Lezzet.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Geçmişin deneyimini <strong>Yeni Pamuk Catering</strong> markasıyla tazeledik. Adımızdan ilham aldığımız saflık ve temizlik anlayışıyla, mutfağımızda sadece en taze malzemeleri kullanıyoruz. Butik hizmet anlayışımız ve yılların getirdiği ustalıkla, her ölçekteki organizasyon için kusursuz ve damaklarda iz bırakan çözümler sunuyoruz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck size={28} />
                </div>
                <h4 className="font-bold text-gray-900">Hijyenik Üretim</h4>
                <p className="text-sm text-gray-500">ISO standartlarında, steril ve güvenilir mutfak.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center">
                  <Award size={28} />
                </div>
                <h4 className="font-bold text-gray-900">Usta Eller</h4>
                <p className="text-sm text-gray-500">Geleneksel lezzetleri modern dokunuşlarla sunan uzman kadro.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center">
                  <Users size={28} />
                </div>
                <h4 className="font-bold text-gray-900">Müşteri Odaklı</h4>
                <p className="text-sm text-gray-500">Sizin mutluluğunuz, bizim en büyük referansımız.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};