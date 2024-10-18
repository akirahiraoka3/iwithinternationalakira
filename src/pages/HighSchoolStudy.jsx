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
          高校留学は、海外の高校に在籍し、現地の学生と同じ環境で学ぶプログラムです。
          通常、3ヶ月から1年間の期間で行われます。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>若いうちから異文化に触れる機会</li>
          <li>現地の教育システムを体験</li>
          <li>語学力の飛躍的な向上</li>
          <li>国際的な友人関係の構築</li>
        </ul>
        <p>
          高校留学は、将来のキャリアや人生設計に大きな影響を与える
          貴重な経験となります。早い段階での国際経験は、
          グローバル社会で活躍する基盤を築くことができます。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default HighSchoolStudy;