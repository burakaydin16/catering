import React, { useState } from 'react';
import { Sparkles, Loader2, ChefHat, Calendar, Users, UtensilsCrossed } from 'lucide-react';
import { generateSmartMenu } from '../services/geminiService';
import { EventDetails, GeneratedMenu } from '../types';
import { Button } from './Button';

export const AIQuoteGenerator: React.FC = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'result'>('form');
  const [formData, setFormData] = useState<EventDetails>({
    eventType: 'Düğün',
    guestCount: 100,
    season: 'Yaz',
    preferences: ''
  });
  const [result, setResult] = useState<GeneratedMenu | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    try {
      const menu = await generateSmartMenu(formData);
      setResult(menu);
      setStep('result');
    } catch (error) {
      console.error(error);
      setStep('form');
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };

  const reset = () => {
    setStep('form');
    setResult(null);
  };

  return (
    <section id="ai-planner" className="py-24 bg-primary-800 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-700/50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Info */}
          <div className="lg:w-1/3 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-accent-300 text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Yapay Zeka Destekli</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Hayalinizdeki Menüyü<br />Saniyeler İçinde Planlayın
            </h2>
            <p className="text-primary-100 text-lg leading-relaxed mb-8">
              Etkinlik detaylarınızı girin, yapay zeka şefimiz size özel, bütçenize uygun ve yaratıcı bir menü taslağı çıkarsın. Beğenirseniz hemen teklif alın.
            </p>
            
            <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary-100">
                    <div className="bg-white/10 p-2 rounded-lg"><Calendar /></div>
                    <span>Mevsime uygun lezzetler</span>
                </div>
                <div className="flex items-center gap-4 text-primary-100">
                    <div className="bg-white/10 p-2 rounded-lg"><Users /></div>
                    <span>Kişi sayısına göre porsiyonlama</span>
                </div>
                <div className="flex items-center gap-4 text-primary-100">
                    <div className="bg-white/10 p-2 rounded-lg"><UtensilsCrossed /></div>
                    <span>Gurme şef önerileri</span>
                </div>
            </div>
          </div>

          {/* Right Side: Interactive Card */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 min-h-[500px] flex flex-col justify-center">
              
              {step === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <ChefHat className="text-primary-600" />
                    Etkinlik Sihirbazı
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Etkinlik Türü</label>
                      <select 
                        className="w-full rounded-lg border-gray-300 bg-gray-50 border p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        value={formData.eventType}
                        onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                      >
                        <option>Düğün</option>
                        <option>Nişan / Söz</option>
                        <option>Kurumsal Toplantı</option>
                        <option>Doğum Günü</option>
                        <option>Kokteyl</option>
                        <option>İftar Yemeği</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mevsim</label>
                      <select 
                        className="w-full rounded-lg border-gray-300 bg-gray-50 border p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        value={formData.season}
                        onChange={(e) => setFormData({...formData, season: e.target.value})}
                      >
                        <option>İlkbahar</option>
                        <option>Yaz</option>
                        <option>Sonbahar</option>
                        <option>Kış</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tahmini Kişi Sayısı: {formData.guestCount}</label>
                    <input 
                      type="range" 
                      min="10" 
                      max="1000" 
                      step="10"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({...formData, guestCount: Number(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Özel Notlar (Opsiyonel)</label>
                    <textarea 
                      placeholder="Örn: Vejetaryen ağırlıklı olsun, deniz ürünü olmasın..."
                      className="w-full rounded-lg border-gray-300 bg-gray-50 border p-3 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all h-24 resize-none"
                      value={formData.preferences}
                      onChange={(e) => setFormData({...formData, preferences: e.target.value})}
                    />
                  </div>

                  <Button type="submit" fullWidth className="mt-4 gap-2">
                    <Sparkles size={18} />
                    Menü Oluştur
                  </Button>
                </form>
              )}

              {step === 'loading' && (
                <div className="flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                  <Loader2 size={48} className="text-primary-600 animate-spin" />
                  <h4 className="text-xl font-bold text-gray-900">Şef Yapay Zeka Düşünüyor...</h4>
                  <p className="text-gray-500 max-w-md">Mevsime en uygun taze ürünleri seçiyor ve misafirleriniz için dengeli bir menü kurguluyoruz.</p>
                </div>
              )}

              {step === 'result' && result && (
                <div className="animate-fadeIn">
                  <div className="flex justify-between items-start border-b pb-4 mb-4">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-primary-800">{result.title}</h3>
                        <p className="text-gray-500 text-sm mt-1">{result.description}</p>
                    </div>
                    <div className="bg-accent-50 text-accent-700 px-3 py-1 rounded-lg text-xs font-bold border border-accent-200">
                        {result.estimatedPriceRange}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Başlangıçlar</h4>
                      <ul className="space-y-2">
                        {result.starters.map((item, i) => (
                          <li key={i} className="text-gray-800 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                      <h4 className="text-sm font-bold text-primary-400 uppercase tracking-wider mb-3">Ana Yemekler</h4>
                      <ul className="space-y-2">
                        {result.mainCourses.map((item, i) => (
                          <li key={i} className="text-gray-900 font-medium text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-primary-700 rounded-full mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tatlı & Meyve</h4>
                      <ul className="space-y-2">
                        {result.desserts.map((item, i) => (
                          <li key={i} className="text-gray-800 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-6">
                    <p className="text-sm text-yellow-800 italic">
                      <span className="font-bold">Şefin Notu:</span> "{result.chefNote}"
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="primary" fullWidth onClick={() => window.location.href='#contact'}>
                      Bu Menü İçin Fiyat Al
                    </Button>
                    <Button variant="outline" onClick={reset}>
                      Yeni Oluştur
                    </Button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};