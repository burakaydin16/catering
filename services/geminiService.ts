import { GoogleGenAI, Type } from "@google/genai";
import { EventDetails, GeneratedMenu } from "../types";

// Initialize Gemini
// Note: In a real production app, ensure API keys are handled securely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateSmartMenu = async (details: EventDetails): Promise<GeneratedMenu | null> => {
  try {
    if (!process.env.API_KEY) {
        console.warn("API Key is missing. Returning mock data.");
        // Fallback mock data if API key is not present in user's environment
        return {
            title: "Yeni Pamuk Özel Düğün Menüsü",
            description: "Yaz mevsimine uygun, ferahlatıcı ve saf lezzetler.",
            starters: ["Zeytinyağlı Enginar Kalbi", "Humus", "Peynir Tabağı"],
            mainCourses: ["Izgara Levrek", "Közlenmiş Sebzeler"],
            desserts: ["Mevsim Meyveleri", "Dondurmalı İrmik"],
            estimatedPriceRange: "750₺ - 1000₺ / Kişi Başı",
            chefNote: "Misafirleriniz için hafif ve lezzetli bir seçim."
        };
    }

    const modelId = "gemini-3-flash-preview";
    
    const prompt = `
      Sen "Yeni Pamuk Catering" firmasının deneyimli baş şefisin.
      Markamız "Pamuk" gibi saf, temiz ve özenli hizmet anlayışını temsil ediyor.
      
      Aşağıdaki etkinlik detaylarına göre özel bir menü oluştur:
      
      Etkinlik Türü: ${details.eventType}
      Kişi Sayısı: ${details.guestCount}
      Mevsim: ${details.season}
      Özel İstekler/Tercihler: ${details.preferences}

      Lütfen yaratıcı, lezzetli, markamızın adına yakışır şıklıkta ve uyumlu bir menü hazırla. 
      Fiyat aralığını Türk Lirası olarak tahmin et.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Menü için yaratıcı bir isim" },
            description: { type: Type.STRING, description: "Menünün genel konseptini açıklayan kısa bir yazı" },
            starters: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Başlangıçlar ve mezeler listesi"
            },
            mainCourses: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Ana yemekler ve yan lezzetler"
            },
            desserts: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "Tatlılar ve meyveler"
            },
            estimatedPriceRange: { type: Type.STRING, description: "Kişi başı tahmini fiyat aralığı (örn: 500₺ - 700₺)" },
            chefNote: { type: Type.STRING, description: "Şefin bu menü hakkındaki özel notu veya tavsiyesi" }
          },
          required: ["title", "description", "starters", "mainCourses", "desserts", "estimatedPriceRange", "chefNote"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedMenu;
    }
    return null;

  } catch (error) {
    console.error("Error generating menu:", error);
    throw new Error("Menü oluşturulurken bir hata oluştu.");
  }
};