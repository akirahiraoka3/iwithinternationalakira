import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HighSchoolStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">高校留学って？</h1>
        <p className="mb-4">
          高校留学は、海外の高校に在籍して学ぶプログラムです。
          通常、1学期から1年間の期間で行われます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>若いうちから異文化体験ができる</li>
          <li>現地の高校生と同じ環境で学習</li>
          <li>語学力の飛躍的な向上が期待できる</li>
          <li>ホームステイを通じて深い文化理解が可能</li>
        </ul>
        <p>
          高校留学は、将来のグローバルな進路選択に大きな影響を与える貴重な経験となります。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HighSchoolStudy;