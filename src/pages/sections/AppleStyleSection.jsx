import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const AppleStyleSection = () => {
  const products = [
    { name: '短期留学', image: '/placeholder.svg' },
    { name: '長期留学', image: '/placeholder.svg' },
    { name: 'インターンシップ', image: '/placeholder.svg' },
    { name: '語学学校', image: '/placeholder.svg' },
    { name: '大学留学', image: '/placeholder.svg' },
    { name: 'ワーキングホリデー', image: '/placeholder.svg' },
  ];

  const features = [
    { title: '専門家によるサポート', image: '/placeholder.svg', description: '経験豊富なアドバイザーがあなたの留学をサポートします。' },
    { title: 'オンライン相談', image: '/placeholder.svg', description: '自宅から気軽に留学相談ができます。' },
    { title: '充実したプログラム', image: '/placeholder.svg', description: '多彩な留学プログラムをご用意しています。' },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">留学。あなたの未来への最高の投資です。</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
        {products.map((product, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <p className="text-center font-semibold">{product.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-8">いつでもどこでも、あなたの留学をサポートします。</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};