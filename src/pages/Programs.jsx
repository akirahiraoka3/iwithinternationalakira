import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    { 
      title: '海外インターンシップ', 
      description: '実践的なスキルを海外で身につけましょう。',
      image: '/images/internship.jpg',
      link: '/internship'
    },
    { 
      title: '短期・長期留学', 
      description: '現地の文化を体験しながら語学力を向上。',
      image: '/images/language-study.jpg',
      link: '/language-study'
    },
    { 
      title: 'ワーキングホリデー', 
      description: '海外の高校・大学への留学をトータルサポート。',
      image: '/images/university-support.jpg',
      link: '/university-support'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">留学のプラン</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Link to={program.link} key={index}>
              <Card className="transition-transform duration-300 hover:scale-105 h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="h-48 relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;