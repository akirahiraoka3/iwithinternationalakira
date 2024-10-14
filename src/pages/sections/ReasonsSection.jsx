import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, UserCheck, HeadphonesIcon, GraduationCap, Globe, Zap } from 'lucide-react';

export const ReasonsSection = () => {
  const reasons = [
    { icon: <Clock className="w-6 h-6 text-white" />, title: '豊富な経験', description: '10年以上の留学サポート実績' },
    { icon: <UserCheck className="w-6 h-6 text-white" />, title: 'カスタマイズされたプラン', description: '一人ひとりのニーズに合わせたプログラム' },
    { icon: <HeadphonesIcon className="w-6 h-6 text-white" />, title: '24時間サポート', description: '留学中も安心のサポート体制' },
    { icon: <GraduationCap className="w-6 h-6 text-white" />, title: '質の高い教育機関', description: '世界トップクラスの提携校' },
    { icon: <Globe className="w-6 h-6 text-white" />, title: 'グローバルネットワーク', description: '世界中の留学生とのつながり' },
    { icon: <Zap className="w-6 h-6 text-white" />, title: '迅速な手続き', description: 'スムーズな留学準備をサポート' },
  ];

  return (
    <section id="reasons" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">選ばれる理由</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="transition-colors duration-300 hover:bg-black group">
              <CardHeader>
                <div className="mb-4 bg-black w-12 h-12 rounded-xl flex items-center justify-center group-hover:bg-white">
                  {React.cloneElement(reason.icon, { className: "w-6 h-6 text-white group-hover:text-black" })}
                </div>
                <CardTitle className="group-hover:text-white">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 group-hover:text-white">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};