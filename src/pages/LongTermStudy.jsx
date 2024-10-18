import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LongTermStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">長期留学って？</h1>
        <p className="mb-4">
          長期留学は、通常6ヶ月から1年以上の期間で行われる留学プログラムです。
          深い語学力の習得や文化理解、学位取得などを目的としています。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>高度な語学力の習得が可能</li>
          <li>現地の教育システムに深く触れる機会</li>
          <li>長期的な異文化生活体験</li>
          <li>キャリアにつながる専門知識や技能の習得</li>
        </ul>
        <p>
          長期留学は、語学力だけでなく、人間的成長や
          国際的な視野の獲得にも大きく貢献します。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LongTermStudy;