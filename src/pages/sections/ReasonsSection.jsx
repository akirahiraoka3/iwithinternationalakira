import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock, UserCheck, HeadphonesIcon, GraduationCap, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReasonsSection = () => {
  const reasons = [
    { icon: <Clock className="w-6 h-6" />, title: '豊富な経験', description: '10年以上の留学サポート実績', link: '/reasons#experience' },
    { icon: <UserCheck className="w-6 h-6" />, title: '業界最安値・手数料０円', description: 'コストを抑えた留学プラン', link: '/reasons#cost' },
    { icon: <HeadphonesIcon className="w-6 h-6" />, title: '24時間サポート', description: '留学中も安心のサポート体制', link: '/reasons#support' },
    { icon: <GraduationCap className="w-6 h-6" />, title: '帰国後の就職サポート', description: '留学後のキャリアもサポート', link: '/reasons#career' },
    { icon: <Briefcase className="w-6 h-6" />, title: '渡航後のお仕事・就職サポート', description: '現地での就職活動をサポート', link: '/reasons#overseas-career' },
    { icon: <Zap className="w-6 h-6" />, title: '迅速な手続き', description: 'スムーズな留学準備をサポート', link: '/reasons#quick-process' },
  ];

  return (
    <section id="reasons" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">選ばれる理由</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Link to={reason.link} key={index}>
              <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardHeader>
                  <div className="mb-4 bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                    {React.cloneElement(reason.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <CardTitle>{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};