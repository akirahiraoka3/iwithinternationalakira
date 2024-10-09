import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2">
            {cities.map((city, index) => (
              <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="w-[10cm] h-[13cm] overflow-hidden">
                    <CardContent className="p-4 h-full flex flex-col">
                      <h3 className="text-xl font-semibold mb-2">{city.name}</h3>
                      <p className="text-sm text-gray-600 mb-4 flex-grow">{city.description}</p>
                      <div className="h-[50%] relative">
                        <img
                          src={`/images/${city.name.toLowerCase()}.jpg`}
                          alt={city.name}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-12 h-12 left-[-3rem]" />
          <CarouselNext className="w-12 h-12 right-[-3rem]" />
        </Carousel>
      </div>
    </section>
  );
};