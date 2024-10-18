import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OverseasInternshipStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">海外インターンシップ留学って？</h1>
        <p className="mb-4">
          海外インターンシップ留学は、語学学習と実務経験を組み合わせたプログラムです。
          通常、語学学校での学習期間と企業でのインターンシップ期間で構成されています。
        </p>
        <p className="mb-4">
          主な特徴：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>語学力の向上と実践的なビジネススキルの習得</li>
          <li>国際的な職場環境での経験</li>
          <li>将来のキャリアに直結する経験</li>
          <li>異文化理解とグローバルな視野の獲得</li>
        </ul>
        <p className="mb-4">
          プログラムの期間は通常2ヶ月から1年程度で、参加者の希望や受入れ企業の条件に応じて
          調整が可能です。インターンシップ先の業種も、IT、マーケティング、ホスピタリティ、
          NGOなど多岐にわたります。
        </p>
        <p>
          海外インターンシップ留学は、語学力の向上だけでなく、
          実際の仕事経験を通じて国際的なキャリアの第一歩を踏み出すことができる
          貴重な機会です。IWITH Internationalでは、あなたのキャリア目標に合わせた
          最適なプログラムをご提案いたします。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default OverseasInternshipStudy;