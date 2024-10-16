import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "佐藤花子",
    avatar: "/avatars/hanako-sato.jpg",
    text: "IWITHのサポートのおかげで、憧れの海外インターンシップを経験できました。現地での生活や仕事の面でも親身にサポートしてくれて、安心して充実した日々を過ごせました。",
  },
  {
    name: "田中太郎",
    avatar: "/avatars/taro-suzuki.jpg",
    text: "語学留学を通じて、英語力だけでなく、異文化理解力も大きく向上しました。IWITHのきめ細かいカウンセリングのおかげで、自分に最適なプログラムを見つけることができました。",
  },
  {
    name: "山田健太",
    avatar: "/avatars/kenta-yamada.jpg",
    text: "大学留学のサポートを受けましたが、出願書類の作成から現地での生活立ち上げまで、すべての面でIWITHのスタッフが親身になってサポートしてくれました。夢の留学が実現できて本当に感謝しています。",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">留学体験者の声</h2>
        <div className="relative max-w-3xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback>{testimonials[currentIndex].name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                </div>
              </div>
              <p className="text-gray-600">{testimonials[currentIndex].text}</p>
            </CardContent>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}