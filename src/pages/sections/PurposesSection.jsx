import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const PurposesSection = () => (
  <section id="purposes" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center">留学の目的</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: '語学力・異文化理解', description: 'ネイティブスピーカーとの日常会話で実践的な語学力を身につけ、多様な文化に触れる', image: '/images/language-culture.jpg' },
        { title: 'キャリアアップ', description: '国際的な職場経験を通じて、グローバルなキャリアを築く', image: '/images/career.jpg' },
        { title: 'アルバイト', description: '現地でのアルバイト経験を通じて、実践的なスキルと経済的自立を学ぶ', image: '/images/part-time-job.jpg' },
      ].map((purpose, index) => (
        <Card key={index} className="transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <img
              src={purpose.image}
              alt={purpose.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <CardTitle className="mt-4">{purpose.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{purpose.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);