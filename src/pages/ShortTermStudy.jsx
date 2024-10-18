import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ShortTermStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">短期留学って？</h1>
        <p className="mb-4">
          短期留学は、通常1ヶ月から3ヶ月程度の期間で行われる留学プログラムです。
          語学力の向上や異文化体験を短期間で集中的に行うことができます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>短期間で集中的に学習</li>
          <li>語学学校やサマープログラムが一般的</li>
          <li>比較的低コストで留学体験が可能</li>
          <li>学期中の休暇を利用して参加可能</li>
        </ul>
        <p>
          短期留学は、長期の留学を検討する前の「お試し留学」としても人気があります。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ShortTermStudy;