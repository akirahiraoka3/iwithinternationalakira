import React from 'react';
import { Link } from 'react-router-dom';

export const ProgramsSection = () => {
  const programs = [
    { 
      title: '海外インターンシップ', 
      description: '実践的なスキルを海外で身につけましょう。',
      link: '/internship'
    },
    { 
      title: '短期・長期留学', 
      description: '海外の高校・大学への留学をトータルサポート。',
      link: '/university-support'
    },
    { 
      title: 'ワーキングホリデー', 
      description: '現地の文化を体験しながら語学力を向上。',
      link: '/language-study'
    },
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">留学のプラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">{program.title} イメージ</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <Link 
                  to={program.link} 
                  className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  もっと詳しく
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};