import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UniversitySupport = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[calc(100vh-64px)]">
        <img
          src="/images/university-support-hero.jpg"
          alt="Students on a university campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            夢の実現へ<br />高校・大学留学サポート
          </h1>
        </div>
      </div>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">高校・大学留学サポート</h2>
        <p className="mb-4">
          高校・大学留学は、世界トップレベルの教育を受けながら、多様な文化や価値観に触れる絶好の機会です。
          海外の教育機関で学ぶことで、グローバルな視点と国際競争力を身につけることができます。
        </p>
        <p className="mb-4">
          IWITH Internationalは、高校留学から大学留学まで、あなたの目標に合わせた留学プランを提供します。
          学校選びから出願手続き、ビザ申請、現地でのサポートまで、留学のすべての段階で専門的なサポートを提供します。
        </p>
        <p>
          留学後のキャリアプランニングもサポートしています。グローバル企業とのネットワークを活かし、
          インターンシップや就職の機会も提供しています。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UniversitySupport;