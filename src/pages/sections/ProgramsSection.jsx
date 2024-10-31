import React from 'react';
import { Link } from 'react-router-dom';

export const ProgramsSection = () => {
  const programs = [
    { 
      title: '海外インターンシップ', 
      description: '実践的なスキルを海外で身につけましょう。',
      image: 'https://cdn.midjourney.com/71da1bd6-e8b3-4ed7-8ece-3c473c673f79/0_0.png',
      link: '/internship'
    },
    { 
      title: '短期・長期留学', 
      description: '海外の高校・大学への留学をトータルサポート。',
      image: 'https://cdn.midjourney.com/d9efade1-2a3f-4cdc-8789-a96b13272d8e/0_2.png',
      link: '/language-study'
    },
    { 
      title: 'ワーキングホリデー', 
      description: '現地の文化を体験しながら語学力を向上。',
      image: 'https://cdn.midjourney.com/12529148-14bd-4771-8422-9a4a922e385c/0_2.png',
      link: '/working-holiday'
    },
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">渡航のプラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link 
              key={index} 
              to={program.link} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <span 
                    className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                  >
                    もっと詳しく
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};