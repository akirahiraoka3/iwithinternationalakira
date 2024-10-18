import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UniversityStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">大学留学って？</h1>
        <p className="mb-4">
          大学留学は、海外の大学で学位を取得したり、交換留学プログラムに参加したりする
          留学形態です。通常、1学期から4年間の期間で行われます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>専門分野での高度な知識・技能の習得</li>
          <li>国際的に認められる学位の取得が可能</li>
          <li>多様な文化背景を持つ学生との交流</li>
          <li>将来のキャリアに直結する経験</li>
        </ul>
        <p>
          大学留学は、学問的成長だけでなく、人間的成長や
          国際的なネットワーク構築の機会を提供します。
          グローバルな視点と専門知識を兼ね備えた人材として成長できます。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityStudy;