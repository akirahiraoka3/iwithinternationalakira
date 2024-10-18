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
          留学にかかる費用は、留学先の国、プログラムの種類、期間によって大きく異なります。
          一般的に以下のような費用項目が考えられます：
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>学費（授業料、施設利用料など）</li>
          <li>滞在費（寮費、ホームステイ費用など）</li>
          <li>生活費（食費、交通費、通信費など）</li>
          <li>渡航費（航空券代）</li>
          <li>保険料（留学生保険）</li>
          <li>ビザ申請費用</li>
          <li>教材費</li>
          <li>その他（娯楽費、旅行費など）</li>
        </ul>
        <p className="mb-4">
          例えば、アメリカの大学に1年間留学する場合、総額で300万円から1000万円程度かかることもあります。
          一方、短期の語学留学であれば、1ヶ月で30万円から50万円程度の費用で参加できるプログラムもあります。
        </p>
        <p>
          正確な費用は、個別の留学プランによって異なるため、詳細は留学カウンセリングでご相談ください。
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default CostsAndFees;