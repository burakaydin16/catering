import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-primary-700 font-bold uppercase tracking-widest text-sm mb-2">İletişim</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Bizimle İletişime Geçin
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary-900 text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h4 className="text-2xl font-serif font-bold mb-6">Yeni Pamuk Catering</h4>
              <p className="text-primary-200 mb-10 leading-relaxed">
                Her türlü soru, görüş ve teklif isteğiniz için bize ulaşabilirsiniz. Ekibimiz en kısa sürede dönüş yapacaktır.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">Telefon</p>
                    <p className="text-lg font-medium">+90 (555) 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">E-Posta</p>
                    <p className="text-lg font-medium">info@yenipamukcatering.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-300">Adres</p>
                    <p className="text-lg font-medium">İstanbul / Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h5 className="text-sm text-primary-300 mb-4 uppercase tracking-wider">Bizi Takip Edin</h5>
              <div className="flex gap-4">
                <a href="https://instagram.com/yenipamukcatering" target="_blank" rel="noreferrer" className="p-3 bg-white/5 hover:bg-white/20 rounded-full transition-colors"><Instagram size={20} /></a>
                <a href="#" className="p-3 bg-white/5 hover:bg-white/20 rounded-full transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-14">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                  <input type="text" className="w-full rounded-lg bg-gray-50 border-gray-200 border p-3 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="Ad Soyad" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input type="tel" className="w-full rounded-lg bg-gray-50 border-gray-200 border p-3 focus:ring-2 focus:ring-primary-500 outline-none" placeholder="0555..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                <select className="w-full rounded-lg bg-gray-50 border-gray-200 border p-3 focus:ring-2 focus:ring-primary-500 outline-none">
                  <option>Genel Bilgi</option>
                  <option>Düğün Teklifi</option>
                  <option>Kurumsal Anlaşma</option>
                  <option>Şikayet / Öneri</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                <textarea rows={4} className="w-full rounded-lg bg-gray-50 border-gray-200 border p-3 focus:ring-2 focus:ring-primary-500 outline-none resize-none" placeholder="Mesajınızı buraya yazınız..."></textarea>
              </div>

              <div className="pt-2">
                <Button fullWidth>Gönder</Button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};