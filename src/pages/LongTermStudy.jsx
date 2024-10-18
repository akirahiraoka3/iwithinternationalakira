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
          長期留学は、通常6ヶ月以上の期間で行われる留学プログラムです。
          深い言語習得や文化理解、学位取得などを目的としています。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>深い言語習得と文化理解が可能</li>
          <li>大学や専門学校での正規留学が一般的</li>
          <li>現地での生活体験を通じた成長</li>
          <li>キャリアにも活かせる長期的な経験</li>
        </ul>
        <p>
          長期留学は、語学力の向上だけでなく、人生観や価値観を大きく変える機会となることが多いです。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LongTermStudy;