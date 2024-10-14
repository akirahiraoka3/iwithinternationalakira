import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

export const ProgramsSection = () => {
  const programs = [
    { 
      title: '海外インターンシップ', 
      description: '実践的なスキルを海外で身につけましょう。',
      image: '/images/internship.jpg',
      price: '50万円から',
      link: '/internship'
    },
    { 
      title: 'ワーキングホリデー', 
      description: '海外で働きながら語学力を向上させましょう。',
      image: '/images/working-holiday.jpg',
      price: '30万円から',
      link: '/working-holiday'
    },
    { 
      title: '語学留学', 
      description: '集中的に語学を学び、スキルアップを目指しましょう。',
      image: '/images/language-study.jpg',
      price: '40万円から',
      link: '/language-study'
    },
  ];

  return (
    <section id="programs" className="container mx-auto px-4 py-16 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">留学のプラン</h2>
      <p className="text-center mb-8 text-xl">いま人気です。最新プランを今すぐチェック。</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <Link to={program.link} key={index}>
            <Card className="overflow-hidden transition-transform duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                    <p className="text-sm text-white mb-2">{program.description}</p>
                    <p className="text-lg font-semibold text-white">{program.price}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};