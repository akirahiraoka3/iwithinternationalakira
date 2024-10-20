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
    <section id="reasons" className="bg-green-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-8 text-center text-green-300">安心・安全</h2>
        <p className="text-center text-green-100 mb-12">
          Wiseは1000万人を超える名客様の、何百兆円300ポンドの送金を安全にサポートしています。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <Link to={reason.link} key={index}>
              <Card className="bg-green-800 text-green-100 border-none hover:bg-green-700 transition-colors">
                <CardHeader>
                  <div className="mb-4 bg-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                    {React.cloneElement(reason.icon, { className: "w-6 h-6 text-green-100" })}
                  </div>
                  <CardTitle className="text-green-300">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100">{reason.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};