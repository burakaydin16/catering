import React from 'react';
import { ChefHat } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <ChefHat size={32} />
              <span className="text-xl font-serif font-bold">YENİ PAMUK</span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Köklü geçmişimiz ve yenilenen yüzümüzle; en özel günlerinizde damak tadınıza uygun, hijyenik ve estetik sunumlar hazırlıyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-primary-500 transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-primary-500 transition-colors">Hizmetler</a></li>
              <li><a href="#menus" className="hover:text-primary-500 transition-colors">Menüler</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hizmet Bölgeleri</h4>
            <ul className="space-y-3">
              <li>İstanbul Avrupa</li>
              <li>İstanbul Anadolu</li>
              <li>Kocaeli (Kurumsal)</li>
              <li>Tekirdağ (Kurumsal)</li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Yeni Pamuk Catering. Tüm hakları saklıdır.</p>
          <p className="mt-2 md:mt-0">Lezzet ve Güvenin Adresi</p>
        </div>
      </div>
    </footer>
  );
};