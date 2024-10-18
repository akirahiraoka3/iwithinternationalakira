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
          <li>短期間で効果的な語学学習が可能</li>
          <li>夏休みや春休みを利用して参加できる</li>
          <li>異文化体験と国際交流の機会</li>
          <li>長期留学の準備や試験的な経験として最適</li>
        </ul>
        <p>
          短期留学は、時間やコストの面で参加しやすく、
          将来の長期留学や海外でのキャリアを考える上で貴重な経験となります。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ShortTermStudy;