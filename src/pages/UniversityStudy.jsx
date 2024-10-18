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
          大学留学は、海外の大学で学位を取得したり、交換留学プログラムに参加したりする形態の留学です。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>学士号や修士号などの学位取得が可能</li>
          <li>専門的な知識やスキルの習得</li>
          <li>国際的なネットワークの構築</li>
          <li>キャリアにつながる経験や資格の獲得</li>
        </ul>
        <p>
          大学留学は、学問的な成長だけでなく、将来のキャリアにも大きな影響を与える重要な選択肢です。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default UniversityStudy;