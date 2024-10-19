import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: "佐藤花子",
      position: "大学生",
      content: "IWITH Internationalのおかげで、憧れの海外インターンシップを経験できました。現地での生活や仕事を通じて、自分の可能性が大きく広がったと感じています。",
      avatar: "/avatars/hanako-sato.jpg",
    },
    {
      name: "鈴木太郎",
      position: "会社員",
      content: "語学留学プログラムに参加しましたが、親身なサポートで安心して留学生活を送ることができました。語学力だけでなく、異文化理解も深まり、かけがえのない経験となりました。",
      avatar: "/avatars/taro-suzuki.jpg",
    },
    {
      name: "田中美咲",
      position: "高校生",
      content: "高校留学を通じて、自分の視野が大きく広がりました。IWITH Internationalのサポートのおかげで、不安なく充実した留学生活を送ることができました。",
      avatar: "/avatars/misaki-tanaka.jpg",
    },
    {
      name: "山田健太",
      position: "大学院生",
      content: "大学院留学のサポートを受けましたが、出願から入学までの複雑なプロセスを丁寧にガイドしてくれました。今、世界トップレベルの環境で研究ができています。",
      avatar: "/avatars/kenta-yamada.jpg",
    },
    {
      name: "中村愛",
      position: "フリーランス",
      content: "ワーキングホリデープログラムを利用しましたが、海外での就労体験は自分のキャリアに新たな可能性を開いてくれました。IWITH Internationalの的確なアドバイスに感謝しています。",
      avatar: "/avatars/ai-nakamura.jpg",
    },
    {
      name: "小林龍太",
      position: "起業家",
      content: "短期のビジネス英語プログラムに参加しましたが、実践的なスキルを身につけることができました。国際的なビジネス展開に自信が持てるようになりました。",
      avatar: "/avatars/ryuta-kobayashi.jpg",
    },
  ];

  const totalTestimonials = testimonials.length;
  const visibleTestimonials = 3;
  const maxIndex = totalTestimonials - visibleTestimonials;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === maxIndex ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <section id="testimonials" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">留学体験者の声</h2>
        <div className="flex items-center justify-between mb-8">
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" onClick={handlePrev} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext} disabled={currentIndex === maxIndex}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` 
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <Card className="h-full">
                  <CardHeader className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center italic">"{testimonial.content}"</p>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;