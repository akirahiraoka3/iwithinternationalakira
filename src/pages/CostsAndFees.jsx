import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CostsAndFees = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">お値段・費用は？</h1>
        <p className="mb-4">
          留学にかかる費用は、留学先の国や都市、プログラムの種類、期間によって大きく異なります。
          一般的に以下のような費用項目が含まれます：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>学費（授業料、施設利用料等）</li>
          <li>滞在費（寮費、ホームステイ費用等）</li>
          <li>生活費（食費、交通費、通信費等）</li>
          <li>渡航費（航空券代）</li>
          <li>ビザ申請費用</li>
          <li>海外旅行保険料</li>
          <li>教材費</li>
          <li>その他（アクティビティ費用、旅行費用等）</li>
        </ul>
        <p className="mb-4">
          例えば、アメリカの大学に1年間留学する場合、総費用は300万円から1000万円以上になることもあります。
          一方、フィリピンで1ヶ月の語学留学をする場合は、20万円から30万円程度で可能です。
        </p>
        <p className="mb-4">
          IWITH Internationalでは、お客様のニーズと予算に合わせた留学プランをご提案いたします。
          また、奨学金情報の提供や費用を抑えるためのアドバイスも行っています。
        </p>
        <p>
          具体的な費用については、個別相談にて詳しくご説明いたしますので、
          お気軽にお問い合わせください。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CostsAndFees;