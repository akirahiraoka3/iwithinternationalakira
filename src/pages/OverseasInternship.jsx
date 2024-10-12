import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OverseasInternship = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative h-[calc(100vh-64px)]">
        <img
          src="/images/internship-hero.jpg"
          alt="Students in an overseas internship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white text-center">
            グローバルキャリアへの第一歩<br />海外インターンシップ
          </h1>
        </div>
      </div>
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">海外インターンシッププログラム</h2>
        <p className="mb-4">
          海外インターンシップは、グローバルな環境で実践的なスキルを身につける絶好の機会です。
          異文化の中でのビジネス経験は、将来のキャリアに大きな価値をもたらします。
        </p>
        <p className="mb-4">
          言語スキルの向上はもちろん、国際的な視野と適応力を養うことができます。
          IT、金融、マーケティング、教育など、様々な業界でのインターンシップ機会を提供しています。
        </p>
        <p>
          IWITH Internationalは、インターンシップ先の選定から、ビザ申請、現地でのサポートまで、
          全面的にあなたの海外インターンシップ体験をサポートします。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default OverseasInternship;