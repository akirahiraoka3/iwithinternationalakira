import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock, Shield, Clock, GraduationCap, Briefcase, Zap } from 'lucide-react';

export const ReasonsSection = () => {
  const reasons = [
    { icon: <Clock className="w-12 h-12" />, title: '豊富な経験', description: '10年以上の留学サポート実績' },
    { icon: <Shield className="w-12 h-12" />, title: '業界最安値・手数料０円', description: 'コストを抑えた留学プラン' },
    { icon: <Lock className="w-12 h-12" />, title: '24時間サポート', description: '留学中も安心のサポート体制' },
    { icon: <GraduationCap className="w-12 h-12" />, title: '帰国後の就職サポート', description: '留学後のキャリアもサポート' },
    { icon: <Briefcase className="w-12 h-12" />, title: '渡航後のお仕事・就職サポート', description: '現地での就職活動をサポート' },
    { icon: <Zap className="w-12 h-12" />, title: '迅速な手続き', description: 'スムーズな留学準備をサポート' },
  ];

  return (
    <section id="reasons" className="bg-green-800 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://cdn.midjourney.com/e27dcce8-dc2c-42b6-a5a3-a07ab832aa25/0_1.png"
              alt="Support Image"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">安心・安全</h2>
            <p className="text-green-200">現在も私たちはサービスを利用していただいているすべてのお客様を安全にサポートしています。</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-green-700 border-none">
              <CardHeader>
                <div className="mb-4 bg-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  {React.cloneElement(reason.icon, { className: "w-12 h-12 text-white" })}
                </div>
                <CardTitle className="text-xl font-semibold text-center text-white">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-200 text-center">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};