import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="relative h-96">
      <img
        src="/images/language-study-hero.jpg"
        alt="Students in a language class"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white text-center">
          言語を学び、世界を広げる<br />語学留学プログラム
        </h1>
      </div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">効果的な語学習得と文化体験</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            語学留学プログラムは、現地の環境に身を置きながら効果的に言語スキルを向上させる絶好の機会です。
            日常生活の中で言語を使用することで、教室では得られない実践的なコミュニケーション能力を身につけることができます。
            また、現地の文化に直接触れることで、言語だけでなく、異文化理解も深めることができます。
          </p>
          <img src="/images/language-immersion.jpg" alt="Students practicing language" className="w-1/3 object-cover" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">多様な留学先と柔軟なプログラム</h2>
        <p className="mb-4">
          英語、フランス語、スペイン語、中国語など、様々な言語の留学プログラムを提供しています。
          短期から長期まで、あなたのニーズに合わせて柔軟に期間を選択できます。
          また、ホームステイや学生寮など、滞在方法も選択可能です。
        </p>
        <img src="/images/language-destinations.jpg" alt="Various language study destinations" className="w-full h-64 object-cover mb-4" />
        <p className="text-sm italic">世界中の多様な留学先で、あなたの語学力と国際感覚を磨きます。</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">充実したサポート体制</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            IWITH Internationalは、留学先の選定から、ビザ申請、現地での生活サポートまで、
            あなたの語学留学をトータルでサポートします。
            24時間体制のサポートで、安心して海外での学習と生活に専念することができます。
            また、帰国後のフォローアップも行い、留学で得た経験を最大限に活かせるようサポートします。
          </p>
          <img src="/images/language-support.jpg" alt="Support team" className="w-1/3 object-cover" />
        </div>
      </div>
    </section>
  );
};

const LanguageStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default LanguageStudy;