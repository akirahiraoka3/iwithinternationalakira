import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HeroSection = () => {
  return (
    <section className="relative h-96">
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
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">実践的なスキルと国際経験</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            海外インターンシップは、グローバルな環境で実践的なスキルを身につける絶好の機会です。
            異文化の中でのビジネス経験は、将来のキャリアに大きな価値をもたらします。
            言語スキルの向上はもちろん、国際的な視野と適応力を養うことができます。
          </p>
          <img src="/images/internship-skills.jpg" alt="Interns working together" className="w-1/3 object-cover" />
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">多様な業界でのインターンシップ機会</h2>
        <p className="mb-4">
          IT、金融、マーケティング、教育など、様々な業界でのインターンシップ機会を提供しています。
          あなたの興味や専門に合わせて、最適なプログラムを見つけることができます。
        </p>
        <img src="/images/internship-industries.jpg" alt="Various internship industries" className="w-full h-64 object-cover mb-4" />
        <p className="text-sm italic">多様な業界での経験が、将来のキャリアの可能性を広げます。</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">充実したサポート体制</h2>
        <div className="flex space-x-8">
          <p className="flex-1">
            IWITH Internationalは、インターンシップ先の選定から、ビザ申請、現地でのサポートまで、
            全面的にあなたの海外インターンシップ体験をサポートします。
            24時間体制のサポートで、安心して海外での生活と仕事に臨むことができます。
          </p>
          <img src="/images/internship-support.jpg" alt="Support team" className="w-1/3 object-cover" />
        </div>
      </div>
    </section>
  );
};

const OverseasInternship = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default OverseasInternship;