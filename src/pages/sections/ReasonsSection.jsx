import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const ReasonsSection = () => (
  <section id="reasons" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">選ばれる理由</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: '豊富な経験', description: '10年以上の留学サポート実績' },
          { title: 'カスタマイズされたプラン', description: '一人ひとりのニーズに合わせたプログラム' },
          { title: '24時間サポート', description: '留学中も安心のサポート体制' },
        ].map((reason, index) => (
          <Card key={index} className="transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle>{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);