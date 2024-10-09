import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CountriesSection = () => (
  <section id="countries" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">国（オーストラリア）</h2>
      <AustralianCitiesCarousel />
    </div>
  </section>
);

const AustralianCitiesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const cities = [
    'シドニー', 'メルボルン', 'パース', 'ブリスベン',
    'ゴールドコースト', 'ケアンズ', 'アデレード', 'キャンベラ'
  ];

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cities.map((city, index) => (
            <div key={index} className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] p-2">
              <Card className="w-full h-[7.94cm] transition-transform duration-300 hover:scale-105">
                <CardContent className="p-0 h-full">
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
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};