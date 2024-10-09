import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const CountriesSection = () => {
  const cities = [
    'シドニー', 'メルボルン', 'パース', 'ブリスベン',
    'ゴールドコースト', 'ケアンズ', 'アデレード', 'キャンベラ'
  ];

  return (
    <section id="countries" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">国（オーストラリア）</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cities.map((city, index) => (
            <Card key={index} className="transition-transform duration-300 hover:scale-105">
              <CardContent className="p-0 h-[200px] relative">
                <img
                  src={`/images/${city.toLowerCase()}.jpg`}
                  alt={city}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-lg font-semibold p-4">{city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};