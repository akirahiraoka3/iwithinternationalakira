import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const CountriesSection = () => {
  const cities = [
    { name: 'シドニー', description: 'オーストラリア最大の都市。美しいハーバーブリッジとオペラハウスが有名。' },
    { name: 'メルボルン', description: '文化と芸術の中心地。カフェ文化が盛んで、多様性に富む街。' },
    { name: 'パース', description: '西オーストラリアの州都。美しいビーチと自然が魅力。' },
    { name: 'ブリスベン', description: 'クイーンズランド州の州都。温暖な気候と近代的な都市景観が特徴。' },
    { name: 'ゴールドコースト', description: '美しいビーチと高層ビル群が並ぶリゾート地。サーフィンの聖地。' },
    { name: 'ケアンズ', description: 'グレートバリアリーフへの玄関口。熱帯雨林も近くにある。' },
    { name: 'アデレード', description: '南オーストラリア州の州都。優れたワイン産地に囲まれている。' },
    { name: 'キャンベラ', description: 'オーストラリアの首都。計画的に作られた近代的な都市。' }
  ];

  return (
    <section id="countries" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">国（オーストラリア）</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Card key={index} className="w-[5cm] h-[8cm] overflow-hidden">
              <CardContent className="p-0 h-full flex flex-col">
                <div className="h-1/2 relative">
                  <img
                    src={`/images/${city.name.toLowerCase()}.jpg`}
                    alt={city.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white text-lg font-semibold p-2">{city.name}</h3>
                  </div>
                </div>
                <div className="h-1/2 p-2 overflow-y-auto">
                  <p className="text-sm text-gray-600">{city.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};