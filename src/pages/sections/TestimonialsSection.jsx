import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => (
  <section id="testimonials" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">体験談</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="transition-transform duration-300 hover:scale-105">
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">"IWITH Internationalのおかげで、憧れの海外インターンシップを経験できました。"</p>
            <p className="font-bold">- 佐藤花子さん</p>
          </CardContent>
        </Card>
        <Card className="transition-transform duration-300 hover:scale-105">
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">"親身なサポートで安心して留学生活を送ることができました。"</p>
            <p className="font-bold">- 鈴木太郎さん</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);