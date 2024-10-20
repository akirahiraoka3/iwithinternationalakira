import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Plant, HandCoins, DollarSign } from 'lucide-react';

export const ReasonsSection = () => {
  const reasons = [
    {
      icon: <Plant className="w-12 h-12 text-red-600" />,
      title: "かぶミニ（単元未満株）",
      description: "取引手数料が無料"
    },
    {
      icon: <HandCoins className="w-12 h-12 text-red-600" />,
      title: "投資信託すべての銘柄",
      description: "買付手数料が無料"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-red-600" />,
      title: "米ドル⇔円のリアルタイム為替取引",
      description: "往復手数料が0銭"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">いつでも・どなたでも</h2>
        <h3 className="text-4xl font-bold mb-12 text-center text-red-600">
          業界最低水準の取引コストを実現
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-2 border-red-600">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="mb-4">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-center">{reason.title}</h4>
                <p className="text-red-600 font-bold text-lg text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;